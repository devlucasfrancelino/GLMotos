"use client"

import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Dialog from './Dialog'

const MainLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [isOpen, setIsOpen] = useState("");

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()  
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password
    })
    if (result && result.ok) {
      router.push('/admin')
    } else {
      console.log("Error")
    }
  }

  return (
    <div className='flex h-screen'>
      <div className='w-2/5 h-full p-12 text-white shadow-[50px_10px_30px_-15px_rgba(0,0,0,0.4)] border-r-4 border-solid border-red-600 flex flex-col justify-between'>
        <nav className='flex justify-between'>
          <Link href="/">
            <Image
              src="./logo.svg"
              alt='Logo GL Motos'
              width={108}
              height={18}
              className='object-contain'
            />
          </Link>
          <Link href="/">
            <div className='text-black font-extrabold'>
              X
            </div>
          </Link>
        </nav>
        <div className='flex flex-col justify-center items-center flex-grow'>
          <h2 className='text-black font-bold text-4xl mb-1'>
            Entrar
          </h2>
          <p className='text-black text-lg font-light mb-3 '>
            Faça login para acessar o painel administrativo
          </p>
          <form onSubmit={handleLogin} className='w-full'>
            <input 
              className='bg-transparent border border-white p-2 mt-4 w-full text-black' 
              placeholder='Usuário' 
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              className='bg-transparent border border-white p-2 mt-4 w-full text-black' 
              placeholder='Senha' 
              type='password' 
              onChange={(e) => setPassword(e.target.value)}
            />
            <CustomButton 
              title='Continuar' 
              btnType='submit'
              textStyles='text-white font-bold' 
              containerStyles='bg-red-600 rounded-xl py-[16px] w-56 mt-10'
              handleClick={() => {}}
            />
          </form>
          <Dialog 
            isOpen={isOpen}/>
        </div>
      </div>
      <div className='w-3/5 h-full p-12 relative'>
        <Image 
          src='/login-bg.png' 
          layout='fill' 
          objectFit='cover' 
          alt='guy on a motorcycle' />
        <div className='absolute inset-0 bg-gradient-to-r from-red-900 via-black to-gray-800 opacity-50'></div>
      </div>
    </div>
  )
}

export default MainLogin
