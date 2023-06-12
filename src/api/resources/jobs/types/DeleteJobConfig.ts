/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * The configuration for a delete job
 */
export interface DeleteJobConfig {
    filter?: Flatfile.Filter;
    filterField?: Flatfile.FilterField;
    searchValue?: Flatfile.SearchValue;
    searchField?: Flatfile.SearchField;
    q?: string;
    sheet: Flatfile.SheetId;
    exceptions?: Flatfile.RecordId[];
}
