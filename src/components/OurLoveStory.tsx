import { motion } from 'framer-motion';


// TypeScript React component
const OurLoveStory = () => {
  return (
    <>
      {/* OurLoveStory Section */}
      <section className="flex flex-col items-center justify-center bg-white text-center">
        <motion.div
          className="w-full max-w-6xl flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/OurLoveStory.png"
            alt="Invitation"
            className="shadow-lg w-full"
          />
      </motion.div>
      </section>
    </>
  );
};

export default OurLoveStory;
