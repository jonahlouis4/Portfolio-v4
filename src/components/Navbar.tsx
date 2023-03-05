import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <div className='z-10 absolute w-full py-14 px-28'>
      <div className='flex gap-x-4 justify-between'>
        <Link
          href='/'
          className='bg-gray-100 px-4 py-2 rounded-lg font-extrabold text-2xl'
        >
          J
        </Link>
        <button>
          <Bars3Icon className='text-gray-900 w-12 h-12' />
        </button>
      </div>
    </div>
  );
}
