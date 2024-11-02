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
import type { ContentFilterElement } from './ContentFilterElement';
import {
    ContentFilterElementFromJSON,
    ContentFilterElementFromJSONTyped,
    ContentFilterElementToJSON,
    ContentFilterElementToJSONTyped,
} from './ContentFilterElement';

/**
 * 
 * @export
 * @interface ContentFilter
 */
export interface ContentFilter {
    /**
     * 
     * @type {Array<ContentFilterElement>}
     * @memberof ContentFilter
     */
    Elements?: Array<ContentFilterElement>;
}

/**
 * Check if a given object implements the ContentFilter interface.
 */
export function instanceOfContentFilter(value: object): value is ContentFilter {
    return true;
}

export function ContentFilterFromJSON(json: any): ContentFilter {
    return ContentFilterFromJSONTyped(json, false);
}

export function ContentFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'Elements': json['Elements'] == null ? undefined : ((json['Elements'] as Array<any>).map(ContentFilterElementFromJSON)),
    };
}

  export function ContentFilterToJSON(json: any): ContentFilter {
      return ContentFilterToJSONTyped(json, false);
  }

  export function ContentFilterToJSONTyped(value?: ContentFilter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Elements': value['Elements'] == null ? undefined : ((value['Elements'] as Array<any>).map(ContentFilterElementToJSON)),
    };
}

