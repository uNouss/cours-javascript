function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Component from "./component.js";
import Img from "./img.js";

var PizzaThumbnail =
/*#__PURE__*/
function (_Component) {
  _inherits(PizzaThumbnail, _Component);

  function PizzaThumbnail(pizza) {
    var _this;

    _classCallCheck(this, PizzaThumbnail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PizzaThumbnail).call(this, 'article', {
      name: 'class',
      value: 'media'
    }, [new Component('a', {
      name: 'href',
      value: "images/".concat(pizza.nom, ".jpg")
    }, [new Img("images/".concat(pizza.nom.toLowerCase(), ".jpg")), new Component('section', {
      name: 'class',
      value: 'infos'
    }, [new Component('h4', null, 'Regina'), new Component('ul', null, [new Component('li', null, "Prix petit format : ".concat(pizza.prix_petite.toFixed(2))), new Component('li', null, "Prix grand format : ".concat(pizza.prix_grande.toFixed(2)))])])])]));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nom", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "base", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prix_petite", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prix_grande", void 0);

    return _this;
  }

  return PizzaThumbnail;
}(Component);

export { PizzaThumbnail as default };
//# sourceMappingURL=pizzaThumbnail.js.map