import { motion } from "framer-motion";

// TypeScript React component
const PrenupVideo = () => {
  return (
    <>
      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center bg-white text-cente border-gray-100">
        <motion.div
          className="w-full max-w-6xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-video overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/UqMV_9CbUfc?autoplay=1&mute=1&start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PrenupVideo;
