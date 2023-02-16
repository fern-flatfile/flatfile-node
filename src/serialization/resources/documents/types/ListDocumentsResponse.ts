/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const ListDocumentsResponse: core.serialization.ObjectSchema<
    serializers.ListDocumentsResponse.Raw,
    Flatfile.ListDocumentsResponse
> = core.serialization.object({
    data: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Document))
        .optional(),
});

export declare namespace ListDocumentsResponse {
    interface Raw {
        data?: serializers.Document.Raw[] | null;
    }
}
