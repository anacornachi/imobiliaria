import {Box, Checkbox, Flex, Heading, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function SearchFilter() {
  const router = useRouter();
  const bedroomOptions = [1, 2, 3, 4];
  const bathroomOptions = [1, 2, 3, 4];
  const garageOptions = [1, 2, 3, 4];

  const [beds, setBeds] = useState<number | undefined>();
  const [baths, setBaths] = useState<number | undefined>();
  const [garage, setGarage] = useState<number | undefined>();

  const handleStateToQueryChange = (
    number: number,
    state: number | undefined,
    setState: (number?: number) => void,
    query: string,
  ) => {
    if (number === state) {
      setState(undefined);
    } else {
      setState(number);
    }
    delete router.query[query];
    router.push({
      query: {
        ...router.query,
        ...(number === state ? {} : {[query]: number}),
      },
    });
  };

  return (
    <Flex
      display={{base: 'none', md: 'flex'}}
      direction="column"
      bg="main"
      borderRadius="40px"
      py="40px"
      px="20px"
      gap="20px"
    >
      <Heading as="h5" fontSize="25px" alignSelf="center">
        Quartos
      </Heading>
      <Flex
        direction="column"
        gap="10px"
        color="description"
        fontWeight="medium"
      >
        {bedroomOptions.map((option) => (
          <Flex
            key={option}
            onClick={() =>
              handleStateToQueryChange(option, beds, setBeds, 'beds')
            }
            cursor="pointer"
            position="relative"
          >
            <Box position="absolute" w="full" h="full" zIndex={10} />
            <Checkbox
              isChecked={String(option) === (router.query.beds as string)}
            />
            <Text ml={2}>
              {option} quarto{option > 1 ? 's' : ''}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Heading as="h5" fontSize="25px" alignSelf="center">
        Banheiros
      </Heading>
      <Flex
        direction="column"
        gap="10px"
        color="description"
        fontWeight="medium"
      >
        {bathroomOptions.map((option) => (
          <Flex
            key={option}
            onClick={() =>
              handleStateToQueryChange(option, baths, setBaths, 'baths')
            }
            cursor="pointer"
            position="relative"
          >
            <Box position="absolute" w="full" h="full" zIndex={10} />
            <Checkbox
              isChecked={String(option) === (router.query.baths as string)}
            />
            <Text ml={2}>
              {option} banheiro{option > 1 ? 's' : ''}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Heading as="h5" fontSize="25px" alignSelf="center">
        Garagens
      </Heading>
      <Flex
        direction="column"
        gap="10px"
        color="description"
        fontWeight="medium"
      >
        {garageOptions.map((option) => (
          <Flex
            key={option}
            onClick={() =>
              handleStateToQueryChange(option, garage, setGarage, 'garage')
            }
            cursor="pointer"
            position="relative"
          >
            <Box position="absolute" w="full" h="full" zIndex={10} />
            <Checkbox
              isChecked={String(option) === (router.query.garage as string)}
            />
            <Text ml={2}>
              {option} garage{option > 1 ? 'ns' : 'm'}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
