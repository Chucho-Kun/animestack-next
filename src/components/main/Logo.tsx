import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='/'>
            <Image
                priority={true}
                src='/logo.svg'
                width={200}
                height={70}
                alt='logo animestack'
                className='hover:bg-black cursor-pointer'
            />
        </Link>
    )
}
