/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const ListEnvironmentsResponse: core.serialization.ObjectSchema<
    serializers.ListEnvironmentsResponse.Raw,
    Flatfile.ListEnvironmentsResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Environment)),
    pagination: core.serialization.lazyObject(async () => (await import("../../..")).Pagination).optional(),
});

export declare namespace ListEnvironmentsResponse {
    interface Raw {
        data: serializers.Environment.Raw[];
        pagination?: serializers.Pagination.Raw | null;
    }
}
