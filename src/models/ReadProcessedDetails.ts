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
import type { AggregateConfiguration } from './AggregateConfiguration';
import {
    AggregateConfigurationFromJSON,
    AggregateConfigurationFromJSONTyped,
    AggregateConfigurationToJSON,
    AggregateConfigurationToJSONTyped,
} from './AggregateConfiguration';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part11/6.5.4/#6.5.4.1).
 * @export
 * @interface ReadProcessedDetails
 */
export interface ReadProcessedDetails {
    /**
     * 
     * @type {Date}
     * @memberof ReadProcessedDetails
     */
    StartTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReadProcessedDetails
     */
    EndTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof ReadProcessedDetails
     */
    ProcessingInterval?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReadProcessedDetails
     */
    AggregateType?: Array<string>;
    /**
     * 
     * @type {AggregateConfiguration}
     * @memberof ReadProcessedDetails
     */
    AggregateConfiguration?: AggregateConfiguration;
}

/**
 * Check if a given object implements the ReadProcessedDetails interface.
 */
export function instanceOfReadProcessedDetails(value: object): value is ReadProcessedDetails {
    return true;
}

export function ReadProcessedDetailsFromJSON(json: any): ReadProcessedDetails {
    return ReadProcessedDetailsFromJSONTyped(json, false);
}

export function ReadProcessedDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadProcessedDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'StartTime': json['StartTime'] == null ? undefined : (new Date(json['StartTime'])),
        'EndTime': json['EndTime'] == null ? undefined : (new Date(json['EndTime'])),
        'ProcessingInterval': json['ProcessingInterval'] == null ? undefined : json['ProcessingInterval'],
        'AggregateType': json['AggregateType'] == null ? undefined : json['AggregateType'],
        'AggregateConfiguration': json['AggregateConfiguration'] == null ? undefined : AggregateConfigurationFromJSON(json['AggregateConfiguration']),
    };
}

  export function ReadProcessedDetailsToJSON(json: any): ReadProcessedDetails {
      return ReadProcessedDetailsToJSONTyped(json, false);
  }

  export function ReadProcessedDetailsToJSONTyped(value?: ReadProcessedDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'StartTime': value['StartTime'] == null ? undefined : ((value['StartTime']).toISOString()),
        'EndTime': value['EndTime'] == null ? undefined : ((value['EndTime']).toISOString()),
        'ProcessingInterval': value['ProcessingInterval'],
        'AggregateType': value['AggregateType'],
        'AggregateConfiguration': AggregateConfigurationToJSON(value['AggregateConfiguration']),
    };
}

