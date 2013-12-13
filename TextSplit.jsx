/**
 * Takes a single layer of text and splits the text out into separate layers by
 * character. 
 *
 * NOTES:
 *
 *  - You should only have ONE layer in your PSD before running this, as the
 * topmost layer will be used.  
 * 
 *  - This doesn't account for running over the edge of the layer, but you should
 *  be fine as long as your source layer doesn't run over the edge either...I would
 *  avoid line breaks in your source layer.
 */

// Get the layers from the active PSD
var layers = app.activeDocument.layers;

var layer = layers[0];

var text = layer.textItem.contents.split('');
var newLayer, w, x, y, i;

startX = 2;

for(i = text.length; i--;)
{
    newLayer = app.activeDocument.artLayers.add();
    newLayer.kind = LayerKind.TEXT;

	// Defines the new layer's font properties based off of the source layer
    newLayer.textItem.antiAliasMethod = layer.textItem.antiAliasMethod;
    newLayer.textItem.font = layer.textItem.antiAliasMethod;
    newLayer.textItem.color = layer.textItem.color;
    newLayer.textItem.size = layer.textItem.size;

	// Make the contents of this layer the letter
    newLayer.textItem.contents = text[i];

    x = new UnitValue(startX, 'px');
    y = new UnitValue(12, 'px');
    newLayer.textItem.position = [x, y];

    w = parseInt(newLayer.bounds[2], 10) - parseInt(newLayer.bounds[0], 10);
    
    startX += w + 2;
}   
