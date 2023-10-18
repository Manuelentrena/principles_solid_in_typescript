import { Coffee } from "./Coffee";

export  class CoffeeWithMilk extends Coffee {
  price(): number {
      return super.price() +  0.10;
  }
}
