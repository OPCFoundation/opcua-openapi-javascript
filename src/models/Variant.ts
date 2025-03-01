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
 * [Link to specification](https://reference.opcfoundation.org/Core/Part6/v105/docs/5.4.2.17).
 * @export
 * @interface Variant
 */
export interface Variant {
    /**
     * 
     * @type {number}
     * @memberof Variant
     */
    UaType?: number;
    /**
     * 
     * @type {any}
     * @memberof Variant
     */
    Value?: any | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Variant
     */
    Dimensions?: Array<number>;
}

/**
 * Check if a given object implements the Variant interface.
 */
export function instanceOfVariant(value: object): value is Variant {
    return true;
}

export function VariantFromJSON(json: any): Variant {
    return VariantFromJSONTyped(json, false);
}

export function VariantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variant {
    if (json == null) {
        return json;
    }
    return {
        
        'UaType': json['UaType'] == null ? undefined : json['UaType'],
        'Value': json['Value'] == null ? undefined : json['Value'],
        'Dimensions': json['Dimensions'] == null ? undefined : json['Dimensions'],
    };
}

  export function VariantToJSON(json: any): Variant {
      return VariantToJSONTyped(json, false);
  }

  export function VariantToJSONTyped(value?: Variant | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'UaType': value['UaType'],
        'Value': value['Value'],
        'Dimensions': value['Dimensions'],
    };
}

