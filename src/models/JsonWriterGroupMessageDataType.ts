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
 * @interface JsonWriterGroupMessageDataType
 */
export interface JsonWriterGroupMessageDataType {
    /**
     * 
     * @type {number}
     * @memberof JsonWriterGroupMessageDataType
     */
    NetworkMessageContentMask?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonWriterGroupMessageDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the JsonWriterGroupMessageDataType interface.
 */
export function instanceOfJsonWriterGroupMessageDataType(value: object): value is JsonWriterGroupMessageDataType {
    return true;
}

export function JsonWriterGroupMessageDataTypeFromJSON(json: any): JsonWriterGroupMessageDataType {
    return JsonWriterGroupMessageDataTypeFromJSONTyped(json, false);
}

export function JsonWriterGroupMessageDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonWriterGroupMessageDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'NetworkMessageContentMask': json['NetworkMessageContentMask'] == null ? undefined : json['NetworkMessageContentMask'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function JsonWriterGroupMessageDataTypeToJSON(json: any): JsonWriterGroupMessageDataType {
      return JsonWriterGroupMessageDataTypeToJSONTyped(json, false);
  }

  export function JsonWriterGroupMessageDataTypeToJSONTyped(value?: JsonWriterGroupMessageDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NetworkMessageContentMask': value['NetworkMessageContentMask'],
        'UaTypeId': value['UaTypeId'],
    };
}

