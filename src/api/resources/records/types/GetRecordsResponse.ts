/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             records: [{
 *                     id: "us_rc_YOUR_ID",
 *                     values: {
 *                         "firstName": {
 *                             value: undefined,
 *                             messages: [],
 *                             valid: true,
 *                             updatedAt: new Date("2023-11-20T16:59:40.286Z")
 *                         },
 *                         "lastName": {
 *                             value: undefined,
 *                             messages: [],
 *                             valid: true,
 *                             updatedAt: new Date("2023-11-20T16:59:40.286Z")
 *                         },
 *                         "email": {
 *                             value: undefined,
 *                             messages: [],
 *                             valid: true,
 *                             updatedAt: new Date("2023-11-20T16:59:40.286Z")
 *                         }
 *                     },
 *                     valid: true,
 *                     metadata: {}
 *                 }],
 *             counts: {
 *                 valid: 1000,
 *                 error: 0,
 *                 total: 1000
 *             },
 *             versionId: "us_vr_YOUR_ID",
 *             commitId: "us_vr_YOUR_ID",
 *             success: true
 *         }
 *     }
 */
export interface GetRecordsResponse {
    data: Flatfile.GetRecordsResponseData;
}
