/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_g_YOUR_ID",
 *                 environmentId: "us_env_YOUR_ID",
 *                 email: "email@example.com",
 *                 name: "Your Name",
 *                 spaces: [{
 *                         id: "us_sp_YOUR_ID",
 *                         workbooks: [{
 *                                 id: "us_wb_YOUR_ID"
 *                             }],
 *                         lastAccessed: new Date("2023-10-30T16:59:45.735Z")
 *                     }],
 *                 createdAt: new Date("2023-10-30T16:59:45.735Z"),
 *                 updatedAt: new Date("2023-10-30T16:59:45.735Z")
 *             }]
 *     }
 */
export interface CreateGuestResponse {
    data: Flatfile.Guest[];
}
