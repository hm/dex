import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { Button } from "ui/clickables";
import { ChartState, presetIntervalRanges } from "components/Chart/chartState";

const ChartFiltersContainer = styled.div`
  width: 100%;
`;
export const ChartFilters: FunctionComponent = observer(() => {
  const chartState = new ChartState();
  
  return (
    <ChartFiltersContainer>
      <Button onClick={chartState.toggleAdvancedMode} contained>
        {chartState.chartSettings.hide_top_toolbar
          ? "Advanced Mode"
          : "Basic Mode"}
      </Button>
      {
        presetIntervalRanges.map((preset) => (
          <Button key={preset.name} onClick={() => chartState.setPreset(preset)} contained>
            { preset.name }
          </Button>
        ))
      }
    </ChartFiltersContainer>
  );
});
