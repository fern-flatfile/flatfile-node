/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface Snapshot {
    id: Flatfile.SnapshotId;
    sheetId: Flatfile.SheetId;
    label?: string;
    createdAt: Date;
}
