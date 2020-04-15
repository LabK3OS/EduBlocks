export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['webifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if');
      this.appendValueInput("iftext")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
      this.setTooltip('Se ejecutan los bloques internos, en caso de que la condición se cierta');
      this.setHelpUrl('');
    },
  };

  Blocks['webelifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif');
      this.appendValueInput('iftext')
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
      this.setTooltip('Se ejecutan los bloques internos, en caso de que el contenido del bloque if anterior no se halla ejecutado, y la condición se cierta');
      this.setHelpUrl('');
    },
  };

  Blocks['webelse'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('else:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#49B04D");
      this.setTooltip('Se ejecutan los bloques internos, en caso de que los bloques if o elif anteriores, no hallan ejecutado los bloques en su interior');
      this.setHelpUrl('');
    },
  };
  
  Blocks['webinternal'] = {
    init: function() {
        // should you translate to other languages
        // var rtlOperators = [
        //     // ['=', 'EQ'],
        //     // ['\u2260', 'NEQ'],
        //     ['\u200F<\u200F', 'LT'],
        //     ['\u200F\u2264\u200F', 'LTE'],
        //     ['\u200F>\u200F', 'GT'],
        //     ['\u200F\u2265\u200F', 'GTE']
        //   ];
          var ltrOperators = [
            ['==', '=='],
            ['!=', '!='],
            ['<', '<'],
            ['<=', '<='],
            ['>', '>'],
            ['>=', '>=']
          ];
          var OPERATORS = ltrOperators;
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(OPERATORS), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
      this.setTooltip("Con este bloque se realizan las comparaciones que retornan verdadero o falso, y son utilizadas en la condición del bloque if, elif ");
      this.setHelpUrl("");
    }
  };

  Blocks['webandor'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
      this.setTooltip("Con este bloque, es posible hacer operaciones lógicas");
      this.setHelpUrl("");
    }
  };

  Blocks['webnot'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('not'); 
      this.appendValueInput("bool")
        .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#49B04D");
      this.setTooltip('Convierte un valor verdadero en falso y viceversa');
    },
  };

  
}

