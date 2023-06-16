/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface ExportOptions {
    versionId?: Flatfile.VersionId;
    sortField?: Flatfile.SortField;
    sortDirection?: Flatfile.SortDirection;
    filter?: Flatfile.Filter;
    filterField?: Flatfile.FilterField;
    searchValue?: Flatfile.SearchValue;
    searchField?: Flatfile.SearchField;
    q?: string;
    /**
     * The Record Ids param (ids) is a list of record ids that can be passed to several record endpoints allowing the user to identify specific records to INCLUDE in the query, or specific records to EXCLUDE, depending on whether or not filters are being applied. When passing a query param that filters the record dataset, such as 'searchValue', or a 'filter' of 'valid' | 'error' | 'all', the 'ids' param will EXCLUDE those records from the filtered results. For basic queries that do not filter the dataset, passing record ids in the 'ids' param will limit the dataset to INCLUDE just those specific records
     *
     */
    ids?: Flatfile.RecordId[];
}
