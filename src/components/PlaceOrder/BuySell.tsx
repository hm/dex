import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Row } from '../../ui/layout';
import { Button } from '../../ui/clickables';
import Input from '@material-ui/core/Input';
import { P } from '../../ui/text';

const BuySellRoot = styled(Paper).attrs({ variant: 'outlined', square: true })`
  width: 100%;
  grid-area: buysell;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${props => props.theme.colors.componentBackgroundColor};
`;

const fixedPercentages = [
  '25%',
  '50%',
  '75%',
  '100%',
];

const BuySell: FunctionComponent = () => (
  <BuySellRoot>
    <P> Buy ETH </P>
    <Row>
      <Button contained size="small"> Limit </Button>
      <Button contained size="small"> Market </Button>
    </Row>
    <Input
      startAdornment={<P> Price: </P>}
      endAdornment={<P> BTC </P>}
    />
    <Input
      startAdornment={<P> Amount: </P>}
      endAdornment={<P> ETH </P>}
    />
    <Row>
      {
        fixedPercentages.map(percent => (
          <Button key={percent} size="small"><P> {percent} </P></Button>
        ))
      }
    </Row>
    <Input startAdornment={<P> Total: </P>} />

  </BuySellRoot>
)
export default BuySell;