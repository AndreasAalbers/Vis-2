var vg_1 = "json/Densitymap.json";
vegaEmbed('#map', vg_1, {"actions" : false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "json/Barchart.json";
vegaEmbed('#unemployment', vg_2, {"actions" : false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "json/Bubblechart.json";
vegaEmbed('#Bubblechart', vg_3, {"actions" : false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "json/Piechart.json";
vegaEmbed('#emissions', vg_3, {"actions" : false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "json/Wagemap.json";
vegaEmbed('#internet', vg_4, {"actions" : false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);