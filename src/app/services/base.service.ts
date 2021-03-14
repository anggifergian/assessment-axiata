import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { generateHttpParams } from "../utils/http-param-generator";

@Injectable()
export class BaseService {
    constructor(private http: HttpClient) {}

    public getData(url: string, responseModel: any, requestParamModel?: any, isArray?: boolean):Observable<any> {
        const params = requestParamModel ? generateHttpParams(requestParamModel.convert()) : null;
        // console.log("Url:", url);

        if (url === "ticket") return this.http.get("/assets/data/filter-option.json");
        if (url === "legacy") return this.http.get("/assets/data/legacy.json");
        if (url === "sosy") return this.http.get("/assets/data/sosy.json");
        if (url === "modchan") return this.http.get("/assets/data/modchan.json");
        if (url === "onefive") return this.http.get("/assets/data/onefive.json");
        if (url === "request") return this.http.get("/assets/data/reqdetail.json");
        if (url === "request2") return this.http.get("/assets/data/reqdetail-2.json");

        return this.http.get("/assets/data/sub-product-list.json");
    }
}