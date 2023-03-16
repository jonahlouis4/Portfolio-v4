import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MyDialog(props: any) {
  const { selectedProject, setSelectedProject } = props;

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto'
    setSelectedProject(null)
  }

  useEffect(() => {
    if (selectedProject) {
        document.documentElement.style.overflow = 'hidden'
    }
  }, [selectedProject]);

  return (
    <motion.div className=' fixed inset-0 flex justify-center items-center z-40'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <motion.div
        className='bg-blue-100 w-96 h-96 z-40'
        layoutId={selectedProject}
      >
        <button onClick={handleClose}>Close</button>
        <div>
            {selectedProject}
        </div>
      </motion.div>
    </motion.div>
  );
}
