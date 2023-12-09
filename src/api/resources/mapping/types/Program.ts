/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface Program {
    /** Mapping rules */
    rules: Flatfile.MappingRuleOrConfig[];
    /** If this program was saved, this is the ID of the program */
    id?: string;
    /** If this program was saved, this token allows you to modify the program */
    accessToken?: string;
}
