/**
 * Created by ximing on 2019-01-08.
 */
export default class Response {
    constructor(code, data, error) {
        this.code = code;
        this.data = data;
        this.error = error;
    }
}
