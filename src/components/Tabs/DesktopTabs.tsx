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
import {maxValue} from 'src/constants/maxValue';
import {useRouter} from 'next/router';
import {FormProvider, useForm} from 'react-hook-form';
import {searchResolver} from '@components/Forms/resolvers/searchResolver';
import {brazilianStates} from 'src/constants/brazilianStates';

export default function DesktopTabs() {
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
      w={{lg: '85%', xl: '60%'}}
      position="absolute"
      bottom={{lg: '10%', xl: '15%'}}
      d={{base: 'none', lg: 'block'}}
    >
      <TabList border="none">
        <Tab
          value="renting"
          _selected={{boxShadow: 'none', bg: 'white'}}
          onClick={() => setIsRenting(true)}
        >
          ALUGAR
        </Tab>
        <Tab
          value="selling"
          _selected={{boxShadow: 'none', bg: 'white'}}
          onClick={() => setIsRenting(false)}
        >
          COMPRAR
        </Tab>
      </TabList>
      <TabPanels
        bg="white"
        borderRadius={isRenting ? '0 20px 20px 20px' : '20px 0 20px 20px'}
        px="20px"
        h="100%"
      >
        <Flex
          h="100%"
          gap="15px"
          py="20px"
          justify="center"
          as="form"
          align="center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormProvider {...methods}>
            <CustomSelect
              name="state"
              label="Localização *"
              placeholder="Selecione..."
              options={brazilianStates}
            />
            <Divider orientation="vertical" />
            <CustomSelect
              name="type"
              label="Tipo de propriedade *"
              placeholder="Selecione..."
              options={typeOfProperty}
            />
            <Divider orientation="vertical" />
            <CustomSelect
              name="price"
              label="Faixa de preço *"
              placeholder="Selecione..."
              options={maxValue}
            />
            <Button
              p="30px 20px"
              bg="primaryBlue"
              borderRadius="15px"
              _hover={{bg: 'primaryBlue'}}
              _focus={{boxShadow: 'none'}}
              type="submit"
            >
              <FiSearch size="90px" color="white" />
            </Button>
          </FormProvider>
        </Flex>
      </TabPanels>
    </Tabs>
  );
}
