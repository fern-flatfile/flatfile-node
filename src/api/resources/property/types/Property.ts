/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * @example
 *     {
 *         type: "string",
 *         key: "code",
 *         label: "Product Code",
 *         description: "Unique identifier defining an individual product.",
 *         constraints: [{
 *                 type: "unique",
 *                 config: {
 *                     caseSensitive: false
 *                 }
 *             }],
 *         config: {
 *             size: Flatfile.StringConfigOptions.Tiny
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "number",
 *         key: "price",
 *         config: {
 *             decimalPlaces: 2
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "boolean",
 *         key: "editable",
 *         config: {
 *             allowIndeterminate: true
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "date"
 *     }
 *
 * @example
 *     {
 *         type: "enum",
 *         key: "category",
 *         label: "Product Category",
 *         isArray: false,
 *         multi: true,
 *         config: {
 *             allowCustom: false,
 *             options: [{
 *                     value: 9,
 *                     label: "Kitchenware",
 *                     icon: "pots-and-pans",
 *                     color: "#f00000",
 *                     meta: {
 *                         "product_code_prefix": "KI-"
 *                     }
 *                 }, {
 *                     value: 9,
 *                     label: "Clothing",
 *                     meta: {
 *                         "product_code_prefix": "CL-"
 *                     }
 *                 }]
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "reference",
 *         key: "user reference",
 *         config: {
 *             ref: "/sheet/users/3",
 *             relationship: Flatfile.ReferencePropertyRelationship.HasMany,
 *             key: "id"
 *         }
 *     }
 */
export type Property =
    | Flatfile.Property.String
    | Flatfile.Property.Number
    | Flatfile.Property.Boolean
    | Flatfile.Property.Date_
    | Flatfile.Property.Enum
    | Flatfile.Property.Reference;

export declare namespace Property {
    interface String extends Flatfile.StringProperty {
        type: "string";
    }

    interface Number extends Flatfile.NumberProperty {
        type: "number";
    }

    interface Boolean extends Flatfile.BooleanProperty {
        type: "boolean";
    }

    interface Date_ extends Flatfile.DateProperty {
        type: "date";
    }

    interface Enum extends Flatfile.EnumProperty {
        type: "enum";
    }

    interface Reference extends Flatfile.ReferenceProperty {
        type: "reference";
    }
}
