"use client"
import Logo from '@/src/components/main/Logo'
import UserLoginForm from '@/src/components/user/UserLoginForm'
import { useStore } from '@/src/utils/store'

export default function userPage() {

  const { userLogin } = useStore()

  return (
    <>
      <nav className='flex items-center justify-center bg-gray-800 text-white shadow-md'>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
      </nav>
      <UserLoginForm />
    </>
  )
}
