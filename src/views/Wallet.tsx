import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { CoinWallet } from "components/CoinWallet";

const DashboardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "navbar navbar navbar   navbar  navbar navbar"
    ".      .      purse    purse .    . ";
  grid-template-columns: 1fr 220px minmax(300px, 500px) minmax(300px, 500px) 220px 1fr;
`;

export const Wallet: FunctionComponent = () => {
  return (
    <DashboardContainer>
      <CoinWallet />
    </DashboardContainer>
  );
};
