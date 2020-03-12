import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { P } from '../ui/text';

const OrderBookContainer = styled.div`
  grid-area: hist;
`
const Grid = styled.div`
  display: grid;
  grid-template-areas: "price amount total";
  grid-template-columns: 1fr 1fr 1fr ;
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
    <Amount> 1.234 </Amount>
    <Total> 16:58:23 </Total>
  </Grid>
)

const CurrentValue = styled.div`
  background-color: ${props => props.theme.colors.componentBackgroundColor};
`;

export const TradeHistory: FunctionComponent = () => (
  <OrderBookContainer>
    <P variant="h5"> Trade History </P>
    <Grid>
      <P> Coin Pair </P>
      <Amount> Amount </Amount>
      <Total> Date </Total>
    </Grid>
    {
      [...Array(20)].map(number => (
        <OrderBookRow />
      ))
    }
  </OrderBookContainer>
)
