// components/Navbar.js
import Link from 'next/link';

function Navbar() {

  return (
    <div className="bg-gray-800 p-4 flex justify-center items-center text-white"> 
      <ul className="flex gap-4">
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
  );
}

export default Navbar;
