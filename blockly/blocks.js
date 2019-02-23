Blockly.Blocks['eim_broadcast'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.eim_broadcast)
        .appendField(new Blockly.FieldVariable("eim"), "eim");
    this.appendValueInput("topic")
        .setCheck("String")
        .appendField(Blockly.Msg.eim_topic);
    this.appendValueInput("payload")
        .setCheck("String")
        .appendField(Blockly.Msg.eim_payload);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eim_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.eim_message)
        .appendField(new Blockly.FieldVariable("eim"), "eim");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eim_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.eim)
        .appendField(new Blockly.FieldTextInput("python"), "eim_name");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eim_listen'] = {
  init: function() {
    this.appendValueInput('topic')
        .setCheck(null)
        .appendField(Blockly.Msg.eim_listen)
        .appendField(new Blockly.FieldVariable("eim"), "eim")
        .appendField(Blockly.Msg.eim_topic);
    this.appendStatementInput("event")
        .setCheck(null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eim_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.eim_info);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dict_get'] = {
  init: function() {
    this.appendValueInput('dict')
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("payload"), "payload");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
