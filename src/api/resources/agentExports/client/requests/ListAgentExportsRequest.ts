/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

/**
 * @example
 *     {}
 */
export interface ListAgentExportsRequest {
    environmentId?: Flatfile.EnvironmentId;
    agentId?: Flatfile.AgentId;
    pageSize?: Flatfile.PageSize;
    pageNumber?: Flatfile.PageNumber;
}
