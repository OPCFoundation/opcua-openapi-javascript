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
/**
 * 
 * @export
 * @interface SignedSoftwareCertificate
 */
export interface SignedSoftwareCertificate {
    /**
     * 
     * @type {string}
     * @memberof SignedSoftwareCertificate
     */
    CertificateData?: string;
    /**
     * 
     * @type {string}
     * @memberof SignedSoftwareCertificate
     */
    Signature?: string;
    /**
     * 
     * @type {string}
     * @memberof SignedSoftwareCertificate
     */
    UaTypeId?: string;
}

/**
 * Check if a given object implements the SignedSoftwareCertificate interface.
 */
export function instanceOfSignedSoftwareCertificate(value: object): value is SignedSoftwareCertificate {
    return true;
}

export function SignedSoftwareCertificateFromJSON(json: any): SignedSoftwareCertificate {
    return SignedSoftwareCertificateFromJSONTyped(json, false);
}

export function SignedSoftwareCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignedSoftwareCertificate {
    if (json == null) {
        return json;
    }
    return {
        
        'CertificateData': json['CertificateData'] == null ? undefined : json['CertificateData'],
        'Signature': json['Signature'] == null ? undefined : json['Signature'],
        'UaTypeId': json['UaTypeId'] == null ? undefined : json['UaTypeId'],
    };
}

  export function SignedSoftwareCertificateToJSON(json: any): SignedSoftwareCertificate {
      return SignedSoftwareCertificateToJSONTyped(json, false);
  }

  export function SignedSoftwareCertificateToJSONTyped(value?: SignedSoftwareCertificate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'CertificateData': value['CertificateData'],
        'Signature': value['Signature'],
        'UaTypeId': value['UaTypeId'],
    };
}

