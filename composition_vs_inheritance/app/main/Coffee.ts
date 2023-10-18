import { Beverage } from "./Beverage";

export class Coffee extends Beverage {
    price(): number {
        return 1.2;
    }
}
