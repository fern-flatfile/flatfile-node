/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Flatfile from "../../..";

export class BadRequestError extends errors.FlatfileError {
    constructor(body: Flatfile.Error_[]) {
        super({
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
