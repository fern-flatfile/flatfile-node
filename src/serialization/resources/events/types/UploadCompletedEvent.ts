/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const UploadCompletedEvent: core.serialization.ObjectSchema<
    serializers.UploadCompletedEvent.Raw,
    Flatfile.UploadCompletedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace UploadCompletedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
