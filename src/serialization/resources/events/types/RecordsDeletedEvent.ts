/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const RecordsDeletedEvent: core.serialization.ObjectSchema<
    serializers.RecordsDeletedEvent.Raw,
    Flatfile.RecordsDeletedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace RecordsDeletedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
