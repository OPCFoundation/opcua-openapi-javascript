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
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
    VariantToJSONTyped,
} from './Variant';

/**
 * 
 * @export
 * @interface LiteralOperand
 */
export interface LiteralOperand {
    /**
     * 
     * @type {Variant}
     * @memberof LiteralOperand
     */
    Value?: Variant;
}

/**
 * Check if a given object implements the LiteralOperand interface.
 */
export function instanceOfLiteralOperand(value: object): value is LiteralOperand {
    return true;
}

export function LiteralOperandFromJSON(json: any): LiteralOperand {
    return LiteralOperandFromJSONTyped(json, false);
}

export function LiteralOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteralOperand {
    if (json == null) {
        return json;
    }
    return {
        
        'Value': json['Value'] == null ? undefined : VariantFromJSON(json['Value']),
    };
}

  export function LiteralOperandToJSON(json: any): LiteralOperand {
      return LiteralOperandToJSONTyped(json, false);
  }

  export function LiteralOperandToJSONTyped(value?: LiteralOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Value': VariantToJSON(value['Value']),
    };
}

