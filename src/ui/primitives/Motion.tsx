import { HTMLMotionProps, m } from "framer-motion";

import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const MotionBox = m<BoxProps & HTMLMotionProps<"div">>(Box);

export { MotionBox };
