import { motion } from 'framer-motion';


const TheVenue = () => {
  return (
    <>
      {/* The Venue */}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/TheVenue.png"
            alt="Invitation"
            className="w-full max-w-6xl"
          />
      </motion.div>
    </>
  );
};

export default TheVenue;
