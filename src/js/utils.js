/**
jQuery extends replacemement
*/
Object.prototype.extends = function (out) {
    out = out || {};

    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) {
            continue;
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && typeof this[key] != 'undefined')
                    this[key].extends(obj[key]);
                else
                    this[key] = obj[key];
            }
        }
    }
    return this;
};

/**
Text cutter, using char sequence
*/
String.prototype.splitMultiple = function (chars) {
    if (typeof chars === 'undefined') {
        chars = "\n-";
    }
    var _chars = chars.split("");
    var _lines = this.split(_chars[0]);
    _chars.splice(0, 1);
    if (_chars.length === 0) {
        return _lines.map(function (elem) {
            return elem.trim();
        });
    }
    var _newlines = [];
    for (var i = 0; i < _lines.length; i++) {
        var _line = _lines[i].splitMultiple(_chars.join(""));
        if (_line.length > 1) {
            _newlines = _newlines.concat(_line);
        } else {
            _newlines.push(_line[0]);
        }
    }
    return _newlines;
};
