/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: {
 *             job: {
 *                 id: "us_jb_YOUR_ID",
 *                 createdAt: new Date("2023-10-30T20:04:28.556Z"),
 *                 updatedAt: new Date("2023-10-30T20:04:32.075Z"),
 *                 startedAt: new Date("2023-10-30T20:04:29.453Z"),
 *                 finishedAt: new Date("2023-10-30T20:04:32.074Z"),
 *                 environmentId: "us_env_YOUR_ID",
 *                 type: Flatfile.JobType.Workbook,
 *                 operation: "submitAction",
 *                 source: "us_wb_YOUR_ID",
 *                 destination: "us_wb_YOUR_ID",
 *                 config: undefined,
 *                 trigger: Flatfile.Trigger.Immediate,
 *                 status: Flatfile.JobStatus.Complete,
 *                 progress: 100,
 *                 fileId: "us_fl_YOUR_ID",
 *                 mode: Flatfile.JobMode.Foreground,
 *                 input: {},
 *                 subject: {
 *                     type: "resource",
 *                     id: "us_wb_YOUR_ID"
 *                 },
 *                 outcome: {
 *                     "message": "Data was successfully submitted to Webhook.site. Go check it out at https://example.site/example."
 *                 },
 *                 info: "Starting job to submit action to webhook.site",
 *                 managed: true
 *             },
 *             plan: {
 *                 fieldMapping: [{
 *                         sourceField: {
 *                             type: "string",
 *                             key: "firstName"
 *                         },
 *                         destinationField: {
 *                             type: "string",
 *                             key: "firstName",
 *                             label: "First Name"
 *                         },
 *                         preview: ["John", "Suzy", "Joe"],
 *                         metadata: {
 *                             certainty: Flatfile.Certainty.Absolute,
 *                             confidence: 1,
 *                             source: "exact"
 *                         }
 *                     }, {
 *                         sourceField: {
 *                             type: "string",
 *                             key: "lastName"
 *                         },
 *                         destinationField: {
 *                             type: "string",
 *                             key: "lastName",
 *                             label: "Last Name"
 *                         },
 *                         preview: ["Smith", "Que", "Montana"],
 *                         metadata: {
 *                             certainty: Flatfile.Certainty.Absolute,
 *                             confidence: 1,
 *                             source: "exact"
 *                         }
 *                     }],
 *                 unmappedSourceFields: [],
 *                 unmappedDestinationFields: []
 *             }
 *         }
 *     }
 */
export interface JobPlanResponse {
    data: Flatfile.JobPlan;
}
