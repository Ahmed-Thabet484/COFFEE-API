const skuList = require("../Constants/skuList");
const responseKey = 'machine_names';
const product_name = 'product_name';

function getDetails(req) {
    //Search SKU List with the given keys assuming product type is a mandatory field
    var response = prepareResponse(req);

    //Check if no data found in sku list that matches request search criteria
    if(isEmptyObject(response[responseKey])){
        response[responseKey].push('No Result Found');
    }

    return response;

}
module.exports.getDetails = getDetails;

function prepareResponse(req) {
    
    var jsonPayload = JSON.parse(JSON.stringify(skuList.Product, null, 2)).payload;
    var request = req.query;
    var response = {} ;
    response[responseKey] = [];

    jsonPayload.forEach(function(ele){
        var limit = Object.keys(req.query).length;
        for(var key in request){
            var requestValue = request[key].toUpperCase();
            if(ele[key] == requestValue){
                limit -= 1;
            }
            if(limit == 0){
                response[responseKey].push(ele[product_name]);
            }
        }
    });

    return response;
}

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}