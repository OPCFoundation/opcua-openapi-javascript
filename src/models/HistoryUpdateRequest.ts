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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
    ExtensionObjectToJSONTyped,
} from './ExtensionObject';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
    RequestHeaderToJSONTyped,
} from './RequestHeader';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/5.11.5/#5.11.5.2).
 * @export
 * @interface HistoryUpdateRequest
 */
export interface HistoryUpdateRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof HistoryUpdateRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<ExtensionObject>}
     * @memberof HistoryUpdateRequest
     */
    HistoryUpdateDetails?: Array<ExtensionObject>;
}

/**
 * Check if a given object implements the HistoryUpdateRequest interface.
 */
export function instanceOfHistoryUpdateRequest(value: object): value is HistoryUpdateRequest {
    return true;
}

export function HistoryUpdateRequestFromJSON(json: any): HistoryUpdateRequest {
    return HistoryUpdateRequestFromJSONTyped(json, false);
}

export function HistoryUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'RequestHeader': json['RequestHeader'] == null ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'HistoryUpdateDetails': json['HistoryUpdateDetails'] == null ? undefined : ((json['HistoryUpdateDetails'] as Array<any>).map(ExtensionObjectFromJSON)),
    };
}

  export function HistoryUpdateRequestToJSON(json: any): HistoryUpdateRequest {
      return HistoryUpdateRequestToJSONTyped(json, false);
  }

  export function HistoryUpdateRequestToJSONTyped(value?: HistoryUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RequestHeader': RequestHeaderToJSON(value['RequestHeader']),
        'HistoryUpdateDetails': value['HistoryUpdateDetails'] == null ? undefined : ((value['HistoryUpdateDetails'] as Array<any>).map(ExtensionObjectToJSON)),
    };
}

