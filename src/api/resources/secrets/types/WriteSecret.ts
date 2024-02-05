/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * The properties required to write to a secret. Value is the only mutable property. Name, environmentId, spaceId (optional) are used for finding the secret.
 *
 * @example
 *     {
 *         name: "My Secret",
 *         value: "Sup3r$ecret\\/alue!",
 *         environmentId: "us_env_YOUR_ID",
 *         spaceId: "us_sp_YOUR_ID"
 *     }
 */
export interface WriteSecret {
    /** The reference name for a secret. */
    name: Flatfile.SecretName;
    /** The secret value. This is hidden in the UI. */
    value: Flatfile.SecretValue;
    /** The Environment of the secret. */
    environmentId?: Flatfile.EnvironmentId;
    /** The Space of the secret. */
    spaceId?: Flatfile.SpaceId;
}
