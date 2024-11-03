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

/**
 * 
 * @export
 * @interface RegisterNodesResponse
 */
export interface RegisterNodesResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof RegisterNodesResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<string>}
     * @memberof RegisterNodesResponse
     */
    RegisteredNodeIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RegisterNodesResponse
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the RegisterNodesResponse interface.
 */
export function instanceOfRegisterNodesResponse(value: object): value is RegisterNodesResponse {
    return true;
}

export function RegisterNodesResponseFromJSON(json: any): RegisterNodesResponse {
    return RegisterNodesResponseFromJSONTyped(json, false);
}

export function RegisterNodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterNodesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ResponseHeader': json['ResponseHeader'] == null ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'RegisteredNodeIds': json['RegisteredNodeIds'] == null ? undefined : json['RegisteredNodeIds'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function RegisterNodesResponseToJSON(json: any): RegisterNodesResponse {
      return RegisterNodesResponseToJSONTyped(json, false);
  }

  export function RegisterNodesResponseToJSONTyped(value?: RegisterNodesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value['ResponseHeader']),
        'RegisteredNodeIds': value['RegisteredNodeIds'],
        'UaTypeId': value['UaTypeId'],
    };
}

