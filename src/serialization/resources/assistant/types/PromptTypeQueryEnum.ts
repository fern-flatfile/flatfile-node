/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const PromptTypeQueryEnum: core.serialization.Schema<
    serializers.PromptTypeQueryEnum.Raw,
    Flatfile.PromptTypeQueryEnum
> = core.serialization.enum_(["ALL", "AI_ASSIST", "CONSTRAINT_GENERATION"]);

export declare namespace PromptTypeQueryEnum {
    type Raw = "ALL" | "AI_ASSIST" | "CONSTRAINT_GENERATION";
}
