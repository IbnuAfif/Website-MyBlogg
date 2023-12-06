import Link from "next/link";
import { Handjet } from "next/font/google";
import { IoIosSearch } from "react-icons/io";

const fontLogo = Handjet({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Navbar = () => {
  return (
    <nav className="bg-transparent bg-blend-lighten sticky w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="text-slate-900 text-2xl font-semibold">
          <div className={[fontLogo.className]}>Blogg</div>
        </Link>

        <div className="items-center justify-between hidden md:flex md:w-auto order-1 ">
          <ul className="flex flex-col p-2 md:p-0 mt-2 font-medium border-gray-100 rounded-sm md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link href="/" className=" px-2 text-slate-900 items-center flex">
                <form className="">
                  <label className="flex items-center">
                    <IoIosSearch className="" />
                    <input type="text" className="peer-[ksdksd]: bg-transparent " />
                  </label>
                </form>
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-2 text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-2 text-slate-900">
                Artikel
              </Link>
            </li>
            <li>
              <Link href="/" className="block px-2 text-slate-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
