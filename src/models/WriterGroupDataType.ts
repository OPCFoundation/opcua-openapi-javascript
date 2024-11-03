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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
    ExtensionObjectToJSONTyped,
} from './ExtensionObject';
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
    EndpointDescriptionToJSONTyped,
} from './EndpointDescription';
import type { DataSetWriterDataType } from './DataSetWriterDataType';
import {
    DataSetWriterDataTypeFromJSON,
    DataSetWriterDataTypeFromJSONTyped,
    DataSetWriterDataTypeToJSON,
    DataSetWriterDataTypeToJSONTyped,
} from './DataSetWriterDataType';

/**
 * 
 * @export
 * @interface WriterGroupDataType
 */
export interface WriterGroupDataType {
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    WriterGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    PublishingInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    KeepAliveTime?: number;
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    Priority?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof WriterGroupDataType
     */
    LocaleIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WriterGroupDataType
     */
    HeaderLayoutUri?: string;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof WriterGroupDataType
     */
    TransportSettings?: ExtensionObject;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof WriterGroupDataType
     */
    MessageSettings?: ExtensionObject;
    /**
     * 
     * @type {Array<DataSetWriterDataType>}
     * @memberof WriterGroupDataType
     */
    DataSetWriters?: Array<DataSetWriterDataType>;
    /**
     * 
     * @type {string}
     * @memberof WriterGroupDataType
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WriterGroupDataType
     */
    Enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    SecurityMode?: number;
    /**
     * 
     * @type {string}
     * @memberof WriterGroupDataType
     */
    SecurityGroupId?: string;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof WriterGroupDataType
     */
    SecurityKeyServices?: Array<EndpointDescription>;
    /**
     * 
     * @type {number}
     * @memberof WriterGroupDataType
     */
    MaxNetworkMessageSize?: number;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof WriterGroupDataType
     */
    GroupProperties?: Array<KeyValuePair>;
    /**
     * 
     * @type {string}
     * @memberof WriterGroupDataType
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the WriterGroupDataType interface.
 */
export function instanceOfWriterGroupDataType(value: object): value is WriterGroupDataType {
    return true;
}

export function WriterGroupDataTypeFromJSON(json: any): WriterGroupDataType {
    return WriterGroupDataTypeFromJSONTyped(json, false);
}

export function WriterGroupDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriterGroupDataType {
    if (json == null) {
        return json;
    }
    return {
        
        'WriterGroupId': json['WriterGroupId'] == null ? undefined : json['WriterGroupId'],
        'PublishingInterval': json['PublishingInterval'] == null ? undefined : json['PublishingInterval'],
        'KeepAliveTime': json['KeepAliveTime'] == null ? undefined : json['KeepAliveTime'],
        'Priority': json['Priority'] == null ? undefined : json['Priority'],
        'LocaleIds': json['LocaleIds'] == null ? undefined : json['LocaleIds'],
        'HeaderLayoutUri': json['HeaderLayoutUri'] == null ? undefined : json['HeaderLayoutUri'],
        'TransportSettings': json['TransportSettings'] == null ? undefined : ExtensionObjectFromJSON(json['TransportSettings']),
        'MessageSettings': json['MessageSettings'] == null ? undefined : ExtensionObjectFromJSON(json['MessageSettings']),
        'DataSetWriters': json['DataSetWriters'] == null ? undefined : ((json['DataSetWriters'] as Array<any>).map(DataSetWriterDataTypeFromJSON)),
        'Name': json['Name'] == null ? undefined : json['Name'],
        'Enabled': json['Enabled'] == null ? undefined : json['Enabled'],
        'SecurityMode': json['SecurityMode'] == null ? undefined : json['SecurityMode'],
        'SecurityGroupId': json['SecurityGroupId'] == null ? undefined : json['SecurityGroupId'],
        'SecurityKeyServices': json['SecurityKeyServices'] == null ? undefined : ((json['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionFromJSON)),
        'MaxNetworkMessageSize': json['MaxNetworkMessageSize'] == null ? undefined : json['MaxNetworkMessageSize'],
        'GroupProperties': json['GroupProperties'] == null ? undefined : ((json['GroupProperties'] as Array<any>).map(KeyValuePairFromJSON)),
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function WriterGroupDataTypeToJSON(json: any): WriterGroupDataType {
      return WriterGroupDataTypeToJSONTyped(json, false);
  }

  export function WriterGroupDataTypeToJSONTyped(value?: WriterGroupDataType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'WriterGroupId': value['WriterGroupId'],
        'PublishingInterval': value['PublishingInterval'],
        'KeepAliveTime': value['KeepAliveTime'],
        'Priority': value['Priority'],
        'LocaleIds': value['LocaleIds'],
        'HeaderLayoutUri': value['HeaderLayoutUri'],
        'TransportSettings': ExtensionObjectToJSON(value['TransportSettings']),
        'MessageSettings': ExtensionObjectToJSON(value['MessageSettings']),
        'DataSetWriters': value['DataSetWriters'] == null ? undefined : ((value['DataSetWriters'] as Array<any>).map(DataSetWriterDataTypeToJSON)),
        'Name': value['Name'],
        'Enabled': value['Enabled'],
        'SecurityMode': value['SecurityMode'],
        'SecurityGroupId': value['SecurityGroupId'],
        'SecurityKeyServices': value['SecurityKeyServices'] == null ? undefined : ((value['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionToJSON)),
        'MaxNetworkMessageSize': value['MaxNetworkMessageSize'],
        'GroupProperties': value['GroupProperties'] == null ? undefined : ((value['GroupProperties'] as Array<any>).map(KeyValuePairToJSON)),
        'UaTypeId': value['UaTypeId'],
    };
}

