/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobUpdateConfig: core.serialization.Schema<serializers.JobUpdateConfig.Raw, Flatfile.JobUpdateConfig> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("../../..")).DeleteJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).FileJobConfig),
        core.serialization.lazyObject(async () => (await import("../../..")).PipelineJobConfig),
    ]);

export declare namespace JobUpdateConfig {
    type Raw = serializers.DeleteJobConfig.Raw | serializers.FileJobConfig.Raw | serializers.PipelineJobConfig.Raw;
}
