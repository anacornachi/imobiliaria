import {Box, Heading} from '@chakra-ui/react';
import Image, {StaticImageData} from 'next/image';

type Props = {
  title: string;
  image: StaticImageData;
};

export default function CustomCityHighlight({title, image}: Props) {
  return (
    <Box
      w={{base: '178px', md: '278px'}}
      h={{base: '272px', md: '426px'}}
      position="relative"
    >
      <Heading
        textAlign="center"
        position="absolute"
        as="h4"
        fontSize={{base: '15px', md: '25px'}}
        top={{base: 5, md: 10}}
        w="100%" 
        zIndex={1}
      >
          {title}
      </Heading>
      <Box borderRadius="30px" w="100%" h="100%" objectFit="cover" position="relative">
        <Image src={image} alt={title} />
      </Box>
    </Box>
  );
}
