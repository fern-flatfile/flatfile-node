/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const ExportOptions: core.serialization.ObjectSchema<serializers.ExportOptions.Raw, Flatfile.ExportOptions> =
    core.serialization.object({
        versionId: core.serialization.lazy(async () => (await import("../../..")).VersionId).optional(),
        sortField: core.serialization.lazy(async () => (await import("../../..")).SortField).optional(),
        sortDirection: core.serialization.lazy(async () => (await import("../../..")).SortDirection).optional(),
        filter: core.serialization.lazy(async () => (await import("../../..")).Filter).optional(),
        filterField: core.serialization.lazy(async () => (await import("../../..")).FilterField).optional(),
        searchValue: core.serialization.lazy(async () => (await import("../../..")).SearchValue).optional(),
        searchField: core.serialization.lazy(async () => (await import("../../..")).SearchField).optional(),
        ids: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).RecordId)),
    });

export declare namespace ExportOptions {
    interface Raw {
        versionId?: serializers.VersionId.Raw | null;
        sortField?: serializers.SortField.Raw | null;
        sortDirection?: serializers.SortDirection.Raw | null;
        filter?: serializers.Filter.Raw | null;
        filterField?: serializers.FilterField.Raw | null;
        searchValue?: serializers.SearchValue.Raw | null;
        searchField?: serializers.SearchField.Raw | null;
        ids: serializers.RecordId.Raw[];
    }
}
