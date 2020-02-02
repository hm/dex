import React, { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import styled from 'styled-components';
import BuySell from '../components/PlaceOrder';
import OrderBook from '../components/OrderBook';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "navbar navbar navbar   navbar  navbar navbar"
    "col1   col2   chart    chart   col3   col4"
    "col1   col2   chart    chart   col3   col4"
    "col1   col2   chart    chart   col3   col4"
    "col1   col2   buysell  buysell col3   col4"
    "col1   col2   buysell  buysell col3   col4"
`;

const Dashboard: FunctionComponent = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Chart />
      <BuySell />
      <OrderBook />
    </DashboardContainer>
  );
}

export default Dashboard;
