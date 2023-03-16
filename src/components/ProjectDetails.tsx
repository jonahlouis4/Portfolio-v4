import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
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
      className=' fixed inset-0 flex justify-center items-center z-40'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <motion.div
        className='bg-gray-50 rounded-md p-4 w-2/5 min-h-min z-40 shadow-xl'
        layoutId={selectedProject}
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

        <div>

        </div>
      </motion.div>
    </motion.div>
  );
}
