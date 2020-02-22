import styled from "styled-components";
import input from '@material-ui/core/Input';

export const Input = styled(input)<{inverse?: boolean}>`
  color: ${props => props.inverse ? props.theme.colors.inverseText : props.theme.colors.text};
`;