/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SpaceResponse: core.serialization.ObjectSchema<
    serializers.spaces.SpaceResponse.Raw,
    Flatfile.spaces.SpaceResponse
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).spaces.Space),
});

export declare namespace SpaceResponse {
    interface Raw {
        data: serializers.spaces.Space.Raw;
    }
}
