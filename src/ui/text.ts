import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const P = styled(Typography)<{inverse?: boolean}>`
  color: ${props => props.inverse ? props.theme.colors.inverseText : props.theme.colors.text};
`;