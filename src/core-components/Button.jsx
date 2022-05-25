import styled from 'styled-components';
import { variant } from 'styled-system';
import { buttons } from '../styles/variants';
import {
  background,
  border,
  color,
  display,
  flexbox,
  layout,
  position,
  space,
  shadow,
  textAlign,
  typography,
} from 'styled-system';

const Button = styled('button')(
  background,
  border,
  color,
  display,
  flexbox,
  layout,
  position,
  space,
  shadow,
  textAlign,
  typography,
  {
    appearance: 'none',
    fontFamily: 'button',
  },
  variant({
    variants: {
      ...buttons,
      // primary: {
      //   color: '#1a237e',
      //   bg: '#2ECC71',
      // },
      // secondary: {
      //   color: 'white',
      //   bg: 'secondary',
      // },
      // large: {
      //   fontSize: 4,
      //   lineHeight: 1,
      // },
    },
  })
);

export default Button;
