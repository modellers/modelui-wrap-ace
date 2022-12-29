import { structs, layout } from 'modelui-core-runtime';
import React from 'react';
import AceEditor from 'react-ace-builds';
import 'ace-builds/src-noconflict/ext-language_tools.js';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var events = structs.InputBase.events;
var triggers = structs.InputBase.triggers;
var options = {
  "id": "code-editor",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "ACE options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "theme": {
      //  https://github.com/ajaxorg/ace/tree/master/lib/ace/theme
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
    }
    /*
    "undo": {
      "title": "Undo",
      "description": "Undo",
      "type": "boolean",
      "default": true
    },*/

  },
  "required": ["theme", "syntax", "maxLines", "fontSize", "tabSize", "tabWithSpaces", "wrapMode", "highlight", "printMargin", "enabled"]
};
var config = {
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
};

var ACEComponent = /*#__PURE__*/function (_structs$InputBase$In) {
  _inherits(ACEComponent, _structs$InputBase$In);

  var _super = _createSuper(ACEComponent);

  /**
   * Set internal state of ACEComponent
   */
  function ACEComponent(props) {
    var _this;

    _classCallCheck(this, ACEComponent);

    _this = _super.call(this, props);

    _this.onChange = function (newValue, e) {
      // schema: formatData (only if valid)
      // this.triggerEvent("validated", evt.formData, evt);
      // console.log(newValue, e);
      // Saves the value of the editor in state
      _this.updateText(_this.ace.editor.getValue(), true);
    };

    _this.onBlur = function (newValue, e) {};

    _this.onFocus = function (newValue, e) {};

    _this.onChangeSelectionStyle = function (newValue, e) {};

    _this.changeSession = function (newValue, e) {};

    _this.onCopy = function (newValue, e) {};

    _this.onPaste = function (newValue, e) {};

    _this.updateViewStyle = function (style) {
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
      _this.viewStyle = _objectSpread2(_objectSpread2({}, _this.viewStyle), style);
    };

    _this.updateView = function (action, val, updated, data) {
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
      }

      return true;
    };

    _this.updateText = function (text, skip_ace, id) {
      var change = {
        value: text
      }; // if (id !== undefined) { change.id = id; this.fix_id_hack = id; }
      // const updated_state = { ...this.state, ...change };
      // this.setState(updated_state);
      // if (!skip_ace) { this.ace.editor.setValue(text); }
      // Notify change

      if (_this.stateManager) {
        _this.stateManager.alterState({
          data: change
        });

        _this.triggerEvent('changed', change, {});
      }
    };

    _this.fix_id_hack = null; // FIXME: ace.config.set('basePath', 'path');

    _this.updateViewStyle(_this.props.config.options);

    _this.ace = null;
    return _this;
  }

  _createClass(ACEComponent, [{
    key: "getActionState",
    value: function getActionState(action, callback) {
      if (this.ace) {
        if (action === 'submit' || action === 'change') {
          // callback({ data: { value: this.form_instance.submit(); } })
          callback({
            data: {
              value: this.ace.editor.getValue()
            }
          });
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      this.updateViewStyle(this.props.config.options); // submit button 

      return /*#__PURE__*/React.createElement(AceEditor, {
        editorProps: {
          $blockScrolling: Infinity
        } // maxLines={500}
        ,
        mode: "javascript",
        value: this.state.data.value,
        theme: "github"
        /* this.viewStyle.theme || "monokai" */
        ,
        setReadOnly: !this.state.enabled,
        onChange: this.onChange,
        onChangeSelectionStyle: this.onChangeSelectionStyle,
        onChangeSession: this.changeSession,
        onCopy: this.onCopy,
        onPaste: this.onPaste,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        style: {
          width: '100%',
          height: '100vh'
        },
        ref: function ref(instance) {
          _this2.ace = instance;
        } // Let's put things into scope

      });
    }
  }]);

  return ACEComponent;
}(structs.InputBase.InputBase);

function ACE(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React.createElement(ACEComponent, props);
}
function registerACE(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: ACE,
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = layout.Manager.ComponentManager.getInstance();
  }

  registerACE(component_manager);
}

export { registerComponents };
//# sourceMappingURL=index.esm.js.map
