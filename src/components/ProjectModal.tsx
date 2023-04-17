import {
  DF_ITEM_VARIANT,
  DF_MODAL_VARIANT,
  DF_MODAL_WRAPPER_VARIANT,
} from '@/data/variantData';
import { InitProject, Media, Project } from '@/models/project';
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Clickable from './Clickable';
import Container from './Container';
import { AppStoreIcon, GitHubIcon, PlayStoreIcon } from './SocialIcons';

type ProjectModalProps = {
  selectedProject: any;
  setSelectedProject: (project: Project) => void;
};

export default function ProjectModal(props: ProjectModalProps) {
  const { selectedProject, setSelectedProject } = props;
  const { t } = useTranslation('projects');

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setSelectedProject(InitProject);
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
      variants={DF_MODAL_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='fixed inset-0 flex justify-center items-center z-30'
      onClick={handleClose}
    >
      <div
        className='fixed inset-0 bg-black/70 dark:bg-black/60'
        aria-hidden='true'
      />
      {/* Modal start */}
      <motion.div
        className='dark:bg-zinc-800 bg-gray-100 p-4 w-full h-full z-40 shadow-xl overflow-auto'
        variants={DF_MODAL_VARIANT}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <Clickable>
            <motion.button
              variants={DF_ITEM_VARIANT}
              onClick={handleClose}
              className='rounded-full p-1 z-40'
            >
              <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
            </motion.button>
          </Clickable>
        </div>

        <Container>
          <div className='mt-4 mb-4'>
            {/* project name */}
            <h1 className='text-3xl font-extrabold dark:text-gray-200 text-gray-900 drop-shadow-xl text-center'>
              {selectedProject.name}
            </h1>
            {/* project description */}
            <div className='mt-12'>
              <h2 className='dark:text-gray-200 text-gray-900 text-lg font-extrabold'>
                {t('about-project')}
              </h2>
              <h2 className='dark:text-gray-200 text-gray-900 text-lg drop-shadow-lg'>
                {t(selectedProject.longDescription)}
              </h2>
            </div>
            {/* project contribution */}
            {/* project languages, frameworks, and libraries */}
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
            {/* project urls */}
            {selectedProject.links && (
              <>
                <Clickable className='mt-10 flex gap-8'>
                  {selectedProject.links.map((currLink: any, index: number) => (
                    <div key={`url-${index}`}>
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
                      {currLink.ios && (
                        <a href={currLink.ios} target='_blank' rel='noreferrer'>
                          <AppStoreIcon className='h-6 w-6 dark:fill-gray-400 fill-gray-700 transition duration-150 ease-in-out hover:scale-110 hover:cursor-pointer' />
                        </a>
                      )}
                      {currLink.android && (
                        <a
                          href={currLink.android}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <PlayStoreIcon className='h-6 w-6 dark:fill-gray-400 fill-gray-700 transition duration-150 ease-in-out hover:scale-110 hover:cursor-pointer' />
                        </a>
                      )}
                    </div>
                  ))}
                </Clickable>
              </>
            )}
            <div className='w-full border-2 border-gray-200 my-8 rounded-full' />
          </div>

          {/* project Media */}
          {selectedProject.media !== null && (
            <div className='flex flex-col gap-y-16 pb-16'>
              {selectedProject.media.map((media: Media) => (
                <div key={media.name}>
                  {/* media Title */}
                  <h1 className='text-gray-900 dark:text-gray-300 font-extrabold uppercase mb-2'>
                    {t(media.name)}
                  </h1>
                  {/* media image */}
                  {media.image !== null && (
                    <Image src={media.image} alt={media.name} />
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </motion.div>
      {/* Modal end */}
    </motion.div>
  );
}
