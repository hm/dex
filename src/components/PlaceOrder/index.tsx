import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BuySell } from "./BuySell";
import { Chart } from "stores/chart";
import { observer } from "mobx-react";

const PlaceOrderRoot = styled.div`
  width: 100%;
  grid-area: buysell;
  display: flex;
`;

export const PlaceOrder: FunctionComponent = observer(() => {
  const chart = new Chart();
  return (
    <PlaceOrderRoot>
      <BuySell isBuy {...chart.currentCoinPair} />
      <BuySell {...chart.currentCoinPair} />
    </PlaceOrderRoot>
  );
});
