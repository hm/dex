import React, { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import styled from 'styled-components';
import BuySell from '../components/PlaceOrder';
import OrderBook from '../components/OrderBook';
import TradeHistory from '../components/TradeHistory';
import CoinList from '../components/CoinList';

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
`;

const Dashboard: FunctionComponent = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Chart />
      <BuySell />
      <OrderBook />
      <TradeHistory />
      <CoinList />
    </DashboardContainer>
  );
}

export default Dashboard;
