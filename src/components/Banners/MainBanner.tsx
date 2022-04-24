import Image from 'next/image';
import banner from '@public/assets/images/banner.png';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';

import DesktopTabs from '@components/Tabs/DesktopTabs';
import MobileTabs from '@components/Tabs/MobileTabs';

export default function MainBanner() {
  return (
    <Box
      w="100%"
      h={{base: 'auto', lg: '600px'}}
      bg="main"
      borderRadius="40px"
      position="relative"
    >
      <Box d={{base: 'none', lg: 'flex'}}>
        <Image src={banner} alt="" layout="fill" />
      </Box>
      <Flex
        direction="column"
        p={{base: '30px', lg: '60px'}}
        gap="20px"
        w={{base: '100%', lg: '60%'}}
      >
        <Heading fontSize={{base: '30px', lg: '40px'}}>
          Uma maneira fácil de encontrar sua casa perfeita
        </Heading>
        <Text
          color="description"
          fontSize={{base: '16px', lg: '22px'}}
          w={{base: '100%', lg: '70%'}}
        >
          Nós contamos com um serviço completo de venda ou aluguel de imóveis em
          todo o Brasil
        </Text>
        <DesktopTabs />
        <MobileTabs />
      </Flex>
    </Box>
  );
}
