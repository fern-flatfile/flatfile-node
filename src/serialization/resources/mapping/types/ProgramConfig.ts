/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ProgramConfig: core.serialization.ObjectSchema<serializers.ProgramConfig.Raw, Flatfile.ProgramConfig> =
    core.serialization.object({
        source: core.serialization.lazyObject(async () => (await import("../../..")).SheetConfig),
        destination: core.serialization.lazyObject(async () => (await import("../../..")).SheetConfig),
        familyId: core.serialization.lazy(async () => (await import("../../..")).FamilyId).optional(),
        namespace: core.serialization.string().optional(),
        save: core.serialization.boolean().optional(),
    });

export declare namespace ProgramConfig {
    interface Raw {
        source: serializers.SheetConfig.Raw;
        destination: serializers.SheetConfig.Raw;
        familyId?: serializers.FamilyId.Raw | null;
        namespace?: string | null;
        save?: boolean | null;
    }
}
