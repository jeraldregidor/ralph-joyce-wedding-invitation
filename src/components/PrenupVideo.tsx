import { motion } from "framer-motion";
import { useState } from "react";

// TypeScript React component
const PrenupVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* PrenupVideo Section */}
      <section className="flex flex-col items-center justify-center bg-white text-center border-gray-100">
      <motion.div
        className="w-full max-w-6xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full aspect-video overflow-hidden shadow-lg ">

          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <img
                src="https://img.youtube.com/vi/UqMV_9CbUfc/maxresdefault.jpg"
                alt="Video thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <img
                  src="./images/youtube_icon.png"
                  alt="Play video"
                  className="w-24 h-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
                />
              </button>
            </>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/UqMV_9CbUfc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

        </div>
      </motion.div>
    </section>
    </>
  );
};

export default PrenupVideo;
