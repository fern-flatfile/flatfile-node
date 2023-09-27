/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const InputConstraintType: core.serialization.Schema<
    serializers.InputConstraintType.Raw,
    Flatfile.InputConstraintType
> = core.serialization.enum_(["required"]);

export declare namespace InputConstraintType {
    type Raw = "required";
}
