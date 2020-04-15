export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['webwhileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while');
      this.appendValueInput("cond")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('Este bloque se ejecuta de forma repetitiva en caso de que su condición sea cierta, en otro caso se termina bucle y se ejecuta el siguiente bloque');

    },
  };

  Blocks['webfor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('letter')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in range(');
      this.appendValueInput('no')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('Este bloque ejecuta el código a su interior, un numero de veces determinado por el rango seleccionado, se debe asignar una variable al bucle, que aumenta de uno en en uno por cada iteración del bucle');
    },
  };

  Blocks['webadvancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('x')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in');
      this.appendValueInput('y')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(":");
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('Este bloque ejecuta el código en su interior, por cada elemento presente en una lista, se debe asignar un elemento que tome el valor de de uno en uno, de todos los elemento de la lista');
    },
  };

  Blocks['web_break'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("break");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip("Este bloque rompe la ejecución de un bucle");
    }
  };

  Blocks['loop_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("i"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#644A9E");
      this.setTooltip("Bloque de variable de iteración");
    }
  };
}

