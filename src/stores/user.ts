import { observable } from 'mobx';
import { singleton } from 'decorators/singleton';
import { ITicker } from 'components/CoinList/coins';

type IWallet = {
  [index in ITicker]: number;
};

@singleton
export class User {
  @observable
  wallet: IWallet = {
    BTC: 0.234,
    ETH: 30,
    BNB: 50,
    EOS: 0,
    DAI: 234,
    BAT: 555,
    USDC: 1236,
  };
}
