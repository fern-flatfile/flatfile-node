/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const GuestConfig: core.serialization.ObjectSchema<serializers.GuestConfig.Raw, Flatfile.GuestConfig> =
    core.serialization.object({
        environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId),
        email: core.serialization.string(),
        name: core.serialization.string(),
        spaces: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).GuestSpace)
        ),
    });

export declare namespace GuestConfig {
    interface Raw {
        environmentId: serializers.EnvironmentId.Raw;
        email: string;
        name: string;
        spaces: serializers.GuestSpace.Raw[];
    }
}
