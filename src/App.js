import './App.css';
import { motion, useAnimation } from "framer-motion"

function App() {

  const controls = useAnimation()

  return (
    <div>
      <motion.div 
      className="box" 
      animate={controls}
      />

      <button style={{marginTop:'200px'}} onClick={() => controls.start({
        scale: 0.5,
        x: 200,
        transition: {
          type: 'spring',
          bounce: 0.7,
        }
      })}>Start</button>
      <button style={{marginTop:'200px'}} onClick={() => controls.stop()}>Stop</button>
    </div>
  );
}

export default App;
