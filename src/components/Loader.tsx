import { useGlobal } from "@/store/globals";
import { motion, usePresence } from "framer-motion";
import { useEffect } from 'react';

export default function Loader() {
  const [isPresent, safeToRemove] = usePresence();
  const setLoader = useGlobal(state => state.setLoader)

  // Animate for few seconds
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoader()
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
