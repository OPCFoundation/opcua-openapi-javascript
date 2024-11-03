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
 * @interface BrokerConnectionTransportDataType
 */
export interface BrokerConnectionTransportDataType {
    /**
     * 
     * @type {string}
     * @memberof BrokerConnectionTransportDataType
     */
    ResourceUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerConnectionTransportDataType
     */
    AuthenticationProfileUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BrokerConnectionTransportDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the BrokerConnectionTransportDataType interface.
 */
export function instanceOfBrokerConnectionTransportDataType(value: object): value is BrokerConnectionTransportDataType {
    return true;
}

export function BrokerConnectionTransportDataTypeFromJSON(json: any): BrokerConnectionTransportDataType {
    return BrokerConnectionTransportDataTypeFromJSONTyped(json, false);
}

export function BrokerConnectionTransportDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrokerConnectionTransportDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'ResourceUri': json['ResourceUri'] == null ? undefined : json['ResourceUri'],
        'AuthenticationProfileUri': json['AuthenticationProfileUri'] == null ? undefined : json['AuthenticationProfileUri'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function BrokerConnectionTransportDataTypeToJSON(json: any): BrokerConnectionTransportDataType {
      return BrokerConnectionTransportDataTypeToJSONTyped(json, false);
  }

  export function BrokerConnectionTransportDataTypeToJSONTyped(value?: BrokerConnectionTransportDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ResourceUri': value['ResourceUri'],
        'AuthenticationProfileUri': value['AuthenticationProfileUri'],
        'UaTypeId': value['UaTypeId'],
    };
}

