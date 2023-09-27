/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SpaceAccess: core.serialization.Schema<serializers.SpaceAccess.Raw, Flatfile.SpaceAccess> =
    core.serialization.enum_(["*", "upload"]);

export declare namespace SpaceAccess {
    type Raw = "*" | "upload";
}
