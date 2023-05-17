import {RiseLoader} from 'react-spinners';
export default function Loading() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-32 mt-8'>
    <RiseLoader color={'#999'} />
    <p style={{color: '#999'}}>Loading...</p>
    </div>
    </>
  )
}
