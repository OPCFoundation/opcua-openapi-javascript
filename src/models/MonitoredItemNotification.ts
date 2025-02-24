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
import type { DataValue } from './DataValue';
import {
    DataValueFromJSON,
    DataValueFromJSONTyped,
    DataValueToJSON,
    DataValueToJSONTyped,
} from './DataValue';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.25.2).
 * @export
 * @interface MonitoredItemNotification
 */
export interface MonitoredItemNotification {
    /**
     * 
     * @type {number}
     * @memberof MonitoredItemNotification
     */
    ClientHandle?: number;
    /**
     * 
     * @type {DataValue}
     * @memberof MonitoredItemNotification
     */
    Value?: DataValue;
}

/**
 * Check if a given object implements the MonitoredItemNotification interface.
 */
export function instanceOfMonitoredItemNotification(value: object): value is MonitoredItemNotification {
    return true;
}

export function MonitoredItemNotificationFromJSON(json: any): MonitoredItemNotification {
    return MonitoredItemNotificationFromJSONTyped(json, false);
}

export function MonitoredItemNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonitoredItemNotification {
    if (json == null) {
        return json;
    }
    return {
        
        'ClientHandle': json['ClientHandle'] == null ? undefined : json['ClientHandle'],
        'Value': json['Value'] == null ? undefined : DataValueFromJSON(json['Value']),
    };
}

  export function MonitoredItemNotificationToJSON(json: any): MonitoredItemNotification {
      return MonitoredItemNotificationToJSONTyped(json, false);
  }

  export function MonitoredItemNotificationToJSONTyped(value?: MonitoredItemNotification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ClientHandle': value['ClientHandle'],
        'Value': DataValueToJSON(value['Value']),
    };
}

