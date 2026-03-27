import { motion } from 'framer-motion';


const CeremonyReception = () => {
  return (
    <>
      {/* Roadmap: Ceremony & Reception */}
      <section className="flex items-center justify-center py-16 px-6 bg-gray-50 text-center border-y border-gray-200">
        <div className="border-gray-300 w-full max-w-4xl ">

          {/* Ceremony */}
          <motion.div
            className="mb-10  flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            transition={{ duration: 0.6, delay: 0 }}
          >
            <h3 className="font-serif text-3xl text-gray-800 mb-2">Ceremony</h3>
            <img
              src="./images/Church.png"
              alt="Invitation"
              className="rounded-3xl w-1/2 max-w-2xl"
            />
            <p className="font-serif text-lg text-gray-600 mb-2">
              <strong>St. Joseph Parish Church</strong><br />
              Ragan Sur Delfin Albano, Isabela — <strong>12:00 Noon</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/K5Mn8rC8gB1iABqv9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </motion.div>

          {/* Reception */}
          <motion.div
            className="mb-10  flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-serif text-3xl text-gray-800 mb-2">Reception</h3>
            <img
              src="./images/Reception.png"
              alt="Invitation"
              className="rounded-3xl w-1/2 max-w-2xl"
            />
            <p className="font-serif text-lg text-gray-600 mb-2">
              <strong>Mario's Hotel & Pavillion</strong><br />
              Tumauini, Isabela — <strong>3:00PM - 7:00PM</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/qYzRsU6WcEgtLurq8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default CeremonyReception;
