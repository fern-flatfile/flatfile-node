/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GetSpacesSortField: core.serialization.Schema<
    serializers.spaces.GetSpacesSortField.Raw,
    Flatfile.spaces.GetSpacesSortField
> = core.serialization.enum_(["name", "workbooksCount", "filesCount", "environmentId", "createdByUserName"]);

export declare namespace GetSpacesSortField {
    type Raw = "name" | "workbooksCount" | "filesCount" | "environmentId" | "createdByUserName";
}
