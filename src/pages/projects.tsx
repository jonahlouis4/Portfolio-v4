import { AnimatePresence, motion } from 'framer-motion';
import { DF_WRAPPER_VARIANT, DF_PAGE_ITEM_VARIANT } from '@/data/variantData';
import { PROJECTS } from '@/data/projectData';
import Container from '@/components/Container';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    name: null | string;
    description: null | string;
    langs: undefined | Array<string>;
    media: null | string;
    links: undefined | Array<any>;
  }>({
    name: null,
    description: null,
    langs: [],
    media: null,
    links: [],
  });

  const handleProject = (props: any) => {
    setSelectedProject({
      name: props.name,
      description: props.longDescription,
      langs: props.langs,
      media: null,
      links: props.links,
    });
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16 relative dark:bg-main-dark bg-main-light'
    >
      {/* Project modal */}
      <AnimatePresence>
        {selectedProject.name && (
          <ProjectModal
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            key='project-modal'
          />
        )}
      </AnimatePresence>

      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='dark:text-gray-200 text-gray-900 text-6xl font-extrabold drop-shadow-xl'
        >
          Projects
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 my-8'
        />
        <div className='mt-16 grid md:grid-cols-2 gap-20'>
          {PROJECTS.map((project, index) => (
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT}
              layoutId={project.name}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className={
                'group relative w-full h-72 rounded-3xl bg-gray-50 drop-shadow-xl ' +
                project.className
              }
              onClick={() => handleProject(project)}
              key={project.name}
            >
              <h1 className='text-white font-extrabold text-lg drop-shadow-xl'>
                {project.name}
              </h1>
              <h2 className='text-white text-md drop-shadow-xl mx-auto max-w-xs'>
                {project.description}
              </h2>
            </motion.button>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
