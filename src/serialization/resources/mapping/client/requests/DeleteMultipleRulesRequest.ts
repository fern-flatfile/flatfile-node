/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";
import { MappingId } from "../../../commons/types/MappingId";

export const DeleteMultipleRulesRequest: core.serialization.Schema<
    serializers.DeleteMultipleRulesRequest.Raw,
    Flatfile.DeleteMultipleRulesRequest
> = core.serialization.object({
    ruleIds: core.serialization.list(MappingId),
});

export declare namespace DeleteMultipleRulesRequest {
    interface Raw {
        ruleIds: MappingId.Raw[];
    }
}
