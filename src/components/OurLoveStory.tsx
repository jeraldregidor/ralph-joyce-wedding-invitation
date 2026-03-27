import { motion } from 'framer-motion';


// TypeScript React component
const OurLoveStory = () => {
  return (
    <>
      {/* OurLoveStory Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 text-center border-b border-gray-100">
        <motion.div
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className='w-full aspect-square overflow-hidden bg-white flex'>
           
            {/* Two Image */}
            <div className='mr-3 w-1/3 h-full flex flex-col'>
              <img
                src={'./images/LoveStory1.jpg'}
                className="h-1/2 mb-2"
                loading="lazy"
                tabIndex={0}
              />
              <img
                src={'./images/LoveStory2.jpg'}
                className="h-1/2"
                loading="lazy"
                tabIndex={0}
              />
            </div>

            {/* Story Text */}
            <div className="w-2/3 font-serif text-gray-800 leading-relaxed h-full text-sm md:text-2xl lg:text-3xl overflow-scroll">
              <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mb-4 lg:mb-20">
                Our Love Story
              </h2>

              <p className="mb-6">
                Ralph and Joyce’s story began in the quiet hallways of their high school, where Ralph secretly admired Joyce from afar. In his fourth year, he found the courage to confess his feelings, but Joyce gently chose friendship.
              </p>

              <p className="mb-6">
                Even as college took them to different places Ralph studied in Laguna and Joyce in Caloocan they never lost touch. Through the years, Ralph remained constant, patiently holding on to the hope that their story was only beginning.
              </p>

              <p className="mb-6">
                After graduating from college, Joyce finally opened her heart, and on June 22, 2019, they became a couple two hearts finding comfort, laughter, and love in each other. Through every season that followed, they shared countless memories,adventures, challenges, and dreams.
              </p>

              <p className="mb-6">
                Then on February 22, 2025, Ralph asked Joyce to spend forever with him and she said yes. Now, they step into their next chapter, ready to say “I do” and celebrate a love story that began with patience, friendship, and a love that never gave up.
              </p>
            </div>

          </div>
          

          
          
        </motion.div>
        
      </section>
    </>
  );
};

export default OurLoveStory;
