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
 * @interface ReadRawModifiedDetails
 */
export interface ReadRawModifiedDetails {
    /**
     * 
     * @type {boolean}
     * @memberof ReadRawModifiedDetails
     */
    IsReadModified?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ReadRawModifiedDetails
     */
    StartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReadRawModifiedDetails
     */
    EndTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof ReadRawModifiedDetails
     */
    NumValuesPerNode?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReadRawModifiedDetails
     */
    ReturnBounds?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReadRawModifiedDetails
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the ReadRawModifiedDetails interface.
 */
export function instanceOfReadRawModifiedDetails(value: object): value is ReadRawModifiedDetails {
    return true;
}

export function ReadRawModifiedDetailsFromJSON(json: any): ReadRawModifiedDetails {
    return ReadRawModifiedDetailsFromJSONTyped(json, false);
}

export function ReadRawModifiedDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadRawModifiedDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'IsReadModified': json['IsReadModified'] == null ? undefined : json['IsReadModified'],
        'StartTime': json['StartTime'] == null ? undefined : (new Date(json['StartTime'])),
        'EndTime': json['EndTime'] == null ? undefined : (new Date(json['EndTime'])),
        'NumValuesPerNode': json['NumValuesPerNode'] == null ? undefined : json['NumValuesPerNode'],
        'ReturnBounds': json['ReturnBounds'] == null ? undefined : json['ReturnBounds'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function ReadRawModifiedDetailsToJSON(json: any): ReadRawModifiedDetails {
      return ReadRawModifiedDetailsToJSONTyped(json, false);
  }

  export function ReadRawModifiedDetailsToJSONTyped(value?: ReadRawModifiedDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'IsReadModified': value['IsReadModified'],
        'StartTime': value['StartTime'] == null ? undefined : ((value['StartTime']).toISOString()),
        'EndTime': value['EndTime'] == null ? undefined : ((value['EndTime']).toISOString()),
        'NumValuesPerNode': value['NumValuesPerNode'],
        'ReturnBounds': value['ReturnBounds'],
        'UaTypeId': value['UaTypeId'],
    };
}

