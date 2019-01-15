/**
 * Created by ximing on 2019-01-08.
 */
import Response from './response';

export default class UriHandle {
    constructor() {
        this.mInterceptor = [];
    }

    async shouldHandle(uriRequest) {
        return true;
    }

    async handle(uriRequest) {
        try {
            const shouleHandle = await this.shouldHandle(uriRequest);
            if (shouleHandle) {
                if (this.mInterceptor) {
                    for (let i = 0; i < this.mInterceptor.length; i++) {
                        await this.mInterceptor.exec(uriRequest);
                    }
                }
                let res = await this.handleInternal(uriRequest);
                if (
                    Object.prototype.toString(res) === '[object Object]' &&
                    res.hasOwnProperty('code') &&
                    (res.hasOwnProperty('data') || res.hasOwnProperty('error'))
                ) {
                    return res;
                } else {
                    return Response.success(res);
                }
            }
        } catch (err) {
            return Response.error(err);
        }
    }

    async handleInternal(uriRequest) {}
}
