import React from "react";
import styled from "styled-components";
import { Button as Btn } from '@material-ui/core';
import { Link as Lnk } from 'react-router-dom';

export const Button = styled(Btn) <{ contained?: boolean }>`
  margin-right: 5px !important;
  background-color: ${props => props.contained ? props.theme.colors.backgroundColor : 'transparent'};
  span {
    color:${props => props.contained ? props.theme.colors.text : props.theme.colors.inverseText };
  }
  min-width: 0!important;
`;

const BtnLnk = (props: any) => {
  const { children, contained, size, ...rest } = props;
  return (
    <Lnk {...rest}>
      <Button contained={contained} size={size}>
        { children }
      </Button>
    </Lnk>
  )
};

export const ButtonLink = styled(BtnLnk)`
  text-decoration: unset;
  button {
    width: inherit;
  }
`;