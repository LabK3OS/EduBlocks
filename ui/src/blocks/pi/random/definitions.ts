export default function define(Blocks: Blockly.BlockDefinitions) {
  let rand_col = "#8BC248"

  Blocks['random_choice'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.choice(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Retorna aleatoriamente un elemento de una lista.");
      this.setHelpUrl("");
    }
  };
 
  Blocks['random_randint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randint(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(",");
        this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Retorna un numero entero aleatorio entre [minimo, maximo).");
      this.setHelpUrl("");
    }
  };

  Blocks['random_random'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.random()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Retorna un numero real aleatorio entre [0, 1).");
      this.setHelpUrl("");
    }
  };

  Blocks['random_randrange'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randrange(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(",");
      this.appendValueInput("text1")      
        .setCheck(null);
        this.appendDummyInput()
        .appendField(",");
      this.appendValueInput("text2")      
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Retorna un numero entero en el rango (minimo,maximo], con un paso definido por el usuario. Ejemplo: (0,7,2) podrá generar los números 0, 2, 4, 6.");
    }
  };

  Blocks['random_seed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.seed(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Cambiar semilla de generación de números aleatorios.");
      this.setHelpUrl("");
    }
  };

  Blocks['random_shuffle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.shuffle(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Reorganizar lista de forma aleatoria.");
      this.setHelpUrl("");
    }
  };

}

