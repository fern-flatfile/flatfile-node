/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const Space: core.serialization.ObjectSchema<serializers.spaces.Space.Raw, Flatfile.spaces.Space> =
    core.serialization
        .object({
            id: core.serialization.lazy(async () => (await import("../../..")).SpaceId),
            workbookCount: core.serialization.number().optional(),
            filesCount: core.serialization.number().optional(),
            createdByUserId: core.serialization.lazy(async () => (await import("../../..")).UserId).optional(),
            createdByUserName: core.serialization.string().optional(),
            guestLink: core.serialization.string().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).spaces.SpaceConfig));

export declare namespace Space {
    interface Raw extends serializers.spaces.SpaceConfig.Raw {
        id: serializers.SpaceId.Raw;
        workbookCount?: number | null;
        filesCount?: number | null;
        createdByUserId?: serializers.UserId.Raw | null;
        createdByUserName?: string | null;
        guestLink?: string | null;
    }
}
