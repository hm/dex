import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BuySell from './BuySell';

const PlaceOrderRoot = styled.div`
  width: 100%;
  grid-area: buysell;
  display: flex;
`

const PlaceOrder: FunctionComponent = () => (
  <PlaceOrderRoot>
    <BuySell />
    <BuySell />
  </PlaceOrderRoot>
)
export default PlaceOrder;