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
/**
 * 
 * @export
 * @interface NetworkAddressDataType
 */
export interface NetworkAddressDataType {
    /**
     * 
     * @type {string}
     * @memberof NetworkAddressDataType
     */
    NetworkInterface?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkAddressDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the NetworkAddressDataType interface.
 */
export function instanceOfNetworkAddressDataType(value: object): value is NetworkAddressDataType {
    return true;
}

export function NetworkAddressDataTypeFromJSON(json: any): NetworkAddressDataType {
    return NetworkAddressDataTypeFromJSONTyped(json, false);
}

export function NetworkAddressDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkAddressDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'NetworkInterface': json['NetworkInterface'] == null ? undefined : json['NetworkInterface'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function NetworkAddressDataTypeToJSON(json: any): NetworkAddressDataType {
      return NetworkAddressDataTypeToJSONTyped(json, false);
  }

  export function NetworkAddressDataTypeToJSONTyped(value?: NetworkAddressDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NetworkInterface': value['NetworkInterface'],
        'UaTypeId': value['UaTypeId'],
    };
}

