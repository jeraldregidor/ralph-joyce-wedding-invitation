import { motion } from "framer-motion";

const Reminders = () => {
  return (
    <>
      {/* The Reminders Section */}
      <section className="flex flex-col items-center justify-center py-6 px-6 bg-white text-center">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/Reminders.png"
            alt="Invitation"
            className="rounded-xl w-full max-w-2xl"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Reminders;
