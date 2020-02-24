import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { Button } from "ui/clickables";
import { presetIntervalRanges, Chart } from "stores/chart";

const ChartFiltersContainer = styled.div`
  width: 100%;
`;
export const ChartFilters: FunctionComponent = observer(() => {
  const chart = new Chart();
  
  return (
    <ChartFiltersContainer>
      <Button onClick={chart.toggleAdvancedMode} contained>
        {chart.chartSettings.hide_top_toolbar
          ? "Advanced Mode"
          : "Basic Mode"}
      </Button>
      {
        presetIntervalRanges.map((preset) => (
          <Button key={preset.name} onClick={() => chart.setPreset(preset)} contained>
            { preset.name }
          </Button>
        ))
      }
    </ChartFiltersContainer>
  );
});
