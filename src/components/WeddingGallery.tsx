import { motion } from 'framer-motion';


const WeddingGallery = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-white text-center">
        <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery1.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery2.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery3.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery4.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery5.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery6.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
                <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
              src="./images/WeddingGallery1.png"
              alt="Invitation"
              className="w-full my-2"
            />
        </motion.div>
      </section>
    </>
  );
};

export default WeddingGallery;
