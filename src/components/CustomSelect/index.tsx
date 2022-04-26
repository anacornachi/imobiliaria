import {Flex, FormControl, Text} from '@chakra-ui/react';
import {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import Select from 'react-select';
import {customStyles} from 'src/styles/react-select';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  options: TOption[];
};
type TOption = {
  value: string;
  label: string;
};

export default function CustomSelect({
  name,
  label,
  placeholder,
  options,
}: Props) {
  const {formState, setValue} = useFormContext();

  const {errors} = formState;
  const error = errors[name];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <FormControl isInvalid={Boolean(error)}>
      <Flex direction="column" justify="center">
        <Text color="title" fontWeight="bold" mb="5px">
          {label}
        </Text>
        <Select
          styles={customStyles}
          placeholder={placeholder}
          defaultValue={selectedOption}
          // isClearable={true}
          options={options}
          isSearchable={true}
          onChange={(newValue) => {
            const {label} = newValue as TOption;
            setValue(name, label);
          }}
        />
      </Flex>
    </FormControl>
  );
}
