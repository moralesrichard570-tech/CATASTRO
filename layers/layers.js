var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limites_vigente_ordenanza_1 = new ol.format.GeoJSON();
var features_Limites_vigente_ordenanza_1 = format_Limites_vigente_ordenanza_1.readFeatures(json_Limites_vigente_ordenanza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_vigente_ordenanza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_vigente_ordenanza_1.addFeatures(features_Limites_vigente_ordenanza_1);
var lyr_Limites_vigente_ordenanza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_vigente_ordenanza_1, 
                style: style_Limites_vigente_ordenanza_1,
                popuplayertitle: 'Limites_vigente_ordenanza',
                interactive: true,
                title: '<img src="styles/legend/Limites_vigente_ordenanza_1.png" /> Limites_vigente_ordenanza'
            });
var format_Vias_proyectadas_SG_2 = new ol.format.GeoJSON();
var features_Vias_proyectadas_SG_2 = format_Vias_proyectadas_SG_2.readFeatures(json_Vias_proyectadas_SG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_proyectadas_SG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_proyectadas_SG_2.addFeatures(features_Vias_proyectadas_SG_2);
var lyr_Vias_proyectadas_SG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_proyectadas_SG_2, 
                style: style_Vias_proyectadas_SG_2,
                popuplayertitle: 'Vias_proyectadas_SG',
                interactive: true,
                title: '<img src="styles/legend/Vias_proyectadas_SG_2.png" /> Vias_proyectadas_SG'
            });
var format_via_l_3 = new ol.format.GeoJSON();
var features_via_l_3 = format_via_l_3.readFeatures(json_via_l_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_via_l_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_via_l_3.addFeatures(features_via_l_3);
var lyr_via_l_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_via_l_3, 
                style: style_via_l_3,
                popuplayertitle: 'via_l',
                interactive: true,
    title: 'via_l<br />\
    <img src="styles/legend/via_l_3_0.png" /> ADOQUINADO<br />\
    <img src="styles/legend/via_l_3_1.png" /> ASFALTADO<br />\
    <img src="styles/legend/via_l_3_2.png" /> EMPEDRADO<br />\
    <img src="styles/legend/via_l_3_3.png" /> TIERRA<br />\
    <img src="styles/legend/via_l_3_4.png" /> <br />' });
var format_Vias_Actuales_4 = new ol.format.GeoJSON();
var features_Vias_Actuales_4 = format_Vias_Actuales_4.readFeatures(json_Vias_Actuales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_Actuales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_Actuales_4.addFeatures(features_Vias_Actuales_4);
var lyr_Vias_Actuales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_Actuales_4, 
                style: style_Vias_Actuales_4,
                popuplayertitle: 'Vias_Actuales',
                interactive: true,
    title: 'Vias_Actuales<br />\
    <img src="styles/legend/Vias_Actuales_4_0.png" /> <br />\
    <img src="styles/legend/Vias_Actuales_4_1.png" /> ADOQUINADO<br />\
    <img src="styles/legend/Vias_Actuales_4_2.png" /> ASFALTADO<br />\
    <img src="styles/legend/Vias_Actuales_4_3.png" /> EMPEDRADO<br />\
    <img src="styles/legend/Vias_Actuales_4_4.png" /> LASTRADO<br />\
    <img src="styles/legend/Vias_Actuales_4_5.png" /> TIERRA<br />' });
var format_LOTE_2024_5 = new ol.format.GeoJSON();
var features_LOTE_2024_5 = format_LOTE_2024_5.readFeatures(json_LOTE_2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTE_2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_2024_5.addFeatures(features_LOTE_2024_5);
var lyr_LOTE_2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_2024_5, 
                style: style_LOTE_2024_5,
                popuplayertitle: 'LOTE_2024',
                interactive: true,
                title: '<img src="styles/legend/LOTE_2024_5.png" /> LOTE_2024'
            });
var format_FOTO_4_6 = new ol.format.GeoJSON();
var features_FOTO_4_6 = format_FOTO_4_6.readFeatures(json_FOTO_4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOTO_4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOTO_4_6.addFeatures(features_FOTO_4_6);
var lyr_FOTO_4_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOTO_4_6, 
                style: style_FOTO_4_6,
                popuplayertitle: 'FOTO_4',
                interactive: true,
                title: '<img src="styles/legend/FOTO_4_6.png" /> FOTO_4'
            });
