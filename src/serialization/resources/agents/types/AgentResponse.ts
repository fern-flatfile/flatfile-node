/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const AgentResponse: core.serialization.ObjectSchema<serializers.AgentResponse.Raw, Flatfile.AgentResponse> =
    core.serialization.object({
        data: core.serialization.lazyObject(async () => (await import("../../..")).Agent).optional(),
    });

export declare namespace AgentResponse {
    interface Raw {
        data?: serializers.Agent.Raw | null;
    }
}
