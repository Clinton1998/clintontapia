(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Hello.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Hello.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _components_Hello_HeaderHello_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hello/HeaderHello.vue */ "./resources/js/components/Hello/HeaderHello.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  layout: function layout(h, page) {
    return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
  },
  props: {
    professional: {
      type: Object,
      "default": function _default() {
        return null;
      }
    }
  },
  mounted: function mounted() {
    $(window).trigger('scroll');
    animateHeaders({
      "#hello_header": '90%'
    });
    $('.site-btn').mbClicker({
      size: 300,
      speed: 750,
      colour: 'rgba(0,0,0,0.11)',
      shadow: false,
      buttonAnimation: true
    });
    var url = this.$route('page.hello');
    $('meta[property="og:url"]').attr('content', url);
    $('link[rel="canonical"]').attr('href', url);
  },
  components: {
    HeaderHello: _components_Hello_HeaderHello_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    professional: {
      type: Object,
      "default": function _default() {
        return null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-hello", { attrs: { professional: _vm.professional } }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "container section", attrs: { id: "hello" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c(
                "h2",
                {
                  staticClass: "section__title",
                  attrs: { id: "hello_header" }
                },
                [
                  _vm._v(
                    "Hola soy " +
                      _vm._s(_vm.professional.name) +
                      " " +
                      _vm._s(_vm.professional.first_last_name) +
                      "_"
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "section__description text-justify",
                domProps: { textContent: _vm._s(_vm.professional.presentation) }
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "section_btn site-btn",
                  attrs: {
                    href: _vm.$route("cv.download", [_vm.professional.id]),
                    cdownload: _vm.professional.cv_download
                  }
                },
                [
                  _c("img", {
                    attrs: { src: "assets/img/img_btn_icon.png", alt: "" }
                  }),
                  _vm._v("Descargar CV")
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    {
      staticClass: "main-header",
      style: "background-image: url(" + _vm.professional.cover_image + ")"
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row personal-profile" }, [
          _c("div", { staticClass: "col-md-4 personal-profile__avatar" }, [
            _c("img", {
              attrs: { src: _vm.professional.photography, alt: "avatar" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("p", { staticClass: "personal-profile__name" }, [
              _vm._v(
                _vm._s(_vm.professional.name) +
                  " " +
                  _vm._s(_vm.professional.first_last_name) +
                  "_"
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "personal-profile__work" },
              _vm._l(_vm.professional.charges, function(charge, index) {
                return _c("span", { key: charge.id }, [
                  _vm._v(
                    _vm._s(charge.title) +
                      _vm._s(
                        _vm.professional.charges.length - 1 == index ? "" : ", "
                      )
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "personal-profile__contacts" }, [
              _c(
                "dl",
                { staticClass: "contact-list contact-list__opacity-titles" },
                [
                  _c("dt", [_vm._v("Edad:")]),
                  _vm._v(" "),
                  _c("dd", [_vm._v(_vm._s(_vm.professional.age))]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Teléfono:")]),
                  _vm._v(" "),
                  _c("dd", [
                    _c(
                      "a",
                      { attrs: { href: "tel:" + _vm.professional.phone } },
                      [_vm._v(_vm._s(_vm.professional.phone))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Correo:")]),
                  _vm._v(" "),
                  _c("dd", [
                    _c(
                      "a",
                      { attrs: { href: "mailto:" + _vm.professional.email } },
                      [_vm._v(_vm._s(_vm.professional.email))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", [_vm._v("Dirección:")]),
                  _vm._v(" "),
                  _c("dd", [_vm._v(_vm._s(_vm.professional.address))])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "personal-profile__social" },
              _vm._l(_vm.professional.socials, function(social) {
                return _c(
                  "a",
                  {
                    key: social.id,
                    attrs: { href: social.url, target: "_blank" }
                  },
                  [_c("i", { class: social.class_icon })]
                )
              }),
              0
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Hello.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Hello.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello.vue?vue&type=template&id=a468400e& */ "./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e&");
/* harmony import */ var _Hello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hello.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Hello.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Hello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Hello.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Hello.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Hello.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Hello.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Hello.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Hello.vue?vue&type=template&id=a468400e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Hello.vue?vue&type=template&id=a468400e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_a468400e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Hello/HeaderHello.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Hello/HeaderHello.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderHello.vue?vue&type=template&id=fb58bce6& */ "./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6&");
/* harmony import */ var _HeaderHello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderHello.vue?vue&type=script&lang=js& */ "./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderHello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hello/HeaderHello.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderHello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderHello.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hello/HeaderHello.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderHello_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderHello.vue?vue&type=template&id=fb58bce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hello/HeaderHello.vue?vue&type=template&id=fb58bce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderHello_vue_vue_type_template_id_fb58bce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);