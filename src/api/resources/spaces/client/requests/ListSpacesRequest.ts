/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

/**
 * @example
 *     {
 *         environmentId: "us_env_YOUR_ID"
 *     }
 */
export interface ListSpacesRequest {
    /**
     * The ID of the environment.
     */
    environmentId?: Flatfile.EnvironmentId;
    /**
     * Number of spaces to return in a page (default 10)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
    /**
     * Search query for spaces
     */
    search?: string;
    /**
     * Search by namespace
     */
    namespace?: string;
    /**
     * Flag to include archived spaces
     */
    archived?: boolean;
    /**
     * Field to sort spaces by
     */
    sortField?: Flatfile.GetSpacesSortField;
    /**
     * Direction of sorting
     */
    sortDirection?: Flatfile.SortDirection;
    /**
     * Flag for collaborative (project) spaces
     */
    isCollaborative?: boolean;
}
