import { motion } from "framer-motion";
import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import Cartelera from "../components/home/Cartelera";
import Nosotros from "../components/home/Nosotros";
import Repertorio from "./Repertorio";
import Equipo from "./Equipo";
import Blog from "../components/home/Blog";
import Footer from "../components/home/Footer";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  return (
    <motion.div
      className="home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Header />
      <Cartelera />
      <Nosotros /> 
      <Blog />
      <Footer />
    </motion.div>
  );
}
