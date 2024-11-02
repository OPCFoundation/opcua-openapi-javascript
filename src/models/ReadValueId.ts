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
/**
 * 
 * @export
 * @interface ReadValueId
 */
export interface ReadValueId {
    /**
     * 
     * @type {string}
     * @memberof ReadValueId
     */
    NodeId?: string;
    /**
     * 
     * @type {number}
     * @memberof ReadValueId
     */
    AttributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReadValueId
     */
    IndexRange?: string;
    /**
     * 
     * @type {object}
     * @memberof ReadValueId
     */
    DataEncoding?: object;
}

/**
 * Check if a given object implements the ReadValueId interface.
 */
export function instanceOfReadValueId(value: object): value is ReadValueId {
    return true;
}

export function ReadValueIdFromJSON(json: any): ReadValueId {
    return ReadValueIdFromJSONTyped(json, false);
}

export function ReadValueIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadValueId {
    if (json == null) {
        return json;
    }
    return {
        
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'AttributeId': json['AttributeId'] == null ? undefined : json['AttributeId'],
        'IndexRange': json['IndexRange'] == null ? undefined : json['IndexRange'],
        'DataEncoding': json['DataEncoding'] == null ? undefined : json['DataEncoding'],
    };
}

  export function ReadValueIdToJSON(json: any): ReadValueId {
      return ReadValueIdToJSONTyped(json, false);
  }

  export function ReadValueIdToJSONTyped(value?: ReadValueId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NodeId': value['NodeId'],
        'AttributeId': value['AttributeId'],
        'IndexRange': value['IndexRange'],
        'DataEncoding': value['DataEncoding'],
    };
}

