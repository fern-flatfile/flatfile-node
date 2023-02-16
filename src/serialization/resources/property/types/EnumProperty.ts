/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const EnumProperty: core.serialization.ObjectSchema<serializers.EnumProperty.Raw, Flatfile.EnumProperty> =
    core.serialization
        .object({
            config: core.serialization.lazyObject(async () => (await import("../../..")).EnumPropertyConfig),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseProperty))
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).ArrayableProperty));

export declare namespace EnumProperty {
    interface Raw extends serializers.BaseProperty.Raw, serializers.ArrayableProperty.Raw {
        config: serializers.EnumPropertyConfig.Raw;
    }
}
