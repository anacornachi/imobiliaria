import {StylesConfig} from 'react-select';

export const customStyles: StylesConfig = {
  placeholder: (provided, state) => ({
    ...provided,
    color: '#585981',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    padding: 20,
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    width: '100%',
    height: '35px',
    padding: '0 10px',
    borderRadius: '20px',
    boxShadow: 'none',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  singleValue: (provided, state) => {
    const opacity = 1;
    const transition = 'opacity 300ms';
    return {...provided, opacity, transition};
  },
};
