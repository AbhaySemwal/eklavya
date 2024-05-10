import Link from 'next/link';

function Navbar() {

  return (
    <div className="border-[#676767] border-[2px] p-5 flex justify-center items-center text-white"> 
        <div className='w-5/12 mx-auto'>
            <ul className="flex justify-between">
                <li>
                    <Link href="/" >HOME</Link>
                </li>
                <li>
                    <Link href="#strategy">STRATEGY</Link>
                </li>
                <li>
                    <Link href="/aboutus">ABOUT US</Link>
                </li>
                <li>
                    <Link href="#features">FEATURES</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
