import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

function Framer() {
  const [x, setX] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const constraintsRef = useRef(null);

  const items = [
    {
      id: "1",
      title: "Item 1",
      subtitle: "Subtitle 1",
    },
    {
      id: "2",
      title: "Item 2",
      subtitle: "Subtitle 2",
    },
    {
      id: "3",
      title: "Item 3",
      subtitle: "Subtitle 3",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <div>
        <article style={{ backgroundColor: "red" }}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 45 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            style={{ width: 100, height: 100, backgroundColor: "blue" }}
            animate={{
              x: x,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
          />
        </article>
        <button onClick={() => setX((prev) => (prev > 800 ? 0 : prev + 100))}>
          Click
        </button>
      </div>
      <div>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.li key={index} className="item" variants={item}>
              Component {index}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <article>
        <Scroll />
      </article>
      <div>
        {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>item.subtitle</motion.h5>
              <motion.h2>item.title</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <motion.div ref={constraintsRef} style={{ backgroundColor: "red" }}>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "blue",
              cursor: "grab",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function Path() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <motion.div
        style={{
          scale,
        }}
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
        Hello
      </motion.div>
      <motion.div
        style={{
          opacity: opacity,
        }}
      >
        <motion.div
          style={{
            opacity: opacity,
          }}
        />
        Hello
      </motion.div>
    </div>
  );
};

export default Framer;
