import { AnimatePresence, motion } from 'framer-motion';
import { DF_WRAPPER_VARIANT, DF_ITEM_VARIANT } from '@/constants';
import Container from '@/components/Container';
import { useState } from 'react';
import ProjectDetails from '@/components/ProjectDetails';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | string>(null);
  const myProjects = [
    {
      name: 'StudyBuddy',
      description: 'Flashcard web application designed for studying.',
      langs: 'React - TailwindCSS',
      className: '',
    },
    {
      name: 'COVID-19 Tracker',
      description: 'Live COVID-19 web application tracker.',
      langs: '',
      className: '',
    },
    {
      name: 'Royal Drip Check',
      description: 'Streetwear reselling ecommerce website.',
      langs: '',
      className: '',
    },
    {
      name: 'CreativeFloww',
      description: 'Web agency landing page.',
      langs: '',
      className: '',
    },
    {
      name: 'iContribute',
      description: 'Mobile application made for volunteering opportunities.',
      langs: '',
      className: '',
    },
  ];

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16 relative'
    >
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            key='project-modal'
          />
        )}
      </AnimatePresence>
      <Container>
        <motion.h1
          variants={DF_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Projects
        </motion.h1>
        <div className='mt-28 grid grid-cols-2 gap-20'>
          {myProjects.map((project, index) => (
            <motion.button
              variants={DF_ITEM_VARIANT}
              layoutId={project.name}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className={
                'relative w-full h-72 rounded-md bg-gray-50 ' +
                project.className
              }
              onClick={() => setSelectedProject(project.name)}
            >
              <h1 className='font-extrabold text-lg drop-shadow-xl'>
                {project.name}
              </h1>
              <h2 className='text-sm drop-shadow-xl mx-auto max-w-xs'>
                {project.description}
              </h2>
            </motion.button>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
