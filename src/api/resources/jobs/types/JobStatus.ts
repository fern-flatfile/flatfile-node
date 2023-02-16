/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * the status of the job
 */
export type JobStatus = "planning" | "ready" | "executing" | "complete" | "failed";

export const JobStatus = {
    Planning: "planning",
    Ready: "ready",
    Executing: "executing",
    Complete: "complete",
    Failed: "failed",
} as const;
