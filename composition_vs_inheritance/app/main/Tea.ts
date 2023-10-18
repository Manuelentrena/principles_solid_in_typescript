import { Beverage } from "./Beverage";

export class Tea extends Beverage {
    price(): number {
        return 1.5;
    }
}
