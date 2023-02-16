/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const EventId: core.serialization.Schema<serializers.EventId.Raw, Flatfile.EventId> =
    core.serialization.string();

export declare namespace EventId {
    type Raw = string;
}
