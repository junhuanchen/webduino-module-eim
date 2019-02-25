
Blockly.JavaScript['eim_broadcast'] = function (block) {
  var variable_eim = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('eim'), Blockly.Variables.NAME_TYPE);
  var value_topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var value_payload = Blockly.JavaScript.valueToCode(block, 'payload', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(eim_broadcast(variable_eim, value_topic, value_payload));
  return code;
};

Blockly.JavaScript['eim_message'] = function(block) {
  var variable_eim = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('eim'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '{0}'.format(eim_message(variable_eim));
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['eim_create'] = function (block) {
  var text_eim_name = block.getFieldValue('eim_name');
  // TODO: Assemble JavaScript into code variable.
  var code = eim_create(text_eim_name);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['eim_listen'] = function (block) {
  var variable_eim = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('eim'), Blockly.Variables.NAME_TYPE);
  var value_topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_event = Blockly.JavaScript.statementToCode(block, 'event');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(eim_listen(variable_eim, value_topic, statements_event));
  return code;
};

Blockly.JavaScript['eim_info'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = Blockly.Msg.eim_info;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dict_get'] = function(block) {
  var text_payload = block.getFieldValue('payload');
  var value_dict = Blockly.JavaScript.valueToCode(block, 'dict', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '{0}["{1}"]'.format(value_dict, text_payload);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
