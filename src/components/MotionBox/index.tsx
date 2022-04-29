import {chakra, HTMLChakraProps} from '@chakra-ui/react';
import {HTMLMotionProps, motion, LazyMotion, domAnimation} from 'framer-motion';
import * as React from 'react';

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export const LazyMotionBox = (props: MotionBoxProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionBox {...props} />
    </LazyMotion>
  );
};
