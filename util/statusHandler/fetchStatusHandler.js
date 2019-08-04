export const fetchStatusHandler = (response) => {
  //alert(response.status===200)
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
}