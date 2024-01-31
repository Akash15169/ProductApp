const baseURL = 'https://dummyjson.com/products';

export const fetchProductList = async () => {
    // console.log('Service called');
    let result = null;
    try {
        const response = await fetch(`${baseURL}`);
        const JSONResponse = await response.json();
        // console.log('response', response)
        // console.log('stringify response', JSON.stringify(response))
        // console.log('JSONResponse', JSONResponse);
        if (JSONResponse) {
            // console.log('stringify JSONResponse', JSON.stringify(JSONResponse));
            result = JSONResponse;
        } else {
            console.log('Error in getting JSONResponse');
        }
        // console.log('result in service', result);
    } catch (error) {
        console.log(error);
    }
    return result;
};
