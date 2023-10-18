import { Beverage } from "./Beverage";

export class HotChocolate extends Beverage {
    price(): number {
        return 1.45;
    }
}
