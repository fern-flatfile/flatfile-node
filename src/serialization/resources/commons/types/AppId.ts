/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AppId: core.serialization.Schema<serializers.AppId.Raw, Flatfile.AppId> = core.serialization.string();

export declare namespace AppId {
    type Raw = string;
}
