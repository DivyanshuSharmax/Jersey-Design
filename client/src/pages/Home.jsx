import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <h2 className="text-xl font-bold text-gray-300">
              PREMIUM 3D
            </h2>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                ELEVATE <br className="xl:block hidden" /> YOUR STYLE.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-400 text-base">
                Experience the future of fashion design. Create exclusive, high-fidelity 3D customizations with our state-of-the-art studio tool. <strong>Define your legacy.</strong>
              </p>

              <CustomButton
                type="filled"
                title="START DESIGNING"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-6 py-3 font-bold text-sm tracking-wider"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home