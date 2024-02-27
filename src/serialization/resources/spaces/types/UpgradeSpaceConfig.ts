/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const UpgradeSpaceConfig: core.serialization.ObjectSchema<
    serializers.UpgradeSpaceConfig.Raw,
    Flatfile.UpgradeSpaceConfig
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace UpgradeSpaceConfig {
    interface Raw {
        id: string;
    }
}
