/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@fern-api/flatfile";

export interface Invite {
    guestId: Flatfile.GuestId;
    spaceId: Flatfile.SpaceId;
    /** Message to send with the invite */
    message: string;
}
