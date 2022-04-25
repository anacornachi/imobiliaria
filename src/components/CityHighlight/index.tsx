import rioDeJaneiro from '@public/assets/images/rio-de-janeiro.png';
import saoPaulo from '@public/assets/images/sao-paulo.png';
import brasilia from '@public/assets/images/brasilia.png';
import curitiba from '@public/assets/images/curitiba.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper';
import {cityHighlightBreakpoint} from 'src/constants/swiperBreakpoints';
import SingleHighlight from './SingleHighlight';
import {Flex, Heading} from '@chakra-ui/react';

export default function CityHighlight() {
  return (
    <Flex
      direction="column"
      align="center"
      gap={{base: '10px', sm: '30px', md: '60px', lg: '80px'}}
      w="100%"
    >
      <Heading
        fontSize={{base: '20px', md: '30px', lg: '40px'}}
        textAlign="center"
      >
        Estamos disponíveis em diversas cidades
      </Heading>

      <Flex
        d={{base: 'none', md: 'flex'}}
        w="100%"
        justify="space-between"
        gap="30px"
      >
        <SingleHighlight title="Rio de Janeiro" image={rioDeJaneiro} />
        <SingleHighlight title="São Paulo" image={saoPaulo} />
        <SingleHighlight title="Brasília" image={brasilia} />
        <SingleHighlight title="Curitiba" image={curitiba} />
      </Flex>

      <Flex
        d={{base: 'flex', md: 'none'}}
        w="100%"
        justify="space-between"
        h="330px"
      >
        <Swiper
          navigation={false}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={false}
          className="mySwiper"
          breakpoints={cityHighlightBreakpoint}
        >
          <SwiperSlide>
            <SingleHighlight title="Rio de Janeiro" image={rioDeJaneiro} />
          </SwiperSlide>
          <SwiperSlide>
            <SingleHighlight title="São Paulo" image={saoPaulo} />
          </SwiperSlide>
          <SwiperSlide>
            <SingleHighlight title="Brasília" image={brasilia} />
          </SwiperSlide>
          <SwiperSlide>
            <SingleHighlight title="Curitiba" image={curitiba} />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
