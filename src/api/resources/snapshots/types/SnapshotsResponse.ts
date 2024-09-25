/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_ss_YOUR_ID",
 *                 sheetId: "us_sh_YOUR_ID",
 *                 label: "My snapshot",
 *                 summary: {
 *                     createdSince: {
 *                         total: 0
 *                     },
 *                     updatedSince: {
 *                         total: 5,
 *                         byField: {
 *                             "lastName": 5
 *                         }
 *                     },
 *                     deletedSince: {
 *                         total: 5,
 *                         byField: {
 *                             "firstName": 1
 *                         }
 *                     },
 *                     schemaDiff: {
 *                         "firstName": Flatfile.SchemaDiffEnum.Added,
 *                         "lastName": Flatfile.SchemaDiffEnum.Removed,
 *                         "email": Flatfile.SchemaDiffEnum.Unchanged
 *                     },
 *                     config: {
 *                         name: "Contacts",
 *                         slug: "contacts",
 *                         fields: [{
 *                                 type: "string",
 *                                 key: "firstName",
 *                                 label: "First Name"
 *                             }, {
 *                                 type: "string",
 *                                 key: "lastName",
 *                                 label: "Last Name"
 *                             }, {
 *                                 type: "string",
 *                                 key: "email",
 *                                 label: "Email"
 *                             }],
 *                         mappingConfidenceThreshold: 0.5
 *                     }
 *                 },
 *                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 createdBy: "us_usr_YOUR_ID"
 *             }]
 *     }
 */
export interface SnapshotsResponse {
    data: Flatfile.Snapshot[];
}
