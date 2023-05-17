import React from 'react'

export default function Table({children, ...props}: any) {
  return (
    <div className='thin-border mt-2 mb-4 overflow-x-auto'>
    <table className='my-0 whitespace-nowrap'>
      {children}
    </table>
    </div>
  )
}
