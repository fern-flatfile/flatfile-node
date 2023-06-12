/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * The context of the event
 */
export interface Context {
    actionName?: Flatfile.ActionName;
    accountId: Flatfile.AccountId;
    environmentId: Flatfile.EnvironmentId;
    spaceId?: Flatfile.SpaceId;
    workbookId?: Flatfile.WorkbookId;
    sheetId?: Flatfile.SheetId;
    sheetSlug?: Flatfile.SheetSlug;
    versionId?: Flatfile.VersionId;
    jobId?: Flatfile.JobId;
    fileId?: Flatfile.FileId;
    documentId?: Flatfile.DocumentId;
    precedingEventId?: Flatfile.EventId;
    /** Can be a UserId, GuestId, or AgentId */
    actorId?: string;
}
