(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1023: function (module, exports) {},
    1029: function (module, exports) {},
    1034: function (module) {
      module.exports = JSON.parse(
        '{"repo_list":"Repository List","repo_search":"Repository Search","respo_search_default":"Search for a repository by entering it\'s name in the search box","get_repo_details":"Get details of repositories","search_query":"Search query: {repoName}","matching_repos":"Total number of matching repos: {totalCount}","something_went_wrong":"Sorry. Something went wrong! Please try again in sometime.","stories":"Go to Storybook"}'
      );
    },
    1035: function (module, exports, __webpack_require__) {
      var map = { './Clickable/stories/Clickable.stories': 440, './Text/stories/Text.stories': 437 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1035);
    },
    183: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(184),
        react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        StyledText = styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({
          displayName: 'Text__StyledText',
          componentId: 'ap7h6t-0'
        })(['&&{', ';}'], function (props) {
          return props.marginBottom && 'margin-bottom: '.concat(props.marginBottom, 'px;');
        }),
        Text = function (_ref) {
          var id = _ref.id,
            marginBottom = _ref.marginBottom;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            StyledText,
            { 'data-testid': 'text', marginBottom: marginBottom },
            id &&
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage,
                { id: id }
              )
          );
        };
      (Text.displayName = 'Text'),
        (Text.propTypes = {
          id: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.string,
          marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.number
        }),
        (Text.defaultProps = { id: 'some_text' });
      var TextComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__.memo)(Text);
      (__webpack_exports__.a = TextComponent),
        (Text.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Text',
          props: {
            id: {
              defaultValue: { value: "'some_text'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: ''
            },
            marginBottom: { type: { name: 'number' }, required: !1, description: '' }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['app/components/Text/index.js'] = {
            name: 'Text',
            docgenInfo: Text.__docgenInfo,
            path: 'app/components/Text/index.js'
          });
    },
    185: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return DEFAULT_LOCALE;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return appLocales;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return translationMessages;
        });
      __webpack_require__(83), __webpack_require__(23), __webpack_require__(11);
      var addLocaleData = __webpack_require__(101).addLocaleData,
        enLocaleData = __webpack_require__(268),
        enTranslationMessages = __webpack_require__(1034);
      addLocaleData(enLocaleData);
      var DEFAULT_LOCALE = 'en',
        appLocales = ['en'],
        formatTranslationMessages = function (locale, messages) {
          var defaultFormattedMessages =
            locale === DEFAULT_LOCALE ? {} : formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages);
          return Object.keys(messages).reduce(function flattenFormattedMessages(formattedMessages, key) {
            var formattedMessage =
              messages[key] || locale === DEFAULT_LOCALE ? messages[key] : defaultFormattedMessages[key];
            return Object.assign(
              formattedMessages,
              (function _defineProperty(obj, key, value) {
                return (
                  key in obj
                    ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
                    : (obj[key] = value),
                  obj
                );
              })({}, key, formattedMessage)
            );
          }, {});
        },
        translationMessages = { en: formatTranslationMessages('en', enTranslationMessages) };
    },
    437: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54),
        _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(183),
        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a, null);
      Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Text').add('simple', function () {
        return _ref;
      });
    },
    440: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        client = __webpack_require__(54),
        prop_types = __webpack_require__(0),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_esm = __webpack_require__(184),
        Text = __webpack_require__(183),
        StyledClickable = styled_components_browser_esm.a.div.withConfig({
          displayName: 'Clickable__StyledClickable',
          componentId: 'sc-19lp5om-0'
        })(['color:#1890ff;&:hover{cursor:pointer;}']);
      function Clickable(_ref) {
        var onClick = _ref.onClick,
          textId = _ref.textId;
        return react_default.a.createElement(
          StyledClickable,
          { 'data-testid': 'clickable', onClick: onClick },
          textId && react_default.a.createElement(Text.a, { id: textId })
        );
      }
      (Clickable.displayName = 'Clickable'),
        (Clickable.propTypes = {
          onClick: prop_types_default.a.func.isRequired,
          textId: prop_types_default.a.string.isRequired
        });
      var components_Clickable = Clickable;
      (Clickable.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Clickable',
        props: {
          onClick: { type: { name: 'func' }, required: !0, description: '' },
          textId: { type: { name: 'string' }, required: !0, description: '' }
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['app/components/Clickable/index.js'] = {
            name: 'Clickable',
            docgenInfo: Clickable.__docgenInfo,
            path: 'app/components/Clickable/index.js'
          });
      var Clickable_stories_ref = react_default.a.createElement(components_Clickable, null);
      Object(client.storiesOf)('Clickable').add('simple', function () {
        return Clickable_stories_ref;
      });
    },
    447: function (module, exports) {},
    451: function (module, exports, __webpack_require__) {
      __webpack_require__(452), __webpack_require__(578), (module.exports = __webpack_require__(579));
    },
    486: function (module, exports) {},
    579: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          __webpack_require__(22),
            __webpack_require__(80),
            __webpack_require__(11),
            __webpack_require__(19),
            __webpack_require__(142),
            __webpack_require__(26);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_require__(1), __webpack_require__(267)),
            storybook_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(444),
            storybook_router__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
              storybook_router__WEBPACK_IMPORTED_MODULE_9__
            ),
            storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(446),
            storybook_addon_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(269),
            react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(101),
            react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(268),
            react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
              react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_13__
            ),
            _app_i18n_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(185);
          (Object.values = function (obj) {
            return Object.keys(obj).map(function (key) {
              return obj[key];
            });
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              storybook_addon_smart_knobs__WEBPACK_IMPORTED_MODULE_10__.withSmartKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              storybook_router__WEBPACK_IMPORTED_MODULE_9___default()()
            ),
            Object(react_intl__WEBPACK_IMPORTED_MODULE_12__.addLocaleData)(
              react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_13___default.a
            );
          Object(storybook_addon_intl__WEBPACK_IMPORTED_MODULE_11__.setIntlConfig)({
            locales: _app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.b,
            defaultLocale: _app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.a,
            getMessages: function (locale) {
              return _app_i18n_js__WEBPACK_IMPORTED_MODULE_14__.c[locale];
            }
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(
              storybook_addon_intl__WEBPACK_IMPORTED_MODULE_11__.withIntl
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(
              (function loadStories() {
                return (function requireAll(requireContext) {
                  return requireContext.keys().map(function () {
                    return requireContext;
                  });
                })(__webpack_require__(1035));
              })(),
              module
            );
        }.call(this, __webpack_require__(580)(module));
    }
  },
  [[451, 1, 2]]
]);
//# sourceMappingURL=main.52468f1a7041c55cf200.bundle.js.map
