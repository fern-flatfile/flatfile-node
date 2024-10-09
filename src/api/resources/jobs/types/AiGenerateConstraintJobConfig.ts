/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface AiGenerateConstraintJobConfig {
    spaceId: Flatfile.SpaceId;
    constraints: Flatfile.StoredConstraint[];
    /** A description of what the constraint to be generated should do */
    description?: string;
}
