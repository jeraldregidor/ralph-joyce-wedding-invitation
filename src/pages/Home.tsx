import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import WeddingGallery from '../components/WeddingGallery';
import HeroSection from '../components/HeroSection';
import PrenupVideo from '../components/PrenupVideo';
import OurLoveStory from '../components/OurLoveStory';
import TheEntourage from '../components/TheEntourage';
import SecondarySponsor from '../components/SecondarySponsor';
import DressCode from '../components/DressCode';
import GiftGuides from '../components/GiftGuides';
import Reminders from '../components/Reminders';
import Faq from '../components/Faq';

const bridesName = 'Joyce';
const groomsName = 'Ralph';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection bridesName={groomsName} groomsName={bridesName} />

      <PrenupVideo />

      {/* Our Love Story */}
      <OurLoveStory/>

      {/* Roadmap: Ceremony & Reception */}
      <section className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50 text-center border-y border-gray-200">
        <div className="relative border-l border-gray-300 max-w-xl mx-auto">

          {/* Ceremony */}
          <motion.div
            className="mb-10 ml-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span className="absolute -left-3 top-1 w-6 h-6 bg-white border-4 border-gray-100 rounded-full"></span>
            <h3 className="font-serif text-lg text-gray-800 mb-2">Ceremony</h3>
            <p className="font-serif text-sm text-gray-600 mb-2">
              <strong>St. Joseph Parish Church</strong><br />
              Ragan Sur Delfin Albano, Isabela
            </p>
            <a
              href="https://maps.app.goo.gl/K5Mn8rC8gB1iABqv9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-sm underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </motion.div>

          {/* Reception */}
          <motion.div
            className="ml-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="absolute -left-3 top-1 w-6 h-6 bg-white border-4 border-gray-100 rounded-full"></span>
            <h3 className="font-serif text-lg text-gray-800 mb-2">Reception</h3>
            <p className="font-serif text-sm text-gray-600 mb-2">
              <strong>Mario's Hotel & Pavillion</strong><br />
              Tumauini, Isabela — <strong>11:00 AM</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/qYzRsU6WcEgtLurq8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-sm underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </motion.div>

        </div>
      </section>

      <TheEntourage />

      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/EntourSecondDiv.jpg"
            alt="Invitation"
            className="shadow-lg w-full max-w-4xl"
          />
        </motion.div>

      <SecondarySponsor />

      <DressCode/>

      <GiftGuides/>

      <Reminders/>

      {/* FAQ Section */}
      <Faq />

      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-b border-gray-100 m-20">
        <motion.div
          className="max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl text-gray-900 mb-4">Kindly RSVP</h2>
          <p className="font-serif text-sm text-gray-700 mb-6">
            Please confirm your attendance by filling out the RSVP form on or before May 25, 2026.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0I870nKnUDQqMRHJCNKod1Vjnzqx6wq3jfSU-dX5p-Nre0g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B74B6] hover:bg-[#5D458B] hover:text-white text-black font-serif text-sm py-5 px-8 rounded-full transition duration-300 shadow-md"
          >
            Fill Out RSVP Form
          </a>
        </motion.div>
      </section>

      <WeddingGallery />


      <Footer />
    </>
  );
};

export default Home;
