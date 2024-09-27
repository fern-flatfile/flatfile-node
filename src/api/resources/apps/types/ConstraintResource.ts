/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface ConstraintResource {
    id: Flatfile.ConstraintId;
    appId: Flatfile.AppId;
    description?: string;
    function?: string;
    options?: any;
    label?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
