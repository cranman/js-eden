function observable_dialog(symbol,existing) {
	var myeditor;

	$code_html = '<div id="obs_inspector_' + symbol.name.substr(1) + '" class="obs_inspector"><div></div><pre class="eden exec">';
	if (symbol.definition === undefined) {
		$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
	} else {
		$code_html = $code_html + symbol.eden_definition + ';';
	}
	$code_html = $code_html + "</pre></div>";

	if (existing === undefined) {
		$dialog = $('<div></div>');
		$dialog.html($code_html);
		$dialog.dialog({
			title: 'Observable: ' + symbol.name.substr(1),
			width: 350,
			height: 150,
			minWidth: 250,
			minHeight: 150,
			buttons: {
					Save: function() {
						try {
							eden.addHistory(myeditor.getValue());
							eval(Eden.translateToJavaScript(myeditor.getValue()));
							//myeditor.setValue("");
							//printSymbolTable();
							//printAllUpdates();
							//eden.saveLocalModelState();
						} catch(e) {
							$('#error-window').addClass('ui-state-error').append("<div class=\"error-item\">## ERROR number " + eden.errornumber + ":<br>\n" + e.message + "</div>\r\n\r\n").dialog({title:"EDEN Errors"});
							eden.errornumber = eden.errornumber + 1;
						}
					}
				}
		});
		myeditor = convertToEdenPageNew('#obs_inspector_'+symbol.name.substr(1),'defedit');
		$dialog.get(0).editor = myeditor;
		return $dialog;
	} else {
		$code_html = "";
		if (symbol.definition === undefined) {
			$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
		} else {
			$code_html = $code_html + symbol.eden_definition + ';';
		}

		existing.dialog("open");
		existing.get(0).editor.setValue($code_html);
		return existing;
	}

	
};

function function_dialog(symbol, existing) {
	var myeditor;

	$code_html = '<div id="obs_inspector_' + symbol.name.substr(1) + '" class="obs_inspector"><div></div><pre class="eden exec">';
	if (symbol.definition === undefined) {
		$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
	} else {
		$code_html = $code_html + symbol.eden_definition + ';';
	}
	$code_html = $code_html + "</pre></div>";

	if (existing === undefined) {
		$dialog = $('<div></div>');
		$dialog.html($code_html);
		$dialog.dialog({
			title: 'Function: ' + symbol.name.substr(1),
			width: 350,
			height: 250,
			minWidth: 250,
			minHeight: 150,
			buttons: {
					Save: function() {
						try {
							eden.addHistory(myeditor.getValue());
							eval(Eden.translateToJavaScript(myeditor.getValue()));
							//myeditor.setValue("");
							//printSymbolTable();
							//printAllUpdates();
							//eden.saveLocalModelState();
						} catch(e) {
							$('#error-window').addClass('ui-state-error').append("<div class=\"error-item\">## ERROR number " + eden.errornumber + ":<br>\n" + e.message + "</div>\r\n\r\n").dialog({title:"EDEN Errors"});
							eden.errornumber = eden.errornumber + 1;
						}
					}
				}
		});
		myeditor = convertToEdenPageNew('#obs_inspector_'+symbol.name.substr(1),'defedit');
		$dialog.get(0).editor = myeditor;
		return $dialog;
	} else {
		$code_html = "";
		if (symbol.definition === undefined) {
			$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
		} else {
			$code_html = $code_html + symbol.eden_definition + ';';
		}

		existing.dialog("open");
		existing.get(0).editor.setValue($code_html);
		return existing;
	}
};

function procedure_dialog(symbol, existing) {
	var myeditor;

	$code_html = '<div id="obs_inspector_' + symbol.name.substr(1) + '" class="obs_inspector"><div></div><pre class="eden exec">';
	if (symbol.definition === undefined) {
		$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
	} else {
		$code_html = $code_html + symbol.eden_definition + ';';
	}
	$code_html = $code_html + "</pre></div>";

	if (existing === undefined) {
		$dialog = $('<div></div>');
		$dialog.html($code_html);
		$dialog.dialog({
			title: 'Procedure: ' + symbol.name.substr(1),
			width: 350,
			height: 250,
			minWidth: 250,
			minHeight: 150,
			buttons: {
					Save: function() {
						try {
							eden.addHistory(myeditor.getValue());
							eval(Eden.translateToJavaScript(myeditor.getValue()));
							//myeditor.setValue("");
							//printSymbolTable();
							//printAllUpdates();
							//eden.saveLocalModelState();
						} catch(e) {
							$('#error-window').addClass('ui-state-error').append("<div class=\"error-item\">## ERROR number " + eden.errornumber + ":<br>\n" + e.message + "</div>\r\n\r\n").dialog({title:"EDEN Errors"});
							eden.errornumber = eden.errornumber + 1;
						}
					}
				}
		});
		myeditor = convertToEdenPageNew('#obs_inspector_'+symbol.name.substr(1),'defedit');
		$dialog.get(0).editor = myeditor;
		return $dialog;
	} else {
		$code_html = "";
		if (symbol.definition === undefined) {
			$code_html = $code_html + symbol.name.substr(1) + " = " + symbol.value() + ';';
		} else {
			$code_html = $code_html + symbol.eden_definition + ';';
		}

		existing.dialog("open");
		existing.get(0).editor.setValue($code_html);
		return existing;
	}
};
