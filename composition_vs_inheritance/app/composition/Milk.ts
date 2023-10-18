import { type Additions } from "./Additions";

export class Milk implements Additions {
    price(): number {
        return 0.10;
    }
}
