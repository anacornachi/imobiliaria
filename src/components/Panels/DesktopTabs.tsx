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
import {useState} from 'react';

import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {searchResolver} from '@components/Forms/resolvers/searchResolver';
import CustomSelect from '@components/CustomSelect';
import {cityMocks} from 'src/mocks/cityMocks';
import {typeOfProperty} from 'src/constants/typeOfProperty';
import {maxValue} from 'src/constants/maxValue';

export default function DesktopTabs() {
  const router = useRouter();
  const methods = useForm({resolver: searchResolver, mode: 'onChange'});
  const [isRenting, setIsRenting] = useState(true);

  const onSubmit = (data: any) => {
    console.log(data);
    router.push({
      pathname: '/imoveis/',
      query: {
        city: data.city,
        type: data.type,
        price: data.price,
      },
    });
  };

  return (
    <Tabs
      variant="enclosed"
      w={{lg: '85%', xl: '60%'}}
      position="absolute"
      bottom={{lg: '10%', xl: '15%'}}
      d={{base: 'none', lg: 'block'}}
    >
      <TabList border="none">
        <Tab value="renting" _selected={{boxShadow: 'none', bg: 'white'}}>
          ALUGAR
        </Tab>
        <Tab value="selling" _selected={{boxShadow: 'none', bg: 'white'}}>
          COMPRAR
        </Tab>
      </TabList>
      <TabPanels
        bg="white"
        borderRadius={isRenting ? '0 20px 20px 20px' : '20px 0 20px 20px'}
        px="20px"
        py="20px"
        h="90px"
      >
        <Flex
          h="100%"
          gap="15px"
          py="20px"
          justify="center"
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
            <Divider orientation="vertical" />
            <CustomSelect
              name="type"
              label="Tipo de propriedade"
              placeholder="Selecione..."
              options={typeOfProperty}
            />
            <Divider orientation="vertical" />
            <CustomSelect
              name="price"
              label="Faixa de preço"
              placeholder="Selecione..."
              options={maxValue}
            />
            <Button
              h="100%"
              w="60px"
              bg="primaryBlue"
              borderRadius="15px"
              _hover={{bg: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
            >
              <FiSearch size="25px" color="white" />
            </Button>
          </FormProvider>
        </Flex>
      </TabPanels>
    </Tabs>
  );
}
