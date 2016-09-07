var taxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};

var companySalesData = [{
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
}, {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
}, {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
}];

var taxObject = {};
var results = calculateSalesTax(companySalesData, taxRates);

function calculateSalesTax(companySalesData, taxRates) {

    for (var company in companySalesData) {
        if (taxObject[companySalesData[company].name] === undefined) {
            taxObject[companySalesData[company].name] = {};
        } // end of if
    } // this for loop sets the key values for result array (taxObject)


    for (var biz in companySalesData) {
        var sum = companySalesData[biz].sales.reduce(function(sum, monthlySales) {
            return sum + monthlySales;
        }, 0);
        var taxedSum = sum * (1 + taxRates[companySalesData[biz].province])

        if (taxObject[companySalesData[biz].name].totalSales === undefined) {
            taxObject[companySalesData[biz].name].totalSales = sum;
            taxObject[companySalesData[biz].name].totalTaxes = Math.round(taxedSum) - sum;
        } else {
          var oldSum = taxObject[companySalesData[biz].name].totalSales;
          var oldTax = taxObject[companySalesData[biz].name].totalTaxes;
          taxObject[companySalesData[biz].name].totalSales = sum + oldSum;
          taxObject[companySalesData[biz].name].totalTaxes = (oldTax + taxedSum) - (sum);
        }

    }
    return taxObject;
} // end of calculateSalesTax function

console.log(results)
