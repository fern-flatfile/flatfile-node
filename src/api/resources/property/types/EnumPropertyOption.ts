/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EnumPropertyOption {
    /** A visual label for this option */
    label?: string;
    /** A short description for this option */
    description?: string;
    /** An optional color to assign this option */
    color?: string;
    /** A reference pointer to a previously registered icon */
    icon?: string;
    /** An arbitrary JSON object to be associated with this option and made available to hooks */
    meta?: Record<string, any>;
    /** The value or ID of this option. This value will be sent in egress. The type is a string | integer | boolean. */
    value?: any;
    /** Alternative names to match this enum option to */
    alternativeNames?: string[];
    /** The order of this option in the list. SortBy must be set to `ordinal` to use this. */
    ordinal?: number;
}
