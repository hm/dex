import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Row } from '../../ui/layout';
import { Button } from '../../ui/clickables';
import { Input } from 'ui/input';
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

interface IProps {
  coin1: string,
  coin2: string,
  isBuy?: boolean,
}

export const BuySell: FunctionComponent<IProps> = ({
  coin1,
  coin2,
  isBuy,
}) => (
  <BuySellRoot>
    <P> {isBuy ? 'Buy' : 'Sell'} { coin1 } </P>
    <Row>
      <Button contained size="small"> Limit </Button>
      <Button contained size="small"> Market </Button>
    </Row>
    <Input
      startAdornment={<P> Price: </P>}
      endAdornment={<P> { coin2 } </P>}
    />
    <Input
      startAdornment={<P> Amount: </P>}
      endAdornment={<P> { coin1 } </P>}
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
