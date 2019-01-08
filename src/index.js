/**
 * Created by ximing on 2019-01-08.
 */
import url from 'url';
import UriHandle from './uriHandle';
import UriInterceptor from './uriInterceptor';
import UriRequest from './uriRequest';
import Response from './response';
import { RESPONSE_CODE } from './contants';

export default class Router {
    constructor(rootUriHandle) {
        this.rootUriHandle = rootUriHandle;
    }

    goto(uriRequest) {}
}
export { UriRequest, UriInterceptor, UriHandle, Response, RESPONSE_CODE, url };
