import {
  BoxProps,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Text,
} from '@chakra-ui/react';
import {useFormContext} from 'react-hook-form';
import {BsCheckLg} from 'react-icons/bs';

type Props = {
  name: string;
  label?: string | JSX.Element;
} & BoxProps;

export default function CustomCheckbox({name, label, ...props}: Props) {
  const {
    formState: {errors},
    register,
    watch,
  } = useFormContext();

  const error = errors[name];

  const checkbox = watch(name);

  return (
    <FormControl
      isInvalid={Boolean(error)}
      position="relative"
      mb={error ? '10px' : 0}
      {...props}
    >
      <Checkbox id={name} d="none" {...register(name)} />
      <Flex as="label" htmlFor={name} cursor="pointer" align="center">
        <Flex
          tabIndex={0}
          justify="center"
          align="center"
          rounded="full"
          borderWidth={2}
          w={{base: '22px', md: '38px'}}
          h={{base: '20px', md: '26px'}}
          bg={checkbox ? 'primaryBlue' : 'white'}
          transition=".3s"
        >
          <Icon
            as={BsCheckLg}
            color="white"
            fontSize={{base: '14px', md: '16px'}}
          />
        </Flex>
        <Text
          align="left"
          fontSize={{base: '14px', lg: '17px'}}
          as="span"
          ml={2}
        >
          {label}
        </Text>
      </Flex>
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="5px"
        color="primaryBlue"
        position="absolute"
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
