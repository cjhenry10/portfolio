import ProjectPage from '@/components/Projects/ProjectPage';
import styles from './page.module.css';
import Link from 'next/link';

const PiWeather = () => {
  return (
    <>
      <ProjectPage title='Raspberry Pi Weather Monitoring System' description="This is a master-level project working with a Raspberry Pi and various sensors to create a system that monitors temperature, humidity, and air pressure. Using Python and JavaScript, I was able to display this information on a webpage and send a report of the current weather to my email address at the click of a button." link='https://drive.google.com/file/d/11fWtr5RlmKnUVqVV0rLqvUavTpMCe8GK/preview'>
      <Link style={{marginBottom: '1rem', textDecoration: 'underline'}} href={'https://drive.google.com/file/d/1aQKtVEGCj58QZfctSKoe6a6GSsW_WWww/view?usp=sharing'} target='_blank'>Click here for a video demonstration.</Link>
      </ProjectPage>
    </>
  );
};

export default PiWeather;
