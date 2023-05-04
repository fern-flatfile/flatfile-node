/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const StringConfig: core.serialization.ObjectSchema<serializers.StringConfig.Raw, Flatfile.StringConfig> =
    core.serialization.object({
        size: core.serialization.lazy(async () => (await import("../../..")).StringConfigOptions),
    });

export declare namespace StringConfig {
    interface Raw {
        size: serializers.StringConfigOptions.Raw;
    }
}
