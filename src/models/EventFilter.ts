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
import type { SimpleAttributeOperand } from './SimpleAttributeOperand';
import {
    SimpleAttributeOperandFromJSON,
    SimpleAttributeOperandFromJSONTyped,
    SimpleAttributeOperandToJSON,
    SimpleAttributeOperandToJSONTyped,
} from './SimpleAttributeOperand';
import type { ContentFilter } from './ContentFilter';
import {
    ContentFilterFromJSON,
    ContentFilterFromJSONTyped,
    ContentFilterToJSON,
    ContentFilterToJSONTyped,
} from './ContentFilter';

/**
 * [Link to specification](https://reference.opcfoundation.org/v105/Core/docs/Part4/7.22.3).
 * @export
 * @interface EventFilter
 */
export interface EventFilter {
    /**
     * 
     * @type {Array<SimpleAttributeOperand>}
     * @memberof EventFilter
     */
    SelectClauses?: Array<SimpleAttributeOperand>;
    /**
     * 
     * @type {ContentFilter}
     * @memberof EventFilter
     */
    WhereClause?: ContentFilter;
}

/**
 * Check if a given object implements the EventFilter interface.
 */
export function instanceOfEventFilter(value: object): value is EventFilter {
    return true;
}

export function EventFilterFromJSON(json: any): EventFilter {
    return EventFilterFromJSONTyped(json, false);
}

export function EventFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'SelectClauses': json['SelectClauses'] == null ? undefined : ((json['SelectClauses'] as Array<any>).map(SimpleAttributeOperandFromJSON)),
        'WhereClause': json['WhereClause'] == null ? undefined : ContentFilterFromJSON(json['WhereClause']),
    };
}

  export function EventFilterToJSON(json: any): EventFilter {
      return EventFilterToJSONTyped(json, false);
  }

  export function EventFilterToJSONTyped(value?: EventFilter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'SelectClauses': value['SelectClauses'] == null ? undefined : ((value['SelectClauses'] as Array<any>).map(SimpleAttributeOperandToJSON)),
        'WhereClause': ContentFilterToJSON(value['WhereClause']),
    };
}

