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
 * @interface RequestHeader
 */
export interface RequestHeader {
    /**
     * 
     * @type {string}
     * @memberof RequestHeader
     */
    AuthenticationToken?: string;
    /**
     * 
     * @type {Date}
     * @memberof RequestHeader
     */
    Timestamp?: Date;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    RequestHandle?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    ReturnDiagnostics?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestHeader
     */
    AuditEntryId?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    TimeoutHint?: number;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof RequestHeader
     */
    AdditionalHeader?: ExtensionObject;
    /**
     * 
     * @type {string}
     * @memberof RequestHeader
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the RequestHeader interface.
 */
export function instanceOfRequestHeader(value: object): value is RequestHeader {
    return true;
}

export function RequestHeaderFromJSON(json: any): RequestHeader {
    return RequestHeaderFromJSONTyped(json, false);
}

export function RequestHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestHeader {
    if (json == null) {
        return json;
    }
    return {
        
        'AuthenticationToken': json['AuthenticationToken'] == null ? undefined : json['AuthenticationToken'],
        'Timestamp': json['Timestamp'] == null ? undefined : (new Date(json['Timestamp'])),
        'RequestHandle': json['RequestHandle'] == null ? undefined : json['RequestHandle'],
        'ReturnDiagnostics': json['ReturnDiagnostics'] == null ? undefined : json['ReturnDiagnostics'],
        'AuditEntryId': json['AuditEntryId'] == null ? undefined : json['AuditEntryId'],
        'TimeoutHint': json['TimeoutHint'] == null ? undefined : json['TimeoutHint'],
        'AdditionalHeader': json['AdditionalHeader'] == null ? undefined : ExtensionObjectFromJSON(json['AdditionalHeader']),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function RequestHeaderToJSON(json: any): RequestHeader {
      return RequestHeaderToJSONTyped(json, false);
  }

  export function RequestHeaderToJSONTyped(value?: RequestHeader | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AuthenticationToken': value['AuthenticationToken'],
        'Timestamp': value['Timestamp'] == null ? undefined : ((value['Timestamp']).toISOString()),
        'RequestHandle': value['RequestHandle'],
        'ReturnDiagnostics': value['ReturnDiagnostics'],
        'AuditEntryId': value['AuditEntryId'],
        'TimeoutHint': value['TimeoutHint'],
        'AdditionalHeader': ExtensionObjectToJSON(value['AdditionalHeader']),
        'UaTypeId': value['UaTypeId'],
    };
}

