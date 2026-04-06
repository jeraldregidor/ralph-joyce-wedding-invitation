import { motion } from 'framer-motion';



const HeroSection = () => {
  return (
    <>
      {/* The Hero Section */}
      <section className="flex flex-col items-center justify-center bg-white text-center">
        <motion.div
          className="w-full max-w-6xl flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/wedding-bg.png"
            alt="Invitation"
            className="shadow-lg w-full"
          />
      </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
