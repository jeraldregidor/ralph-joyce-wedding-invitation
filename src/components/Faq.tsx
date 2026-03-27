import { motion } from 'framer-motion';


// TypeScript React component
const Faq = () => {
  return (
    <>
      {/* Faq Section */}
      <section className="flex items-center justify-center py-10 px-6 text-center">
        <motion.div
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className='w-full bg-white p-2 flex flex-wrap items-center'>
           
            {/* Frequently Asked Question */}
            <div className='h-full  items-center justify-center w-full md:w-1/3 p-3'>

            <h1 className='text-4xl md:text-5xl font-serif'>
              Frequently Asked Questions
            </h1>
              
            </div>

            {/* Questions */}
            <div className="pl-3 font-serif text-gray-800 leading-relaxed h-full text-sm md:text-2xl lg:text-3xl  w-full max-w-4xl md:w-2/3 text-left flex flex-col">
              
              {/* Q1 */}
              <div className='flex'>
                <div className=' w-2/12 text-2xl'>01</div>
                <div className='w-10/12'>
                  <h2 className=' mb-2 text-2xl'>What time should I arrive?</h2>
                  <p className=' text-sm mb-8'>
                    We recommend coming by 12:00  Noon so you have time to settle in before the ceremony starts. 
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className=' flex'>
                <div className=' w-2/12 text-2xl'>02</div>
                <div className='w-10/12'>
                  <h2 className='mb-2 text-2xl'>Can I bring my kids or a +1?</h2>
                  <p className='text-sm mb-8'>
                    Unfortunately, due to space and seating constraints, we kindly ask that only those
                    listed in the invitation attend. While we absolutely adore your little ones, we’re
                    keeping the event adults-only to maintain a calm and comfortable atmosphere
                    during the ceremony and reception. We appreciate your understanding.
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className=' flex'>
                <div className=' w-2/12 text-2xl'>03</div>
                <div className='w-10/12'>
                  <h2 className='mb-2 text-2xl'>Can we wear color white or other color?</h2>
                  <p className='text-sm'>
                    We would highly appreciate it if you could follow our dress code and avoid wearing white as a sign of respect for the couple.
                  </p>
                </div>
              </div>
            </div>

          </div>
          

          
          
        </motion.div>
        
      </section>
    </>
  );
};

export default Faq;
