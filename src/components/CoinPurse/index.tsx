import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { P } from "ui/text";
import { Chart } from "stores/chart";
import { observer } from "mobx-react";
import { User } from "stores/user";
import { ButtonLink } from "ui/clickables";
import { ITicker } from "components/CoinList/coins";
import coinValues from "components/CoinList/coinValues.json";
import { CoinIcon } from "modules/CoinIcon";
import { Spacer } from "ui/layout";

const OrderBookContainer = styled.div`
  grid-area: purse;
`;

const CoinListRow = ({
  ticker,
  amount,
  price
}: {
  ticker: ITicker;
  amount: number;
  price: number;
}) => {
  return (
    <CoinPairRow>
      <P><CoinIcon size={20} coin={ticker} /><Spacer size={10} />{ticker} </P>
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
        <CoinIcon size={24} coin={coin1} /> {coin1}
        {' '}/{' '}
        <CoinIcon size={24} coin={coin2} /> {coin2}
      </P>
      <CoinPairRow>
        <P> Name </P>
        <Amount> Amount </Amount>
        <Price> Price </Price>
      </CoinPairRow>

      {Object.values(chart.currentCoinPair).map((ticker: ITicker) => {
        return (
          <CoinListRow
            key={ticker}
            ticker={ticker}
            amount={user.wallet[ticker] || 0}
            price={(coinValues as any)[ticker]}
          />
        );
      })}
      <ViewWallet contained size="small" to="/wallet">
        View Entire Wallet
      </ViewWallet>
    </OrderBookContainer>
  );
});
