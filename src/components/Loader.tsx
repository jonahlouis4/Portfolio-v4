import { motion, usePresence } from "framer-motion";
import { useEffect } from 'react';

export default function Loader() {
  const [isPresent, safeToRemove] = usePresence();

  // Animate out after 2 seconds
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      // setVisible(false);
      document.body.style.overflow = 'auto';
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Remove from DOM when is no longer present
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 100);
  }, [isPresent]);

  return (
    <motion.div className="">
      <div>Full page loader!</div>
    </motion.div>
  );
}
