import Link from "next/link";
import {FiArrowLeftCircle} from 'react-icons/fi'

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
      <div style={{margin: '1rem 1rem 0'}}>
      <Link href="/" style={{padding: '1rem'}}><FiArrowLeftCircle style={{verticalAlign: '-10%', marginRight: '0.5rem'}} />Home</Link>
      </div>
      
      {children}
    </>
  );
}
