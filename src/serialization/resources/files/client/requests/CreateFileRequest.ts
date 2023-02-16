/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../../core";

export const CreateFileRequest: core.serialization.Schema<
    serializers.CreateFileRequest.Raw,
    Flatfile.CreateFileRequest
> = core.serialization.object({
    spaceId: core.serialization.lazy(async () => (await import("../../../..")).SpaceId),
    environmentId: core.serialization.lazy(async () => (await import("../../../..")).EnvironmentId),
    file: core.serialization.string(),
});

export declare namespace CreateFileRequest {
    interface Raw {
        spaceId: serializers.SpaceId.Raw;
        environmentId: serializers.EnvironmentId.Raw;
        file: string;
    }
}
