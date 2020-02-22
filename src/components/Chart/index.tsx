import React, { FunctionComponent, useEffect } from "react";
import TradingViewWidget from "react-tradingview-widget";
import styled from "styled-components";
import { observer } from "mobx-react";
import { ChartState } from "components/Chart/chartState";
import { ChartFilters } from "./ChartFilters";

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  padding-bottom: 50px;
  grid-area: chart;
`;

export const Chart: FunctionComponent = observer(() => {
  const chartState = new ChartState();

  // useEffect(() => () => chartState.dispose(), []);

  return (
    <ChartContainer>
      <ChartFilters />
      <TradingViewWidget autosize {...chartState.chartSettings} />
    </ChartContainer>
  );
});
