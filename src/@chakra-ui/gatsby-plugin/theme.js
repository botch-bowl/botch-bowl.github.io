import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '16px'
      }
    }
  },
  theme: {
    shadows: {
      outline: '2px solid red'
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Minion Pro'
      }
    },
    Text: {
      baseStyle: {
        fontFamily: 'Montserrat',
        maxWidth: '70ch'
      }
    },
    Select: {
      variants: {
        brand: {
          field: {
            borderColor: '#E88661 !important',
            border: '2px solid',
            bg: 'rgba(255, 255, 255, 0.4)'
          }
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#E88661',
          border: '2px solid',
          bg: 'rgba(255, 255, 255, 0.4)'
        },
        addon: {
          bg: '#E88661 !important',
          color: '#fff'
        }
      },
      variants: {
        brand: {
          field: {
            borderColor: '#E88661 !important',
            border: '2px solid',
            bg: 'rgba(255, 255, 255, 0.4)'
          },
          addon: {
            bg: '#E88661 !important',
            color: '#fff'
          }
        }
      }
    },
    FormLabel: {
      variants: {
        brand: {
          color: '#E88661 !important',
          marginBottom: '4px',
          marginTop: '8px'
        }
      }
    },
    Button: {
      baseStyle: {
        bg: '#E88661',
        borderColor: '#E88661',
        color: '#FFF',
        fontSize: '14px !important',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        borderRadius: '100px',
        padding: '24px 32px !important',
        _hover: {
          bg: '#D16F4A'
        },
        _focus: {
          boxShadow: 'rgba(232, 134, 97, 0.6) 0px 0px 0px 3px'
        }
      }
    }
  }
});

export default theme;
