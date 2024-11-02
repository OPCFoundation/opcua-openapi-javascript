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
 * @interface CloseSessionRequest
 */
export interface CloseSessionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof CloseSessionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {boolean}
     * @memberof CloseSessionRequest
     */
    DeleteSubscriptions?: boolean;
}

/**
 * Check if a given object implements the CloseSessionRequest interface.
 */
export function instanceOfCloseSessionRequest(value: object): value is CloseSessionRequest {
    return true;
}

export function CloseSessionRequestFromJSON(json: any): CloseSessionRequest {
    return CloseSessionRequestFromJSONTyped(json, false);
}

export function CloseSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloseSessionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'DeleteSubscriptions': json['DeleteSubscriptions'] == null ? undefined : json['DeleteSubscriptions'],
    };
}

  export function CloseSessionRequestToJSON(json: any): CloseSessionRequest {
      return CloseSessionRequestToJSONTyped(json, false);
  }

  export function CloseSessionRequestToJSONTyped(value?: CloseSessionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'DeleteSubscriptions': value['DeleteSubscriptions'],
    };
}

