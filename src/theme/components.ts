export const components = {
  Button: {
    variants: {
      primary: {
        bg: 'primaryBlue',
        color: '#FFFFFF',
        w: '280px',
        h: {base: '40px', md: '60px'},
        fontSize: {base: '12px', md: '18px'},
        borderRadius: '15px',
        _hover: {
          bg: 'primaryBlue',
        },
        _focus: {boxShadow: 'none'},
      },
      secondary: {
        bg: 'light',
        color: 'primaryBlue',
        w: '280px',
        h: {base: '40px', md: '60px'},
        fontSize: {base: '12px', md: '18px'},
        borderRadius: '15px',
        border: '2px',
        borderColor: 'primaryBlue',
        _hover: {
          bg: 'light',
        },
        _focus: {boxShadow: 'none'},
      },
      share: {
        bg: 'light',
        color: 'share',
        w: '280px',
        h: {base: '40px', md: '60px'},
        fontSize: {base: '12px', md: '18px'},
        borderRadius: '15px',
        border: '2px',
        borderColor: 'share',
        _hover: {
          bg: 'light',
        },
        _focus: {boxShadow: 'none'},
      },
      delete: {
        bg: 'light',
        color: 'delete',
        w: '280px',
        h: {base: '40px', md: '60px'},
        fontSize: {base: '12px', md: '18px'},
        borderRadius: '15px',
        border: '2px',
        borderColor: 'delete',
        _hover: {
          bg: 'light',
        },
        _focus: {boxShadow: 'none'},
      },
    },
  },
};
