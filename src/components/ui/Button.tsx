import { motion } from "framer-motion";

const MovingGradientBorderButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="relative inline-block px-6 py-2  text-white rounded-full bg-transparent "
      // Framer Motion animation
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"], // Moving border animation
      }}
      transition={{
        duration: 5, // Duration of the animation loop
        repeat: Infinity, // Infinite loop
        ease: "linear", // Smooth transition
      }}
      style={{
        backgroundImage: "linear-gradient(90deg, cyan, purple, pink)", // Gradient border
        backgroundSize: "200% 200%", // Background size to allow smooth movement
        backgroundClip: "border-box", // Clip the background to the border
        border: "2px solid transparent", // Transparent border to show the gradient
        boxSizing: "border-box", // Ensures the border fits well
        position: "relative",
        zIndex: 1,
      }}
    >
      <span className="absolute inset-0 bg-black rounded-full -z-10"></span>
      {text}
    </motion.button>
  );
};

export default MovingGradientBorderButton;
