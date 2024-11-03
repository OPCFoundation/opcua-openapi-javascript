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
 * @interface ContentFilterElementResult
 */
export interface ContentFilterElementResult {
    /**
     * 
     * @type {StatusCode}
     * @memberof ContentFilterElementResult
     */
    StatusCode?: StatusCode;
    /**
     * 
     * @type {Array<StatusCode>}
     * @memberof ContentFilterElementResult
     */
    OperandStatusCodes?: Array<StatusCode>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof ContentFilterElementResult
     */
    OperandDiagnosticInfos?: Array<DiagnosticInfo>;
    /**
     * 
     * @type {string}
     * @memberof ContentFilterElementResult
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ContentFilterElementResult interface.
 */
export function instanceOfContentFilterElementResult(value: object): value is ContentFilterElementResult {
    return true;
}

export function ContentFilterElementResultFromJSON(json: any): ContentFilterElementResult {
    return ContentFilterElementResultFromJSONTyped(json, false);
}

export function ContentFilterElementResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilterElementResult {
    if (json == null) {
        return json;
    }
    return {
        
        'StatusCode': json['StatusCode'] == null ? undefined : StatusCodeFromJSON(json['StatusCode']),
        'OperandStatusCodes': json['OperandStatusCodes'] == null ? undefined : ((json['OperandStatusCodes'] as Array<any>).map(StatusCodeFromJSON)),
        'OperandDiagnosticInfos': json['OperandDiagnosticInfos'] == null ? undefined : ((json['OperandDiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ContentFilterElementResultToJSON(json: any): ContentFilterElementResult {
      return ContentFilterElementResultToJSONTyped(json, false);
  }

  export function ContentFilterElementResultToJSONTyped(value?: ContentFilterElementResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StatusCode': StatusCodeToJSON(value['StatusCode']),
        'OperandStatusCodes': value['OperandStatusCodes'] == null ? undefined : ((value['OperandStatusCodes'] as Array<any>).map(StatusCodeToJSON)),
        'OperandDiagnosticInfos': value['OperandDiagnosticInfos'] == null ? undefined : ((value['OperandDiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

