var editor = ace.edit("editor");
        editor.setTheme("ace/theme/tomorrow_night");
        editor.session.setMode("ace/mode/php");
        editor.setAutoScrollEditorIntoView(true);
        editor.setOption("maxLines", 30);
        editor.setOption("minLines", 15);
        editor.setValue(1);