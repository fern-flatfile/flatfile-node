/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Entitlement: core.serialization.ObjectSchema<serializers.Entitlement.Raw, Flatfile.Entitlement> =
    core.serialization.object({
        key: core.serialization.string(),
        metadata: core.serialization.any(),
    });

export declare namespace Entitlement {
    interface Raw {
        key: string;
        metadata?: any;
    }
}
