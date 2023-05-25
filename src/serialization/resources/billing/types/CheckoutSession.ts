/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CheckoutSession: core.serialization.ObjectSchema<
    serializers.CheckoutSession.Raw,
    Flatfile.CheckoutSession
> = core.serialization.object({
    id: core.serialization.string().optional(),
    object: core.serialization.string().optional(),
});

export declare namespace CheckoutSession {
    interface Raw {
        id?: string | null;
        object?: string | null;
    }
}
