import ProjectPage from "@/components/Projects/ProjectPage"
import Link from "next/link"

const Wizard = () => {
  return (
    <>
      <ProjectPage title='Help Desk Wizard' description='This was the final capstone for my undergraduate degree. Me and two other students worked together to build a full stack application using React, MUI, Django, and MongoDB. The website was fully functional, with the ability to create an account, submit a ticket, resolve a ticket, create a group and add members to a group. The site was not deployed, but it was set up in a docker container and ready for deployment should that have been necessary for the grade.' link='https://drive.google.com/file/d/1Y5czsfhbWlB8cKrXtr_7tFJzQOiPqLTM/preview' height='65vh' >
        <Link style={{marginBottom: '1rem', textDecoration: 'underline'}} href={'https://drive.google.com/file/d/1cma2p2WYEwNJSgoDOg2zEC7FokPDP32v/view?usp=sharing'} target='_blank'>Click here for the final video presentation.</Link>
      </ProjectPage>
    </>
  )
}

export default Wizard