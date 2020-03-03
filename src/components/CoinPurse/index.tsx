import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { P } from "ui/text";
import { Chart } from "stores/chart";
import { observer } from "mobx-react";
import { User } from "stores/user";
import { ButtonLink } from "ui/clickables";

const OrderBookContainer = styled.div`
  grid-area: purse;
`;

const CoinListRow = ({
  name,
  amount,
  price
}: {
  name: string;
  amount: number;
  price: number;
}) => {
  return (
    <CoinPairRow>
      <P> {name} </P>
      <Amount> {amount} </Amount>
      <Price>{Math.round(price * 100000) / 100000}</Price>
    </CoinPairRow>
  );
};

const ViewWallet = styled(ButtonLink)`
  width: 100%;
`;

const CoinPairRow = styled.div`
  display: grid;
  grid-template-areas: "price amount total";
  grid-template-columns: 1.5fr 1fr 1fr;
  &:hover {
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.5);
  }
`;

const Price = styled(P)`
  justify-self: end;
`;

const Amount = styled(P)``;

export const CoinPurse: FunctionComponent = observer(() => {
  const chart = new Chart();
  const user = new User();
  const { coin1, coin2 } = chart.currentCoinPair;
  return (
    <OrderBookContainer>
      <P variant="h5">
        {coin1} / {coin2}
      </P>
      {Object.values(chart.currentCoinPair).map(currency => {
        return (
          <CoinListRow
            key={currency}
            name={currency}
            amount={user.wallet[currency.toLowerCase()] || 0}
            price={234}
          />
        );
      })}
      <ViewWallet contained size="small" to="/wallet">
        View Entire Wallet
      </ViewWallet>
    </OrderBookContainer>
  );
});
