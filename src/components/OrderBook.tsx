import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { P } from '../ui/text';

const OrderBookContainer = styled.div`
  grid-area: orderbook;
`
const Grid = styled.div`
  display: grid;
  grid-template-areas: "price amount total";
`

const Amount = styled(P)`
  justify-self: end;
`;

const Total = styled(P)`
  justify-self: end;
`;

const OrderBookRow = () => (
  <Grid>
    <P> 0.0000123 </P>
    <Amount> 250 </Amount>
    <Total> 0.234 </Total>
  </Grid>
)

const CurrentValue = styled.div`
  background-color: ${props => props.theme.colors.componentBackgroundColor};
`;

export const OrderBook: FunctionComponent = () => (
  <OrderBookContainer>
    <P variant="h5"> Order Book </P>
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
