import Link from "next/link";
import {FiArrowLeftCircle} from 'react-icons/fi'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {/* <Button variant='contained' color='var(--c3)' onClick={()=>{}}>
        Home
      </Button> */}
      <div className={styles.container}>
      <Link href="/" style={{padding: '1rem'}}><FiArrowLeftCircle style={{verticalAlign: '-10%', marginRight: '0.5rem'}} />Home</Link>
      {children}
      </div>
    </>
  );
}
