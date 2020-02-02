import React, { FunctionComponent } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  grid-area: chart;
`
const Chart: FunctionComponent = () => (
  <ChartContainer>
    <TradingViewWidget symbol="BTCUSD" theme={Themes.DARK} autosize />
  </ChartContainer>
)
export default Chart;