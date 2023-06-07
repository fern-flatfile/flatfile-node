/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SpaceRemovedEvent: core.serialization.ObjectSchema<
    serializers.SpaceRemovedEvent.Raw,
    Flatfile.SpaceRemovedEvent
> = core.serialization
    .object({
        payload: core.serialization.record(core.serialization.string(), core.serialization.any()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace SpaceRemovedEvent {
    interface Raw extends serializers.BaseEvent.Raw {
        payload: Record<string, any>;
    }
}
