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
import type { ViewDescription } from './ViewDescription';
import {
    ViewDescriptionFromJSON,
    ViewDescriptionFromJSONTyped,
    ViewDescriptionToJSON,
    ViewDescriptionToJSONTyped,
} from './ViewDescription';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';
import type { BrowseDescription } from './BrowseDescription';
import {
    BrowseDescriptionFromJSON,
    BrowseDescriptionFromJSONTyped,
    BrowseDescriptionToJSON,
    BrowseDescriptionToJSONTyped,
} from './BrowseDescription';

/**
 * 
 * @export
 * @interface BrowseRequest
 */
export interface BrowseRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof BrowseRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {ViewDescription}
     * @memberof BrowseRequest
     */
    View?: ViewDescription;
    /**
     * 
     * @type {number}
     * @memberof BrowseRequest
     */
    RequestedMaxReferencesPerNode?: number;
    /**
     * 
     * @type {Array<BrowseDescription>}
     * @memberof BrowseRequest
     */
    NodesToBrowse?: Array<BrowseDescription>;
    /**
     * 
     * @type {string}
     * @memberof BrowseRequest
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the BrowseRequest interface.
 */
export function instanceOfBrowseRequest(value: object): value is BrowseRequest {
    return true;
}

export function BrowseRequestFromJSON(json: any): BrowseRequest {
    return BrowseRequestFromJSONTyped(json, false);
}

export function BrowseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'View': json['View'] == null ? undefined : ViewDescriptionFromJSON(json['View']),
        'RequestedMaxReferencesPerNode': json['RequestedMaxReferencesPerNode'] == null ? undefined : json['RequestedMaxReferencesPerNode'],
        'NodesToBrowse': json['NodesToBrowse'] == null ? undefined : ((json['NodesToBrowse'] as Array<any>).map(BrowseDescriptionFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function BrowseRequestToJSON(json: any): BrowseRequest {
      return BrowseRequestToJSONTyped(json, false);
  }

  export function BrowseRequestToJSONTyped(value?: BrowseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'View': ViewDescriptionToJSON(value['View']),
        'RequestedMaxReferencesPerNode': value['RequestedMaxReferencesPerNode'],
        'NodesToBrowse': value['NodesToBrowse'] == null ? undefined : ((value['NodesToBrowse'] as Array<any>).map(BrowseDescriptionToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

