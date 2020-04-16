export default function define(Python: Blockly.BlockGenerators) {
  Python['importmb'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'import threading\n';
    return code;
  };

  Python['createTH'] = function (block) {
    var text_message = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text_choose = block.getFieldValue('num');
    // TODO: Assemble Python into code variable.
    var code = 'hilo'+ text_choose +' = threading.Thread(target = '+text_message +', name = "' + text_message +'")\n';
    return code;
  };

  Python['startTH'] = function (block) {
    var text_choose = block.getFieldValue('num');
    // TODO: Assemble Python into code variable.
    var code = 'hilo' + text_choose + '.start()\n';
    return code;
  };


}
