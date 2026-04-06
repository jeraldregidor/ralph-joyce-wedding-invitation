import { motion } from 'framer-motion';
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
import TheVenue from '../components/TheVenue';
import WeddingTimeline from '../components/WeddingTimeline';
import SnapShare from '../components/SnapShare';

const Home = () => {
  return (
    <>
      <HeroSection />

      <PrenupVideo />

      <OurLoveStory/>

      {/* Divider Image 1*/}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/ImageDivider1.png"
            alt="Invitation"
            className="shadow-lg w-full max-w-6xl"
          />
      </motion.div>

      <TheVenue/>

      <WeddingTimeline/>

      {/* Divider Image 2*/}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/ImageDivider2.png"
            alt="Invitation"
            className="shadow-lg w-full max-w-6xl"
          />
      </motion.div>

      <TheEntourage />

      {/* Divider Image 3*/}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/ImageDivider3.png"
            alt="Invitation"
            className="w-full max-w-6xl"
          />
      </motion.div>

      <SecondarySponsor />

      {/* Divider Image 4*/}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/ImageDivider4.jpg"
            alt="Invitation"
            className="shadow-lg w-full max-w-6xl"
          />
      </motion.div>

      <DressCode/>

      <GiftGuides/>

      <Reminders/>

      <Faq />

      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-b border-gray-100 m-3">
        <motion.div
          className="w-full max-w-5xl text-center"
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

      <SnapShare/>

      <WeddingGallery />

      {/* Footer */}
      <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/Footer.png"
            alt="Invitation"
            className="shadow-lg w-full max-w-6xl"
          />
      </motion.div>

    </>
  );
};

export default Home;
