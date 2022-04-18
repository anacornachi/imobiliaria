import Container from '../../components/layout/Container';
import {Flex, Heading, Switch, FormLabel, Stack} from '@chakra-ui/react';
import CustomInput from '../../components/Forms/CustomInput';

export default function updateBroker() {
  return (
    <>
      <Container>
        <Flex
          justify={{base: '', md: 'space-between', lg: 'space-between'}}
          py={20}
          direction={{base: 'column', md: 'row'}}
          gap={{base: '35px', md: ''}}
        >
          <Flex w="380px" h="80px">
            <Heading
              as="h2"
              fontSize={{base: '40px', md: '60px'}}
              color="title"
              textAlign={{base: 'center'}}
            >
              Atualização do corretor
            </Heading>
          </Flex>
          <Flex
            direction="column"
            gap="35px"
            paddingTop={{base: '50px', md: '0px'}}
          >
            <CustomInput name="" title={'Nome do corretor'} disabled={false} />
            <CustomInput name="" title={'CPF'} disabled={false} />
          </Flex>
          <Flex direction={{base: 'column', md: 'column'}} gap="35px">
            <CustomInput name="" title="CRECI" disabled={false} />
            <FormLabel
              htmlFor="isRequired"
              as="h3"
              fontSize="18px"
              color="secondary"
              fontWeight="semibold"
              mb={{base: '6px', md: '10px'}}
            >
              Status
            </FormLabel>
            <Switch id="isRequired" size="lg" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
