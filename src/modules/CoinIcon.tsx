import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { ITicker } from "components/CoinList/coins";
import { ThemeContext } from "styled-components";
import { Session } from "stores/session";
import { IThemes } from "themes/CurrentTheme";

interface IProps {
  coin: ITicker;
  size: number;
}

export const CoinIcon: FunctionComponent<IProps> = observer(props => {
  const session = new Session();

  return (
    <img
      width={props.size}
      height={props.size}
      src={require(`cryptocurrency-icons/32/${
        session.currentTheme === IThemes.dark ? "white" : "black"
      }/${props.coin.toLowerCase()}.png`)}
    />
  );
});
