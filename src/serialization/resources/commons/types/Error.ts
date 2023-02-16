/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const Error: core.serialization.ObjectSchema<serializers.Error.Raw, Flatfile.Error> = core.serialization.object({
    key: core.serialization.string().optional(),
    message: core.serialization.string(),
});

export declare namespace Error {
    interface Raw {
        key?: string | null;
        message: string;
    }
}
