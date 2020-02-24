import React, { FunctionComponent, useEffect } from "react";
import TradingViewWidget from "react-tradingview-widget";
import styled from "styled-components";
import { observer } from "mobx-react";
import { Chart } from "stores/chart";
import { ChartFilters } from "./ChartFilters";

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  padding-bottom: 50px;
  grid-area: chart;
`;

export const TradingChart: FunctionComponent = observer(() => {
  const chart = new Chart();

  useEffect(() => () => new Chart().dispose(), []);

  return (
    <ChartContainer>
      <ChartFilters />
      <TradingViewWidget autosize {...chart.chartSettings} />
    </ChartContainer>
  );
});
