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
import type { ReadValueId } from './ReadValueId';
import {
    ReadValueIdFromJSON,
    ReadValueIdFromJSONTyped,
    ReadValueIdToJSON,
    ReadValueIdToJSONTyped,
} from './ReadValueId';
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
 * @interface ReadRequest
 */
export interface ReadRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof ReadRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof ReadRequest
     */
    MaxAge?: number;
    /**
     * 
     * @type {number}
     * @memberof ReadRequest
     */
    TimestampsToReturn?: number;
    /**
     * 
     * @type {Array<ReadValueId>}
     * @memberof ReadRequest
     */
    NodesToRead?: Array<ReadValueId>;
    /**
     * 
     * @type {string}
     * @memberof ReadRequest
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ReadRequest interface.
 */
export function instanceOfReadRequest(value: object): value is ReadRequest {
    return true;
}

export function ReadRequestFromJSON(json: any): ReadRequest {
    return ReadRequestFromJSONTyped(json, false);
}

export function ReadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'MaxAge': json['MaxAge'] == null ? undefined : json['MaxAge'],
        'TimestampsToReturn': json['TimestampsToReturn'] == null ? undefined : json['TimestampsToReturn'],
        'NodesToRead': json['NodesToRead'] == null ? undefined : ((json['NodesToRead'] as Array<any>).map(ReadValueIdFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ReadRequestToJSON(json: any): ReadRequest {
      return ReadRequestToJSONTyped(json, false);
  }

  export function ReadRequestToJSONTyped(value?: ReadRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'MaxAge': value['MaxAge'],
        'TimestampsToReturn': value['TimestampsToReturn'],
        'NodesToRead': value['NodesToRead'] == null ? undefined : ((value['NodesToRead'] as Array<any>).map(ReadValueIdToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

