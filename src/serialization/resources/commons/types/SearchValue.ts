/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SearchValue: core.serialization.Schema<serializers.SearchValue.Raw, Flatfile.SearchValue> =
    core.serialization.string();

export declare namespace SearchValue {
    type Raw = string;
}
