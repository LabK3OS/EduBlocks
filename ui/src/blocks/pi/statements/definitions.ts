export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['websleepnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("time.sleep(");
      this.appendValueInput("sleep")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Detener el programa durante un numero de segundos configurable");
      this.setHelpUrl("");
    }
  };

  Blocks['webtypeanything'] = {
    init: function () {
      this.appendValueInput("stuff")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("# Tu propio código");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Añadir código en Python al programa en bloques para usar utilidades avanzadas de Python que no están en EduBlocks");
      this.setHelpUrl("");
    }
  };


  Blocks['webdf'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Ejecutar una función ya definida que no retorna nada');
      this.setHelpUrl('');
    },
  };
  Blocks['webrtdf'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Obtener el valor de retorno de una función ya definida');
    },
  };

  Blocks['commas'] = {
    init: function () {
      this.appendValueInput("val1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',');
      this.appendValueInput("val2")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Con este bloque, se pueden separar los diferentes argumentos de una función');
    },
  };
  Blocks['webobj'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('.');
      this.appendValueInput("params")
        .setCheck(null)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Ejecutar una función de un objeto ya definido que no retorna nada. Es necesario arrastrar un bloque de función dentro de este bloque.');
      this.setHelpUrl('');
    },
  };
  Blocks['webrtobj'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('.');
      this.appendValueInput("params")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Obtener el valor de retorno de una función de un objeto ya definido. Es necesario arrastrar un bloque de función dentro de este bloque.');
    },
  };

  Blocks['webAsgnObj'] = {
    init: function () {

      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('=');
      this.appendValueInput("text1")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Este bloque es util para asignar un valor a un elemento que no sea una variable');
      this.setHelpUrl('');
    },
  };
  Blocks['webAsgnPrm'] = {
    init: function () {

      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('=');
      this.appendValueInput("text1")
        .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Este bloque es util para asignar un valor por defecto a uno de los argumentos de una función');
      this.setHelpUrl('');
    },
  };

  Blocks['webbltext'] = {
    init: function () {

      this.appendValueInput("NAME")
        .setCheck(null);

      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip("Este bloque sirve para ingresar texto, y evitar escribir comillas \(\"\"\) manualmente");
      this.setHelpUrl("");
    }
  };

  Blocks['webpass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('No hacer nada y ejecutar el siguiente bloque');
    },
  };



  Blocks['global'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('global ')
      this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Convertir una variable en variable global para poder ser modificada desde una función.');
      this.setHelpUrl('');
    },
  };

  Blocks['webvarprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
      this.appendValueInput('var')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Imprimir en consola una variable, un numero, o un texto.');
    },
  };

  Blocks['webint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('int(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Convertir a numero entero');

    },
  };

  Blocks['input_web'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("input(");
      this.appendValueInput("NAME")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip("Este bloque imprime en pantalla el texto asignado y retorna el valor ingresado en consola");
      this.setHelpUrl("");
    }
  };

  Blocks['webstr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('str(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Convertir a texto');
    },
  };
}

