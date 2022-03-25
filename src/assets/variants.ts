import { Variants } from "framer-motion";

export const hoverVariants: Variants = {
  intial: {
    y: 0,
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};
