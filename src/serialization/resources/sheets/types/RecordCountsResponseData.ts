/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RecordCountsResponseData: core.serialization.ObjectSchema<
    serializers.RecordCountsResponseData.Raw,
    Flatfile.RecordCountsResponseData
> = core.serialization
    .object({
        counts: core.serialization.lazyObject(async () => (await import("../../..")).RecordCounts).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Success));

export declare namespace RecordCountsResponseData {
    interface Raw extends serializers.Success.Raw {
        counts?: serializers.RecordCounts.Raw | null;
    }
}
