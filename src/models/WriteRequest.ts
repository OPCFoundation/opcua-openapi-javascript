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
import type { WriteValue } from './WriteValue';
import {
    WriteValueFromJSON,
    WriteValueFromJSONTyped,
    WriteValueToJSON,
    WriteValueToJSONTyped,
} from './WriteValue';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface WriteRequest
 */
export interface WriteRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof WriteRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<WriteValue>}
     * @memberof WriteRequest
     */
    NodesToWrite?: Array<WriteValue>;
    /**
     * 
     * @type {string}
     * @memberof WriteRequest
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the WriteRequest interface.
 */
export function instanceOfWriteRequest(value: object): value is WriteRequest {
    return true;
}

export function WriteRequestFromJSON(json: any): WriteRequest {
    return WriteRequestFromJSONTyped(json, false);
}

export function WriteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'NodesToWrite': json['NodesToWrite'] == null ? undefined : ((json['NodesToWrite'] as Array<any>).map(WriteValueFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function WriteRequestToJSON(json: any): WriteRequest {
      return WriteRequestToJSONTyped(json, false);
  }

  export function WriteRequestToJSONTyped(value?: WriteRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'NodesToWrite': value['NodesToWrite'] == null ? undefined : ((value['NodesToWrite'] as Array<any>).map(WriteValueToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

