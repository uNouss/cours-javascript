function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component =
/*#__PURE__*/
function () {
  function Component(tag, attribute, children) {
    _classCallCheck(this, Component);

    _defineProperty(this, "tag", void 0);

    _defineProperty(this, "children", void 0);

    _defineProperty(this, "attribute", void 0);

    this.tag = tag;
    this.children = children;
    this.attribute = attribute;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      if (this.children == null) {
        return this.attribute == null ? "<".concat(this.tag, " />") : "<".concat(this.tag, " ").concat(this.renderAttribute(), "\" />");
      } else {
        return this.attribute == null ? "<".concat(this.tag, ">").concat(this.renderChildren(), "</").concat(this.tag, ">") : "<".concat(this.tag, "  ").concat(this.renderAttribute(), "\">").concat(this.renderChildren(), "</").concat(this.tag, ">");
      }
    }
  }, {
    key: "renderAttribute",
    value: function renderAttribute() {
      return "".concat(this.attribute.name, "=\"").concat(this.attribute.value);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var child = '';

      if (this.children instanceof Array) {
        this.children.forEach(function (item) {
          child += item instanceof Component ? item.render() : item;
        });
      } else child = this.children;

      return child;
    }
  }]);

  return Component;
}();

export { Component as default };
//# sourceMappingURL=component.js.map