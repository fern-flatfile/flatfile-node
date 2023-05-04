/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Any uploaded file of any type
 */
export interface File_ {
    id: Flatfile.FileId;
    /** Original filename */
    name: string;
    /** Extension of the file */
    ext: string;
    /** MIME Type of the file */
    mimetype: string;
    /** Text encoding of the file */
    encoding: string;
    /** Status of the file */
    status: Flatfile.ModelFileStatusEnum;
    /** Size of file in bytes */
    size: number;
    /** Number of bytes that have been uploaded so far (useful for progress tracking) */
    bytesReceived: number;
    spaceId: Flatfile.SpaceId;
    workbookId: Flatfile.WorkbookId;
    /** Date the file was created */
    createdAt: string;
    /** Date the file was last updated */
    updatedAt: string;
    sheetId?: Flatfile.SheetId;
}
