import {Box} from '@chakra-ui/react';
import animation from '../../styles/animation.module.css';

export default function LoadingScreen() {
  return (
    <Box className={animation.overlay}>
      <Box className={animation.house}>
        <Box className={animation.roof}></Box>
        <Box className={animation.middle}>
          <Box className={`${animation.window} ${animation.left}`}></Box>
          <Box className={`${animation.window} ${animation.right}`}></Box>
        </Box>
        <Box className={animation.floor}></Box>
      </Box>
    </Box>
  );
}
