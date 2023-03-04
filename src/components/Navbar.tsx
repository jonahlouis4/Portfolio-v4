import Link from "next/link";

export default function Navbar() {
    return (
      <div className="bg-red-50 flex gap-x-4 text-blue-300 z-10 absolute w-full">
        <Link href='/'>Logo</Link>
        <Link href='/about'>About</Link>
        <button>menu icon</button>
      </div>
    );
  }
  