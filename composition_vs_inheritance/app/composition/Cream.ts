import { type Additions } from "./Additions";

export class Cream implements Additions {
    private readonly PRICE = 0.15;

    price(): number {
        return this.PRICE;
    }
}
