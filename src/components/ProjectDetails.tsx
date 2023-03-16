import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import {
  DF_ITEM_VARIANT,
  DF_PAGE_ITEM_VARIANT,
  DF_WRAPPER_VARIANT,
} from '@/constants';

export default function MyDialog(props: any) {
  const { selectedProject, setSelectedProject } = props;

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [selectedProject]);

  // TODO 1: Add keyboard ESP functionality
  /*
TODO 2:
 - Project name
 - Project description
 - Project languages + frameworks/libraries
 - Project screenshots or videos
*/

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='fixed inset-0 flex justify-center items-center z-30'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <motion.div
        className='bg-gray-100 rounded-md p-4 w-2/5 min-h-min z-40 shadow-xl'
        layoutId={selectedProject.name}
      >
        <div className='flex justify-end'>
          <motion.button
            variants={DF_ITEM_VARIANT}
            onClick={handleClose}
            className='rounded-full p-1'
          >
            <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
          </motion.button>
        </div>

        <div className='mt-4 mb-4'>
          <h1 className='text-3xl font-extrabold text-gray-900 drop-shadow-xl text-center'>
            {selectedProject.name}
          </h1>
          <h2 className='mt-12 text-base drop-shadow-lg'>
            {selectedProject.description}
          </h2>
          <ul className='flex gap-4 mt-8 '>
            {selectedProject.langs.map((lang: string, index: number) => (
                <li className='flex items-center text-gray-500 font-medium'>
                    <span>{lang}</span>
                </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
