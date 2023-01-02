"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @param {Boolean} openstatus
 * @param {String} text
 * @returns {HTMLElement}
 */
function Modal(props) {
  // Set the display of the modal 
  // const [open, setOpen] = useState(true);

  console.log(props.openstatus, props.text);
  return /*#__PURE__*/_react.default.createElement("div", null, props.openstatus ? /*#__PURE__*/_react.default.createElement(ModalBg, {
    className: "modalBG"
  }, /*#__PURE__*/_react.default.createElement(ModalContent, null, /*#__PURE__*/_react.default.createElement(ModalBody, null, /*#__PURE__*/_react.default.createElement(ModalText, null, " ", props.text, " "), /*#__PURE__*/_react.default.createElement(ModalButton, {
    onClick: function onClick() {
      document.getElementsByClassName('modalBG')[0].style.display = "none";
    }
  }, "  ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa",
    icon: _freeSolidSvgIcons.faClose
  }), " ")))) : /*#__PURE__*/_react.default.createElement(ModalNone, {
    className: "modalNone"
  }));
}

var ModalBg = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: rgb(58 59 66 / 40%);\n\n"])));
var ModalNone = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: none;\n"])));
var ModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 17% auto;\n  width: 100%;\n  max-width: 500px;\n  background: #ffffff;\n  border-radius: 10px;\n  position: relative;\n  z-index: 2;\n  color:#232323;\n  padding-top: 10px;\n  height:50px;\n"])));
var ModalBody = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: space-between;\n  width: 99%;\n  z-index: inherit;\n"])));
var ModalText = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 22px;\n  padding-left:5%;\n"])));
var ModalButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   margin-top: -5%;\n   margin-right: -5%;\n   position: relative;\n   z-index: 2;\n   background: black;\n   border-radius: 50%;\n   border-color: transparent;\n   width: 40px;\n   height:40px;\n   .fa{\n    font-size: 20px;\n    font-weight: bold;\n    color:white;\n   \n   }\n \n"])));
Modal.propTypes = {
  text: _propTypes.default.string,
  OpenStatus: _propTypes.default.bool
};
Modal.defaultProps = {
  openstatus: false,
  text: ""
};