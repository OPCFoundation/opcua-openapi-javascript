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
 * @interface EUInformation
 */
export interface EUInformation {
    /**
     * 
     * @type {string}
     * @memberof EUInformation
     */
    NamespaceUri?: string;
    /**
     * 
     * @type {number}
     * @memberof EUInformation
     */
    UnitId?: number;
    /**
     * 
     * @type {LocalizedText}
     * @memberof EUInformation
     */
    DisplayName?: LocalizedText;
    /**
     * 
     * @type {LocalizedText}
     * @memberof EUInformation
     */
    Description?: LocalizedText;
}

/**
 * Check if a given object implements the EUInformation interface.
 */
export function instanceOfEUInformation(value: object): value is EUInformation {
    return true;
}

export function EUInformationFromJSON(json: any): EUInformation {
    return EUInformationFromJSONTyped(json, false);
}

export function EUInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): EUInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'NamespaceUri': json['NamespaceUri'] == null ? undefined : json['NamespaceUri'],
        'UnitId': json['UnitId'] == null ? undefined : json['UnitId'],
        'DisplayName': json['DisplayName'] == null ? undefined : LocalizedTextFromJSON(json['DisplayName']),
        'Description': json['Description'] == null ? undefined : LocalizedTextFromJSON(json['Description']),
    };
}

  export function EUInformationToJSON(json: any): EUInformation {
      return EUInformationToJSONTyped(json, false);
  }

  export function EUInformationToJSONTyped(value?: EUInformation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'NamespaceUri': value['NamespaceUri'],
        'UnitId': value['UnitId'],
        'DisplayName': LocalizedTextToJSON(value['DisplayName']),
        'Description': LocalizedTextToJSON(value['Description']),
    };
}

