import {Flex, FormControl, Text, TextProps} from '@chakra-ui/react';
import {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import Select from 'react-select';
import {customStyles} from 'src/styles/react-select';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  options: TOption[];
} & TextProps;
type TOption = {
  value: string;
  label: string;
};

export default function CustomSelect({
  name,
  label,
  placeholder,
  options,
  ...props
}: Props) {
  const {formState, setValue} = useFormContext();

  const {errors} = formState;
  const error = errors[name];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <FormControl isInvalid={Boolean(error)}>
      <Flex direction="column" justify="center">
        <Text color="title" fontWeight="bold" mb="5px" {...props}>
          {label}
        </Text>
        <Select
          styles={customStyles}
          placeholder={placeholder}
          defaultValue={selectedOption}
          options={options}
          isSearchable={true}
          onChange={(newValue) => {
            const {value} = newValue as TOption;
            setValue(name, value);
          }}
        />
      </Flex>
    </FormControl>
  );
}
