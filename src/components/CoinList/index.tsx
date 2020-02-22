import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { P } from "ui/text";
import coins from "./coins.json";
import { Input } from "ui/input";
import Search from "@material-ui/icons/Search";
import { ChartState } from "components/Chart/chartState";

const OrderBookContainer = styled.div`
  grid-area: coins;
`;
const CoinPairRow = styled.div`
  display: grid;
  grid-template-areas: "price amount total";
  grid-template-columns: 1.5fr 1fr 1fr;
  &:hover {
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.5);
  }
`;

const SearchIcon = styled(Search)`
  color: ${props => props.theme.colors.text};
`;

const Price = styled(P)``;

const PercentChange = styled(P)`
  justify-self: end;
`;

const CoinListRow = ({
  name,
  price,
  change
}: {
  name: string;
  price: number;
  change: number;
}) => {
  const chartState = new ChartState();
  return (
  <CoinPairRow onClick={() => chartState.setCoin(name)}>
    <P> {name} </P>
    <Price> {Math.round(price * 100000) / 100000} </Price>
    <PercentChange>
      <RedOrGreen positive={change >= 0}> {change}% </RedOrGreen>{" "}
    </PercentChange>
  </CoinPairRow>
)};

const RedOrGreen = styled.span<{ positive: boolean }>`
  color: ${props => (props.positive ? "lightgreen" : "red")};
`;

export const CoinList: FunctionComponent = () => {
  return (
    <OrderBookContainer>
      <P variant="h5"> Coin Pairs </P>
      <Input startAdornment={<SearchIcon />} placeholder="Search for Coins" />
      {coins.pairs.map(coin => CoinListRow(coin))}
    </OrderBookContainer>
  );
};
