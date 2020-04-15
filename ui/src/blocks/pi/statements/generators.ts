export default function define(Python: Blockly.BlockGenerators) {
  Python['websleepnew'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' + value_name + ')\n';
    return code;
  };

  Python['webtypeanything'] = function (block) {
    var text_stuff = Blockly.Python.valueToCode(block, 'stuff', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = text_stuff + '# your own code\n';
    return code;
  };

  Python['webdf'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '(' + text_params + ')\n';
    return code;
  };



  Python['webrtdf'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '(' + text_params + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['commas'] = function (block) {
    const text_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
    const text_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC)
    const code = text_val1 + ',' + text_val2;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Python['webobj'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '.' + text_params + '\n';
    return code;
  };


  Python['webrtobj'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '.' + text_params;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['webbltext'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Python['webpass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['webAsgnObj'] = function (block) {
    var text1_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text2_print = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = text1_print + ' = ' + text2_print + '\n';
    return code;
  };
  Python['webAsgnPrm'] = function (block) {
    var text1_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var text2_print = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = text1_print + ' = ' + text2_print + '\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['global'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'global ' + text_print + '\n';
    return code;
  };

  Python['webvarprint'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['webint'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'int(' + value_bool + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['webstr'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'str(' + value_bool + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['input_web'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'input(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
