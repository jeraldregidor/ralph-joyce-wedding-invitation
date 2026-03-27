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
import CeremonyReception from '../components/CeremonyReception';

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

      <CeremonyReception/>

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
