import { motion } from 'framer-motion';
import { useMemo } from 'react';

const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WeddingGallery = () => {
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      );
    }
    return false;
  }, []);

  const tapEffect = {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  return (
    <section className="py-5 px-6 bg-white text-center border-b border-gray-100">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
            src="./images/PhotoLibrary.jpg"
            alt="Invitation"
            className="shadow-lg w-full max-w-7xl"
          />
      </motion.div>
    </section>
  );
};

export default WeddingGallery;
