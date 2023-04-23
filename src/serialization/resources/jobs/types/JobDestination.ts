/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobDestination: core.serialization.Schema<serializers.JobDestination.Raw, Flatfile.JobDestination> =
    core.serialization.lazy(async () => (await import("../../..")).WorkbookId);

export declare namespace JobDestination {
    type Raw = serializers.WorkbookId.Raw;
}
