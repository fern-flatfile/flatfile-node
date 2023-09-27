/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SpaceConfig: core.serialization.ObjectSchema<serializers.SpaceConfig.Raw, Flatfile.SpaceConfig> =
    core.serialization
        .object({
            name: core.serialization.string().optional(),
            displayOrder: core.serialization.number().optional(),
            guestAuthentication: core.serialization
                .list(core.serialization.lazy(async () => (await import("../../..")).GuestAuthenticationEnum))
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).InternalSpaceConfigBase));

export declare namespace SpaceConfig {
    interface Raw extends serializers.InternalSpaceConfigBase.Raw {
        name?: string | null;
        displayOrder?: number | null;
        guestAuthentication?: serializers.GuestAuthenticationEnum.Raw[] | null;
    }
}
