/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@fern-api/flatfile";
import * as core from "../../../../core";

export const RecordId: core.serialization.Schema<serializers.RecordId.Raw, Flatfile.RecordId> =
    core.serialization.string();

export declare namespace RecordId {
    type Raw = string;
}
