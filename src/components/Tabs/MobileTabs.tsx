import {
  Button,
  Divider,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import {FiSearch} from 'react-icons/fi';
import {FormEvent, useState} from 'react';
import {cityMocks} from 'src/mocks/cityMocks';
import CustomSelect from '@components/CustomSelect';
import {typeOfProperty} from 'src/constants/typeOfProperty';
import {maxValue} from 'src/constants/maxValue';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {searchResolver} from '@components/Forms/resolvers/searchResolver';

export default function MobileTabs() {
  const router = useRouter();
  const methods = useForm({resolver: searchResolver, mode: 'onChange'});
  const [isRenting, setIsRenting] = useState(true);

  const onSubmit = (data: any) => {
    console.log(data);
    router.push({
      pathname: '/imoveis/',
      query: {
        mode: isRenting ? 'aluguel' : 'compra',
        city: data.city,
        type: data.type,
        price: data.price,
      },
    });
  };

  return (
    <Tabs
      variant="enclosed"
      w="100%"
      bottom={{lg: '10%', xl: '15%'}}
      d={{base: 'block', lg: 'none'}}
    >
      <TabList border="none">
        <Tab
          value="isRenting"
          _selected={{boxShadow: 'none', bg: 'white'}}
          onClick={() => setIsRenting(true)}
          w="50%"
        >
          ALUGAR
        </Tab>
        <Tab
          value="isSelling"
          _selected={{boxShadow: 'none', bg: 'white'}}
          onClick={() => setIsRenting(false)}
          w="50%"
        >
          COMPRAR
        </Tab>
      </TabList>
      <TabPanels
        bg="white"
        borderRadius={isRenting ? '0 20px 20px 20px' : '20px 0 20px 20px'}
        px="20px"
        py="20px"
      >
        <Flex
          h="100%"
          gap="15px"
          py="20px"
          justify="center"
          direction="column"
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormProvider {...methods}>
            <CustomSelect
              name="city"
              label="Localização *"
              placeholder="Selecione..."
              options={cityMocks}
            />
            <Divider />
            <CustomSelect
              name="type"
              label="Tipo de propriedade"
              placeholder="Selecione..."
              options={typeOfProperty}
            />
            <Divider />
            <CustomSelect
              name="price"
              label="Faixa de preço"
              placeholder="Selecione..."
              options={maxValue}
            />
            <Button
              h="40px"
              w="100%"
              bg="primaryBlue"
              borderRadius="15px"
              _hover={{bg: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
              mt="25px"
              type="submit"
            >
              <FiSearch size="20px" color="white" />
            </Button>
          </FormProvider>
        </Flex>
      </TabPanels>
    </Tabs>
  );
}
