import './App.css';
import { motion, useAnimation } from "framer-motion"

function App() {

  const control = useAnimation()

  //variant
  return (
    <div className="container" >
      <motion.div className="box"
        animate={control}
      />


      <button
        onClick={() => control.start({
          scale: 0.5,
          x: 200,
          transition: {
            type: 'spring',
            bounce: 0.7,
            duration: 2,
            repeat: Infinity
          }
        })}
        style={{ marginTop: '200px' }} >
        Start
      </button>

      <button
        onClick={() => control.stop()}
        style={{ marginTop: '200px' }} >
        Stop
      </button>
    </div>

  );
}

export default App;
