
export const AddressVsLL = (latitude,longitude,radius) => {
    return fetch(`http://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=FzgVP2F6058kiX5iG4J4&app_code=CbYsTWueDNTe9Vlq-O11NQ&mode=retrieveAll&prox=${latitude},${longitude},${radius}&jsonattributes=1&gen=9&maxresults=50`)
}