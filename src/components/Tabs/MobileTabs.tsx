import {
  Button,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import {FiSearch} from 'react-icons/fi';
import {useState} from 'react';
import CustomSelect from '@components/CustomSelect';
import {typeOfProperty} from 'src/constants/typeOfProperty';
import {maxRentingValue} from 'src/constants/maxRentingValue';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {searchResolver} from '@components/Forms/resolvers/searchResolver';
import {brazilianStates} from 'src/constants/brazilianStates';
import {maxSellingValue} from 'src/constants/maxSellingValue';

export default function MobileTabs() {
  const router = useRouter();
  const methods = useForm({resolver: searchResolver, mode: 'onChange'});
  const [isRenting, setIsRenting] = useState(true);

  const onSubmit = (data: any) => {
    router.push({
      pathname: '/imoveis/busca',
      query: {
        mode: isRenting ? 'aluguel' : 'venda',
        state: data.state,
        type: data.type.toLowerCase(),
        min: data.price.split('-')[0],
        max: data.price.split('-')[1],
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
              name="state"
              label="Localização *"
              placeholder="Selecione..."
              options={brazilianStates}
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
              options={isRenting ? maxRentingValue : maxSellingValue}
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
