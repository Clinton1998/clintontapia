(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    testimonies: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  layout: function layout(h, page) {
    return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
  },
  mounted: function mounted() {
    $(window).trigger('scroll');
    animateHeaders({
      "#testimonials_header": '90%'
    });
    $('.carousel').carousel({
      pause: "hover",
      interval: 5000
    });
    var url = this.$route('page.testimonials');
    $('meta[property="og:url"]').attr('content', url);
    $('link[rel="canonical"]').attr('href', url);
  },
  methods: {
    prev: function prev() {
      $(".carousel").carousel("prev");
    },
    next: function next() {
      $(".carousel").carousel("next");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "section mt-4", attrs: { id: "testimonials" } },
    [
      _c(
        "div",
        {
          staticClass: "background slider-carousel",
          staticStyle: { "background-image": "url(assets/img/img_bg_main.jpg)" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass: "carousel slide",
                attrs: { id: "carouselTestimonials", "data-ride": "carousel" }
              },
              [
                _c(
                  "ol",
                  { staticClass: "carousel-indicators" },
                  _vm._l(_vm.testimonies, function(testimony, index) {
                    return _c("li", {
                      key: testimony.id,
                      class: { active: index === 0 },
                      attrs: {
                        "data-target": "#carouselTestimonials",
                        "data-slide-to": index
                      }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "carousel-inner", attrs: { role: "listbox" } },
                  _vm._l(_vm.testimonies, function(testimony, index) {
                    return _c(
                      "div",
                      {
                        key: testimony.id,
                        staticClass: "carousel-item",
                        class: { active: index === 0 }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-10 col-sm-10 col-10 mr-auto ml-auto"
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "slider-carousel__title" },
                                [_vm._v(_vm._s(testimony.name))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "slider-carousel__caption" },
                                [
                                  _vm._v(
                                    "Project: " + _vm._s(testimony.project)
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "slider-carousel__description" },
                                [_vm._v(_vm._s(testimony.description))]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "carousel-control-prev",
                    attrs: { href: "#", role: "button", "data-slide": "prev" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.prev($event)
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "carousel-control-prev-icon",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [_vm._v("Anterior")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "carousel-control-next",
                    attrs: { href: "#", role: "button", "data-slide": "next" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.next($event)
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "carousel-control-next-icon",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("Siguiente")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slider-carousel__circle" }, [
      _c("p", [
        _c("i", {
          staticClass: "fa fa-quote-right",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Testimonials.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Testimonials.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=template&id=60b86846& */ "./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846&");
/* harmony import */ var _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=template&id=60b86846& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Testimonials.vue?vue&type=template&id=60b86846&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_60b86846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);