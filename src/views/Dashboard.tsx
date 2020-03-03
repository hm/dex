import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { TradingChart } from "components/TradingChart";
import { PlaceOrder } from "components/PlaceOrder";
import { OrderBook } from "components/OrderBook";
import { TradeHistory } from "components/TradeHistory";
import { CoinList } from "components/CoinList";
import { CoinPurse } from "components/CoinPurse";

const DashboardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "navbar navbar     navbar   navbar  navbar navbar"
    ".      purse      chart    chart   coins  ."
    ".      orderbook  chart    chart   coins  ."
    ".      orderbook  chart    chart   hist   ."
    ".      orderbook  buysell  buysell hist   ."
    ".      orderbook  buysell  buysell hist   ."
    ".      .          .        .       .      .";
  grid-template-columns: 1fr 220px minmax(250px, 500px) minmax(250px, 500px) 220px 1fr;
`;

export const Dashboard: FunctionComponent = () => {
  return (
    <DashboardContainer>
      <CoinPurse />
      <TradingChart />
      <PlaceOrder />
      <OrderBook />
      <TradeHistory />
      <CoinList />
    </DashboardContainer>
  );
};
