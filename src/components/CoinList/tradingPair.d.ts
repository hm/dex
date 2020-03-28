import { ITicker } from "./coins";

export interface ITradingPair {
  name: string;
  coin1: ITicker;
  coin2: ITicker;
  price: number;
  change: number;
};