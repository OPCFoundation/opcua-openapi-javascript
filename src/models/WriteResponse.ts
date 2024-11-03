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
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
    ResponseHeaderToJSONTyped,
} from './ResponseHeader';
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
    DiagnosticInfoToJSONTyped,
} from './DiagnosticInfo';
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
 * @interface WriteResponse
 */
export interface WriteResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof WriteResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof WriteResponse
     */
    Results?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof WriteResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
    /**
     * 
     * @type {string}
     * @memberof WriteResponse
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the WriteResponse interface.
 */
export function instanceOfWriteResponse(value: object): value is WriteResponse {
    return true;
}

export function WriteResponseFromJSON(json: any): WriteResponse {
    return WriteResponseFromJSONTyped(json, false);
}

export function WriteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(StatusCodeFromJSON)),
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function WriteResponseToJSON(json: any): WriteResponse {
      return WriteResponseToJSONTyped(json, false);
  }

  export function WriteResponseToJSONTyped(value?: WriteResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'Results': value['Results'] == null ? undefined : ((value['Results'] as Array<any>).map(StatusCodeToJSON)),
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

