export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importmb'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("import threads");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#ff0066");
      this.setTooltip("Importar librería de Multiproceso");
      this.setHelpUrl("");
    }
  };
  Blocks['createTH'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("CrearHilo")
        .appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]), 'num')
        .appendField("(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['startTH'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("iniciarHilo")
        .appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]), 'num')

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C227E2");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


}
