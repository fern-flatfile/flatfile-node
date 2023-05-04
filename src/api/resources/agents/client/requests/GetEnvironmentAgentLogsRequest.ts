/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface GetEnvironmentAgentLogsRequest {
    environmentId: Flatfile.EnvironmentId;
    /**
     * Number of logs to return in a page (default 20)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
}
