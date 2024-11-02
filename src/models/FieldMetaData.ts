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
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    KeyValuePairToJSONTyped,
} from './KeyValuePair';
import type { LocalizedText } from './LocalizedText';
import {
    LocalizedTextFromJSON,
    LocalizedTextFromJSONTyped,
    LocalizedTextToJSON,
    LocalizedTextToJSONTyped,
} from './LocalizedText';

/**
 * 
 * @export
 * @interface FieldMetaData
 */
export interface FieldMetaData {
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    Name?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof FieldMetaData
     */
    Description?: LocalizedText;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    FieldFlags?: number;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    BuiltInType?: number;
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    DataType?: string;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    ValueRank?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof FieldMetaData
     */
    ArrayDimensions?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    MaxStringLength?: number;
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    DataSetFieldId?: string;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof FieldMetaData
     */
    Properties?: Array<KeyValuePair>;
}

/**
 * Check if a given object implements the FieldMetaData interface.
 */
export function instanceOfFieldMetaData(value: object): value is FieldMetaData {
    return true;
}

export function FieldMetaDataFromJSON(json: any): FieldMetaData {
    return FieldMetaDataFromJSONTyped(json, false);
}

export function FieldMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldMetaData {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Description': json['Description'] == null ? undefined : LocalizedTextFromJSON(json['Description']),
        'FieldFlags': json['FieldFlags'] == null ? undefined : json['FieldFlags'],
        'BuiltInType': json['BuiltInType'] == null ? undefined : json['BuiltInType'],
        'DataType': json['DataType'] == null ? undefined : json['DataType'],
        'ValueRank': json['ValueRank'] == null ? undefined : json['ValueRank'],
        'ArrayDimensions': json['ArrayDimensions'] == null ? undefined : json['ArrayDimensions'],
        'MaxStringLength': json['MaxStringLength'] == null ? undefined : json['MaxStringLength'],
        'DataSetFieldId': json['DataSetFieldId'] == null ? undefined : json['DataSetFieldId'],
        'Properties': json['Properties'] == null ? undefined : ((json['Properties'] as Array<any>).map(KeyValuePairFromJSON)),
    };
}

  export function FieldMetaDataToJSON(json: any): FieldMetaData {
      return FieldMetaDataToJSONTyped(json, false);
  }

  export function FieldMetaDataToJSONTyped(value?: FieldMetaData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Description': LocalizedTextToJSON(value['Description']),
        'FieldFlags': value['FieldFlags'],
        'BuiltInType': value['BuiltInType'],
        'DataType': value['DataType'],
        'ValueRank': value['ValueRank'],
        'ArrayDimensions': value['ArrayDimensions'],
        'MaxStringLength': value['MaxStringLength'],
        'DataSetFieldId': value['DataSetFieldId'],
        'Properties': value['Properties'] == null ? undefined : ((value['Properties'] as Array<any>).map(KeyValuePairToJSON)),
    };
}

