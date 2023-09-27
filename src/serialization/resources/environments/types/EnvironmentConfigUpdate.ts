/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const EnvironmentConfigUpdate: core.serialization.ObjectSchema<
    serializers.EnvironmentConfigUpdate.Raw,
    Flatfile.EnvironmentConfigUpdate
> = core.serialization.object({
    name: core.serialization.string().optional(),
    isProd: core.serialization.boolean().optional(),
    guestAuthentication: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).GuestAuthenticationEnum))
        .optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    translationsPath: core.serialization.string().optional(),
});

export declare namespace EnvironmentConfigUpdate {
    interface Raw {
        name?: string | null;
        isProd?: boolean | null;
        guestAuthentication?: serializers.GuestAuthenticationEnum.Raw[] | null;
        metadata?: Record<string, any> | null;
        translationsPath?: string | null;
    }
}
