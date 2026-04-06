import { motion } from "framer-motion";

const Rsvp = () => {
  return (
    <>
      {/* The Rsvp Section */}
      <section className="flex flex-col items-center justify-center py-10 bg-white text-center border-gray-100">
        <motion.div
          className="w-full max-w-6xl text-center text-white bg-[#B4A1CB] py-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl mb-4 [text-shadow:_1px_1px_0_gray,_-1px_-1px_0_gray,_1px_-1px_0_gray,_-1px_1px_0_gray]">Rsvp</h2>
          <p className="font-serif text-xl text-white mb-3">
            We have reserved a ____ seat/s for you,
          </p>
          <p className="font-serif text-xl text-white mb-6">
            Please confirm by clicking this
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0I870nKnUDQqMRHJCNKod1Vjnzqx6wq3jfSU-dX5p-Nre0g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline inline-block bg-[#B4A1CB] hover:bg-[#8B74B6] hover:text-white font-serif text-xl hover:text-2xl py-5 px-8 rounded-xl transition duration-300 shadow-md border hover:border-2"
          >
            RSVP HERE
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Rsvp;
