import { observable } from 'mobx';
import { singleton } from 'decorators/singleton';

interface IWallet {
  [index: string]: number;
}

@singleton
export class User {
  @observable
  wallet: IWallet = {
    eth: 30,
    bnb: 50,
    btc: 0.234,
  };
}
