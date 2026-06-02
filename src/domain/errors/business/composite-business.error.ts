import { BusinessError } from "./business.error.js";

export class CompositeBusinessError extends Error {
    public override name = "CompositeBusinessError";

    constructor(public readonly businessErrors: BusinessError[]) {
        super("Composite business error");
    }
}