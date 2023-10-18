import { type Additions } from "./Additions";

export class Tea implements Additions {
    private readonly PRICE = 1.5;

    price(): number {
        return this.PRICE;
    }
}
