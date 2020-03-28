import React, { FunctionComponent, ChangeEvent } from "react";
import { observer } from "mobx-react";
import { User } from "stores/user";
import { Input } from "ui/input";
import Search from "@material-ui/icons/Search";
import styled from "styled-components";
import { Autocomplete } from '@material-ui/lab';
import { TextField, OutlinedTextFieldProps } from "@material-ui/core";
import tradingPairs from 'components/CoinList/tradingPairs.json';
import { Chart } from "stores/chart";
import { ITradingPair } from "components/CoinList/tradingPair";

const SearchIcon = styled(Search)`
  color: ${props => props.theme.colors.text};
`;

const OmniSearchInput = styled(TextField as React.ComponentType<OutlinedTextFieldProps>)`
  grid-area: search;
  width: 100%;
  label, div, fieldset {
    color: ${props => props.theme.colors.text};
    border-color: ${props => props.theme.colors.text};
  }
`;

export const OmniSearch: FunctionComponent = observer(() => {
  const chart = new Chart();

  const updateCoin = (_event: ChangeEvent<{}>, tradingPair: ITradingPair | null) => {
    if (tradingPair) {
      const { coin1, coin2 } = tradingPair;
      chart.setCoin({coin1, coin2})
      console.log(tradingPair);
    }
  }
  
  return (
    <Autocomplete
      options={tradingPairs.data as ITradingPair[]}
      getOptionLabel={option => option.name}
      onChange={updateCoin}
      renderInput={params => (
        <OmniSearchInput label="Search for trading pair" variant="outlined" {...params} />
      )}
    />
  );
});
