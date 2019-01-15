/**
 * Created by ximing on 2019-01-08.
 */
import { RESPONSE_CODE } from './contants';

export default class Response {
    constructor(code, data, error) {
        this.code = code;
        this.data = data;
        this.error = error;
    }

    static success(data) {
        return new Response(RESPONSE_CODE.SUCCESS, data);
    }

    static error(error) {
        return new Response(RESPONSE_CODE.ERROR, null, error);
    }

    static notFound(error) {
        return new Response(RESPONSE_CODE.NOT_FOUND, null, error);
    }

    static redirect(data, error) {
        return new Response(RESPONSE_CODE.REDIRECT, data, error);
    }

    static badRequest(data, error) {
        return new Response(RESPONSE_CODE.BAD_REQUEST, data, error);
    }
}
Response.RESPONSE_CODE = RESPONSE_CODE;
