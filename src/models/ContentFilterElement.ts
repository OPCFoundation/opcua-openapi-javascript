/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA Web API
 * Provides simple HTTPS based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 1.05.4
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
    ExtensionObjectToJSONTyped,
} from './ExtensionObject';

/**
 * 
 * @export
 * @interface ContentFilterElement
 */
export interface ContentFilterElement {
    /**
     * 
     * @type {number}
     * @memberof ContentFilterElement
     */
    FilterOperator?: number;
    /**
     * 
     * @type {Array<ExtensionObject>}
     * @memberof ContentFilterElement
     */
    FilterOperands?: Array<ExtensionObject>;
    /**
     * 
     * @type {string}
     * @memberof ContentFilterElement
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ContentFilterElement interface.
 */
export function instanceOfContentFilterElement(value: object): value is ContentFilterElement {
    return true;
}

export function ContentFilterElementFromJSON(json: any): ContentFilterElement {
    return ContentFilterElementFromJSONTyped(json, false);
}

export function ContentFilterElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilterElement {
    if (json == null) {
        return json;
    }
    return {
        
        'FilterOperator': json['FilterOperator'] == null ? undefined : json['FilterOperator'],
        'FilterOperands': json['FilterOperands'] == null ? undefined : ((json['FilterOperands'] as Array<any>).map(ExtensionObjectFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ContentFilterElementToJSON(json: any): ContentFilterElement {
      return ContentFilterElementToJSONTyped(json, false);
  }

  export function ContentFilterElementToJSONTyped(value?: ContentFilterElement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FilterOperator': value['FilterOperator'],
        'FilterOperands': value['FilterOperands'] == null ? undefined : ((value['FilterOperands'] as Array<any>).map(ExtensionObjectToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

