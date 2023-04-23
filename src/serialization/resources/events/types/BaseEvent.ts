/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const BaseEvent: core.serialization.ObjectSchema<serializers.BaseEvent.Raw, Flatfile.BaseEvent> =
    core.serialization.object({
        domain: core.serialization.lazy(async () => (await import("../../..")).Domain),
        topic: core.serialization.lazy(async () => (await import("../../..")).EventTopic),
        context: core.serialization.lazyObject(async () => (await import("../../..")).Context),
        attributes: core.serialization.lazyObject(async () => (await import("../../..")).EventAttributes).optional(),
        callbackUrl: core.serialization.string().optional(),
        dataUrl: core.serialization.string().optional(),
        createdAt: core.serialization.date(),
        acknowledgedAt: core.serialization.string().optional(),
        acknowledgedBy: core.serialization.string().optional(),
        target: core.serialization.string().optional(),
    });

export declare namespace BaseEvent {
    interface Raw {
        domain: serializers.Domain.Raw;
        topic: serializers.EventTopic.Raw;
        context: serializers.Context.Raw;
        attributes?: serializers.EventAttributes.Raw | null;
        callbackUrl?: string | null;
        dataUrl?: string | null;
        createdAt: string;
        acknowledgedAt?: string | null;
        acknowledgedBy?: string | null;
        target?: string | null;
    }
}
