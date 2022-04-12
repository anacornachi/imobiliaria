import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import {ReactNode, useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';

type Props = {
  name: string;
  title?: string;
  variant?: string;
  leftIcon?: ReactNode;
  disabled?: boolean;
} & InputProps;

export default function CustomInput({
  name,
  variant,
  title,
  leftIcon,
  disabled,
  w,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  //   const {formState, register} = useFormContext();

  //   const {errors} = formState;
  //   const error = errors[name];

  return (
    // isInvalid={Boolean(error)}  mb={error ? '10px' : 0}
    <FormControl w={w}>
      <Heading
        as="h3"
        fontSize="18px"
        fontWeight="semibold"
        mb={{base: '6px', md: '10px'}}
      >
        {title}
      </Heading>
      <InputGroup>
        {leftIcon && <InputLeftElement children={leftIcon} />}
        <Input
          {...props}
          color="description"
          type={
            props.type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : undefined
          }
          readOnly={disabled}
          px="16px"
          fontSize={{base: '14px', md: '16px'}}
          pr={props.type === 'password' ? '15%' : '16px'}
          border="none"
          _focus={{boxShadow: 'none', border: 'none'}}
          bg={disabled ? 'disabled' : 'input'}
          borderRadius="20px"
          //   {...register(name)}
        />

        {props.type === 'password' && (
          <InputRightElement>
            <Button
              h="30px"
              w="100%"
              size="lg"
              bg="none"
              p="0"
              _focus={{boxShadow: 'none', bg: 'none'}}
              _hover={{bg: 'none'}}
              _active={{bg: 'none'}}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="4px"
        color="pink"
        position="absolute"
        id={`error-message-${name}`}
      >
        {/* {String(error?.message)} */}
      </FormErrorMessage>
    </FormControl>
  );
}
