import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { P } from "ui/text";
import { Chart } from "stores/chart";
import { observer } from "mobx-react";
import { User } from "stores/user";
import { ButtonLink } from "ui/clickables";
import coinValues from "components/CoinList/coinValues.json";
import { CoinIcon } from "modules/CoinIcon";
import { ITicker } from "components/CoinList/coins";
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
  const chart = new Chart();
  return (
    <CoinPairRow>
      <Left>
        <CoinIcon size={20} coin={ticker} /><Spacer size={10} />{ticker}{" "}
      </Left>
      <Left> {amount} </Left>
      <Left>${Math.round(price * 100000) / 100000}</Left>
      <Right>
        <ButtonLink contained size="small">
          Withdraw
        </ButtonLink>
        <ButtonLink contained size="small">
          Deposit
        </ButtonLink>
      </Right>
    </CoinPairRow>
  );
};

const ViewWallet = styled(ButtonLink)`
  width: 100%;
`;

const CoinPairRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 2fr;
`;

const Left = styled(P)`
  display: flex;
  align-items: center;
`;

const Center = styled(P)`
  justify-self: center;
`;

const Right = styled(P)`
  justify-self: end;
  white-space: nowrap;
`;
export const CoinWallet: FunctionComponent = observer(() => {
  const user = new User();
  return (
    <OrderBookContainer>
      <P variant="h5">Asset overview</P>
      <CoinPairRow>
        <Left> Name </Left>
        <Left> Balance </Left>
        <Left> Value (USD) </Left>
      </CoinPairRow>
      {(Object.keys(user.wallet) as ITicker[]).map((ticker: ITicker) => {
        return (
          <CoinListRow
            key={ticker}
            ticker={ticker}
            amount={(user.wallet as any)[ticker] || 0}
            price={(coinValues as any)[ticker]}
          />
        );
      })}
      <ViewWallet contained size="small" to="/">
        View Dashboard
      </ViewWallet>
    </OrderBookContainer>
  );
});
