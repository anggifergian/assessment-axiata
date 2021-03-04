import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { generateHttpParams } from "../utils/http-param-generator";

@Injectable()
export class BaseService {
    constructor(private http: HttpClient) {}

    public getData(url: string, responseModel: any, requestParamModel?: any, isArray?: boolean):Observable<any> {
        const params = requestParamModel ? generateHttpParams(requestParamModel.convert()) : null;

        return this.http.get(url, {params});
    }
}