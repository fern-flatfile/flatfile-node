/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { ConstraintId } from "../../commons/types/ConstraintId";
import { AppId } from "../../commons/types/AppId";

export const ConstraintResource: core.serialization.ObjectSchema<
    serializers.ConstraintResource.Raw,
    Flatfile.ConstraintResource
> = core.serialization.object({
    id: ConstraintId,
    appId: AppId,
    description: core.serialization.string().optional(),
    function: core.serialization.string().optional(),
    options: core.serialization.any().optional(),
    label: core.serialization.string().optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    deletedAt: core.serialization.date().optional(),
});

export declare namespace ConstraintResource {
    interface Raw {
        id: ConstraintId.Raw;
        appId: AppId.Raw;
        description?: string | null;
        function?: string | null;
        options?: any | null;
        label?: string | null;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string | null;
    }
}
