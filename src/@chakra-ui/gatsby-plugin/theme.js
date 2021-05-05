import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    orange: {
      500: '#E88661'
    }
  },
  shadows: {
    outline: 'rgba(232, 134, 97, 0.6) 0px 0px 0px 3px'
  },
  styles: {
    global: {
      html: {
        fontSize: '16px'
      }
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
            bg: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px'
          }
        }
      }
    },
    Checkbox: {
      variants: {
        brand: {
          bg: '#E88661 !important'
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#E88661',
          border: '2px solid',
          bg: 'rgba(255, 255, 255, 0.4)',
          _placeholder: {
            color: '#B0B0B0'
          }
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
            bg: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px'
          },
          addon: {
            bg: '#E88661 !important',
            color: '#fff'
          }
        }
      }
    },
    Textarea: {
      baseStyle: {
        borderColor: '#E88661',
        border: '2px solid',
        bg: 'rgba(255, 255, 255, 0.4)',
        _placeholder: {
          color: '#B0B0B0'
        }
      },
      variants: {
        brand: {
          borderColor: '#E88661 !important',
          border: '2px solid',
          bg: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '12px'
        }
      }
    },
    FormLabel: {
      variants: {
        brand: {
          color: '#131313 !important',
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
        }
      }
    }
  }
});

export default theme;
