"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
  scale = 1,
  hover = false,
  viewportMargin = "-50px",
  style = {},
  ...props
}) {
  const getVariants = () => {
    let initialX = 0;
    let initialY = 0;

    if (direction === "up") initialY = distance;
    if (direction === "down") initialY = -distance;
    if (direction === "left") initialX = distance;
    if (direction === "right") initialX = -distance;

    return {
      hidden: {
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: scale !== 1 ? scale : 0.98,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        },
      },
    };
  };

  const hoverProps = hover
    ? {
        whileHover: {
          y: -4,
          scale: 1.015,
          transition: { duration: 0.2, ease: "easeOut" },
        },
      }
    : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={getVariants()}
      className={className}
      style={style}
      {...hoverProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", delayChildren = 0.1, staggerChildren = 0.08, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", ...props }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
