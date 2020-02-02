import styled from "styled-components";
import { Button as btn } from '@material-ui/core';

export const Button = styled(btn) <{ contained?: boolean }>`
  margin-right: 5px !important;
  background-color: ${props => props.contained ? props.theme.colors.backgroundColor : 'transparent'};
  span {
    color:${props => props.contained ? props.theme.colors.text : props.theme.colors.inverseText };
  }
`;