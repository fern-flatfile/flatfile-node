/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const ApiKey: core.serialization.ObjectSchema<serializers.ApiKey.Raw, Flatfile.ApiKey> =
    core.serialization.object({
        id: core.serialization.string(),
        rawKey: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).ApiKeyType),
        environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId).optional(),
        accountId: core.serialization.lazy(async () => (await import("../../..")).AccountId).optional(),
        operations: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ApiKeyOperation))
            .optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date().optional(),
        expireAt: core.serialization.date(),
        secret: core.serialization.string().optional(),
    });

export declare namespace ApiKey {
    interface Raw {
        id: string;
        rawKey: string;
        type: serializers.ApiKeyType.Raw;
        environmentId?: serializers.EnvironmentId.Raw | null;
        accountId?: serializers.AccountId.Raw | null;
        operations?: serializers.ApiKeyOperation.Raw[] | null;
        createdAt: string;
        updatedAt?: string | null;
        expireAt: string;
        secret?: string | null;
    }
}
