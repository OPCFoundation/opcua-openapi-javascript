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
 * @interface CreateSubscriptionRequest
 */
export interface CreateSubscriptionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof CreateSubscriptionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionRequest
     */
    RequestedPublishingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionRequest
     */
    RequestedLifetimeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionRequest
     */
    RequestedMaxKeepAliveCount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionRequest
     */
    MaxNotificationsPerPublish?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSubscriptionRequest
     */
    PublishingEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionRequest
     */
    Priority?: number;
}

/**
 * Check if a given object implements the CreateSubscriptionRequest interface.
 */
export function instanceOfCreateSubscriptionRequest(value: object): value is CreateSubscriptionRequest {
    return true;
}

export function CreateSubscriptionRequestFromJSON(json: any): CreateSubscriptionRequest {
    return CreateSubscriptionRequestFromJSONTyped(json, false);
}

export function CreateSubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'RequestedPublishingInterval': json['RequestedPublishingInterval'] == null ? undefined : json['RequestedPublishingInterval'],
        'RequestedLifetimeCount': json['RequestedLifetimeCount'] == null ? undefined : json['RequestedLifetimeCount'],
        'RequestedMaxKeepAliveCount': json['RequestedMaxKeepAliveCount'] == null ? undefined : json['RequestedMaxKeepAliveCount'],
        'MaxNotificationsPerPublish': json['MaxNotificationsPerPublish'] == null ? undefined : json['MaxNotificationsPerPublish'],
        'PublishingEnabled': json['PublishingEnabled'] == null ? undefined : json['PublishingEnabled'],
        'Priority': json['Priority'] == null ? undefined : json['Priority'],
    };
}

  export function CreateSubscriptionRequestToJSON(json: any): CreateSubscriptionRequest {
      return CreateSubscriptionRequestToJSONTyped(json, false);
  }

  export function CreateSubscriptionRequestToJSONTyped(value?: CreateSubscriptionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'RequestedPublishingInterval': value['RequestedPublishingInterval'],
        'RequestedLifetimeCount': value['RequestedLifetimeCount'],
        'RequestedMaxKeepAliveCount': value['RequestedMaxKeepAliveCount'],
        'MaxNotificationsPerPublish': value['MaxNotificationsPerPublish'],
        'PublishingEnabled': value['PublishingEnabled'],
        'Priority': value['Priority'],
    };
}

