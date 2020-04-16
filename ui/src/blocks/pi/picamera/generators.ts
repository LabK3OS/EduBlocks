export default function define(Python: Blockly.BlockGenerators) {
  Python['import_picamera'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from picamera import *\n';
    return code;
  };

  Python['create_camera'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+' = PiCamera()\n';
	  return code;
	};
	Python['setrotation'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_rot = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.rotation = ' + text_rot + '\n';
	  return code;
	};
	Python['start_preview'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_alpha = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.start_preview(' +text_alpha+ ')\n';
	  return code;
	};
	Python['stop_preview'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.stop_preview()\n';
	  return code;
	};
	Python['capture_savepath'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.capture(\'' + text_path +'\')\n';
	  return code;
	};
	Python['capture_savepathmore'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.capture(' + text_path +')\n';
	  return code;
	};
	Python['start_recording'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_path = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.start_recording(' + text_path + ')\n';
	  return code;
	};
	Python['wait_recording'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_time = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.wait_recording(' + text_time + ')\n';
	  return code;
	};
	Python['stop_recording'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.stop_recording()\n';
	  return code;
	};
	Python['set_resolution'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_width = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  var text_high = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.resolution = (' + text_width + ',' + text_high + ')\n';
	  return code;
	};
	Python['set_framerate'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_frame = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.framerate = ' + text_frame + '\n';
	  return code;
	};
	Python['set_textsize'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_size = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.annotate_text_size = ' + text_size + '\n';
	  return code;
	};
	Python['show_text'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_str = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.annotate_text =' + text_str +'\n';
	  return code;
	};
	Python['set_brightness'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_bright = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.brightness = ' + text_bright + '\n';
	  return code;
	};
	Python['set_contrast'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var text_cont = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.contrast = ' + text_cont + '\n';
	  return code;
	};
	Python['image_effect'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.image_effect =' + dropdown_op +'\n';
	  return code;
	};
	Python['awb_mode'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.awb_mode =' + dropdown_op +'\n';
	  return code;
	};
	Python['exposure_mode'] = function(block) {
		var cam = Blockly.Python.valueToCode(block, 'camera', Blockly.Python.ORDER_ATOMIC);
	  var dropdown_op = block.getFieldValue('OP');
	  // TODO: Assemble Python into code variable.
	  var code = cam+'.exposure_mode =' + dropdown_op +'\n';
	  return code;
	};
}
