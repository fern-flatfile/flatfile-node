/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../../../core";

export const SpacePatternConfig: core.serialization.ObjectSchema<
    serializers.spaces.SpacePatternConfig.Raw,
    Flatfile.spaces.SpacePatternConfig
> = core.serialization.object({
    slug: core.serialization.string(),
    name: core.serialization.string(),
    blueprints: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).spaces.Blueprint)
    ),
    actions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../../..")).Action))
        .optional(),
});

export declare namespace SpacePatternConfig {
    interface Raw {
        slug: string;
        name: string;
        blueprints: serializers.spaces.Blueprint.Raw[];
        actions?: serializers.Action.Raw[] | null;
    }
}
