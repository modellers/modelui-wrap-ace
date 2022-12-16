// https://medium.com/@sgpropguide/using-aceeditor-in-react-2187f681539f
import React from 'react';
import AceEditor from "react-ace-builds"; // https://github.com/manubb/react-ace-builds
// import AceEditor from "../src/ace";
// import "react-ace-builds/webpack-resolver-min.js";
import "ace-builds/src-noconflict/ext-language_tools.js";

// defaults
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

// input base
import { structs } from 'modelui-core-runtime'

export const events = structs.InputBase.events;
export const triggers = structs.InputBase.triggers;

export const options = {
  "id": "code-editor",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "ACE options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "theme": { //  https://github.com/ajaxorg/ace/tree/master/lib/ace/theme
      "title": "theme",
      "description": "theme",
      "type": "string",
      "enum": ['ambiance', 'chaos', 'chrome', 'clouds', 'clouds_midnight', 'cobalt', 'crimson_editor', 'dawn', 'dracula', 'dreamweaver', 'eclilpse', 'github', 'gob', 'gruvbox', 'idle_fingers', 'iplastic', 'katzenmilch', 'kr_theme', 'kuroir', 'merbivore', 'merbivore_soft', 'mono_industrial', 'monokai', 'nord_dark', 'one_dark', 'pastel_on_dark', 'solarized_dark', 'solarized_light', 'sqlserver', 'terminal', 'textmate', 'tomorrow', 'tomorrow_night', 'tomorrown_night_blue', 'tomorrow_night_bright', 'tomorrow_night_eighties', 'twilight', 'vibrant_ink', 'xcode'],
      "default": "twilight"
    },
    "syntax": {
      "title": "syntax",
      "description": "syntax",
      "type": "string",
      "enum": ['abap', 'abc', 'actionscript', 'ada', 'ada_test', 'alda', 'apache_conf', 'apex', 'applescript', 'aql', 'asciidoc', 'asl', 'assembly_x86', 'autohotkey', 'batchfile', 'behaviour', 'c9search', 'c_cpp', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'crystal', 'csharp', 'csound_document', 'csound_orchestra', 'csound_score', 'csp', 'css', 'curly', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'edifact', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang', 'forth', 'fortran', 'fsharp', 'fsl', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'graphqlschema', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell_cabal', 'haxe', 'hjson', 'html', 'html_elixir', 'html_ruby', 'html_worker', 'ini', 'io', 'jack', 'jade', 'java', 'javascript', 'json', 'json5', 'jsoniq', 'jsp', 'jssm', 'jsx', 'julia', 'kotlin', 'latex', 'latte', 'less', 'liquid', 'lisp', 'livescript', 'logiql', 'logiql_test', 'logtalk', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matching_brace_outdent', 'matching_parens_outdent', 'matlab', 'maze', 'mediawiki', 'mel', 'mips', 'mixal', 'mushcode', 'mysql', 'nginx', 'nim', 'nix', 'nsis', 'nunjucks', 'objectivec', 'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'php_laravel_blade', 'pig', 'plain_text', 'powershell', 'praat', 'prisma', 'prolog', 'properties', 'protobuf', 'puppet', 'python', 'python_test', 'qml', 'r', 'raku', 'razor', 'rdoc', 'red', 'redshift', 'rhtml', 'rst', 'ruby', 'ruby_test', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scrypt', 'scss', 'sh', 'sjs', 'slim', 'smarty', 'smithy', 'snippets', 'soy_template', 'space', 'sparql', 'sql', 'sqlserver', 'stylus', 'svg', 'swift', 'tcl', 'terraform', 'tex', 'text', 'text_test', 'textile', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'vala', 'vbscript', 'vbscript_test', 'velocity', 'verilog', 'vhdl', 'visualforce', 'wollok', 'xml', 'xquery', 'yaml', 'zeek'],
      "default": "javascript"
    },
    "maxLines": {
      "title": "Max Lines",
      "description": "Max lines",
      "type": "number",
      "default": 1024
    },
    "fontSize": {
      "title": "Font Size",
      "description": "Font size",
      "type": "number",
      "default": 12
    },
    "tabSize": {
      "title": "Tab Size",
      "description": "Tab size",
      "type": "number",
      "default": 4
    },
    "tabWithSpaces": {
      "title": "Tab With Spaces",
      "description": "Tab with spaces",
      "type": "boolean",
      "default": true
    },
    "wrapMode": {
      "title": "Wrap Mode",
      "description": "Wrap Mode",
      "type": "boolean",
      "default": true
    },
    "highlight": {
      "title": "Highlight",
      "description": "Highlight",
      "type": "boolean",
      "default": true
    },
    "printMargin": {
      "title": "Print Margin",
      "description": "Print margin",
      "type": "boolean",
      "default": false
    },
    "enabled": {
      "title": "Enabled",
      "description": "Enabled",
      "type": "boolean",
      "default": true
    },
    /*
    "undo": {
      "title": "Undo",
      "description": "Undo",
      "type": "boolean",
      "default": true
    },*/
  },
  "required": ["theme", "syntax", "maxLines", "fontSize", "tabSize", "tabWithSpaces", "wrapMode", "highlight", "printMargin", "enabled"]
}

