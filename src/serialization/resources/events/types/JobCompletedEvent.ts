/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobCompletedEvent: core.serialization.ObjectSchema<
    serializers.JobCompletedEvent.Raw,
    Flatfile.JobCompletedEvent
> = core.serialization
    .object({
        payload: core.serialization.lazyObject(async () => (await import("../../..")).JobPayload),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace JobCompletedEvent {
    interface Raw extends serializers.BaseEvent.Raw {
        payload: serializers.JobPayload.Raw;
    }
}
