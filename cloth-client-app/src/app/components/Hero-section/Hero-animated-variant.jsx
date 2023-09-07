import React from "react";


    export default function containerVariants(){
        hidden: { opacity: 1 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.04,
          },
        },
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




}