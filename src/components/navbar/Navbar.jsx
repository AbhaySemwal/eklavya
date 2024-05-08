// components/Navbar.js
import Link from 'next/link';

function Navbar() {

  return (
    <div className="border-[#676767] border-[1px] p-4 flex justify-center items-center text-white"> 
        <div className='w-2/6 mx-auto'>
            <ul className="flex justify-between">
                <li>
                <Link href="/" >HOME</Link>
                </li>
                <li>
                <Link href="/menu">MENU</Link>
                </li>
                <li>
                <Link href="/about">ABOUT US</Link>
                </li>
                <li>
                <Link href="/facilities">FACILITIES</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
