/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const InputConfig: core.serialization.ObjectSchema<serializers.InputConfig.Raw, Flatfile.InputConfig> =
    core.serialization.object({
        options: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).InputEnumPropertyOption)
        ),
    });

export declare namespace InputConfig {
    interface Raw {
        options: serializers.InputEnumPropertyOption.Raw[];
    }
}
