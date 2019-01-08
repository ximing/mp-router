/**
 * Created by ximing on 2019-01-08.
 */
export default class UriHandle {
    mInterceptor = [];

    async shouldHandle() {
        return true;
    }

    async handleInternal() {}
}