var format_FOTO_VIAS_1_7 = new ol.format.GeoJSON();
var features_FOTO_VIAS_1_7 = format_FOTO_VIAS_1_7.readFeatures(json_FOTO_VIAS_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOTO_VIAS_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOTO_VIAS_1_7.addFeatures(features_FOTO_VIAS_1_7);
var lyr_FOTO_VIAS_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOTO_VIAS_1_7, 
                style: style_FOTO_VIAS_1_7,
                popuplayertitle: 'FOTO_VIAS_1',
                interactive: true,
                title: '<img src="styles/legend/FOTO_VIAS_1_7.png" /> FOTO_VIAS_1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Limites_vigente_ordenanza_1.setVisible(true);lyr_Vias_proyectadas_SG_2.setVisible(true);lyr_via_l_3.setVisible(true);lyr_Vias_Actuales_4.setVisible(true);lyr_LOTE_2024_5.setVisible(true);lyr_FOTO_4_6.setVisible(true);lyr_FOTO_VIAS_1_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Limites_vigente_ordenanza_1,lyr_Vias_proyectadas_SG_2,lyr_via_l_3,lyr_Vias_Actuales_4,lyr_LOTE_2024_5,lyr_FOTO_4_6,lyr_FOTO_VIAS_1_7];
lyr_Limites_vigente_ordenanza_1.set('fieldAliases', {'FID_': 'FID_', 'FECHA': 'FECHA', 'Id': 'Id', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PARROQUIA': 'PARROQUIA', 'AREA': 'AREA', });
lyr_Vias_proyectadas_SG_2.set('fieldAliases', {'Layer': 'Layer', 'Shape_Leng': 'Shape_Leng', });
lyr_via_l_3.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcion', 'htc_text': 'htc_text', 'SHAPE_Leng': 'SHAPE_Leng', 'tipo_via': 'tipo_via', 'Parroquia': 'Parroquia', });
lyr_Vias_Actuales_4.set('fieldAliases', {'gid': 'gid', 'nombre_via': 'nombre_via', 'tipo_via': 'tipo_via', 'Parroquia': 'Parroquia', 'Shape_Leng': 'Shape_Leng', 'zona': 'zona', });
lyr_LOTE_2024_5.set('fieldAliases', {'clave_cata': 'clave_cata', 'es_urbano': 'es_urbano', 'AUX_1': 'AUX_1', 'Parroquia': 'Parroquia', });
lyr_FOTO_4_6.set('fieldAliases', {'id': 'id', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', });
lyr_FOTO_VIAS_1_7.set('fieldAliases', {'id': 'id', 'FOTO_1': 'FOTO_1', 'DESCRIP_1': 'DESCRIP_1', });
lyr_Limites_vigente_ordenanza_1.set('fieldImages', {'FID_': 'Range', 'FECHA': 'TextEdit', 'Id': 'Range', 'OBJECTID': 'Range', 'Shape_Leng': '', 'Shape_Area': 'TextEdit', 'PARROQUIA': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Vias_proyectadas_SG_2.set('fieldImages', {'Layer': '', 'Shape_Leng': '', });
lyr_via_l_3.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'htc_text': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'tipo_via': 'ValueMap', 'Parroquia': 'TextEdit', });
lyr_Vias_Actuales_4.set('fieldImages', {'gid': 'Range', 'nombre_via': 'TextEdit', 'tipo_via': 'ValueMap', 'Parroquia': 'TextEdit', 'Shape_Leng': 'TextEdit', 'zona': 'TextEdit', });
lyr_LOTE_2024_5.set('fieldImages', {'clave_cata': 'TextEdit', 'es_urbano': 'Range', 'AUX_1': 'TextEdit', 'Parroquia': 'TextEdit', });
lyr_FOTO_4_6.set('fieldImages', {'id': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', 'FOTO_3': 'TextEdit', 'FOTO_4': 'TextEdit', });
lyr_FOTO_VIAS_1_7.set('fieldImages', {'id': 'TextEdit', 'FOTO_1': 'ExternalResource', 'DESCRIP_1': 'TextEdit', });
lyr_Limites_vigente_ordenanza_1.set('fieldLabels', {'FID_': 'no label', 'FECHA': 'no label', 'Id': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'PARROQUIA': 'no label', 'AREA': 'no label', });
lyr_Vias_proyectadas_SG_2.set('fieldLabels', {'Layer': 'no label', 'Shape_Leng': 'no label', });
lyr_via_l_3.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'htc_text': 'no label', 'SHAPE_Leng': 'no label', 'tipo_via': 'no label', 'Parroquia': 'no label', });
lyr_Vias_Actuales_4.set('fieldLabels', {'gid': 'no label', 'nombre_via': 'no label', 'tipo_via': 'no label', 'Parroquia': 'no label', 'Shape_Leng': 'no label', 'zona': 'no label', });
lyr_LOTE_2024_5.set('fieldLabels', {'clave_cata': 'no label', 'es_urbano': 'no label', 'AUX_1': 'no label', 'Parroquia': 'no label', });
lyr_FOTO_4_6.set('fieldLabels', {'id': 'no label', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', });
lyr_FOTO_VIAS_1_7.set('fieldLabels', {'id': 'no label', 'FOTO_1': 'no label', 'DESCRIP_1': 'no label', });
lyr_FOTO_VIAS_1_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});