/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_wb_YOUR_ID",
 *                 name: "My First Workbook",
 *                 spaceId: "us_sp_YOUR_ID",
 *                 environmentId: "us_env_YOUR_ID",
 *                 sheets: [{
 *                         id: "us_sh_YOUR_ID",
 *                         workbookId: "us_wb_YOUR_ID",
 *                         name: "Contacts",
 *                         slug: "contacts",
 *                         config: {
 *                             name: "Contacts",
 *                             slug: "contacts",
 *                             fields: [{
 *                                     type: "string",
 *                                     key: "firstName",
 *                                     label: "First Name"
 *                                 }, {
 *                                     type: "string",
 *                                     key: "lastName",
 *                                     label: "Last Name"
 *                                 }, {
 *                                     type: "string",
 *                                     key: "email",
 *                                     label: "Email"
 *                                 }],
 *                             mappingConfidenceThreshold: 0.5
 *                         },
 *                         metadata: {
 *                             "rowHeaders": [
 *                                 4
 *                             ]
 *                         },
 *                         updatedAt: new Date("2021-08-31T18:00:00.000Z"),
 *                         createdAt: new Date("2021-08-31T18:00:00.000Z")
 *                     }],
 *                 labels: ["simple-demo"],
 *                 actions: [{
 *                         operation: "submitAction",
 *                         mode: Flatfile.ActionMode.Foreground,
 *                         label: "Submit",
 *                         description: "Submit data to webhook.site",
 *                         primary: true
 *                     }],
 *                 settings: {
 *                     trackChanges: true
 *                 },
 *                 updatedAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 expiredAt: new Date("2021-01-01T00:00:00.000Z")
 *             }]
 *     }
 */
export interface ListWorkbooksResponse {
    data: Flatfile.Workbook[];
}
