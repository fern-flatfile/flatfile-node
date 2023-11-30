/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * A collection of one or more sheets
 *
 * @example
 *     {
 *         id: "us_wb_YOUR_ID",
 *         name: "My First Workbook",
 *         spaceId: "us_sp_YOUR_ID",
 *         environmentId: "us_env_YOUR_ID",
 *         sheets: [{
 *                 id: "us_sh_YOUR_ID",
 *                 workbookId: "us_wb_YOUR_ID",
 *                 name: "Contacts",
 *                 config: {
 *                     name: "Contacts",
 *                     slug: "contacts",
 *                     fields: [{
 *                             type: "string",
 *                             key: "firstName",
 *                             label: "First Name"
 *                         }, {
 *                             type: "string",
 *                             key: "lastName",
 *                             label: "Last Name"
 *                         }, {
 *                             type: "string",
 *                             key: "email",
 *                             label: "Email"
 *                         }],
 *                     mappingConfidenceThreshold: 0.5
 *                 },
 *                 countRecords: {
 *                     valid: 1000,
 *                     error: 0,
 *                     total: 1000
 *                 },
 *                 lockedBy: "Example0",
 *                 updatedAt: new Date("2021-08-31T18:00:00.000Z"),
 *                 createdAt: new Date("2021-08-31T18:00:00.000Z")
 *             }],
 *         labels: ["simple-demo"],
 *         actions: [{
 *                 operation: "submitAction",
 *                 mode: Flatfile.ActionMode.Foreground,
 *                 label: "Submit",
 *                 description: "Submit data to webhook.site",
 *                 primary: true
 *             }],
 *         settings: {
 *             trackChanges: true
 *         },
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z"),
 *         createdAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export interface Workbook {
    /** ID of the Workbook. */
    id: Flatfile.WorkbookId;
    /** Name of the Workbook. */
    name?: string;
    /** Associated Space ID of the Workbook. */
    spaceId: Flatfile.SpaceId;
    /** Associated Environment ID of the Workbook. */
    environmentId: Flatfile.EnvironmentId;
    /** A list of Sheets associated with the Workbook. */
    sheets?: Flatfile.Sheet[];
    /** A list of labels for the Workbook. */
    labels?: string[];
    /** A list of Actions associated with the Workbook. */
    actions?: Flatfile.Action[];
    /** The Workbook settings. */
    settings?: Flatfile.WorkbookConfigSettings;
    /** Metadata for the workbook */
    metadata?: any;
    namespace?: string;
    /** Date the workbook was last updated */
    updatedAt: Date;
    /** Date the workbook was created */
    createdAt: Date;
}
