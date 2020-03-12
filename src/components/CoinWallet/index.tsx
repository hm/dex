import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { P } from "ui/text";
import { Chart } from "stores/chart";
import { observer } from "mobx-react";
import { User } from "stores/user";
import { ButtonLink } from "ui/clickables";
import coinValues from 'components/CoinList/coinValues.json';

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
  const chart = new Chart();
  return (
    <CoinPairRow>
      <Left> {name} </Left>
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

const Left = styled(P)``;

const Center = styled(P)`
  justify-self: center;
`;

const Right = styled(P)`
  justify-self: end;
`;
export const CoinWallet: FunctionComponent = observer(() => {
  const user = new User();
  return (
    <OrderBookContainer>
      <P variant="h5">
        Asset overview
      </P>
      <CoinPairRow>
        <Left> Name </Left>
        <Left> Balance </Left>
        <Left> Value (USD) </Left>
      </CoinPairRow>
      {Object.keys(user.wallet).map(currency => {
        return (
          <CoinListRow
            key={currency}
            name={currency}
            amount={(user.wallet as any)[currency] || 0}
            price={(coinValues as any)[currency]}
          />
        );
      })}
      <ViewWallet contained size="small" to="/">
        View Dashboard
      </ViewWallet>
    </OrderBookContainer>
  );
});
