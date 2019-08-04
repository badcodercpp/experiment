export default class Api {
    constructor(uri,token){
        this._uri=uri;
        this._token=token;
    }
    connect = ()=>{
        return fetch(`${this._uri}?${this._token}`)
    }
}