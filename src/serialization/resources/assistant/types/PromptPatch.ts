/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const PromptPatch: core.serialization.ObjectSchema<serializers.PromptPatch.Raw, Flatfile.PromptPatch> =
    core.serialization.object({
        prompt: core.serialization.string(),
    });

export declare namespace PromptPatch {
    interface Raw {
        prompt: string;
    }
}
