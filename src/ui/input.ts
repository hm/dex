import styled from "styled-components";
import input from '@material-ui/core/Input';
import { Select } from "@material-ui/core";

export const Input = styled(input)<{inverse?: boolean}>`
  color: ${props => props.inverse ? props.theme.colors.inverseText : props.theme.colors.text};
`;

export const ThemedSelect = styled(Select)`
  color: ${props => props.theme.colors.text};
`