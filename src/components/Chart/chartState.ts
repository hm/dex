import { observable, action, IReactionDisposer, reaction, computed } from "mobx";
import { IThemes } from "themes/CurrentTheme";
import { BarStyles, Themes } from "react-tradingview-widget";
import { Session } from "stores/session";
import { singleton } from "decorators/singleton";

interface IPresetIntervalRange {
  name: string;
  interval: string;
  range: string;
}

export const presetIntervalRanges = [
  {
    name: "1 Hour",
    interval: "60",
    range: "1D"
  },
  {
    name: "1 Day",
    interval: "D",
    range: "5D"
  },
  {
    name: "1 Weeks",
    interval: "W",
    range: "W"
  }
];

@singleton
export class ChartState {
  themeDisposer: IReactionDisposer;
  coinPairDisposer: IReactionDisposer;

  @observable
  currentCoinPair = {
    coin1: "ETH",
    coin2: "BTC",
  };

  @computed
  get currentTradeSymbol () {
    return this.currentCoinPair.coin1 + this.currentCoinPair.coin2;
  }

  @observable
  session = new Session();

  @observable
  chartSettings = {
    symbol: this.currentTradeSymbol,
    theme:
      this.session.currentTheme === IThemes.dark ? Themes.DARK : Themes.LIGHT,
    interval: "W",
    range: "W",
    hide_top_toolbar: true,
    barStyles: BarStyles.CANDLES,
  };

  constructor() {
    this.themeDisposer = reaction(
      () => this.session.currentTheme,
      () => {
        this.chartSettings.theme =
          this.session.currentTheme === IThemes.dark
            ? Themes.DARK
            : Themes.LIGHT;
      }
    );

  this.coinPairDisposer = reaction(
      () => this.currentTradeSymbol,
      () => {
        this.chartSettings.symbol = this.currentTradeSymbol;
      }
    )
  }

  dispose = () => {
    console.log('dispose')
    this.themeDisposer();
    this.coinPairDisposer();
  }

  @action
  setCoin = (coin: string) => {
    this.currentCoinPair.coin1 = coin.substr(0, 3);
    this.currentCoinPair.coin2 = coin.substr(3, 6);
  }

  @action
  toggleAdvancedMode = () => {
    if (this.chartSettings.hide_top_toolbar) {
      delete this.chartSettings.hide_top_toolbar;
    } else {
      this.chartSettings.hide_top_toolbar = true;
    }
  };

  @action
  setPreset = ({ interval, range }: IPresetIntervalRange) => {
    this.chartSettings = {
      ...this.chartSettings,
      interval,
      range
    };
  };
}
