/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const RecordsResponseData: core.serialization.ObjectSchema<
    serializers.RecordsResponseData.Raw,
    Flatfile.RecordsResponseData
> = core.serialization
    .object({
        records: core.serialization.lazy(async () => (await import("../../..")).RecordsWithLinks).optional(),
        counts: core.serialization.lazyObject(async () => (await import("../../..")).RecordCounts).optional(),
        versionId: core.serialization.lazy(async () => (await import("../../..")).VersionId).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Success));

export declare namespace RecordsResponseData {
    interface Raw extends serializers.Success.Raw {
        records?: serializers.RecordsWithLinks.Raw | null;
        counts?: serializers.RecordCounts.Raw | null;
        versionId?: serializers.VersionId.Raw | null;
    }
}
