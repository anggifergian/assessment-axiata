import { HttpParams } from '@angular/common/http';
import { CustomEncoder } from './http-param-encoder';

export const generateHttpParams = (params?: Object): HttpParams => {
    let httpParams = new HttpParams({encoder: new CustomEncoder()});

    if (params) {
        Object.keys(params).forEach((key) => {
            if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
                httpParams = httpParams.set(key, params[key]);
            }
        });
    }

    return httpParams;
};
