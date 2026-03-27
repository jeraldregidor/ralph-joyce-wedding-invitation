import { motion } from 'framer-motion';


const WeddingGallery = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-6 px-6 bg-white text-center">
        <motion.div
          className="max-w-7xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/PhotoLibrary.jpg"
              alt="Invitation"
              className="shadow-lg w-full max-w-7xl"
            />
        </motion.div>
      </section>
    </>
  );
};

export default WeddingGallery;
