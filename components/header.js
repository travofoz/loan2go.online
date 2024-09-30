import Image from 'next/image';
import Link from 'next/link';
import Navbar from './navbar';
import Navmenu from './navmenu';

const Logo = () => {
    return (
        <Image
            src="bulldog.svg" // replace with your logo path
            alt="Loan2Go.Online"
            width={50} // set your desired width
            height={50} // set your desired height
            className=""
        />
    );
};

export default function Header({ font, slug }) {
    return (
        <div className="bg-emerald-800 flex flex-col relative z-50">
            <div className="flex items-center justify-between p-1">
                <Link href="/" className="pl-2 flex items-center">
                    <Logo />
                    <h1 className={`ml-5 text-3xl md:text-4xl text-white drop-shadow-lg  ${font}`}>{slug}</h1>
                </Link>
                <Navmenu />
                <Navbar />
            </div>

        </div>
    );
}
