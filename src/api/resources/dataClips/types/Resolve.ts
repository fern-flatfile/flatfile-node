/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Conflict resolutions for a record
 */
export interface Resolve {
    field?: string;
    type?: Flatfile.ResolveType;
    resolveTo?: Flatfile.ResolveTo;
    clipValueReference?: string;
    mainValueReference?: string;
    removedFromMainResolution?: Flatfile.RemovedFromMainResolution;
}
