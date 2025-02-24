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
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    KeyValuePairToJSONTyped,
} from './KeyValuePair';
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
    EndpointDescriptionToJSONTyped,
} from './EndpointDescription';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part14/6.2.5/#6.2.5.7).
 * @export
 * @interface PubSubGroupDataType
 */
export interface PubSubGroupDataType {
    /**
     * 
     * @type {string}
     * @memberof PubSubGroupDataType
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PubSubGroupDataType
     */
    Enabled?: boolean;
    /**
     * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part5/12.3.10).
     * @type {number}
     * @memberof PubSubGroupDataType
     */
    SecurityMode?: number;
    /**
     * 
     * @type {string}
     * @memberof PubSubGroupDataType
     */
    SecurityGroupId?: string;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof PubSubGroupDataType
     */
    SecurityKeyServices?: Array<EndpointDescription>;
    /**
     * 
     * @type {number}
     * @memberof PubSubGroupDataType
     */
    MaxNetworkMessageSize?: number;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof PubSubGroupDataType
     */
    GroupProperties?: Array<KeyValuePair>;
}

/**
 * Check if a given object implements the PubSubGroupDataType interface.
 */
export function instanceOfPubSubGroupDataType(value: object): value is PubSubGroupDataType {
    return true;
}

export function PubSubGroupDataTypeFromJSON(json: any): PubSubGroupDataType {
    return PubSubGroupDataTypeFromJSONTyped(json, false);
}

export function PubSubGroupDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PubSubGroupDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Enabled': json['Enabled'] == null ? undefined : json['Enabled'],
        'SecurityMode': json['SecurityMode'] == null ? undefined : json['SecurityMode'],
        'SecurityGroupId': json['SecurityGroupId'] == null ? undefined : json['SecurityGroupId'],
        'SecurityKeyServices': json['SecurityKeyServices'] == null ? undefined : ((json['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionFromJSON)),
        'MaxNetworkMessageSize': json['MaxNetworkMessageSize'] == null ? undefined : json['MaxNetworkMessageSize'],
        'GroupProperties': json['GroupProperties'] == null ? undefined : ((json['GroupProperties'] as Array<any>).map(KeyValuePairFromJSON)),
    };
}

  export function PubSubGroupDataTypeToJSON(json: any): PubSubGroupDataType {
      return PubSubGroupDataTypeToJSONTyped(json, false);
  }

  export function PubSubGroupDataTypeToJSONTyped(value?: PubSubGroupDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['Name'],
        'Enabled': value['Enabled'],
        'SecurityMode': value['SecurityMode'],
        'SecurityGroupId': value['SecurityGroupId'],
        'SecurityKeyServices': value['SecurityKeyServices'] == null ? undefined : ((value['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionToJSON)),
        'MaxNetworkMessageSize': value['MaxNetworkMessageSize'],
        'GroupProperties': value['GroupProperties'] == null ? undefined : ((value['GroupProperties'] as Array<any>).map(KeyValuePairToJSON)),
    };
}

