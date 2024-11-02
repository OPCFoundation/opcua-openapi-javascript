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
 * @interface ApplicationDescription
 */
export interface ApplicationDescription {
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    ApplicationUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    ProductUri?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof ApplicationDescription
     */
    ApplicationName?: LocalizedText;
    /**
     * 
     * @type {number}
     * @memberof ApplicationDescription
     */
    ApplicationType?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    GatewayServerUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    DiscoveryProfileUri?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationDescription
     */
    DiscoveryUrls?: Array<string>;
}

/**
 * Check if a given object implements the ApplicationDescription interface.
 */
export function instanceOfApplicationDescription(value: object): value is ApplicationDescription {
    return true;
}

export function ApplicationDescriptionFromJSON(json: any): ApplicationDescription {
    return ApplicationDescriptionFromJSONTyped(json, false);
}

export function ApplicationDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'ApplicationUri': json['ApplicationUri'] == null ? undefined : json['ApplicationUri'],
        'ProductUri': json['ProductUri'] == null ? undefined : json['ProductUri'],
        'ApplicationName': json['ApplicationName'] == null ? undefined : LocalizedTextFromJSON(json['ApplicationName']),
        'ApplicationType': json['ApplicationType'] == null ? undefined : json['ApplicationType'],
        'GatewayServerUri': json['GatewayServerUri'] == null ? undefined : json['GatewayServerUri'],
        'DiscoveryProfileUri': json['DiscoveryProfileUri'] == null ? undefined : json['DiscoveryProfileUri'],
        'DiscoveryUrls': json['DiscoveryUrls'] == null ? undefined : json['DiscoveryUrls'],
    };
}

  export function ApplicationDescriptionToJSON(json: any): ApplicationDescription {
      return ApplicationDescriptionToJSONTyped(json, false);
  }

  export function ApplicationDescriptionToJSONTyped(value?: ApplicationDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ApplicationUri': value['ApplicationUri'],
        'ProductUri': value['ProductUri'],
        'ApplicationName': LocalizedTextToJSON(value['ApplicationName']),
        'ApplicationType': value['ApplicationType'],
        'GatewayServerUri': value['GatewayServerUri'],
        'DiscoveryProfileUri': value['DiscoveryProfileUri'],
        'DiscoveryUrls': value['DiscoveryUrls'],
    };
}

