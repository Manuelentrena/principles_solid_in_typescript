import { Tea } from "./Tea";

export class TeaWithMilk extends Tea {
    price(): number {
        return super.price() +  0.10;
    }
}
