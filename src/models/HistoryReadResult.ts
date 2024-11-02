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
 * @interface HistoryReadResult
 */
export interface HistoryReadResult {
    /**
     * 
     * @type {number}
     * @memberof HistoryReadResult
     */
    StatusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof HistoryReadResult
     */
    ContinuationPoint?: string;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof HistoryReadResult
     */
    HistoryData?: ExtensionObject;
}

/**
 * Check if a given object implements the HistoryReadResult interface.
 */
export function instanceOfHistoryReadResult(value: object): value is HistoryReadResult {
    return true;
}

export function HistoryReadResultFromJSON(json: any): HistoryReadResult {
    return HistoryReadResultFromJSONTyped(json, false);
}

export function HistoryReadResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryReadResult {
    if (json == null) {
        return json;
    }
    return {
        
        'StatusCode': json['StatusCode'] == null ? undefined : json['StatusCode'],
        'ContinuationPoint': json['ContinuationPoint'] == null ? undefined : json['ContinuationPoint'],
        'HistoryData': json['HistoryData'] == null ? undefined : ExtensionObjectFromJSON(json['HistoryData']),
    };
}

  export function HistoryReadResultToJSON(json: any): HistoryReadResult {
      return HistoryReadResultToJSONTyped(json, false);
  }

  export function HistoryReadResultToJSONTyped(value?: HistoryReadResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StatusCode': value['StatusCode'],
        'ContinuationPoint': value['ContinuationPoint'],
        'HistoryData': ExtensionObjectToJSON(value['HistoryData']),
    };
}

