/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface ListSpacesRequest {
    environmentId?: string;
    /**
     * Number of spaces to return in a page (default 10)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
    search?: string;
    archived?: boolean;
    sortField?: Flatfile.spaces.GetSpacesSortField;
    sortDirection?: Flatfile.SortDirection;
}
