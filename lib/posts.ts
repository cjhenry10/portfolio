import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeSlug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc'
import Codeblock from '@/components/Codeblock/Codeblock';
import remarkGfm from 'remark-gfm';
import components, {link} from './componentsMap';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import {visit} from 'unist-util-visit';

type Filetree = {
    "tree": [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/cjhenry10/articles/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined;

    const rawMDX = await res.text();
    if (rawMDX === '404: Not Found') return undefined;
    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[], subtitle?: string}>({
        source: rawMDX, 
        // @ts-expect-error
        components: {
            Codeblock,
            // CodeblockAlt,
            ...components
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [
                    remarkGfm
                ],
                rehypePlugins: [
                    // rehypeHighlight,
                    rehypeSlug,
                    () => (tree) => {
                        visit(tree, (node) => {
                            // console.log(node.type);
                          if (node?.type === "element" && node?.tagName === "pre") {
                            const [codeEl] = node.children;
                            let metaDataTemp;
                            if (codeEl.data?.meta) {
                                metaDataTemp = codeEl.data.meta;
                                // console.log(node);
                            }
                            if (codeEl.tagName !== "code") return;
                            // console.log(codeEl.data);
                            node.raw = codeEl.children?.[0].value;
                            node.metaData = metaDataTemp;
                            // console.log(codeEl);
                            codeEl.metaData = metaDataTemp;
                          }
                        });
                      },
                    [rehypePrettyCode, {
                        theme: {
                            dark: 'material-theme-palenight',
                            light: 'min-light',
                        },
                        keepBackground: true,
                        onVisitLine(node: any) {
                            // Prevent lines from collapsing in `display: grid` mode, and
                            // allow empty lines to be copy/pasted
                            if (node.children.length === 0) {
                              node.children = [{type: 'text', value: ' '}];
                            }
                          },
                          onVisitHighlightedLine(node: any) {
                            // Each line node by default has `class="line"`.
                            node.properties.className.push('highlighted');
                          },
                          onVisitHighlightedWord(node: any) {
                            // Each word node has no className by default.
                            node.properties.className = ['word'];
                          },
                    }],
                    () => (tree) => {
                        visit(tree, (node) => {
                          if (node?.type === "element" && node?.tagName === "div") {
                            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                              return;
                            }
                   
                            for (const child of node.children) {
                              if (child.tagName === "pre") {
                                child.properties["raw"] = node.raw;
                                child.properties["metaData"] = node.metaData;
                                // console.log(node.metaData)
                              }
                              for (const child2 of child.children) {
                                if (child2.tagName === "code") {
                                    child2.properties["metaData"] = node.metaData;
                                }
                              }
                            }
                          }
                        });
                      },
                    // rehypeCodeTitles,
                    // rehypePrism,
                    [rehypeAutolinkHeadings, {
                        // behavior: 'wrap',
                        // content: link,
                        test: ['h1', 'h2', 'h3'],
                        properties: {class: 'linked-article-header'}
                    }],
                    // withToc,
                    // [withTocExport, {name: 'tableOfContents'}]
                    [toc, {
                        headings: ['h1', 'h2', 'h3'],
                        cssClasses: {
                            toc: 'page-outline',
                            link: 'page-link',
                        },
                        customizeTOC: (tree: any) => {
                            // console.log(tree.children[0].children[0].getBoundingClientRect());
                            // console.log(document.querySelector('nav'))
                            // console.log('-------------');
                            return tree;
                        },
                        customizeTOCItem: (tree: any, heading: any) => {
                            // console.log(tree);
                            // console.log(heading);
                            // console.log('-------------');
                        }
                    }]
                ]
            }
        }
    })

    const id = fileName.replace(/\.mdx$/, '');
    const blogPostObj: BlogPost = { meta: {id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, subtitle: frontmatter.subtitle }, content }
    return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined>{
    const res = await fetch('https://api.github.com/repos/cjhenry10/articles/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined;

    const repoFiletree: Filetree = await res.json();

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts: Meta[] = []

    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            posts.push(meta)
        }
    }
    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}