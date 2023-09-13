/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RecordBase: core.serialization.ObjectSchema<serializers.RecordBase.Raw, Flatfile.RecordBase> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).RecordId),
        versionId: core.serialization.lazy(async () => (await import("../../..")).VersionId).optional(),
        valid: core.serialization.boolean().optional(),
        messages: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ValidationMessage))
            .optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    });

export declare namespace RecordBase {
    interface Raw {
        id: serializers.RecordId.Raw;
        versionId?: serializers.VersionId.Raw | null;
        valid?: boolean | null;
        messages?: serializers.ValidationMessage.Raw[] | null;
        metadata?: Record<string, any> | null;
    }
}
