/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RecordData: core.serialization.Schema<serializers.RecordData.Raw, Flatfile.RecordData> =
    core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).CellValue)
    );

export declare namespace RecordData {
    type Raw = Record<string, serializers.CellValue.Raw>;
}
