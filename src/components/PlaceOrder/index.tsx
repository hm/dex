import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BuySell } from "./BuySell";
import { ChartState } from "components/Chart/chartState";
import { observer } from "mobx-react";

const PlaceOrderRoot = styled.div`
  width: 100%;
  grid-area: buysell;
  display: flex;
`;

export const PlaceOrder: FunctionComponent = observer(() => {
  const chartState = new ChartState();
  return (
    <PlaceOrderRoot>
      <BuySell isBuy {...chartState.currentCoinPair} />
      <BuySell {...chartState.currentCoinPair} />
    </PlaceOrderRoot>
  );
});