export const config = {
  name: "ACE",
  type: "code-editor",
  author: "Kjartan Jónsson",
  description: "ACE code editor component",
  version: 0.1,
  relation: {
    contains: ["grid-column"],
    within: "component" // parent
  },
  options: options,
  state: structs.InputBase.StateInput
}


class ACEComponent extends structs.InputBase.InputBase {
  /**
   * Set internal state of ACEComponent
   */
  constructor(props) {
    super(props);
    this.fix_id_hack = null;
    // FIXME: ace.config.set('basePath', 'path');
    this.updateViewStyle(this.props.config.options);
    this.ace = null;
  }

  onChange = (newValue, e) => {
    // schema: formatData (only if valid)
    // this.triggerEvent("validated", evt.formData, evt);
    // console.log(newValue, e);
    // Saves the value of the editor in state
    this.updateText(this.ace.editor.getValue(), true);
  }
  onBlur = (newValue, e) => { }
  onFocus = (newValue, e) => { }
  onChangeSelectionStyle = (newValue, e) => { }
  changeSession = (newValue, e) => { }
  onCopy = (newValue, e) => { }
  onPaste = (newValue, e) => { }

  updateViewStyle = (style) => {
    /*
    const defaultTheme = {
      enabled: config.options.enabled.default,
      theme: config.options.theme.default,
      syntax: config.options.syntax.default,
      fontSize: config.options.fontSize.default,
      tabSize: config.options.tabSize.default,
      tabWithSpaces: config.options.tabWithSpaces.default,
      maxLines: config.options.maxLines.default,
      wrapMode: config.options.wrapMode.default,
      highlight: config.options.highlight.default,
      printMargin: config.options.printMargin.default
    };
    this.viewStyle = this.viewStyle || defaultTheme;
    // check for changes
    if (this.viewStyle.theme !== style.theme) {
      // check if this is a valid selection
      // if (config.options.theme.control.options.find((str) => str === style.theme) === -1) { throw ("Invalid theme"); }
      // set the theme if exists
      // this.ace.editor.setTheme(style.theme);
      // this.ace.editor.setOption("theme", style.theme);
      debugger;
      this.ace.editor.setTheme("ace/theme/twilight");
    }
    */
    this.viewStyle = { ...this.viewStyle, ...style };
  }

  getActionState(action, callback) {
    if (this.ace) {
      if ((action === 'submit') || action === 'change') {
        // callback({ data: { value: this.form_instance.submit(); } })
        callback({ data: { value: this.ace.editor.getValue() } });
      } else { callback(); }
    } else { callback(); }
  }

  updateView = function (action, val, updated, data) {
    // extend by parent

    if (this.ace && this.ace.editor) {
      if (action === 'enable') {
        this.ace.editor.setReadOnly(false);
      }
      if (action === 'disable') {
        this.ace.editor.setReadOnly(true);
      }
      if (action === 'populate') {
        this.ace.editor.setValue(data.value || "");
      }
      if (action === 'replace') {
        this.ace.editor.setValue(data.value || "");
      }
      if (action === 'clear') {

      }
    }
    return true;
  };

  updateText = (text, skip_ace, id) => {
    const change = { value: text }
    // if (id !== undefined) { change.id = id; this.fix_id_hack = id; }
    // const updated_state = { ...this.state, ...change };
    // this.setState(updated_state);
    // if (!skip_ace) { this.ace.editor.setValue(text); }
    // Notify change
    if (this.stateManager) {
      this.stateManager.alterState({ data: change });
      this.triggerEvent('changed', change, {});
    }
  }

  render() {
    // additional configuration options
    let configProps = {};
    this.updateViewStyle(this.props.config.options);
    // submit button 
    const hide_submit = true;
    if (hide_submit) { configProps.children = <div></div>; }

    return (
      <AceEditor
        editorProps={{ $blockScrolling: Infinity }}
        // maxLines={500}
        mode={"javascript"}
        value={this.state.data.value}
        theme={"github" /* this.viewStyle.theme || "monokai" */}
        setReadOnly={!this.state.enabled}
        onChange={this.onChange}
        onChangeSelectionStyle={this.onChangeSelectionStyle}
        onChangeSession={this.changeSession}
        onCopy={this.onCopy}
        onPaste={this.onPaste}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        style={{ width: '100%', height: '100vh' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }

}

export default ACEComponent;