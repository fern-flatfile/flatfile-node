/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";

export const ExchangeTokenRequest: core.serialization.Schema<
    serializers.ExchangeTokenRequest.Raw,
    Flatfile.ExchangeTokenRequest
> = core.serialization.object({
    token: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    spaceId: core.serialization.string().optional(),
});

export declare namespace ExchangeTokenRequest {
    interface Raw {
        token?: string | null;
        email?: string | null;
        spaceId?: string | null;
    }
}
