/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AgentLog: core.serialization.ObjectSchema<serializers.AgentLog.Raw, Flatfile.AgentLog> =
    core.serialization.object({
        eventId: core.serialization.lazy(async () => (await import("../../..")).EventId),
        success: core.serialization.boolean(),
        createdAt: core.serialization.string(),
        completedAt: core.serialization.string(),
        log: core.serialization.string().optional(),
    });

export declare namespace AgentLog {
    interface Raw {
        eventId: serializers.EventId.Raw;
        success: boolean;
        createdAt: string;
        completedAt: string;
        log?: string | null;
    }
}
