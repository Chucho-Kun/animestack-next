"use client"
import Image from 'next/image'
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa'

export default function DesktopNavbar() {
    return (
        <nav className='hidden lg:flex items-center justify-between bg-gray-800 text-white shadow-md'>
            <div className='flex- items-center'>
                <div className='flex text-sm font-medium'>
                    <Image
                        priority={true}
                        src='/logo.svg'
                        width={200}
                        height={70}
                        alt='logo animestack'
                        className='hover:bg-black cursor-pointer'
                    />
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
                <button className='hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    <FaHeart className='m-6' />
                </button>
                <button className='hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    <FaSearch className='m-6' />
                </button>
                <button className='hover:text-amber-300 hover:bg-black transition cursor-pointer'>
                    <FaUser className='m-6' />
                </button>
            </div>
        </nav>
    )
}