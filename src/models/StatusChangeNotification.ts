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
 * @interface StatusChangeNotification
 */
export interface StatusChangeNotification {
    /**
     * 
     * @type {number}
     * @memberof StatusChangeNotification
     */
    Status?: number;
    /**
     * 
     * @type {DiagnosticInfo}
     * @memberof StatusChangeNotification
     */
    DiagnosticInfo?: DiagnosticInfo;
}

/**
 * Check if a given object implements the StatusChangeNotification interface.
 */
export function instanceOfStatusChangeNotification(value: object): value is StatusChangeNotification {
    return true;
}

export function StatusChangeNotificationFromJSON(json: any): StatusChangeNotification {
    return StatusChangeNotificationFromJSONTyped(json, false);
}

export function StatusChangeNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusChangeNotification {
    if (json == null) {
        return json;
    }
    return {
        
        'Status': json['Status'] == null ? undefined : json['Status'],
        'DiagnosticInfo': json['DiagnosticInfo'] == null ? undefined : DiagnosticInfoFromJSON(json['DiagnosticInfo']),
    };
}

  export function StatusChangeNotificationToJSON(json: any): StatusChangeNotification {
      return StatusChangeNotificationToJSONTyped(json, false);
  }

  export function StatusChangeNotificationToJSONTyped(value?: StatusChangeNotification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Status': value['Status'],
        'DiagnosticInfo': DiagnosticInfoToJSON(value['DiagnosticInfo']),
    };
}

