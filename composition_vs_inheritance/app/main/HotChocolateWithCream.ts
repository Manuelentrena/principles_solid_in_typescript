import { HotChocolate } from "./HotChocolate";

export class HotChocolateWithCream extends HotChocolate {
    price(): number {
        return 1.45 + 0.15;
    }
}
