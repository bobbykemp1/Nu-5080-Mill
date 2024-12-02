var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_NLSOld1_1 = new ol.layer.Tile({
            'title': 'NLS Old 1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=0e1FOgfCSpysyBGm1F79'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Boll97nwGR1900_georeferenced_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Boll 97nw GR 1900_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Boll97nwGR1900_georeferenced_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-234410.354510, 7038480.942687, -233248.920242, 7039131.104331]
                            })
                        });
var format_42KLims_4 = new ol.format.GeoJSON();
var features_42KLims_4 = format_42KLims_4.readFeatures(json_42KLims_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42KLims_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42KLims_4.addFeatures(features_42KLims_4);
var lyr_42KLims_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42KLims_4, 
                style: style_42KLims_4,
                interactive: false,
                title: '<img src="styles/legend/42KLims_4.png" /> 4.2K Lims'
            });
var format_PoolDot_5 = new ol.format.GeoJSON();
var features_PoolDot_5 = format_PoolDot_5.readFeatures(json_PoolDot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoolDot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoolDot_5.addFeatures(features_PoolDot_5);
var lyr_PoolDot_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoolDot_5, 
                style: style_PoolDot_5,
                interactive: false,
                title: '<img src="styles/legend/PoolDot_5.png" /> Pool Dot'
            });
var format_MillCPoly_6 = new ol.format.GeoJSON();
var features_MillCPoly_6 = format_MillCPoly_6.readFeatures(json_MillCPoly_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MillCPoly_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MillCPoly_6.addFeatures(features_MillCPoly_6);
var lyr_MillCPoly_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MillCPoly_6, 
                style: style_MillCPoly_6,
                interactive: false,
                title: '<img src="styles/legend/MillCPoly_6.png" /> Mill C Poly'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_NLSOld1_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Boll97nwGR1900_georeferenced_3.setVisible(true);lyr_42KLims_4.setVisible(true);lyr_PoolDot_5.setVisible(true);lyr_MillCPoly_6.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_NLSOld1_1,lyr_OpenStreetMap_2,lyr_Boll97nwGR1900_georeferenced_3,lyr_42KLims_4,lyr_PoolDot_5,lyr_MillCPoly_6];
lyr_42KLims_4.set('fieldAliases', {'FID': 'FID', });
lyr_PoolDot_5.set('fieldAliases', {'FID': 'FID', });
lyr_MillCPoly_6.set('fieldAliases', {'FID': 'FID', });
lyr_42KLims_4.set('fieldImages', {'FID': '', });
lyr_PoolDot_5.set('fieldImages', {'FID': '', });
lyr_MillCPoly_6.set('fieldImages', {'FID': '', });
lyr_42KLims_4.set('fieldLabels', {'FID': 'no label', });
lyr_PoolDot_5.set('fieldLabels', {'FID': 'no label', });
lyr_MillCPoly_6.set('fieldLabels', {'FID': 'no label', });
lyr_MillCPoly_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});