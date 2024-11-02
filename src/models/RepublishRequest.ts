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
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface RepublishRequest
 */
export interface RepublishRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof RepublishRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof RepublishRequest
     */
    SubscriptionId?: number;
    /**
     * 
     * @type {number}
     * @memberof RepublishRequest
     */
    RetransmitSequenceNumber?: number;
}

/**
 * Check if a given object implements the RepublishRequest interface.
 */
export function instanceOfRepublishRequest(value: object): value is RepublishRequest {
    return true;
}

export function RepublishRequestFromJSON(json: any): RepublishRequest {
    return RepublishRequestFromJSONTyped(json, false);
}

export function RepublishRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepublishRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionId': json['SubscriptionId'] == null ? undefined : json['SubscriptionId'],
        'RetransmitSequenceNumber': json['RetransmitSequenceNumber'] == null ? undefined : json['RetransmitSequenceNumber'],
    };
}

  export function RepublishRequestToJSON(json: any): RepublishRequest {
      return RepublishRequestToJSONTyped(json, false);
  }

  export function RepublishRequestToJSONTyped(value?: RepublishRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'SubscriptionId': value['SubscriptionId'],
        'RetransmitSequenceNumber': value['RetransmitSequenceNumber'],
    };
}

