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
export interface ListAgentsRequest {
    environmentId: Flatfile.EnvironmentId;
    isSystem?: boolean;
}
