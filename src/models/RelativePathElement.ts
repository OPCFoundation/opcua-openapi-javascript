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
 * @interface RelativePathElement
 */
export interface RelativePathElement {
    /**
     * 
     * @type {string}
     * @memberof RelativePathElement
     */
    ReferenceTypeId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RelativePathElement
     */
    IsInverse?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RelativePathElement
     */
    IncludeSubtypes?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RelativePathElement
     */
    TargetName?: object;
}

/**
 * Check if a given object implements the RelativePathElement interface.
 */
export function instanceOfRelativePathElement(value: object): value is RelativePathElement {
    return true;
}

export function RelativePathElementFromJSON(json: any): RelativePathElement {
    return RelativePathElementFromJSONTyped(json, false);
}

export function RelativePathElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelativePathElement {
    if (json == null) {
        return json;
    }
    return {
        
        'ReferenceTypeId': json['ReferenceTypeId'] == null ? undefined : json['ReferenceTypeId'],
        'IsInverse': json['IsInverse'] == null ? undefined : json['IsInverse'],
        'IncludeSubtypes': json['IncludeSubtypes'] == null ? undefined : json['IncludeSubtypes'],
        'TargetName': json['TargetName'] == null ? undefined : json['TargetName'],
    };
}

  export function RelativePathElementToJSON(json: any): RelativePathElement {
      return RelativePathElementToJSONTyped(json, false);
  }

  export function RelativePathElementToJSONTyped(value?: RelativePathElement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ReferenceTypeId': value['ReferenceTypeId'],
        'IsInverse': value['IsInverse'],
        'IncludeSubtypes': value['IncludeSubtypes'],
        'TargetName': value['TargetName'],
    };
}

