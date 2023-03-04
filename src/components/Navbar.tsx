import Link from "next/link";

export default function Navbar() {
    return (
      <div className="bg-red-50 flex gap-x-4 text-blue-300">
        <Link href='/'>Logo</Link>
        <button>menu icon</button>
      </div>
    );
  }
  