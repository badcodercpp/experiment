export default class Delta {
    constructor(tl,br,dp){
        this._tl=tl;
        this._br=br;
        this._dp=dp;
    }
    maxima = arr => {
        let largest=arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (largest < arr[i] ) {
                largest = arr[i];
            }
        }
        return largest
    }
    minima = arr => {
        let smallest=arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (smallest > arr[i] ) {
                smallest = arr[i];
            }
        }
        return smallest
    }
    result = () => {
        const arLat=[];
        arLat.push(this._tl.latitude)
        arLat.push(this._br.latitude)
        arLat.push(this._dp.latitude)
        const minLat=this.minima(arLat)
        const maxLat=this.maxima(arLat)
        const arLong=[];
        arLong.push(this._tl.longitude)
        arLong.push(this._br.longitude)
        arLong.push(this._dp.longitude)
        const minLong=this.minima(arLong)
        const maxLong=this.maxima(arLong)

        const ret = {
            minLat:minLat,
            maxLat:maxLat,
            minLong:minLong,
            maxLong:maxLong
        }

        return ret;
    }
}