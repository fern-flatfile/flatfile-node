/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Properties used to create a new Workbook
 */
export interface CreateWorkbookConfig {
    name: string;
    labels?: string[];
    spaceId?: Flatfile.SpaceId;
    environmentId?: Flatfile.EnvironmentId;
    namespace?: string;
    sheets?: Flatfile.SheetConfig[];
    actions?: Flatfile.Action[];
}
