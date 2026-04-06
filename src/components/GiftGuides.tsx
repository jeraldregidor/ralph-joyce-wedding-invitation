import { motion } from "framer-motion";

const GiftGuides = () => {
  return (
    <>
      {/* The GiftGuides Section */}
      <section className="flex flex-col items-center justify-center bg-white text-center">
        <motion.div
          className="max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/GiftGuides.png"
            alt="Invitation"
            className="w-full"
          />
        </motion.div>
      </section>
    </>
  );
};

export default GiftGuides;
