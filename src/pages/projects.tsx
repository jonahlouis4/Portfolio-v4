import { AnimatePresence, motion } from 'framer-motion';
import {
  DF_WRAPPER_VARIANT,
  DF_PAGE_ITEM_VARIANT,
  PROJECTS,
} from '@/constants';
import Container from '@/components/Container';
import { useState } from 'react';
import ProjectDetails from '@/components/ProjectDetails';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    name: null | string;
    description: null | string;
    langs: undefined | Array<string>;
    media: null | string;
    github: null |string;
    website: null | string;
  }>({
    name: null,
    description: null,
    langs: [],
    media: null,
    github: null,
    website: null,
  });

  const handleProject = (props: any) => {
    setSelectedProject({
      name: props.name,
      description: props.longDescription,
      langs: props.langs,
      media: null,
      github: props.github,
      website: props.website
    });
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16 relative'
    >
      {/* Project modal */}
      <AnimatePresence>
        {selectedProject.name && (
          <ProjectDetails
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            key='project-modal'
          />
        )}
      </AnimatePresence>

      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Projects
        </motion.h1>
        <div className='mt-16 grid grid-cols-2 gap-20'>
          {PROJECTS.map((project, index) => (
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT}
              layoutId={project.name}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className={
                'relative w-full h-72 rounded-md bg-gray-50 drop-shadow-md ' +
                project.className
              }
              onClick={() => handleProject(project)}
              key={project.name}
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
