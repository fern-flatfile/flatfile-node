/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const AgentId: core.serialization.Schema<serializers.AgentId.Raw, Flatfile.AgentId> =
    core.serialization.string();

export declare namespace AgentId {
    type Raw = string;
}
