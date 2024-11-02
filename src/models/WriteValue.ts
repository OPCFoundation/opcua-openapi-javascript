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
 * 
 * @export
 * @interface WriteValue
 */
export interface WriteValue {
    /**
     * 
     * @type {string}
     * @memberof WriteValue
     */
    NodeId?: string;
    /**
     * 
     * @type {number}
     * @memberof WriteValue
     */
    AttributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof WriteValue
     */
    IndexRange?: string;
    /**
     * 
     * @type {DataValue}
     * @memberof WriteValue
     */
    Value?: DataValue;
}

/**
 * Check if a given object implements the WriteValue interface.
 */
export function instanceOfWriteValue(value: object): value is WriteValue {
    return true;
}

export function WriteValueFromJSON(json: any): WriteValue {
    return WriteValueFromJSONTyped(json, false);
}

export function WriteValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteValue {
    if (json == null) {
        return json;
    }
    return {
        
        'NodeId': json['NodeId'] == null ? undefined : json['NodeId'],
        'AttributeId': json['AttributeId'] == null ? undefined : json['AttributeId'],
        'IndexRange': json['IndexRange'] == null ? undefined : json['IndexRange'],
        'Value': json['Value'] == null ? undefined : DataValueFromJSON(json['Value']),
    };
}

  export function WriteValueToJSON(json: any): WriteValue {
      return WriteValueToJSONTyped(json, false);
  }

  export function WriteValueToJSONTyped(value?: WriteValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NodeId': value['NodeId'],
        'AttributeId': value['AttributeId'],
        'IndexRange': value['IndexRange'],
        'Value': DataValueToJSON(value['Value']),
    };
}

