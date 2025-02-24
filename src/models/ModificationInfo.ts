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
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.6.5).
 * @export
 * @interface ModificationInfo
 */
export interface ModificationInfo {
    /**
     * 
     * @type {Date}
     * @memberof ModificationInfo
     */
    ModificationTime?: Date;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.7).
     * @type {number}
     * @memberof ModificationInfo
     */
    UpdateType?: number;
    /**
     * 
     * @type {string}
     * @memberof ModificationInfo
     */
    UserName?: string;
}

/**
 * Check if a given object implements the ModificationInfo interface.
 */
export function instanceOfModificationInfo(value: object): value is ModificationInfo {
    return true;
}

export function ModificationInfoFromJSON(json: any): ModificationInfo {
    return ModificationInfoFromJSONTyped(json, false);
}

export function ModificationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModificationInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'ModificationTime': json['ModificationTime'] == null ? undefined : (new Date(json['ModificationTime'])),
        'UpdateType': json['UpdateType'] == null ? undefined : json['UpdateType'],
        'UserName': json['UserName'] == null ? undefined : json['UserName'],
    };
}

  export function ModificationInfoToJSON(json: any): ModificationInfo {
      return ModificationInfoToJSONTyped(json, false);
  }

  export function ModificationInfoToJSONTyped(value?: ModificationInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ModificationTime': value['ModificationTime'] == null ? undefined : ((value['ModificationTime']).toISOString()),
        'UpdateType': value['UpdateType'],
        'UserName': value['UserName'],
    };
}

