export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_picamera'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("import picamera");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#ff0066");
      this.setTooltip("Importar librería PiCamera para usar la cámara");
      this.setHelpUrl("");
    }
  };


  Blocks['create_camera'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(" = PiCamera()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Create a camera Object named camera.");
      this.setHelpUrl("");
    }
  };
  Blocks['setrotation'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".rotation = ")
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Set camera rotate. you can rotate the image by 0,90,180,or 270 degrees");
      this.setHelpUrl("");
    }
  };

  Blocks['start_preview'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".start_preview(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Now start open camera for preview the image and set alpha value,range 0~255");
      this.setHelpUrl("");
    }
  };

  Blocks['stop_preview'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".stop_preview()")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Stop the camera preview");
      this.setHelpUrl("");
    }
  };

  Blocks['capture_savepath'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".capture(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("capture a image and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blocks['capture_savepathmore'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".capture(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("loop to capture a image and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blocks['start_recording'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".start_recording(")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("Now start recording video and save to the path you want.");
      this.setHelpUrl("");
    }
  };
  Blocks['wait_recording'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".wait_recording( ")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("wait recording video that it will pause for the number of seconds specified");
      this.setHelpUrl("");
    }
  };
  Blocks['stop_recording'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".stop_recording()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("stop recording video.");
      this.setHelpUrl("");
    }
  };
  Blocks['set_resolution'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".resolution = ( ")
        this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("，")
        this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set to the rasolution of your monitor,\n but the maximum resolution is 2592 x 1944 for still photos \n and 1920 x 1080 for video recording");
      this.setHelpUrl("");
    }
  };
  Blocks['set_framerate'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".framerate = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set the frame rate to 15 to enable this maximum resolution");
      this.setHelpUrl("");
    }
  };
  Blocks['set_textsize'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".annotate_text_size = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("set the annotation text size.Valid sizes are 6 to 160. The default is 32.");
      this.setHelpUrl("");
    }
  };
  Blocks['show_text'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".annotate_text =")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("add text to your image.");
      this.setHelpUrl("");
    }
  };
  Blocks['set_brightness'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".brightness = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("the brightness setting, which can be set from 0 to 10. The default is 50.");
      this.setHelpUrl("");
    }
  };
  Blocks['set_contrast'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".contrast = ")
        this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("the contrast setting, which can be set from 0 to 10.");
      this.setHelpUrl("");
    }
  };
  Blocks['image_effect'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".image_effect = ")
        .appendField(new Blockly.FieldDropdown([["none", "'none'"], ["negative", "'negative'"], ["solarize", "'solarize'"], ["sketch", "'sketch'"], ["denoise", "'denoise'"], ["emboss", "'emboss'"], ["olipaint", "'olipaint'"], ["hatch", "'hatch'"], ["gpen", "'gpen'"], ["pastel", "'pastel'"], ["watercolor", "'watercolor'"], ["film", "'film'"], ["blur", "'blur'"], ["saturation", "'saturation'"], ["colorswap", "'colorswap'"], ["washedout", "'washedout'"], ["posterise", "'posterise'"], ["colorpoint", "'colorpoint'"], ["colorbalance", "'colorbalance'"], ["cartoon", "'cartoon'"], ["deinterlace1", "'deinterlace1'"], ["deinterlace2", "'deinterlace2'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blocks['awb_mode'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".awb_mode = ")
        .appendField(new Blockly.FieldDropdown([["auto", "'auto'"], ["off", "'off'"], ["sunlight", "'sunlight'"], ["cloudy", "'cloudy'"], ["shade", "'shade'"], ["tungsten", "'tungsten'"], ["fluorescent", "'fluorescent'"], ["incandescent", "'incandescent'"], ["flash", "'flash'"], ["horizon", "'horizon'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blocks['exposure_mode'] = {
    init: function () {
      this.appendValueInput("camera")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(".exposure_mode = ")
        .appendField(new Blockly.FieldDropdown([["auto", "'auto'"], ["off", "'off'"], ["night", "'night'"], ["nightpreview", "'nightpreview'"], ["backlight", "'backlight'"], ["spotlight", "'spotlight'"], ["sports", "'sports'"], ["snow", "'snow'"], ["beach", "'beach'"], ["verylong", "'verylong'"], ["fixedfps", "'fixedfps'"], ["antishake", "'antishake'"], ["fireworks", "'fireworks'"]]), "OP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1B173C");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}