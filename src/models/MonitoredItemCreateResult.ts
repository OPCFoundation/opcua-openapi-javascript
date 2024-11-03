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
import type { StatusCode } from './StatusCode';
import {
    StatusCodeFromJSON,
    StatusCodeFromJSONTyped,
    StatusCodeToJSON,
    StatusCodeToJSONTyped,
} from './StatusCode';

/**
 * 
 * @export
 * @interface MonitoredItemCreateResult
 */
export interface MonitoredItemCreateResult {
    /**
     * 
     * @type {StatusCode}
     * @memberof MonitoredItemCreateResult
     */
    StatusCode?: StatusCode;
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemCreateResult
     */
    MonitoredItemId?: number;
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemCreateResult
     */
    RevisedSamplingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemCreateResult
     */
    RevisedQueueSize?: number;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof MonitoredItemCreateResult
     */
    FilterResult?: ExtensionObject;
    /**
     * 
     * @type {string}
     * @memberof MonitoredItemCreateResult
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the MonitoredItemCreateResult interface.
 */
export function instanceOfMonitoredItemCreateResult(value: object): value is MonitoredItemCreateResult {
    return true;
}

export function MonitoredItemCreateResultFromJSON(json: any): MonitoredItemCreateResult {
    return MonitoredItemCreateResultFromJSONTyped(json, false);
}

export function MonitoredItemCreateResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonitoredItemCreateResult {
    if (json == null) {
        return json;
    }
    return {
        
        'StatusCode': json['StatusCode'] == null ? undefined : StatusCodeFromJSON(json['StatusCode']),
        'MonitoredItemId': json['MonitoredItemId'] == null ? undefined : json['MonitoredItemId'],
        'RevisedSamplingInterval': json['RevisedSamplingInterval'] == null ? undefined : json['RevisedSamplingInterval'],
        'RevisedQueueSize': json['RevisedQueueSize'] == null ? undefined : json['RevisedQueueSize'],
        'FilterResult': json['FilterResult'] == null ? undefined : ExtensionObjectFromJSON(json['FilterResult']),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function MonitoredItemCreateResultToJSON(json: any): MonitoredItemCreateResult {
      return MonitoredItemCreateResultToJSONTyped(json, false);
  }

  export function MonitoredItemCreateResultToJSONTyped(value?: MonitoredItemCreateResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StatusCode': StatusCodeToJSON(value['StatusCode']),
        'MonitoredItemId': value['MonitoredItemId'],
        'RevisedSamplingInterval': value['RevisedSamplingInterval'],
        'RevisedQueueSize': value['RevisedQueueSize'],
        'FilterResult': ExtensionObjectToJSON(value['FilterResult']),
        'UaTypeId': value['UaTypeId'],
    };
}

