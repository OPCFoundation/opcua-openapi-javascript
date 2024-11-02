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

/**
 * 
 * @export
 * @interface HistoryUpdateResult
 */
export interface HistoryUpdateResult {
    /**
     * 
     * @type {number}
     * @memberof HistoryUpdateResult
     */
    StatusCode?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof HistoryUpdateResult
     */
    OperationResults?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof HistoryUpdateResult
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the HistoryUpdateResult interface.
 */
export function instanceOfHistoryUpdateResult(value: object): value is HistoryUpdateResult {
    return true;
}

export function HistoryUpdateResultFromJSON(json: any): HistoryUpdateResult {
    return HistoryUpdateResultFromJSONTyped(json, false);
}

export function HistoryUpdateResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryUpdateResult {
    if (json == null) {
        return json;
    }
    return {
        
        'StatusCode': json['StatusCode'] == null ? undefined : json['StatusCode'],
        'OperationResults': json['OperationResults'] == null ? undefined : json['OperationResults'],
        'DiagnosticInfos': json['DiagnosticInfos'] == null ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

  export function HistoryUpdateResultToJSON(json: any): HistoryUpdateResult {
      return HistoryUpdateResultToJSONTyped(json, false);
  }

  export function HistoryUpdateResultToJSONTyped(value?: HistoryUpdateResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StatusCode': value['StatusCode'],
        'OperationResults': value['OperationResults'],
        'DiagnosticInfos': value['DiagnosticInfos'] == null ? undefined : ((value['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

