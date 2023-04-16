import Clickable from '@/components/Clickable';
import Container from '@/components/Container';
import ProjectModal from '@/components/ProjectModal';
import { PROJECTS } from '@/data/projectData';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { InitProject, Project } from '@/models/project';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const personalProjects = PROJECTS.filter(
    (project) => project.contribution === null
  );
  const contributionProjects = PROJECTS.filter(
    (project) => project.contribution !== null
  );
  const [selectedProject, setSelectedProject] = useState<Project>(InitProject);
  const { t } = useTranslation('projects');

  const handleProject = (props: Project) => {
    setSelectedProject({
      active: props.active,
      name: props.name,
      description: null,
      longDescription: props.longDescription,
      contribution: props.contribution,
      langs: props.langs,
      media: null,
      links: props.links,
      className: null,
    });
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 h-full relative bg-main-light dark:bg-main-dark bg-no-repeat bg-cover'
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
          className='dark:text-gray-200 text-gray-900 text-6xl font-extrabold text-center sm:text-left drop-shadow-xl'
        >
          {t('title')}
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 my-8 rounded-full'
        />
        <div className='mt-16 grid md:grid-cols-2 gap-20 pb-16'>
          {PROJECTS.map((project) => (
            <Clickable key={project.name}>
              <motion.button
                variants={DF_PAGE_ITEM_VARIANT}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={
                  'group relative w-full h-72 rounded-3xl bg-gray-50 drop-shadow-xl ' +
                  project.className
                }
                onClick={() => handleProject(project)}
              >
                <h1 className='text-white font-extrabold text-lg drop-shadow-xl'>
                  {project.name}
                </h1>
                <h2 className='text-white text-md drop-shadow-xl mx-auto max-w-xs'>
                  {t(project.description)}
                </h2>
              </motion.button>
            </Clickable>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
