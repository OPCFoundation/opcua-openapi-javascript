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


/**
 * 
 * @export
 */
export const BrokerTransportQualityOfService = {
    NotSpecified: 0,
    BestEffort: 1,
    AtLeastOnce: 2,
    AtMostOnce: 3,
    ExactlyOnce: 4
} as const;
export type BrokerTransportQualityOfService = typeof BrokerTransportQualityOfService[keyof typeof BrokerTransportQualityOfService];


export function instanceOfBrokerTransportQualityOfService(value: any): boolean {
    for (const key in BrokerTransportQualityOfService) {
        if (Object.prototype.hasOwnProperty.call(BrokerTransportQualityOfService, key)) {
            if (BrokerTransportQualityOfService[key as keyof typeof BrokerTransportQualityOfService] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BrokerTransportQualityOfServiceFromJSON(json: any): BrokerTransportQualityOfService {
    return BrokerTransportQualityOfServiceFromJSONTyped(json, false);
}

export function BrokerTransportQualityOfServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrokerTransportQualityOfService {
    return json as BrokerTransportQualityOfService;
}

export function BrokerTransportQualityOfServiceToJSON(value?: BrokerTransportQualityOfService | null): any {
    return value as any;
}

export function BrokerTransportQualityOfServiceToJSONTyped(value: any, ignoreDiscriminator: boolean): BrokerTransportQualityOfService {
    return value as BrokerTransportQualityOfService;
}

