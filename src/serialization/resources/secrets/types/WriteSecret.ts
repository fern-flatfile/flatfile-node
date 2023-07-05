/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const WriteSecret: core.serialization.ObjectSchema<serializers.WriteSecret.Raw, Flatfile.WriteSecret> =
    core.serialization.object({
        name: core.serialization.lazy(async () => (await import("../../..")).SecretName),
        value: core.serialization.lazy(async () => (await import("../../..")).SecretValue),
        environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId),
        spaceId: core.serialization.lazy(async () => (await import("../../..")).SpaceId).optional(),
    });

export declare namespace WriteSecret {
    interface Raw {
        name: serializers.SecretName.Raw;
        value: serializers.SecretValue.Raw;
        environmentId: serializers.EnvironmentId.Raw;
        spaceId?: serializers.SpaceId.Raw | null;
    }
}
