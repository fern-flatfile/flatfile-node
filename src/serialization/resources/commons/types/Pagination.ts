/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Pagination: core.serialization.ObjectSchema<serializers.Pagination.Raw, Flatfile.Pagination> =
    core.serialization.object({
        currentPage: core.serialization.number(),
        pageCount: core.serialization.number(),
        totalCount: core.serialization.number(),
    });

export declare namespace Pagination {
    interface Raw {
        currentPage: number;
        pageCount: number;
        totalCount: number;
    }
}
