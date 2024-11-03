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
import type { CallMethodRequest } from './CallMethodRequest';
import {
    CallMethodRequestFromJSON,
    CallMethodRequestFromJSONTyped,
    CallMethodRequestToJSON,
    CallMethodRequestToJSONTyped,
} from './CallMethodRequest';

/**
 * 
 * @export
 * @interface CallRequest
 */
export interface CallRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof CallRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<CallMethodRequest>}
     * @memberof CallRequest
     */
    MethodsToCall?: Array<CallMethodRequest>;
    /**
     * 
     * @type {string}
     * @memberof CallRequest
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the CallRequest interface.
 */
export function instanceOfCallRequest(value: object): value is CallRequest {
    return true;
}

export function CallRequestFromJSON(json: any): CallRequest {
    return CallRequestFromJSONTyped(json, false);
}

export function CallRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'MethodsToCall': json['MethodsToCall'] == null ? undefined : ((json['MethodsToCall'] as Array<any>).map(CallMethodRequestFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function CallRequestToJSON(json: any): CallRequest {
      return CallRequestToJSONTyped(json, false);
  }

  export function CallRequestToJSONTyped(value?: CallRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'MethodsToCall': value['MethodsToCall'] == null ? undefined : ((value['MethodsToCall'] as Array<any>).map(CallMethodRequestToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

