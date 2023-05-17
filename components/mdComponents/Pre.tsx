import { CopyButton } from '../Articles/CopyButton';
import findTitle from '@/utils/findTitle';
import {BsFileEarmark} from 'react-icons/bs';
export const Pre = ({
  children,
  raw,
  metaData,
  ...props
}: {
  children: any;
  raw: any;
  metaData: any;
  props: any;
}) => {
  // @ts-expect-error
  const lang = props['data-language'];
  const title = findTitle(metaData);
  return (
    <pre {...props} className='pb-2 px-0'>
      <div
      className='custom-headers px-2'
      >
        {/* {lang} */}
        {title && <p className='p-0 m-0 flex gap-2 items-center'><BsFileEarmark size={14}/>{title}</p>}
        <CopyButton styles={{marginLeft: 'auto', marginBlock: 'auto', color: 'inherit'}} text={raw} />
      </div>
      {children}
    </pre>
  );
};
