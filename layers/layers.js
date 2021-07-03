var wms_layers = [];

var format_Prueba4_0 = new ol.format.GeoJSON();
var features_Prueba4_0 = format_Prueba4_0.readFeatures(json_Prueba4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba4_0.addFeatures(features_Prueba4_0);
var lyr_Prueba4_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba4_0, 
                style: style_Prueba4_0,
                interactive: true,
    title: 'Prueba4<br />\
    <img src="styles/legend/Prueba4_0_0.png" /> 417 - 457 <br />\
    <img src="styles/legend/Prueba4_0_1.png" /> 457 - 497 <br />\
    <img src="styles/legend/Prueba4_0_2.png" /> 497 - 536 <br />\
    <img src="styles/legend/Prueba4_0_3.png" /> 536 - 576 <br />\
    <img src="styles/legend/Prueba4_0_4.png" /> 576 - 616 <br />\
    <img src="styles/legend/Prueba4_0_5.png" /> 616 - 656 <br />\
    <img src="styles/legend/Prueba4_0_6.png" /> 656 - 696 <br />\
    <img src="styles/legend/Prueba4_0_7.png" /> 696 - 735 <br />\
    <img src="styles/legend/Prueba4_0_8.png" /> 735 - 775 <br />\
    <img src="styles/legend/Prueba4_0_9.png" /> 775 - 815 <br />'
        });

lyr_Prueba4_0.setVisible(true);
var layersList = [lyr_Prueba4_0];
lyr_Prueba4_0.set('fieldAliases', {'DN': 'DN', });
lyr_Prueba4_0.set('fieldImages', {'DN': 'Range', });
lyr_Prueba4_0.set('fieldLabels', {'DN': 'no label', });
lyr_Prueba4_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});