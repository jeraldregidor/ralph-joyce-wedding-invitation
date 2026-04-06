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
import Rsvp from '../components/Rsvp';

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

      <Rsvp/>
      
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
