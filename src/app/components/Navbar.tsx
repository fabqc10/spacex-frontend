import Link from 'next/link';
import Logo from './Logo';



const Navbar = () => {
  return (
    <nav className='flex items-center p-4 bg-black-800 space-x-10 text-white p-15 ml-10'>
      <div className='w-40 h-auto'>
        <Link href={'/'}>
        <Logo />
        </Link>
      </div>
      <div className='flex items-center space-x-8 h-auto w-100'>
        <Link href='/launches' className='link-underline'>
          Launches
        </Link>
        <Link href='/rockets' className='link-underline'>
         Rockets
        </Link>
        <Link href='/astronauts' className='link-underline'>
          Astronauts
        </Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
