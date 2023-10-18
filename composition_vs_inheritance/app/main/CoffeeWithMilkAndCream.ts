import { Coffee } from "./Coffee";

export class CoffeeWithMilkAndCream extends Coffee {
    price(): number {
        return super.price() +  0.25;
    }
}
