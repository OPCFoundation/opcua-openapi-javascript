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
 * @interface ConfigurationVersionDataType
 */
export interface ConfigurationVersionDataType {
    /**
     * 
     * @type {number}
     * @memberof ConfigurationVersionDataType
     */
    MajorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationVersionDataType
     */
    MinorVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationVersionDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ConfigurationVersionDataType interface.
 */
export function instanceOfConfigurationVersionDataType(value: object): value is ConfigurationVersionDataType {
    return true;
}

export function ConfigurationVersionDataTypeFromJSON(json: any): ConfigurationVersionDataType {
    return ConfigurationVersionDataTypeFromJSONTyped(json, false);
}

export function ConfigurationVersionDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVersionDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'MajorVersion': json['MajorVersion'] == null ? undefined : json['MajorVersion'],
        'MinorVersion': json['MinorVersion'] == null ? undefined : json['MinorVersion'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ConfigurationVersionDataTypeToJSON(json: any): ConfigurationVersionDataType {
      return ConfigurationVersionDataTypeToJSONTyped(json, false);
  }

  export function ConfigurationVersionDataTypeToJSONTyped(value?: ConfigurationVersionDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'MajorVersion': value['MajorVersion'],
        'MinorVersion': value['MinorVersion'],
        'UaTypeId': value['UaTypeId'],
    };
}

