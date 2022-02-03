import './App.css';
import { motion } from "framer-motion"

function App() {

  const variants = {
    visiable: {
      opacity: 1,
      transition: {
        duration: 2,
      }
    },
    hidden: {
      opacity: 0,
    }
  }

  return (
    <div>
      <motion.ul 
      className="box" 
      initial="hidden"
      animate="visiable"
      variants={variants}
      >
        <li style={{margin: 20, width: 20, height: 20, backgroundColor: 'black'}} />
        <li style={{margin: 20, width: 20, height: 20, backgroundColor: 'black'}} />
      </motion.ul>
    </div>
  );
}

export default App;
