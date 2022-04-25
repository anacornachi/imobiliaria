import {extendTheme} from '@chakra-ui/react';
import {colors} from './colors';
import {fonts} from './fonts';
import {components} from './components';

const theme = extendTheme({
  colors,
  fonts,
  components,
});
export default theme;
