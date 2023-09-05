'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';

function HeroApp() {
  const textControls = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();
  const controlsFour = useAnimation();

  const containerVariants = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const roundingText = {
    initial: { opacity: 0 },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };
  const titleTwoWordvariants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 100,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const spaceVariant = {
    hidden: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const animatedTextOne = 'ATE';
  const animatedTextTwo = 'STYLE';
  const animatedTextThree = 'ELEV';
  const animatedTextFour = 'YOUR';

  useEffect(() => {
    textControls.start('visible');
    controlsTwo.start('animate');
    controlsThree.start('animate');
    controlsFour.start('visible');
  }, [textControls, controlsTwo, controlsThree, controlsFour]);

  const titleOne = animatedTextOne.split(' ').map((word, wordIndex) => (
    <motion.div key={wordIndex} style={{ display: 'inline-block' }}>
      {word.split('').map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={letterVariants}
          style={{ display: 'inline-block', width: '1ch' }}
        >
          {char}
        </motion.span>
      ))}
      {wordIndex !== animatedTextOne.split(' ').length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: 'inline-block', width: '0.5ch' }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  const titleTwo = animatedTextTwo.split(' ').map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
      variants={titleTwoWordvariants}
      style={{ display: 'inline-block' }}
    >
      {word.split('').map((letter, letterIndex) => (
        <motion.span key={letterIndex} variants={titleTwoWordvariants}>
          {letter}
        </motion.span>
      ))}
      {}
      {wordIndex !== animatedTextTwo.split(' ').length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: 'inline-block', width: '0.5ch' }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  const titleThree = animatedTextThree.split(' ').map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
      variants={titleTwoWordvariants}
      style={{ display: 'inline-block' }}
    >
      {word.split('').map((letter, letterIndex) => (
        <motion.span key={letterIndex} variants={titleTwoWordvariants}>
          {letter}
        </motion.span>
      ))}
      {}
      {wordIndex !== animatedTextThree.split(' ').length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: 'inline-block', width: '0.5ch' }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  const titleFour = animatedTextFour.split(' ').map((word, wordIndex) => (
    <motion.div key={wordIndex} style={{ display: 'inline-block' }}>
      {word.split('').map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={letterVariants}
          style={{ display: 'inline-block', width: '1ch' }}
        >
          {char}
        </motion.span>
      ))}
      {wordIndex !== animatedTextFour.split(' ').length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={spaceVariant}
          style={{ display: 'inline-block', width: '0.5ch' }}
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  return (
    <div className="relative flex justify-center items-center h-[70vh] font-poppins overflow-hidden bg-[url('/home-backgrund.jpg')] bg-cover bg-no-repeat z-2 sm:h-screen">
      <motion.div
        className="absolute top-0 left-0 w-[12rem] h-full z-1 bg-white sm:w-[30rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      >
        <motion.div
          className="relative text-6xl  font-bold flex flex-col items-end justify-center ml-[5rem] top-[20%] sm:text-9xl sm:mr-5"
          initial="hidden"
        >
          <motion.div
            className="heroTitleThree "
            variants={containerVariants}
            initial="hidden"
            animate={controlsThree}
          >
            {titleThree}
          </motion.div>
          <motion.div
            className="heroTitleFourth mt-[2rem] "
            variants={containerVariants}
            initial="hidden"
            animate={controlsTwo}
          >
            {titleFour}
          </motion.div>
         
        </motion.div>
      </motion.div>

      <motion.div
        className="relative top-0 left-0 w-full h-full z-1 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
      />
      <motion.div
        className="text-6xl font-bold flex flex-col items-start justify-center relative bottom-[15%] left-20 mr-5 sm:text-9xl sm:mr-[47%] "
        initial="hidden"
      >
        <motion.div
          className="heroTitle text-white "
          variants={containerVariants}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleOne}
        </motion.div>
        <motion.div
          className="heroTitleTwo text-white mt-[2rem]"
          variants={containerVariants}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleTwo}
        </motion.div>
        <motion.div
            className="w-[16rem] h-[2px] mt-[16px] bg-black"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />
        
      </motion.div>
      <div
        className={
          'overflow-hidden flex items-center justify-center text-center '
        }
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className="h-[100px] w-[100px] rounded-full bg-white absolute flex items-center justify-center mt-[20rem] mr-[33rem] sm:w-[200px] sm:h-[200px] sm:bottom-[20%]"
        >
          <motion.span
            className="font-bold text-xs sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8,
            }}
          >
            scroll
          </motion.span>
          <motion.span
            className="font-bold text-xs sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8,
            }}
          >
            down
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroApp;
