/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SnapshotsResponse: core.serialization.ObjectSchema<
    serializers.SnapshotsResponse.Raw,
    Flatfile.SnapshotsResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Snapshot)),
});

export declare namespace SnapshotsResponse {
    interface Raw {
        data: serializers.Snapshot.Raw[];
    }
}
