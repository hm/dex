import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { ITicker } from "components/CoinList/coins";

interface IProps {
  coin: ITicker;
  size: number;
}

export const CoinIcon: FunctionComponent<IProps> = observer(props => {
  return (
    <img
      width={props.size}
      height={props.size}
      src={require(`cryptocurrency-icons/32/white/${props.coin.toLowerCase()}.png`)}
    />
  );
});
