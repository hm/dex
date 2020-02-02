import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { P } from '../ui/text';

const OrderBookContainer = styled.div`
  grid-area: col2;
  padding: 20px 0;
`
const Grid = styled.div`
  display: grid;
  grid-template-areas: "price amount total"
`

const OrderBookRow = () => (
  <Grid>
    <P> 0.0000123 </P>
    <P> 250 </P>
    <P> 0.234 </P>
  </Grid>
)

const CurrentValue = styled.div`
  background-color: ${props => props.theme.colors.componentBackgroundColor};
`;

const OrderBook: FunctionComponent = () => (
  <OrderBookContainer>
    {
      [...Array(10)].map(number => (
        <OrderBookRow />
      ))
    }
    <CurrentValue>
      <OrderBookRow />
    </CurrentValue>
    {
      [...Array(10)].map(number => (
        <OrderBookRow />
      ))
    }
  </OrderBookContainer>
)
export default OrderBook;