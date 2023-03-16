import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MyDialog(props: any) {
  const { selectedProject, setSelectedProject } = props;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {selectedProject && (
        <Dialog
          static
          as={motion.div}
          open={props.selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

          {/* Full-screen container to center the panel */}
          <div className='fixed inset-0 flex items-center justify-center p-4'>
            {/* The actual dialog panel  */}
            <Dialog.Panel className='mx-auto max-w-sm rounded bg-white'>
              <Dialog.Title>Complete your order</Dialog.Title>

              {/* ... */}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
