import t,{Component as e}from"react";import n from"prop-types";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?l(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}var d="styles_Editext__button__6H8n_",_="styles_Editext__input__1534X",p="styles_Editext__main_container__2Y-IL",f="styles_Editext__editing_container__3yvUv",v="styles_Editext__view_container__2l2kB",h="styles_Editext__buttons_container__1kphL",y="styles_Editext__buttons_showButtonsOnHover__EUUD5",b="styles_Editext__buttons_before_aligned__NnoWq",m="styles_Editext__buttons_after_aligned__1nlcG",g="styles_Editext__validation_message__3B-OU",x="styles_Editext__cancel_button__259hb",E="styles_Editext__edit_button__hthOZ",w="styles_Editext__save_button__3WN6q",C="styles_Editext__hide_default_icons__AV_7m",O="styles_Editext__hint__2QU2S";function B(){return Array.apply(void 0,arguments).filter((function(t){return t})).join(" ")}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('.styles_Editext__button__6H8n_ {\n  border-radius: 1px;\n  outline: none;\n  padding: 0.6em;\n  min-width: 30px;\n  height: 100%;\n  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.styles_Editext__button__6H8n_:hover {\n  cursor: pointer;\n  background-color: rgba(241, 241, 241, 1);\n}\n\n.styles_Editext__input__1534X {\n  width: 100%;\n  border: 1px solid rgb(212, 212, 212);\n  padding: 0.6em;\n  outline: none;\n}\n\n.styles_Editext__main_container__2Y-IL {\n  display: flex;\n  flex-direction: column;\n}\n\n.styles_Editext__editing_container__3yvUv {\n  display: flex;\n  flex: 1;\n  align-items: center;\n}\n\n.styles_Editext__view_container__2l2kB {\n  display: flex;\n  align-items: center;\n}\n\n.styles_Editext__buttons_container__1kphL {\n  display: flex;\n}\n\n.styles_Editext__buttons_showButtonsOnHover__EUUD5 .styles_Editext__buttons_container__1kphL {\n  visibility: hidden;\n}\n\n.styles_Editext__buttons_showButtonsOnHover__EUUD5:hover .styles_Editext__buttons_container__1kphL {\n  visibility: visible;\n}\n\n.styles_Editext__buttons_before_aligned__NnoWq {\n  margin-right: 5px;\n}\n\n.styles_Editext__buttons_after_aligned__1nlcG {\n  margin-left: 5px;\n}\n\n.styles_Editext__validation_message__3B-OU {\n  font-weight: 500;\n  color: crimson;\n  font-size: 0.7em;\n  margin-top: 3px;\n}\n\n.styles_Editext__cancel_button__259hb {\n  color: crimson;\n}\n\n.styles_Editext__cancel_button__259hb::before {\n  content: "\\2715";\n  margin: 3px;\n}\n\n.styles_Editext__edit_button__hthOZ {\n  color: #000;\n}\n\n.styles_Editext__edit_button__hthOZ::before {\n  content: "\\270E";\n  margin: 3px;\n}\n\n.styles_Editext__save_button__3WN6q {\n  color: darkgreen;\n  margin-right: 3px;\n}\n\n.styles_Editext__save_button__3WN6q::before {\n  content: "\\2713";\n  margin: 3px;\n}\n\n.styles_Editext__hide_default_icons__AV_7m::before {\n  content: none;\n  margin: 0;\n}\n\n.styles_Editext__hint__2QU2S {\n  font-weight: 500;\n  color: lightslategray;\n  font-size: 0.7em;\n  margin-top: 3px;\n  text-align: left;\n}\n');var N="view-container",k="edit-container",P="edit-button",D="save-button",S="cancel-button",F="input",U="hint",I=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(j,e);var s,c,I,V=u(j);function j(e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,j),i(l(n=V.call(this,e)),"handleKeyDown",(function(t){var e=n.props,o=e.submitOnEnter,i=e.inputProps,a=e.cancelOnEscape,s=[13,"Enter"].some((function(e){return t.keyCode===e||t.code===e})),r=[27,"Escape","Esc"].some((function(e){return t.keyCode===e||t.code===e}));s&&(o&&n.handleSave(),t.preventDefault()),r&&(a&&n.handleCancel(),t.preventDefault()),i.onKeyDown&&i.onKeyDown(t)})),i(l(n),"handleOnBlur",(function(t){var e=n.props,o=e.cancelOnUnfocus,i=e.submitOnUnfocus,a=e.inputProps,s=n.editingButtons.current.contains(t.relatedTarget);o&&!s&&n.handleCancel(),i&&!s&&!o&&n.handleSave(),a.onBlur&&a.onBlur(t)})),i(l(n),"handleViewFocus",(function(t){n.setState({viewFocused:!0});var e=n.props,o=e.startEditingOnFocus,i=e.viewProps;o&&n.setState({editing:!0}),i.onFocus&&i.onFocus(t)})),i(l(n),"handleKeyDownForView",(function(t){var e=[13,"Enter"].some((function(e){return t.keyCode===e||t.code===e})),o=n.props,i=o.startEditingOnEnter,a=o.viewProps,s=e&&n.state.viewFocused&&i;s&&t.preventDefault(),s&&n.setState({editing:!0}),a.onKeyDown&&a.onKeyDown(t)})),i(l(n),"handleInputChange",(function(t){n.setState({valid:!0,value:t.target.value})})),i(l(n),"handleCancel",(function(){n.setState({valid:!0,editing:!1,value:n.state.savedValue||n.props.value},(function(){return n.props.onCancel(n.state.value,n.props.inputProps)}))})),i(l(n),"handleActivateEditMode",(function(){n.setState({editing:!0},(function(){n.props.onEditingStart(n.state.value)}))})),i(l(n),"handleSave",(function(){var t=n.props,e=t.onSave,o=t.validation,i=t.onValidationFail,a=t.inputProps;if(!o(n.state.value))return n.setState({valid:!1},(function(){i&&i(n.state.value)}));n.setState({editing:!1,savedValue:n.state.value},(function(){return e(n.state.savedValue,a)}))})),i(l(n),"_renderEditingMode",(function(){var e=n.props,o=e.saveButtonClassName,i=e.saveButtonContent,a=e.cancelButtonClassName,s=e.editContainerClassName,r=e.viewContainerClassName,l=e.cancelButtonContent,c=e.onValidationFail,u=e.validationMessage,_=e.hint,p=e.hideIcons,v=e.buttonsAlign,y=n._renderInput(),E=B("".concat(d),"".concat(w),p&&"".concat(C)),N=o||E,P=B("".concat(d),"".concat(x),p&&"".concat(C)),F=a||P,I=f;s&&(I=s),r&&(I=r);var V=B(h,"before"===v&&"".concat(b),"after"===v&&"".concat(m));return t.createElement("div",null,t.createElement("div",{ref:n.editingContainer,className:I,editext:k},"after"===v&&y,t.createElement("div",{className:V,ref:n.editingButtons},t.createElement("button",{ref:n.saveButton,editext:D,type:"button",className:N,onClick:n.handleSave},i),t.createElement("button",{type:"button",editext:S,className:F,onClick:n.handleCancel},l)),"before"===v&&y),!n.state.valid&&!c&&t.createElement("div",{className:g},u),_&&t.createElement("div",{className:O,editext:U},_))})),i(l(n),"_renderViewMode",(function(){var e=n.props,o=e.viewProps,i=e.editButtonClassName,s=e.editButtonContent,r=e.viewContainerClassName,l=e.hideIcons,c=e.buttonsAlign,u=e.editOnViewClick,_=e.showButtonsOnHover,p=B("".concat(d),"".concat(E),l&&"".concat(C)),f=i||p,g=B(r||v,_&&"".concat(y)),x=B(h,"before"===c&&"".concat(b),"after"===c&&"".concat(m)),w=u?n.handleActivateEditMode:void 0;return t.createElement("div",{className:g,editext:N},"after"===c&&t.createElement("div",a({tabIndex:n.props.tabIndex},o,{onKeyDown:n.handleKeyDownForView,onFocus:n.handleViewFocus,onClick:w,editext:"view"}),n.state.value),t.createElement("div",{className:x},t.createElement("button",{type:"button",editext:P,className:f,onClick:n.handleActivateEditMode},s)),"before"===c&&t.createElement("div",a({tabIndex:n.props.tabIndex},o,{onKeyDown:n.handleKeyDownForView,onFocus:n.handleViewFocus,onClick:w,editext:N}),n.state.value))})),n.state={editing:e.editing,valid:!0,value:e.value||"",savedValue:"",viewFocused:!1},n.saveButton=t.createRef(),n.input=t.createRef(),n.editingContainer=t.createRef(),n.editingButtons=t.createRef(),n}return s=j,(c=[{key:"componentDidMount",value:function(){this.checkPropsConsistency()}},{key:"checkPropsConsistency",value:function(){this.props.cancelOnUnfocus&&this.props.submitOnUnfocus&&console.warn("EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. `submitOnUnfocus` is ignored in this case. Please remove one of these.")}},{key:"componentDidUpdate",value:function(t,e){var n={};void 0!==this.props.value&&t.value!==this.props.value&&(n.value=this.props.value),void 0!==t.editing&&t.editing!==this.props.editing&&(n.editing=this.props.editing),Object.keys(n).length>0&&this.setState(n)}},{key:"_renderInput",value:function(){return"textarea"===this.props.type?t.createElement("textarea",a({ref:this.input,className:_,editext:F,tabIndex:this.props.tabIndex},this.props.inputProps,{onBlur:this.handleOnBlur,value:this.state.value,onChange:this.handleInputChange,autoFocus:this.state.editing})):t.createElement("input",a({ref:this.input,className:_,editext:F,tabIndex:this.props.tabIndex},this.props.inputProps,{onKeyDown:this.handleKeyDown,onBlur:this.handleOnBlur,value:this.state.value,type:this.props.type,onChange:this.handleInputChange,autoFocus:this.state.editing}))}},{key:"render",value:function(){var e=this.state.editing?this._renderEditingMode():this._renderViewMode(),n=this.props,o=n.mainContainerClassName,i=n.className,a=B(o||p,i);return t.createElement("div",{className:a},e)}}])&&o(s.prototype,c),I&&o(s,I),j}();I.defaultProps={value:"",type:"text",validationMessage:"Invalid Value",validation:function(t){return!0},onEditingStart:function(t){return null},onCancel:function(t){return null},inputProps:{onKeyDown:function(t){},onBlur:function(t){},onFocus:function(t){}},viewProps:{onKeyDown:function(t){},onFocus:function(t){}},cancelButtonContent:"",saveButtonContent:"",editButtonContent:"",hideIcons:!1,buttonsAlign:"after",editing:!1},I.propTypes={inputProps:n.object,viewProps:n.object,value:n.string.isRequired,hint:n.node,validationMessage:n.node,validation:n.func,onValidationFail:n.func,type:n.oneOf(["text","textarea","password","email","number","date","datetime-local","time","month","url","week","tel"]).isRequired,onCancel:n.func,onSave:n.func.isRequired,onEditingStart:n.func,className:n.string,saveButtonClassName:n.string,editButtonClassName:n.string,cancelButtonClassName:n.string,mainContainerClassName:n.string,editContainerClassName:n.string,viewContainerClassName:n.string,cancelButtonContent:n.any,saveButtonContent:n.any,editButtonContent:n.any,hideIcons:n.bool,buttonsAlign:n.oneOf(["after","before"]),editOnViewClick:n.bool,editing:n.bool,showButtonsOnHover:n.bool,submitOnEnter:n.bool,cancelOnEscape:n.bool,cancelOnUnfocus:n.bool,submitOnUnfocus:n.bool,tabIndex:n.any,startEditingOnFocus:n.bool,startEditingOnEnter:n.bool};export default I;
//# sourceMappingURL=index.es.js.map
