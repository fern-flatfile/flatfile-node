/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobType: core.serialization.Schema<serializers.JobType.Raw, Flatfile.JobType> = core.serialization.enum_([
    "file",
    "workbook",
    "sheet",
    "space",
    "document",
    "app",
    "agent",
    "autobuild",
]);

export declare namespace JobType {
    type Raw = "file" | "workbook" | "sheet" | "space" | "document" | "app" | "agent" | "autobuild";
}
