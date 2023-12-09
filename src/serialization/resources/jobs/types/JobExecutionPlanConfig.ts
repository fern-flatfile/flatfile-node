/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobExecutionPlanConfig: core.serialization.ObjectSchema<
    serializers.JobExecutionPlanConfig.Raw,
    Flatfile.JobExecutionPlanConfig
> = core.serialization.object({
    fieldMapping: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Edge))
        .optional(),
    unmappedSourceFields: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).SourceField))
        .optional(),
    unmappedDestinationFields: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).DestinationField))
        .optional(),
    programId: core.serialization.string().optional(),
});

export declare namespace JobExecutionPlanConfig {
    interface Raw {
        fieldMapping?: serializers.Edge.Raw[] | null;
        unmappedSourceFields?: serializers.SourceField.Raw[] | null;
        unmappedDestinationFields?: serializers.DestinationField.Raw[] | null;
        programId?: string | null;
    }
}
