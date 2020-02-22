import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Navbar } from "components/Navbar";
import { Chart } from "components/Chart";
import { PlaceOrder } from "components/PlaceOrder";
import { OrderBook } from "components/OrderBook";
import { TradeHistory } from "components/TradeHistory";
import { CoinList } from "components/CoinList";

const DashboardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "navbar navbar navbar   navbar  navbar navbar"
    "col1   col2   chart    chart   coins  col4"
    "col1   col2   chart    chart   coins  col4"
    "col1   col2   chart    chart   hist   col4"
    "col1   col2   buysell  buysell hist   col4"
    "col1   col2   buysell  buysell hist   col4"
    "space   space   space  space space   space";
  grid-template-columns: 1fr 220px minmax(250px, 500px) minmax(250px, 500px) 220px 1fr;
`;

const Dashboard: FunctionComponent = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Chart />
      <PlaceOrder />
      <OrderBook />
      <TradeHistory />
      <CoinList />
    </DashboardContainer>
  );
};

export default Dashboard;
