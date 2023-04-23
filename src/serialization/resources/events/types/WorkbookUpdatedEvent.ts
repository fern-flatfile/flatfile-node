/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const WorkbookUpdatedEvent: core.serialization.ObjectSchema<
    serializers.WorkbookUpdatedEvent.Raw,
    Flatfile.WorkbookUpdatedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace WorkbookUpdatedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
