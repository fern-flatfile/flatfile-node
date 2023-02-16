/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@fern-api/flatfile";

/**
 * List of api tokens without secrets
 */
export interface ListApiTokensResponse {
    pagination?: Flatfile.Pagination;
    data: Flatfile.ApiToken[];
}
