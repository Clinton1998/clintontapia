(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _components_Portfolio_PortfolioMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Portfolio/PortfolioMenu.vue */ "./resources/js/components/Portfolio/PortfolioMenu.vue");
/* harmony import */ var _components_Portfolio_PortfolioCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Portfolio/PortfolioCard.vue */ "./resources/js/components/Portfolio/PortfolioCard.vue");
/* harmony import */ var _components_Portfolio_PortfolioModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Portfolio/PortfolioModal.vue */ "./resources/js/components/Portfolio/PortfolioModal.vue");
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
  layout: function layout(h, page) {
    return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
  },
  props: {
    categories: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    projects: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      lsProjects: [],
      project: null
    };
  },
  created: function created() {
    this.lsProjects = this.projects;
    this.project = this.lsProjects[0];
  },
  mounted: function mounted() {
    $(window).trigger('scroll');
    animateHeaders({
      "#portfolio_header": '90%'
    });
    var url = this.$route('page.portfolio');
    $('meta[property="og:url"]').attr('content', url);
    $('link[rel="canonical"]').attr('href', url);
  },
  methods: {
    getAllProjects: function getAllProjects() {
      this.lsProjects = this.projects;
    },
    getProjects: function getProjects(category_id) {
      var projects = this.projects;
      projects = projects.filter(function (project) {
        return project.category_id == category_id;
      });
      this.lsProjects = projects;
    },
    showProject: function showProject(project) {
      this.project = project;
      $('#portfolioModal').modal('show');
    }
  },
  components: {
    PortfolioMenu: _components_Portfolio_PortfolioMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PortfolioCard: _components_Portfolio_PortfolioCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PortfolioModal: _components_Portfolio_PortfolioModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    projects: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    showProject: function showProject(project) {
      this.$emit('show-project', project);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    categories: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      lsCategories: [],
      all: true
    };
  },
  created: function created() {
    this.lsCategories = this.categories;
  },
  methods: {
    getProjects: function getProjects(category_id) {
      if (category_id === 'all') {
        this.$emit('all-projects');
        this.all = true;
      } else {
        this.$emit('projects-category', category_id);
        this.all = false;
      }

      this.lsCategories = this.lsCategories.map(function (category) {
        if (category.id == category_id) {
          category.active = true;
        } else {
          category.active = false;
        }

        return category;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    project: {
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c(
        "section",
        { staticClass: "container section mt-3", attrs: { id: "portfolio" } },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("portfolio-menu", {
            attrs: { categories: _vm.categories },
            on: {
              "all-projects": _vm.getAllProjects,
              "projects-category": _vm.getProjects
            }
          }),
          _vm._v(" "),
          _c("portfolio-card", {
            attrs: { projects: _vm.lsProjects },
            on: { "show-project": _vm.showProject }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("portfolio-modal", { attrs: { project: _vm.project } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "h2",
          { staticClass: "section__title", attrs: { id: "portfolio_header" } },
          [_vm._v("Mis proyectos_")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "portfolio-cards" },
    _vm._l(_vm.projects, function(project) {
      return _c(
        "div",
        {
          key: project.id,
          staticClass: "row project-card",
          attrs: { "data-portfolio-tag": "web-sites" },
          on: {
            click: function($event) {
              return _vm.showProject(project)
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-6 col-lg-5 project-card__img" }, [
            _c("img", { attrs: { src: project.url_image, alt: "project-img" } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-7 project-card__info" }, [
            _c("h3", { staticClass: "project-card__title" }, [
              _vm._v(_vm._s(project.title))
            ]),
            _vm._v(" "),
            _c("p", {
              staticClass: "project-card__description",
              domProps: { innerHTML: _vm._s(project.short_description) }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "project-card__stack" }, [
              _vm._v("Stack usado:")
            ]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "tags" },
              _vm._l(project.stacks, function(stack) {
                return _c("li", { key: stack.id }, [_vm._v(_vm._s(stack.name))])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "project-card__link",
                attrs: { href: project.url, target: "_blank" }
              },
              [_vm._v(_vm._s(project.url))]
            )
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row portfolio-menu" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("nav", [
        _c(
          "ul",
          [
            _c("li", [
              _c(
                "a",
                {
                  class: { "portfolio-menu__link--active": _vm.all },
                  attrs: { href: "#", "data-portfolio-target-tag": "all" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.getProjects("all")
                    }
                  }
                },
                [_vm._v("Todo")]
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.lsCategories, function(category) {
              return _c("li", { key: category.title }, [
                _c(
                  "a",
                  {
                    class: { "portfolio-menu__link--active": category.active },
                    attrs: {
                      href: "#",
                      "data-portfolio-target-tag": category.title
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.getProjects(category.id)
                      }
                    }
                  },
                  [_vm._v(_vm._s(category.title))]
                )
              ])
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade portfolio-modal",
      attrs: {
        id: "portfolioModal",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body col-md-11 col-lg-9 ml-auto mr-auto" },
              [
                _c("p", { staticClass: "portfolio-modal__title" }, [
                  _vm._v(_vm._s(_vm.project.title))
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  { attrs: { href: _vm.project.url_image, target: "_blank" } },
                  [
                    _c("img", {
                      staticClass: "portfolio-modal__img",
                      attrs: { src: _vm.project.url_image, alt: "modal_img" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("p", {
                  staticClass: "portfolio-modal__description",
                  domProps: { innerHTML: _vm._s(_vm.project.description) }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "portfolio-modal__link" }, [
                  _c(
                    "a",
                    { attrs: { href: _vm.project.url, target: "_blank" } },
                    [_vm._v(_vm._s(_vm.project.url))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "portfolio-modal__stack" }, [
                  _c("p", { staticClass: "portfolio-modal__stack-title" }, [
                    _vm._v("Stack usado:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "tags" },
                    _vm._l(_vm.project.stacks, function(stack) {
                      return _c("li", { key: stack.id }, [
                        _vm._v(_vm._s(stack.name))
                      ])
                    }),
                    0
                  )
                ])
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Portfolio.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Portfolio.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=0a1941ef& */ "./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef&");
/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Portfolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=template&id=0a1941ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Portfolio.vue?vue&type=template&id=0a1941ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_0a1941ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortfolioCard.vue?vue&type=template&id=557a0ab6& */ "./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6&");
/* harmony import */ var _PortfolioCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioCard.vue?vue&type=script&lang=js& */ "./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PortfolioCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Portfolio/PortfolioCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioCard.vue?vue&type=template&id=557a0ab6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioCard.vue?vue&type=template&id=557a0ab6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioCard_vue_vue_type_template_id_557a0ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioMenu.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioMenu.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortfolioMenu.vue?vue&type=template&id=31fae585& */ "./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585&");
/* harmony import */ var _PortfolioMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PortfolioMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Portfolio/PortfolioMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioMenu.vue?vue&type=template&id=31fae585& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioMenu.vue?vue&type=template&id=31fae585&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMenu_vue_vue_type_template_id_31fae585___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioModal.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortfolioModal.vue?vue&type=template&id=27516912& */ "./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912&");
/* harmony import */ var _PortfolioModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PortfolioModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Portfolio/PortfolioModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioModal.vue?vue&type=template&id=27516912& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Portfolio/PortfolioModal.vue?vue&type=template&id=27516912&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioModal_vue_vue_type_template_id_27516912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);