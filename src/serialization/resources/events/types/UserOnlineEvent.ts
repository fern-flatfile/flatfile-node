/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const UserOnlineEvent: core.serialization.ObjectSchema<
    serializers.UserOnlineEvent.Raw,
    Flatfile.UserOnlineEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace UserOnlineEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}
