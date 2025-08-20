"use client"
import Image from 'next/image'
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa'
import Logo from './Logo'
import { useStore } from '@/src/utils/store'

export default function DesktopNavbar() {

    const { userLogin } = useStore()

    return (
        <nav className='hidden lg:flex items-center justify-between bg-gray-800 text-white shadow-md'>
            <div className='flex- items-center'>
                <div className='flex text-sm font-medium'>
                    <Logo />
                    <div className='flex text-sm font-medium'>
                        <a href="/anime/new" className='transition font-bold hover:text-amber-300  hover:bg-black p-5 mt-1'>Nuevos</a>
                    </div>
                    <div className='flex text-sm font-medium'>
                        <a href="/anime/popular" className='transition font-bold hover:text-amber-300  hover:bg-black p-5 mt-1'>Populares</a>
                    </div>
                    <div className='flex text-sm font-medium'>
                        <a href="/anime/categories" className='transition font-bold hover:text-amber-300  hover:bg-black p-5 mt-1'>Categorias</a>
                    </div>
                </div>
            </div>

            <div className='flex items-center text-lg mt-1'>
                {userLogin && <button className='hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    <FaHeart className='m-6' />
                </button>}
                <button className='hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    <FaSearch className='m-6' />
                </button>

                


                <button className='flex items-center p-3 justify-between hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    {userLogin ? (
                        <>
                            <a href="/user" className='font-bold'>Chucho-kun</a>
                            <img
                                src="/avatar/1.png"
                                alt="Avatar de chucho-kun"
                                className="w-10 h-10 rounded-full object-cover ml-6 mr-3"
                            />
                        </>
                    ) : (
                        <a href="/user" className='font-bold text-sm m-3'>INICIAR SESIÓN</a>
                    )}
                </button>
            </div>
        </nav>
    )
}