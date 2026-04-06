import { motion } from "framer-motion";
import { useState } from "react";

const PrenupVideo = () => {
  const [unmuted, setUnmuted] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center py-12 px-6 bg-white text-center border-b border-gray-100">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group">
          
          {/* YouTube Video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/MzLEO98OMQg?autoplay=1&mute=${unmuted ? 0 : 1}&start=1`}
            title="Ralph and Joyce Wedding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Tap to unmute overlay */}
          {!unmuted && (
            <div
              onClick={() => setUnmuted(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer transition hover:bg-black/40"
            >
              <button className="px-6 py-3 text-sm tracking-wide bg-white/90 text-black rounded-full shadow-md hover:scale-105 transition">
                🔊 Tap to hear our story
              </button>
            </div>
          )}
        </div>

        {/* Optional caption */}
        <p className="mt-6 text-sm text-gray-500">
          A glimpse into our journey together
        </p>
      </motion.div>
    </section>
  );
};

export default PrenupVideo;