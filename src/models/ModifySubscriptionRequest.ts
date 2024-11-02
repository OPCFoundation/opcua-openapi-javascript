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
 * @interface ModifySubscriptionRequest
 */
export interface ModifySubscriptionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof ModifySubscriptionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    SubscriptionId?: number;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    RequestedPublishingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    RequestedLifetimeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    RequestedMaxKeepAliveCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    MaxNotificationsPerPublish?: number;
    /**
     * 
     * @type {number}
     * @memberof ModifySubscriptionRequest
     */
    Priority?: number;
}

/**
 * Check if a given object implements the ModifySubscriptionRequest interface.
 */
export function instanceOfModifySubscriptionRequest(value: object): value is ModifySubscriptionRequest {
    return true;
}

export function ModifySubscriptionRequestFromJSON(json: any): ModifySubscriptionRequest {
    return ModifySubscriptionRequestFromJSONTyped(json, false);
}

export function ModifySubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModifySubscriptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionId': json['SubscriptionId'] == null ? undefined : json['SubscriptionId'],
        'RequestedPublishingInterval': json['RequestedPublishingInterval'] == null ? undefined : json['RequestedPublishingInterval'],
        'RequestedLifetimeCount': json['RequestedLifetimeCount'] == null ? undefined : json['RequestedLifetimeCount'],
        'RequestedMaxKeepAliveCount': json['RequestedMaxKeepAliveCount'] == null ? undefined : json['RequestedMaxKeepAliveCount'],
        'MaxNotificationsPerPublish': json['MaxNotificationsPerPublish'] == null ? undefined : json['MaxNotificationsPerPublish'],
        'Priority': json['Priority'] == null ? undefined : json['Priority'],
    };
}

  export function ModifySubscriptionRequestToJSON(json: any): ModifySubscriptionRequest {
      return ModifySubscriptionRequestToJSONTyped(json, false);
  }

  export function ModifySubscriptionRequestToJSONTyped(value?: ModifySubscriptionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'SubscriptionId': value['SubscriptionId'],
        'RequestedPublishingInterval': value['RequestedPublishingInterval'],
        'RequestedLifetimeCount': value['RequestedLifetimeCount'],
        'RequestedMaxKeepAliveCount': value['RequestedMaxKeepAliveCount'],
        'MaxNotificationsPerPublish': value['MaxNotificationsPerPublish'],
        'Priority': value['Priority'],
    };
}

