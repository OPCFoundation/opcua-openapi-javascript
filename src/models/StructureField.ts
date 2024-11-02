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
 * @interface StructureField
 */
export interface StructureField {
    /**
     * 
     * @type {string}
     * @memberof StructureField
     */
    Name?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof StructureField
     */
    Description?: LocalizedText;
    /**
     * 
     * @type {string}
     * @memberof StructureField
     */
    DataType?: string;
    /**
     * 
     * @type {number}
     * @memberof StructureField
     */
    ValueRank?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof StructureField
     */
    ArrayDimensions?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof StructureField
     */
    MaxStringLength?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StructureField
     */
    IsOptional?: boolean;
}

/**
 * Check if a given object implements the StructureField interface.
 */
export function instanceOfStructureField(value: object): value is StructureField {
    return true;
}

export function StructureFieldFromJSON(json: any): StructureField {
    return StructureFieldFromJSONTyped(json, false);
}

export function StructureFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructureField {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Description': json['Description'] == null ? undefined : LocalizedTextFromJSON(json['Description']),
        'DataType': json['DataType'] == null ? undefined : json['DataType'],
        'ValueRank': json['ValueRank'] == null ? undefined : json['ValueRank'],
        'ArrayDimensions': json['ArrayDimensions'] == null ? undefined : json['ArrayDimensions'],
        'MaxStringLength': json['MaxStringLength'] == null ? undefined : json['MaxStringLength'],
        'IsOptional': json['IsOptional'] == null ? undefined : json['IsOptional'],
    };
}

  export function StructureFieldToJSON(json: any): StructureField {
      return StructureFieldToJSONTyped(json, false);
  }

  export function StructureFieldToJSONTyped(value?: StructureField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Description': LocalizedTextToJSON(value['Description']),
        'DataType': value['DataType'],
        'ValueRank': value['ValueRank'],
        'ArrayDimensions': value['ArrayDimensions'],
        'MaxStringLength': value['MaxStringLength'],
        'IsOptional': value['IsOptional'],
    };
}

