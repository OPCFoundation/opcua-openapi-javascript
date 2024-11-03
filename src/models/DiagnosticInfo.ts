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
 * @interface DiagnosticInfo
 */
export interface DiagnosticInfo {
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    SymbolicId?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    NamespaceUri?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    Locale?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    LocalizedText?: number;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticInfo
     */
    AdditionalInfo?: string;
    /**
     * 
     * @type {StatusCode}
     * @memberof DiagnosticInfo
     */
    InnerStatusCode?: StatusCode;
    /**
     * 
     * @type {DiagnosticInfo}
     * @memberof DiagnosticInfo
     */
    InnerDiagnosticInfo?: DiagnosticInfo;
}

/**
 * Check if a given object implements the DiagnosticInfo interface.
 */
export function instanceOfDiagnosticInfo(value: object): value is DiagnosticInfo {
    return true;
}

export function DiagnosticInfoFromJSON(json: any): DiagnosticInfo {
    return DiagnosticInfoFromJSONTyped(json, false);
}

export function DiagnosticInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'SymbolicId': json['SymbolicId'] == null ? undefined : json['SymbolicId'],
        'NamespaceUri': json['NamespaceUri'] == null ? undefined : json['NamespaceUri'],
        'Locale': json['Locale'] == null ? undefined : json['Locale'],
        'LocalizedText': json['LocalizedText'] == null ? undefined : json['LocalizedText'],
        'AdditionalInfo': json['AdditionalInfo'] == null ? undefined : json['AdditionalInfo'],
        'InnerStatusCode': json['InnerStatusCode'] == null ? undefined : StatusCodeFromJSON(json['InnerStatusCode']),
        'InnerDiagnosticInfo': json['InnerDiagnosticInfo'] == null ? undefined : DiagnosticInfoFromJSON(json['InnerDiagnosticInfo']),
    };
}

  export function DiagnosticInfoToJSON(json: any): DiagnosticInfo {
      return DiagnosticInfoToJSONTyped(json, false);
  }

  export function DiagnosticInfoToJSONTyped(value?: DiagnosticInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'SymbolicId': value['SymbolicId'],
        'NamespaceUri': value['NamespaceUri'],
        'Locale': value['Locale'],
        'LocalizedText': value['LocalizedText'],
        'AdditionalInfo': value['AdditionalInfo'],
        'InnerStatusCode': StatusCodeToJSON(value['InnerStatusCode']),
        'InnerDiagnosticInfo': DiagnosticInfoToJSON(value['InnerDiagnosticInfo']),
    };
}

