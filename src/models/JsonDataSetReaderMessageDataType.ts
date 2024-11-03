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
 * @interface JsonDataSetReaderMessageDataType
 */
export interface JsonDataSetReaderMessageDataType {
    /**
     * 
     * @type {number}
     * @memberof JsonDataSetReaderMessageDataType
     */
    NetworkMessageContentMask?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonDataSetReaderMessageDataType
     */
    DataSetMessageContentMask?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonDataSetReaderMessageDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the JsonDataSetReaderMessageDataType interface.
 */
export function instanceOfJsonDataSetReaderMessageDataType(value: object): value is JsonDataSetReaderMessageDataType {
    return true;
}

export function JsonDataSetReaderMessageDataTypeFromJSON(json: any): JsonDataSetReaderMessageDataType {
    return JsonDataSetReaderMessageDataTypeFromJSONTyped(json, false);
}

export function JsonDataSetReaderMessageDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonDataSetReaderMessageDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'NetworkMessageContentMask': json['NetworkMessageContentMask'] == null ? undefined : json['NetworkMessageContentMask'],
        'DataSetMessageContentMask': json['DataSetMessageContentMask'] == null ? undefined : json['DataSetMessageContentMask'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function JsonDataSetReaderMessageDataTypeToJSON(json: any): JsonDataSetReaderMessageDataType {
      return JsonDataSetReaderMessageDataTypeToJSONTyped(json, false);
  }

  export function JsonDataSetReaderMessageDataTypeToJSONTyped(value?: JsonDataSetReaderMessageDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NetworkMessageContentMask': value['NetworkMessageContentMask'],
        'DataSetMessageContentMask': value['DataSetMessageContentMask'],
        'UaTypeId': value['UaTypeId'],
    };
}

