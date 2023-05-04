/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CellValueUnion: core.serialization.Schema<serializers.CellValueUnion.Raw, Flatfile.CellValueUnion> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.number(),
        core.serialization.boolean(),
    ]);

export declare namespace CellValueUnion {
    type Raw = string | number | boolean;
}
