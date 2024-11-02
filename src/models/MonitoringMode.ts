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
export const MonitoringMode = {
    Disabled: 0,
    Sampling: 1,
    Reporting: 2
} as const;
export type MonitoringMode = typeof MonitoringMode[keyof typeof MonitoringMode];


export function instanceOfMonitoringMode(value: any): boolean {
    for (const key in MonitoringMode) {
        if (Object.prototype.hasOwnProperty.call(MonitoringMode, key)) {
            if (MonitoringMode[key as keyof typeof MonitoringMode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MonitoringModeFromJSON(json: any): MonitoringMode {
    return MonitoringModeFromJSONTyped(json, false);
}

export function MonitoringModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonitoringMode {
    return json as MonitoringMode;
}

export function MonitoringModeToJSON(value?: MonitoringMode | null): any {
    return value as any;
}

export function MonitoringModeToJSONTyped(value: any, ignoreDiscriminator: boolean): MonitoringMode {
    return value as MonitoringMode;
}

