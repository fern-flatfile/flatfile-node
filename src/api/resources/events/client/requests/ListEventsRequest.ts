/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface ListEventsRequest {
    environmentId: Flatfile.EnvironmentId;
    spaceId?: string;
    /**
     * Filter by event domain
     */
    domain?: string;
    /**
     * Filter by event topic
     */
    topic?: string;
    /**
     * Filter by event timestamp
     */
    since?: string;
    /**
     * Number of tokens to return in a page (default 10)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
    /**
     * Include acknowledged events
     */
    includeAcknowledged?: boolean;
}
