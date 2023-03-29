import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { DF_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { GitHubIcon } from './SocialIcons';

type ProjectModalProps = {
  selectedProject: any
  setSelectedProject: (project: any) => void
}

export default function ProjectModal(props: ProjectModalProps) {
  const { selectedProject, setSelectedProject } = props;

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setSelectedProject({
      name: null,
      description: null,
      langs: [],
      media: null,
      links: [],
    });
  };

  // Hide scrollbar when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [selectedProject]);

  // Listen to 'ESC' key
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='fixed inset-0 flex justify-center items-center z-30'
      onClick={handleClose}
    >
      <div className='fixed inset-0 bg-black/70 dark:bg-black/60' aria-hidden='true' />
      <motion.div
        className='dark:bg-zinc-800 bg-gray-100 rounded-3xl p-4 mx-4 sm:mx-0 w-full w-11/12 sm:w-4/5 lg:w-3/5 3xl:w-2/5 min-h-min z-40 shadow-xl'
        layoutId={selectedProject.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <motion.button
            variants={DF_ITEM_VARIANT}
            onClick={handleClose}
            className='rounded-full p-1 z-40'
          >
            <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
          </motion.button>
        </div>

        <div className='mt-4 mb-4'>
          <h1 className='text-3xl font-extrabold dark:text-gray-200 text-gray-900 drop-shadow-xl text-center'>
            {selectedProject.name}
          </h1>
          <h2 className='mt-12 dark:text-gray-200 text-gray-900 text-lg drop-shadow-lg'>
            {selectedProject.description}
          </h2>
          <ul className='flex gap-4 mt-8 '>
            {selectedProject.langs.map((lang: string, index: number) => (
              <li
                key={lang}
                className='flex items-center dark:text-gray-400 text-gray-500 font-medium'
              >
                <span>{lang}</span>
              </li>
            ))}
          </ul>
          {selectedProject.links && (
            <div className='mt-10 flex gap-8'>
              {selectedProject.links.map((currLink: any) => (
                <>
                  {currLink.website && (
                    <a
                      href={currLink.website}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <ArrowTopRightOnSquareIcon className='h-6 w-6 dark:text-gray-400 text-gray-700 transition duration-150 ease-in-out hover:scale-110' />
                    </a>
                  )}
                  {currLink.github && (
                    <a
                      href={currLink.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <GitHubIcon className='h-6 w-6 dark:fill-gray-400 fill-gray-700 transition duration-150 ease-in-out hover:scale-110' />
                    </a>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
