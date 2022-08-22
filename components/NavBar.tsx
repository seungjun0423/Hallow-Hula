import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'




export default function NavBar () {
  const router = useRouter();

  return (
  <nav className='nav'>
    <Link href='/'>Home</Link>
    <Link href='About'>About</Link>
    <style jsx>
      {`
      .nav{
        display:flex;
        flex-direction: row-reverse;
        background-color:skyblue;}
      `}
    </style>
  </nav>
  
  )
}