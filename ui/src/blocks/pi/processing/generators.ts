export default function define(Python: Blockly.BlockGenerators) {

  Python['p_arc'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arc(' +value_text+ ')\n';
    return code;
  };

  Python['p_background'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'background(' +value_text+ ')\n';
    return code;
  };
  Python['p_mouse_y'] = function (block) {
    var code = 'mouse_y';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Python['p_mouse_x'] = function (block) {
    var code = 'mouse_x';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  
  Python['p_position'] = function (block) {
    var value_text0 = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '(' + value_text0 + ','+value_text1 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Python['p_blue'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'blue(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_green'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'green(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_red'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'red(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_colorMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'colorMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_ellipse'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ellipse(' +value_text+ ')\n';
    return code;
  };

  Python['p_ellipseMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ellipseMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_exit'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'exit()\n';
    return code;
  };

  Python['p_fill'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'fill(' +value_text+ ')\n';
    return code;
  };

  Python['p_colorMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'colorMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_framerate_set'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'set_frame_rate()(' +value_text+ ')\n';
    return code;
  };

  Python['p_framrate_get'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'framerate';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_line'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'line(' +value_text+ ')\n';
    return code;
  };

  Python['p_loadPixels'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'loadPixels(' +value_text+ ')\n';
    return code;
  };

  Python['p_loop'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'loop(' +value_text+ ')\n';
    return code;
  };

  Python['p_noloop'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'noloop(' +value_text+ ')\n';
    return code;
  };

  Python['p_nofill'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'nofill(' +value_text+ ')\n';
    return code;
  };

  Python['p_nosmooth'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'nosmooth(' +value_text+ ')\n';
    return code;
  };

  
  Python['p_nostroke'] = function(block) {
    
    // TODO: Assemble Python into code variable.
    var code = 'no_stroke()\n';
    return code;
  };

  Python['p_point'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'point(' +value_text+ ')\n';
    return code;
  };

  Python['p_quad'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'quad(' +value_text+ ')\n';
    return code;
  };

  Python['p_rect'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rect(' +value_text+ ')\n';
    return code;
  };

  Python['p_rectmode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rectmode(' +value_text+ ')\n';
    return code;
  };

  Python['p_rotate'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rotate(' +value_text+ ')\n';
    return code;
  };

  Python['p_run'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'run()\n';
    return code;
  };

  Python['p_scale'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'scale(' +value_text+ ')\n';
    return code;
  };

  Python['p_set'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'set(' +value_text+ ')\n';
    return code;
  };

  Python['p_size'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'size(' +value_text+ ')\n';
    return code;
  };

  Python['p_stroke'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'stroke(' +value_text+ ')\n';
    return code;
  };


  Python['p_text'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'text(' +value_text+ ')\n';
    return code;
  };

  Python['p_textsize'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'text_font(create_font("/home/pi/Desktop/.Extras/Memorial Lane.otf",' +value_text+ '),10)\n';
    return code;
  };



  Python['p_translate'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'translate(' +value_text+ ')\n';
    return code;
  };

  Python['p_triangle'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'triangle(' +value_text+ ')\n';
    return code;
  };

  Python['p_loadimage'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'load_image(' +value_text+ ')\n';
    return code;
  };
  Python['p_image'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'image(' +value_text+ ')\n';
    return code;
  };

  
  

}
