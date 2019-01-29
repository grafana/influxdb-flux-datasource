define(
  [
    'react',
    'lodash',
    'prismjs',
    'slate',
    'slate-plain-serializer',
    'app/core/utils/datemath',
    'app/core/app_events',
    'app/plugins/sdk',
    'app/core/core_module',
    'react-dom',
    'slate-react',
  ],
  function(e, t, n, r, o, i, a, s, u, c, l) {
    return (function(e) {
      var t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = {i: r, l: !1, exports: {}});
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r});
        }),
        (n.r = function(e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
            Object.defineProperty(e, '__esModule', {value: !0});
        }),
        (n.t = function(e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (
            (n.r(r),
            Object.defineProperty(r, 'default', {enumerable: !0, value: e}),
            2 & t && 'string' != typeof e)
          )
            for (var o in e)
              n.d(
                r,
                o,
                function(t) {
                  return e[t];
                }.bind(null, o)
              );
          return r;
        }),
        (n.n = function(e) {
          var t =
            e && e.__esModule
              ? function() {
                  return e.default;
                }
              : function() {
                  return e;
                };
          return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 147))
      );
    })([
      function(t, n) {
        t.exports = e;
      },
      function(e, t) {
        var n = Array.isArray;
        e.exports = n;
      },
      function(e, t, n) {
        var r = n(25),
          o = 'object' == typeof self && self && self.Object === Object && self,
          i = r || o || Function('return this')();
        e.exports = i;
      },
      function(e, t, n) {
        var r = n(58),
          o = n(61);
        e.exports = function(e, t) {
          var n = o(e, t);
          return r(n) ? n : void 0;
        };
      },
      function(e, n) {
        e.exports = t;
      },
      function(e, t) {
        e.exports = n;
      },
      function(e, t, n) {
        var r = n(2).Symbol;
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(6),
          o = n(54),
          i = n(55),
          a = r ? r.toStringTag : void 0;
        e.exports = function(e) {
          return null == e
            ? void 0 === e ? '[object Undefined]' : '[object Null]'
            : a && a in Object(e) ? o(e) : i(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return null != e && 'object' == typeof e;
        };
      },
      function(e, t) {
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(83),
          o = n(84),
          i = n(85),
          a = n(86),
          s = n(87);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(34);
        e.exports = function(e, t) {
          for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
          return -1;
        };
      },
      function(e, t, n) {
        var r = n(3)(Object, 'create');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(101);
        e.exports = function(e, t) {
          var n = e.__data__;
          return r(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
        };
      },
      function(e, t, n) {
        var r = n(23);
        e.exports = function(e) {
          if ('string' == typeof e || r(e)) return e;
          var t = e + '';
          return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
        };
      },
      function(e, t) {
        e.exports = o;
      },
      function(e, t, n) {
        var r = n(53),
          o = n(8),
          i = Object.prototype,
          a = i.hasOwnProperty,
          s = i.propertyIsEnumerable,
          u = r(
            (function() {
              return arguments;
            })()
          )
            ? r
            : function(e) {
                return o(e) && a.call(e, 'callee') && !s.call(e, 'callee');
              };
        e.exports = u;
      },
      function(e, t) {
        e.exports = function(e) {
          var t = typeof e;
          return null != e && ('object' == t || 'function' == t);
        };
      },
      function(e, t, n) {
        var r = n(69),
          o = n(75),
          i = n(32);
        e.exports = function(e) {
          return i(e) ? r(e) : o(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        };
      },
      function(e, t, n) {
        var r = n(3)(n(2), 'Map');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(93),
          o = n(100),
          i = n(102),
          a = n(103),
          s = n(104);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(1),
          o = n(23),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        e.exports = function(e, t) {
          if (r(e)) return !1;
          var n = typeof e;
          return (
            !('number' != n && 'symbol' != n && 'boolean' != n && null != e && !o(e)) ||
            a.test(e) ||
            !i.test(e) ||
            (null != t && e in Object(t))
          );
        };
      },
      function(e, t, n) {
        var r = n(7),
          o = n(8);
        e.exports = function(e) {
          return 'symbol' == typeof e || (o(e) && '[object Symbol]' == r(e));
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
          return e;
        };
      },
      function(e, t, n) {
        (function(t) {
          var n = 'object' == typeof t && t && t.Object === Object && t;
          e.exports = n;
        }.call(this, n(52)));
      },
      function(e, t, n) {
        var r = n(7),
          o = n(17);
        e.exports = function(e) {
          if (!o(e)) return !1;
          var t = r(e);
          return (
            '[object Function]' == t ||
            '[object GeneratorFunction]' == t ||
            '[object AsyncFunction]' == t ||
            '[object Proxy]' == t
          );
        };
      },
      function(e, t) {
        var n = Function.prototype.toString;
        e.exports = function(e) {
          if (null != e) {
            try {
              return n.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        };
      },
      function(e, t, n) {
        (function(e) {
          var r = n(2),
            o = n(71),
            i = t && !t.nodeType && t,
            a = i && 'object' == typeof e && e && !e.nodeType && e,
            s = a && a.exports === i ? r.Buffer : void 0,
            u = (s ? s.isBuffer : void 0) || o;
          e.exports = u;
        }.call(this, n(29)(e)));
      },
      function(e, t) {
        e.exports = function(e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function() {}),
              (e.paths = []),
              e.children || (e.children = []),
              Object.defineProperty(e, 'loaded', {
                enumerable: !0,
                get: function() {
                  return e.l;
                },
              }),
              Object.defineProperty(e, 'id', {
                enumerable: !0,
                get: function() {
                  return e.i;
                },
              }),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      function(e, t) {
        var n = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
          var r = typeof e;
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ('number' == r || ('symbol' != r && n.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        };
      },
      function(e, t, n) {
        var r = n(72),
          o = n(73),
          i = n(74),
          a = i && i.isTypedArray,
          s = a ? o(a) : r;
        e.exports = s;
      },
      function(e, t, n) {
        var r = n(26),
          o = n(19);
        e.exports = function(e) {
          return null != e && o(e.length) && !r(e);
        };
      },
      function(e, t, n) {
        var r = n(10),
          o = n(88),
          i = n(89),
          a = n(90),
          s = n(91),
          u = n(92);
        function c(e) {
          var t = (this.__data__ = new r(e));
          this.size = t.size;
        }
        (c.prototype.clear = o),
          (c.prototype.delete = i),
          (c.prototype.get = a),
          (c.prototype.has = s),
          (c.prototype.set = u),
          (e.exports = c);
      },
      function(e, t) {
        e.exports = function(e, t) {
          return e === t || (e != e && t != t);
        };
      },
      function(e, t, n) {
        var r = n(105),
          o = n(8);
        e.exports = function e(t, n, i, a, s) {
          return (
            t === n ||
            (null == t || null == n || (!o(t) && !o(n))
              ? t != t && n != n
              : r(t, n, i, a, e, s))
          );
        };
      },
      function(e, t, n) {
        var r = n(106),
          o = n(109),
          i = n(110);
        e.exports = function(e, t, n, a, s, u) {
          var c = 1 & n,
            l = e.length,
            f = t.length;
          if (l != f && !(c && f > l)) return !1;
          var p = u.get(e);
          if (p && u.get(t)) return p == t;
          var d = -1,
            h = !0,
            y = 2 & n ? new r() : void 0;
          for (u.set(e, t), u.set(t, e); ++d < l; ) {
            var m = e[d],
              v = t[d];
            if (a) var g = c ? a(v, m, d, t, e, u) : a(m, v, d, e, t, u);
            if (void 0 !== g) {
              if (g) continue;
              h = !1;
              break;
            }
            if (y) {
              if (
                !o(t, function(e, t) {
                  if (!i(y, t) && (m === e || s(m, e, n, a, u))) return y.push(t);
                })
              ) {
                h = !1;
                break;
              }
            } else if (m !== v && !s(m, v, n, a, u)) {
              h = !1;
              break;
            }
          }
          return u.delete(e), u.delete(t), h;
        };
      },
      function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
          return e == e && !r(e);
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          return function(n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n));
          };
        };
      },
      function(e, t, n) {
        var r = n(40),
          o = n(14);
        e.exports = function(e, t) {
          for (var n = 0, i = (t = r(t, e)).length; null != e && n < i; )
            e = e[o(t[n++])];
          return n && n == i ? e : void 0;
        };
      },
      function(e, t, n) {
        var r = n(1),
          o = n(22),
          i = n(129),
          a = n(132);
        e.exports = function(e, t) {
          return r(e) ? e : o(e, t) ? [e] : i(a(e));
        };
      },
      function(e, t) {
        e.exports = i;
      },
      function(e, t, n) {
        var r, o;
        /* @license
Papa Parse
v4.6.3
https://github.com/mholt/PapaParse
License: MIT
*/ Array.isArray ||
          (Array.isArray = function(e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }),
          void 0 ===
            (o =
              'function' ==
              typeof (r = function() {
                'use strict';
                var e,
                  t,
                  n =
                    'undefined' != typeof self
                      ? self
                      : 'undefined' != typeof window ? window : void 0 !== n ? n : {},
                  r = !n.document && !!n.postMessage,
                  o = r && /(\?|&)papaworker(=|&|$)/.test(n.location.search),
                  i = !1,
                  a = {},
                  s = 0,
                  u = {
                    parse: function(t, r) {
                      var o = (r = r || {}).dynamicTyping || !1;
                      if (
                        (k(o) && ((r.dynamicTypingFunction = o), (o = {})),
                        (r.dynamicTyping = o),
                        (r.transform = !!k(r.transform) && r.transform),
                        r.worker && u.WORKERS_SUPPORTED)
                      ) {
                        var c = (function() {
                          if (!u.WORKERS_SUPPORTED) return !1;
                          if (!i && null === u.SCRIPT_PATH)
                            throw new Error(
                              'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.'
                            );
                          var t = u.SCRIPT_PATH || e;
                          t += (-1 !== t.indexOf('?') ? '&' : '?') + 'papaworker';
                          var r = new n.Worker(t);
                          return (r.onmessage = g), (r.id = s++), (a[r.id] = r);
                        })();
                        return (
                          (c.userStep = r.step),
                          (c.userChunk = r.chunk),
                          (c.userComplete = r.complete),
                          (c.userError = r.error),
                          (r.step = k(r.step)),
                          (r.chunk = k(r.chunk)),
                          (r.complete = k(r.complete)),
                          (r.error = k(r.error)),
                          delete r.worker,
                          void c.postMessage({input: t, config: r, workerId: c.id})
                        );
                      }
                      var l = null;
                      return (
                        u.NODE_STREAM_INPUT,
                        'string' == typeof t
                          ? (l = r.download ? new f(r) : new d(r))
                          : !0 === t.readable && k(t.read) && k(t.on)
                            ? (l = new h(r))
                            : ((n.File && t instanceof File) || t instanceof Object) &&
                              (l = new p(r)),
                        l.stream(t)
                      );
                    },
                    unparse: function(e, t) {
                      var n = !1,
                        r = !0,
                        o = ',',
                        i = '\r\n',
                        a = '"',
                        s = !1;
                      'object' == typeof t &&
                        ('string' != typeof t.delimiter ||
                          u.BAD_DELIMITERS.filter(function(e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (o = t.delimiter),
                        ('boolean' == typeof t.quotes || Array.isArray(t.quotes)) &&
                          (n = t.quotes),
                        ('boolean' != typeof t.skipEmptyLines &&
                          'string' != typeof t.skipEmptyLines) ||
                          (s = t.skipEmptyLines),
                        'string' == typeof t.newline && (i = t.newline),
                        'string' == typeof t.quoteChar && (a = t.quoteChar),
                        'boolean' == typeof t.header && (r = t.header));
                      var c = new RegExp(m(a), 'g');
                      if (
                        ('string' == typeof e && (e = JSON.parse(e)), Array.isArray(e))
                      ) {
                        if (!e.length || Array.isArray(e[0])) return f(null, e, s);
                        if ('object' == typeof e[0]) return f(l(e[0]), e, s);
                      } else if ('object' == typeof e)
                        return (
                          'string' == typeof e.data && (e.data = JSON.parse(e.data)),
                          Array.isArray(e.data) &&
                            (e.fields || (e.fields = e.meta && e.meta.fields),
                            e.fields ||
                              (e.fields = Array.isArray(e.data[0])
                                ? e.fields
                                : l(e.data[0])),
                            Array.isArray(e.data[0]) ||
                              'object' == typeof e.data[0] ||
                              (e.data = [e.data])),
                          f(e.fields || [], e.data || [], s)
                        );
                      throw 'exception: Unable to serialize unrecognized input';
                      function l(e) {
                        if ('object' != typeof e) return [];
                        var t = [];
                        for (var n in e) t.push(n);
                        return t;
                      }
                      function f(e, t, n) {
                        var a = '';
                        'string' == typeof e && (e = JSON.parse(e)),
                          'string' == typeof t && (t = JSON.parse(t));
                        var s = Array.isArray(e) && 0 < e.length,
                          u = !Array.isArray(t[0]);
                        if (s && r) {
                          for (var c = 0; c < e.length; c++)
                            0 < c && (a += o), (a += p(e[c], c));
                          0 < t.length && (a += i);
                        }
                        for (var l = 0; l < t.length; l++) {
                          var f = s ? e.length : t[l].length,
                            d = !1,
                            h = s ? 0 === Object.keys(t[l]).length : 0 === t[l].length;
                          if (
                            (n &&
                              !s &&
                              (d =
                                'greedy' === n
                                  ? '' === t[l].join('').trim()
                                  : 1 === t[l].length && 0 === t[l][0].length),
                            'greedy' === n && s)
                          ) {
                            for (var y = [], m = 0; m < f; m++) {
                              var v = u ? e[m] : m;
                              y.push(t[l][v]);
                            }
                            d = '' === y.join('').trim();
                          }
                          if (!d) {
                            for (var g = 0; g < f; g++) {
                              0 < g && !h && (a += o);
                              var b = s && u ? e[g] : g;
                              a += p(t[l][b], g);
                            }
                            l < t.length - 1 && (!n || (0 < f && !h)) && (a += i);
                          }
                        }
                        return a;
                      }
                      function p(e, t) {
                        return null == e
                          ? ''
                          : e.constructor === Date
                            ? JSON.stringify(e).slice(1, 25)
                            : ((e = e.toString().replace(c, a + a)),
                              ('boolean' == typeof n && n) ||
                              (Array.isArray(n) && n[t]) ||
                              (function(e, t) {
                                for (var n = 0; n < t.length; n++)
                                  if (-1 < e.indexOf(t[n])) return !0;
                                return !1;
                              })(e, u.BAD_DELIMITERS) ||
                              -1 < e.indexOf(o) ||
                              ' ' === e.charAt(0) ||
                              ' ' === e.charAt(e.length - 1)
                                ? a + e + a
                                : e);
                      }
                    },
                  };
                if (
                  ((u.RECORD_SEP = String.fromCharCode(30)),
                  (u.UNIT_SEP = String.fromCharCode(31)),
                  (u.BYTE_ORDER_MARK = '\ufeff'),
                  (u.BAD_DELIMITERS = ['\r', '\n', '"', u.BYTE_ORDER_MARK]),
                  (u.WORKERS_SUPPORTED = !r && !!n.Worker),
                  (u.SCRIPT_PATH = null),
                  (u.NODE_STREAM_INPUT = 1),
                  (u.LocalChunkSize = 10485760),
                  (u.RemoteChunkSize = 5242880),
                  (u.DefaultDelimiter = ','),
                  (u.Parser = v),
                  (u.ParserHandle = y),
                  (u.NetworkStreamer = f),
                  (u.FileStreamer = p),
                  (u.StringStreamer = d),
                  (u.ReadableStreamStreamer = h),
                  n.jQuery)
                ) {
                  var c = n.jQuery;
                  c.fn.parse = function(e) {
                    var t = e.config || {},
                      r = [];
                    return (
                      this.each(function(e) {
                        if (
                          'INPUT' !==
                            c(this)
                              .prop('tagName')
                              .toUpperCase() ||
                          'file' !==
                            c(this)
                              .attr('type')
                              .toLowerCase() ||
                          !n.FileReader ||
                          !this.files ||
                          0 === this.files.length
                        )
                          return !0;
                        for (var o = 0; o < this.files.length; o++)
                          r.push({
                            file: this.files[o],
                            inputElem: this,
                            instanceConfig: c.extend({}, t),
                          });
                      }),
                      o(),
                      this
                    );
                    function o() {
                      if (0 !== r.length) {
                        var t,
                          n,
                          o,
                          a = r[0];
                        if (k(e.before)) {
                          var s = e.before(a.file, a.inputElem);
                          if ('object' == typeof s) {
                            if ('abort' === s.action)
                              return (
                                'AbortError',
                                (t = a.file),
                                (n = a.inputElem),
                                (o = s.reason),
                                void (
                                  k(e.error) && e.error({name: 'AbortError'}, t, n, o)
                                )
                              );
                            if ('skip' === s.action) return void i();
                            'object' == typeof s.config &&
                              (a.instanceConfig = c.extend(a.instanceConfig, s.config));
                          } else if ('skip' === s) return void i();
                        }
                        var l = a.instanceConfig.complete;
                        (a.instanceConfig.complete = function(e) {
                          k(l) && l(e, a.file, a.inputElem), i();
                        }),
                          u.parse(a.file, a.instanceConfig);
                      } else k(e.complete) && e.complete();
                    }
                    function i() {
                      r.splice(0, 1), o();
                    }
                  };
                }
                function l(e) {
                  (this._handle = null),
                    (this._finished = !1),
                    (this._completed = !1),
                    (this._input = null),
                    (this._baseIndex = 0),
                    (this._partialLine = ''),
                    (this._rowCount = 0),
                    (this._start = 0),
                    (this._nextChunk = null),
                    (this.isFirstChunk = !0),
                    (this._completeResults = {data: [], errors: [], meta: {}}),
                    function(e) {
                      var t = _(e);
                      (t.chunkSize = parseInt(t.chunkSize)),
                        e.step || e.chunk || (t.chunkSize = null),
                        (this._handle = new y(t)),
                        ((this._handle.streamer = this)._config = t);
                    }.call(this, e),
                    (this.parseChunk = function(e, t) {
                      if (this.isFirstChunk && k(this._config.beforeFirstChunk)) {
                        var r = this._config.beforeFirstChunk(e);
                        void 0 !== r && (e = r);
                      }
                      this.isFirstChunk = !1;
                      var i = this._partialLine + e;
                      this._partialLine = '';
                      var a = this._handle.parse(i, this._baseIndex, !this._finished);
                      if (!this._handle.paused() && !this._handle.aborted()) {
                        var s = a.meta.cursor;
                        this._finished ||
                          ((this._partialLine = i.substring(s - this._baseIndex)),
                          (this._baseIndex = s)),
                          a && a.data && (this._rowCount += a.data.length);
                        var c =
                          this._finished ||
                          (this._config.preview &&
                            this._rowCount >= this._config.preview);
                        if (o)
                          n.postMessage({results: a, workerId: u.WORKER_ID, finished: c});
                        else if (k(this._config.chunk) && !t) {
                          if (
                            (this._config.chunk(a, this._handle),
                            this._handle.paused() || this._handle.aborted())
                          )
                            return;
                          (a = void 0), (this._completeResults = void 0);
                        }
                        return (
                          this._config.step ||
                            this._config.chunk ||
                            ((this._completeResults.data = this._completeResults.data.concat(
                              a.data
                            )),
                            (this._completeResults.errors = this._completeResults.errors.concat(
                              a.errors
                            )),
                            (this._completeResults.meta = a.meta)),
                          this._completed ||
                            !c ||
                            !k(this._config.complete) ||
                            (a && a.meta.aborted) ||
                            (this._config.complete(this._completeResults, this._input),
                            (this._completed = !0)),
                          c || (a && a.meta.paused) || this._nextChunk(),
                          a
                        );
                      }
                    }),
                    (this._sendError = function(e) {
                      k(this._config.error)
                        ? this._config.error(e)
                        : o &&
                          this._config.error &&
                          n.postMessage({workerId: u.WORKER_ID, error: e, finished: !1});
                    });
                }
                function f(e) {
                  var t;
                  (e = e || {}).chunkSize || (e.chunkSize = u.RemoteChunkSize),
                    l.call(this, e),
                    (this._nextChunk = r
                      ? function() {
                          this._readChunk(), this._chunkLoaded();
                        }
                      : function() {
                          this._readChunk();
                        }),
                    (this.stream = function(e) {
                      (this._input = e), this._nextChunk();
                    }),
                    (this._readChunk = function() {
                      if (this._finished) this._chunkLoaded();
                      else {
                        if (
                          ((t = new XMLHttpRequest()),
                          this._config.withCredentials &&
                            (t.withCredentials = this._config.withCredentials),
                          r ||
                            ((t.onload = A(this._chunkLoaded, this)),
                            (t.onerror = A(this._chunkError, this))),
                          t.open('GET', this._input, !r),
                          this._config.downloadRequestHeaders)
                        ) {
                          var e = this._config.downloadRequestHeaders;
                          for (var n in e) t.setRequestHeader(n, e[n]);
                        }
                        if (this._config.chunkSize) {
                          var o = this._start + this._config.chunkSize - 1;
                          t.setRequestHeader('Range', 'bytes=' + this._start + '-' + o),
                            t.setRequestHeader('If-None-Match', 'webkit-no-cache');
                        }
                        try {
                          t.send();
                        } catch (e) {
                          this._chunkError(e.message);
                        }
                        r && 0 === t.status
                          ? this._chunkError()
                          : (this._start += this._config.chunkSize);
                      }
                    }),
                    (this._chunkLoaded = function() {
                      4 === t.readyState &&
                        (t.status < 200 || 400 <= t.status
                          ? this._chunkError()
                          : ((this._finished =
                              !this._config.chunkSize ||
                              this._start >
                                (function(e) {
                                  var t = e.getResponseHeader('Content-Range');
                                  return null === t
                                    ? -1
                                    : parseInt(t.substr(t.lastIndexOf('/') + 1));
                                })(t)),
                            this.parseChunk(t.responseText)));
                    }),
                    (this._chunkError = function(e) {
                      var n = t.statusText || e;
                      this._sendError(new Error(n));
                    });
                }
                function p(e) {
                  var t, n;
                  (e = e || {}).chunkSize || (e.chunkSize = u.LocalChunkSize),
                    l.call(this, e);
                  var r = 'undefined' != typeof FileReader;
                  (this.stream = function(e) {
                    (this._input = e),
                      (n = e.slice || e.webkitSlice || e.mozSlice),
                      r
                        ? (((t = new FileReader()).onload = A(this._chunkLoaded, this)),
                          (t.onerror = A(this._chunkError, this)))
                        : (t = new FileReaderSync()),
                      this._nextChunk();
                  }),
                    (this._nextChunk = function() {
                      this._finished ||
                        (this._config.preview &&
                          !(this._rowCount < this._config.preview)) ||
                        this._readChunk();
                    }),
                    (this._readChunk = function() {
                      var e = this._input;
                      if (this._config.chunkSize) {
                        var o = Math.min(
                          this._start + this._config.chunkSize,
                          this._input.size
                        );
                        e = n.call(e, this._start, o);
                      }
                      var i = t.readAsText(e, this._config.encoding);
                      r || this._chunkLoaded({target: {result: i}});
                    }),
                    (this._chunkLoaded = function(e) {
                      (this._start += this._config.chunkSize),
                        (this._finished =
                          !this._config.chunkSize || this._start >= this._input.size),
                        this.parseChunk(e.target.result);
                    }),
                    (this._chunkError = function() {
                      this._sendError(t.error);
                    });
                }
                function d(e) {
                  var t;
                  l.call(this, (e = e || {})),
                    (this.stream = function(e) {
                      return (t = e), this._nextChunk();
                    }),
                    (this._nextChunk = function() {
                      if (!this._finished) {
                        var e = this._config.chunkSize,
                          n = e ? t.substr(0, e) : t;
                        return (
                          (t = e ? t.substr(e) : ''),
                          (this._finished = !t),
                          this.parseChunk(n)
                        );
                      }
                    });
                }
                function h(e) {
                  l.call(this, (e = e || {}));
                  var t = [],
                    n = !0,
                    r = !1;
                  (this.pause = function() {
                    l.prototype.pause.apply(this, arguments), this._input.pause();
                  }),
                    (this.resume = function() {
                      l.prototype.resume.apply(this, arguments), this._input.resume();
                    }),
                    (this.stream = function(e) {
                      (this._input = e),
                        this._input.on('data', this._streamData),
                        this._input.on('end', this._streamEnd),
                        this._input.on('error', this._streamError);
                    }),
                    (this._checkIsFinished = function() {
                      r && 1 === t.length && (this._finished = !0);
                    }),
                    (this._nextChunk = function() {
                      this._checkIsFinished(),
                        t.length ? this.parseChunk(t.shift()) : (n = !0);
                    }),
                    (this._streamData = A(function(e) {
                      try {
                        t.push(
                          'string' == typeof e ? e : e.toString(this._config.encoding)
                        ),
                          n &&
                            ((n = !1),
                            this._checkIsFinished(),
                            this.parseChunk(t.shift()));
                      } catch (e) {
                        this._streamError(e);
                      }
                    }, this)),
                    (this._streamError = A(function(e) {
                      this._streamCleanUp(), this._sendError(e);
                    }, this)),
                    (this._streamEnd = A(function() {
                      this._streamCleanUp(), (r = !0), this._streamData('');
                    }, this)),
                    (this._streamCleanUp = A(function() {
                      this._input.removeListener('data', this._streamData),
                        this._input.removeListener('end', this._streamEnd),
                        this._input.removeListener('error', this._streamError);
                    }, this));
                }
                function y(e) {
                  var t,
                    n,
                    r,
                    o = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
                    i = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                    a = this,
                    s = 0,
                    c = 0,
                    l = !1,
                    f = !1,
                    p = [],
                    d = {data: [], errors: [], meta: {}};
                  if (k(e.step)) {
                    var h = e.step;
                    e.step = function(t) {
                      if (((d = t), b())) g();
                      else {
                        if ((g(), 0 === d.data.length)) return;
                        (s += t.data.length),
                          e.preview && s > e.preview ? n.abort() : h(d, a);
                      }
                    };
                  }
                  function y(t) {
                    return 'greedy' === e.skipEmptyLines
                      ? '' === t.join('').trim()
                      : 1 === t.length && 0 === t[0].length;
                  }
                  function g() {
                    if (
                      (d &&
                        r &&
                        (A(
                          'Delimiter',
                          'UndetectableDelimiter',
                          "Unable to auto-detect delimiting character; defaulted to '" +
                            u.DefaultDelimiter +
                            "'"
                        ),
                        (r = !1)),
                      e.skipEmptyLines)
                    )
                      for (var t = 0; t < d.data.length; t++)
                        y(d.data[t]) && d.data.splice(t--, 1);
                    return (
                      b() &&
                        (function() {
                          if (d) {
                            for (var t = 0; b() && t < d.data.length; t++)
                              for (var n = 0; n < d.data[t].length; n++) {
                                var r = d.data[t][n];
                                e.trimHeaders && (r = r.trim()), p.push(r);
                              }
                            d.data.splice(0, 1);
                          }
                        })(),
                      (function() {
                        if (!d || (!e.header && !e.dynamicTyping && !e.transform))
                          return d;
                        for (var t = 0; t < d.data.length; t++) {
                          var n,
                            r = e.header ? {} : [];
                          for (n = 0; n < d.data[t].length; n++) {
                            var o = n,
                              i = d.data[t][n];
                            e.header && (o = n >= p.length ? '__parsed_extra' : p[n]),
                              e.transform && (i = e.transform(i, o)),
                              (i = x(o, i)),
                              '__parsed_extra' === o
                                ? ((r[o] = r[o] || []), r[o].push(i))
                                : (r[o] = i);
                          }
                          (d.data[t] = r),
                            e.header &&
                              (n > p.length
                                ? A(
                                    'FieldMismatch',
                                    'TooManyFields',
                                    'Too many fields: expected ' +
                                      p.length +
                                      ' fields but parsed ' +
                                      n,
                                    c + t
                                  )
                                : n < p.length &&
                                  A(
                                    'FieldMismatch',
                                    'TooFewFields',
                                    'Too few fields: expected ' +
                                      p.length +
                                      ' fields but parsed ' +
                                      n,
                                    c + t
                                  ));
                        }
                        return (
                          e.header && d.meta && (d.meta.fields = p),
                          (c += d.data.length),
                          d
                        );
                      })()
                    );
                  }
                  function b() {
                    return e.header && 0 === p.length;
                  }
                  function x(t, n) {
                    return (
                      (r = t),
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[r] &&
                        (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                      !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                        ? 'true' === n ||
                          'TRUE' === n ||
                          ('false' !== n &&
                            'FALSE' !== n &&
                            (o.test(n)
                              ? parseFloat(n)
                              : i.test(n) ? new Date(n) : '' === n ? null : n))
                        : n
                    );
                    var r;
                  }
                  function A(e, t, n, r) {
                    d.errors.push({type: e, code: t, message: n, row: r});
                  }
                  (this.parse = function(o, i, a) {
                    var s = e.quoteChar || '"';
                    if (
                      (e.newline ||
                        (e.newline = (function(e, t) {
                          e = e.substr(0, 1048576);
                          var n = new RegExp(m(t) + '([^]*?)' + m(t), 'gm'),
                            r = (e = e.replace(n, '')).split('\r'),
                            o = e.split('\n'),
                            i = 1 < o.length && o[0].length < r[0].length;
                          if (1 === r.length || i) return '\n';
                          for (var a = 0, s = 0; s < r.length; s++)
                            '\n' === r[s][0] && a++;
                          return a >= r.length / 2 ? '\r\n' : '\r';
                        })(o, s)),
                      (r = !1),
                      e.delimiter)
                    )
                      k(e.delimiter) &&
                        ((e.delimiter = e.delimiter(o)),
                        (d.meta.delimiter = e.delimiter));
                    else {
                      var c = (function(t, n, r, o) {
                        for (
                          var i,
                            a,
                            s,
                            c = [',', '\t', '|', ';', u.RECORD_SEP, u.UNIT_SEP],
                            l = 0;
                          l < c.length;
                          l++
                        ) {
                          var f = c[l],
                            p = 0,
                            d = 0,
                            h = 0;
                          s = void 0;
                          for (
                            var m = new v({
                                comments: o,
                                delimiter: f,
                                newline: n,
                                preview: 10,
                              }).parse(t),
                              g = 0;
                            g < m.data.length;
                            g++
                          )
                            if (r && y(m.data[g])) h++;
                            else {
                              var b = m.data[g].length;
                              (d += b),
                                void 0 !== s
                                  ? 1 < b && ((p += Math.abs(b - s)), (s = b))
                                  : (s = 0);
                            }
                          0 < m.data.length && (d /= m.data.length - h),
                            (void 0 === a || a < p) && 1.99 < d && ((a = p), (i = f));
                        }
                        return {successful: !!(e.delimiter = i), bestDelimiter: i};
                      })(o, e.newline, e.skipEmptyLines, e.comments);
                      c.successful
                        ? (e.delimiter = c.bestDelimiter)
                        : ((r = !0), (e.delimiter = u.DefaultDelimiter)),
                        (d.meta.delimiter = e.delimiter);
                    }
                    var f = _(e);
                    return (
                      e.preview && e.header && f.preview++,
                      (t = o),
                      (n = new v(f)),
                      (d = n.parse(t, i, a)),
                      g(),
                      l ? {meta: {paused: !0}} : d || {meta: {paused: !1}}
                    );
                  }),
                    (this.paused = function() {
                      return l;
                    }),
                    (this.pause = function() {
                      (l = !0), n.abort(), (t = t.substr(n.getCharIndex()));
                    }),
                    (this.resume = function() {
                      (l = !1), a.streamer.parseChunk(t, !0);
                    }),
                    (this.aborted = function() {
                      return f;
                    }),
                    (this.abort = function() {
                      (f = !0),
                        n.abort(),
                        (d.meta.aborted = !0),
                        k(e.complete) && e.complete(d),
                        (t = '');
                    });
                }
                function m(e) {
                  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }
                function v(e) {
                  var t,
                    n = (e = e || {}).delimiter,
                    r = e.newline,
                    o = e.comments,
                    i = e.step,
                    a = e.preview,
                    s = e.fastMode,
                    c = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
                  if (
                    (void 0 !== e.escapeChar && (c = e.escapeChar),
                    ('string' != typeof n || -1 < u.BAD_DELIMITERS.indexOf(n)) &&
                      (n = ','),
                    o === n)
                  )
                    throw 'Comment character same as delimiter';
                  !0 === o
                    ? (o = '#')
                    : ('string' != typeof o || -1 < u.BAD_DELIMITERS.indexOf(o)) &&
                      (o = !1),
                    '\n' !== r && '\r' !== r && '\r\n' !== r && (r = '\n');
                  var l = 0,
                    f = !1;
                  (this.parse = function(e, u, p) {
                    if ('string' != typeof e) throw 'Input must be a string';
                    var d = e.length,
                      h = n.length,
                      y = r.length,
                      v = o.length,
                      g = k(i),
                      b = [],
                      x = [],
                      _ = [],
                      A = (l = 0);
                    if (!e) return I();
                    if (s || (!1 !== s && -1 === e.indexOf(t))) {
                      for (var w = e.split(r), E = 0; E < w.length; E++) {
                        if (((_ = w[E]), (l += _.length), E !== w.length - 1))
                          l += r.length;
                        else if (p) return I();
                        if (!o || _.substr(0, v) !== o) {
                          if (g) {
                            if (((b = []), T(_.split(n)), M(), f)) return I();
                          } else T(_.split(n));
                          if (a && a <= E) return (b = b.slice(0, a)), I(!0);
                        }
                      }
                      return I();
                    }
                    for (
                      var C,
                        j = e.indexOf(n, l),
                        O = e.indexOf(r, l),
                        q = new RegExp(m(c) + m(t), 'g');
                      ;

                    )
                      if (e[l] !== t)
                        if (o && 0 === _.length && e.substr(l, v) === o) {
                          if (-1 === O) return I();
                          (l = O + y), (O = e.indexOf(r, l)), (j = e.indexOf(n, l));
                        } else if (-1 !== j && (j < O || -1 === O))
                          _.push(e.substring(l, j)), (l = j + h), (j = e.indexOf(n, l));
                        else {
                          if (-1 === O) break;
                          if ((_.push(e.substring(l, O)), P(O + y), g && (M(), f)))
                            return I();
                          if (a && b.length >= a) return I(!0);
                        }
                      else
                        for (C = l, l++; ; ) {
                          if (-1 === (C = e.indexOf(t, C + 1)))
                            return (
                              p ||
                                x.push({
                                  type: 'Quotes',
                                  code: 'MissingQuotes',
                                  message: 'Quoted field unterminated',
                                  row: b.length,
                                  index: l,
                                }),
                              D()
                            );
                          if (C === d - 1) return D(e.substring(l, C).replace(q, t));
                          if (t !== c || e[C + 1] !== c) {
                            if (t === c || 0 === C || e[C - 1] !== c) {
                              var S = R(-1 === O ? j : Math.min(j, O));
                              if (e[C + 1 + S] === n) {
                                _.push(e.substring(l, C).replace(q, t)),
                                  (l = C + 1 + S + h),
                                  (j = e.indexOf(n, l)),
                                  (O = e.indexOf(r, l));
                                break;
                              }
                              var B = R(O);
                              if (e.substr(C + 1 + B, y) === r) {
                                if (
                                  (_.push(e.substring(l, C).replace(q, t)),
                                  P(C + 1 + B + y),
                                  (j = e.indexOf(n, l)),
                                  g && (M(), f))
                                )
                                  return I();
                                if (a && b.length >= a) return I(!0);
                                break;
                              }
                              x.push({
                                type: 'Quotes',
                                code: 'InvalidQuotes',
                                message: 'Trailing quote on quoted field is malformed',
                                row: b.length,
                                index: l,
                              }),
                                C++;
                            }
                          } else C++;
                        }
                    return D();
                    function T(e) {
                      b.push(e), (A = l);
                    }
                    function R(t) {
                      var n = 0;
                      if (-1 !== t) {
                        var r = e.substring(C + 1, t);
                        r && '' === r.trim() && (n = r.length);
                      }
                      return n;
                    }
                    function D(t) {
                      return (
                        p ||
                          (void 0 === t && (t = e.substr(l)),
                          _.push(t),
                          (l = d),
                          T(_),
                          g && M()),
                        I()
                      );
                    }
                    function P(t) {
                      (l = t), T(_), (_ = []), (O = e.indexOf(r, l));
                    }
                    function I(e) {
                      return {
                        data: b,
                        errors: x,
                        meta: {
                          delimiter: n,
                          linebreak: r,
                          aborted: f,
                          truncated: !!e,
                          cursor: A + (u || 0),
                        },
                      };
                    }
                    function M() {
                      i(I()), (b = []), (x = []);
                    }
                  }),
                    (this.abort = function() {
                      f = !0;
                    }),
                    (this.getCharIndex = function() {
                      return l;
                    });
                }
                function g(e) {
                  var t = e.data,
                    n = a[t.workerId],
                    r = !1;
                  if (t.error) n.userError(t.error, t.file);
                  else if (t.results && t.results.data) {
                    var o = {
                      abort: function() {
                        (r = !0),
                          b(t.workerId, {data: [], errors: [], meta: {aborted: !0}});
                      },
                      pause: x,
                      resume: x,
                    };
                    if (k(n.userStep)) {
                      for (
                        var i = 0;
                        i < t.results.data.length &&
                        (n.userStep(
                          {
                            data: [t.results.data[i]],
                            errors: t.results.errors,
                            meta: t.results.meta,
                          },
                          o
                        ),
                        !r);
                        i++
                      );
                      delete t.results;
                    } else
                      k(n.userChunk) &&
                        (n.userChunk(t.results, o, t.file), delete t.results);
                  }
                  t.finished && !r && b(t.workerId, t.results);
                }
                function b(e, t) {
                  var n = a[e];
                  k(n.userComplete) && n.userComplete(t), n.terminate(), delete a[e];
                }
                function x() {
                  throw 'Not implemented.';
                }
                function _(e) {
                  if ('object' != typeof e || null === e) return e;
                  var t = Array.isArray(e) ? [] : {};
                  for (var n in e) t[n] = _(e[n]);
                  return t;
                }
                function A(e, t) {
                  return function() {
                    e.apply(t, arguments);
                  };
                }
                function k(e) {
                  return 'function' == typeof e;
                }
                return (
                  o
                    ? (n.onmessage = function(e) {
                        var t = e.data;
                        if (
                          (void 0 === u.WORKER_ID && t && (u.WORKER_ID = t.workerId),
                          'string' == typeof t.input)
                        )
                          n.postMessage({
                            workerId: u.WORKER_ID,
                            results: u.parse(t.input, t.config),
                            finished: !0,
                          });
                        else if (
                          (n.File && t.input instanceof File) ||
                          t.input instanceof Object
                        ) {
                          var r = u.parse(t.input, t.config);
                          r &&
                            n.postMessage({
                              workerId: u.WORKER_ID,
                              results: r,
                              finished: !0,
                            });
                        }
                      })
                    : u.WORKERS_SUPPORTED &&
                      ((t = document.getElementsByTagName('script')),
                      (e = t.length ? t[t.length - 1].src : ''),
                      document.body
                        ? document.addEventListener(
                            'DOMContentLoaded',
                            function() {
                              i = !0;
                            },
                            !0
                          )
                        : (i = !0)),
                  ((f.prototype = Object.create(l.prototype)).constructor = f),
                  ((p.prototype = Object.create(l.prototype)).constructor = p),
                  ((d.prototype = Object.create(d.prototype)).constructor = d),
                  ((h.prototype = Object.create(l.prototype)).constructor = h),
                  u
                );
              })
                ? r.apply(t, [])
                : r) || (e.exports = o);
      },
      function(e, t, n) {
        var r = n(50);
        e.exports = function(e) {
          return null != e && e.length ? r(e, 1) : [];
        };
      },
      function(e, t, n) {
        var r = n(56),
          o = n(62),
          i = Object.prototype.hasOwnProperty,
          a = o(function(e, t, n) {
            i.call(e, n) ? e[n].push(t) : r(e, n, [t]);
          });
        e.exports = a;
      },
      function(e, t) {
        e.exports = a;
      },
      function(e, t) {
        e.exports = s;
      },
      function(e, t) {
        e.exports = u;
      },
      function(e, t) {
        e.exports = c;
      },
      function(e, t) {
        e.exports = l;
      },
      function(e, t, n) {
        var r = n(24),
          o = n(51);
        e.exports = function e(t, n, i, a, s) {
          var u = -1,
            c = t.length;
          for (i || (i = o), s || (s = []); ++u < c; ) {
            var l = t[u];
            n > 0 && i(l)
              ? n > 1 ? e(l, n - 1, i, a, s) : r(s, l)
              : a || (s[s.length] = l);
          }
          return s;
        };
      },
      function(e, t, n) {
        var r = n(6),
          o = n(16),
          i = n(1),
          a = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
          return i(e) || o(e) || !!(a && e && e[a]);
        };
      },
      function(e, t) {
        var n;
        n = (function() {
          return this;
        })();
        try {
          n = n || new Function('return this')();
        } catch (e) {
          'object' == typeof window && (n = window);
        }
        e.exports = n;
      },
      function(e, t, n) {
        var r = n(7),
          o = n(8);
        e.exports = function(e) {
          return o(e) && '[object Arguments]' == r(e);
        };
      },
      function(e, t, n) {
        var r = n(6),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
          var t = i.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var r = !0;
          } catch (e) {}
          var o = a.call(e);
          return r && (t ? (e[s] = n) : delete e[s]), o;
        };
      },
      function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
          return n.call(e);
        };
      },
      function(e, t, n) {
        var r = n(57);
        e.exports = function(e, t, n) {
          '__proto__' == t && r
            ? r(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0})
            : (e[t] = n);
        };
      },
      function(e, t, n) {
        var r = n(3),
          o = (function() {
            try {
              var e = r(Object, 'defineProperty');
              return e({}, '', {}), e;
            } catch (e) {}
          })();
        e.exports = o;
      },
      function(e, t, n) {
        var r = n(26),
          o = n(59),
          i = n(17),
          a = n(27),
          s = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          c = Object.prototype,
          l = u.toString,
          f = c.hasOwnProperty,
          p = RegExp(
            '^' +
              l
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
        e.exports = function(e) {
          return !(!i(e) || o(e)) && (r(e) ? p : s).test(a(e));
        };
      },
      function(e, t, n) {
        var r = n(60),
          o = (function() {
            var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
            return e ? 'Symbol(src)_1.' + e : '';
          })();
        e.exports = function(e) {
          return !!o && o in e;
        };
      },
      function(e, t, n) {
        var r = n(2)['__core-js_shared__'];
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      function(e, t, n) {
        var r = n(63),
          o = n(64),
          i = n(80),
          a = n(1);
        e.exports = function(e, t) {
          return function(n, s) {
            var u = a(n) ? r : o,
              c = t ? t() : {};
            return u(n, e, i(s, 2), c);
          };
        };
      },
      function(e, t) {
        e.exports = function(e, t, n, r) {
          for (var o = -1, i = null == e ? 0 : e.length; ++o < i; ) {
            var a = e[o];
            t(r, a, n(a), e);
          }
          return r;
        };
      },
      function(e, t, n) {
        var r = n(65);
        e.exports = function(e, t, n, o) {
          return (
            r(e, function(e, r, i) {
              t(o, e, n(e), i);
            }),
            o
          );
        };
      },
      function(e, t, n) {
        var r = n(66),
          o = n(79)(r);
        e.exports = o;
      },
      function(e, t, n) {
        var r = n(67),
          o = n(18);
        e.exports = function(e, t) {
          return e && r(e, t, o);
        };
      },
      function(e, t, n) {
        var r = n(68)();
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e) {
          return function(t, n, r) {
            for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
              var u = a[e ? s : ++o];
              if (!1 === n(i[u], u, i)) break;
            }
            return t;
          };
        };
      },
      function(e, t, n) {
        var r = n(70),
          o = n(16),
          i = n(1),
          a = n(28),
          s = n(30),
          u = n(31),
          c = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
          var n = i(e),
            l = !n && o(e),
            f = !n && !l && a(e),
            p = !n && !l && !f && u(e),
            d = n || l || f || p,
            h = d ? r(e.length, String) : [],
            y = h.length;
          for (var m in e)
            (!t && !c.call(e, m)) ||
              (d &&
                ('length' == m ||
                  (f && ('offset' == m || 'parent' == m)) ||
                  (p && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) ||
                  s(m, y))) ||
              h.push(m);
          return h;
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        };
      },
      function(e, t) {
        e.exports = function() {
          return !1;
        };
      },
      function(e, t, n) {
        var r = n(7),
          o = n(19),
          i = n(8),
          a = {};
        (a['[object Float32Array]'] = a['[object Float64Array]'] = a[
          '[object Int8Array]'
        ] = a['[object Int16Array]'] = a['[object Int32Array]'] = a[
          '[object Uint8Array]'
        ] = a['[object Uint8ClampedArray]'] = a['[object Uint16Array]'] = a[
          '[object Uint32Array]'
        ] = !0),
          (a['[object Arguments]'] = a['[object Array]'] = a['[object ArrayBuffer]'] = a[
            '[object Boolean]'
          ] = a['[object DataView]'] = a['[object Date]'] = a['[object Error]'] = a[
            '[object Function]'
          ] = a['[object Map]'] = a['[object Number]'] = a['[object Object]'] = a[
            '[object RegExp]'
          ] = a['[object Set]'] = a['[object String]'] = a['[object WeakMap]'] = !1),
          (e.exports = function(e) {
            return i(e) && o(e.length) && !!a[r(e)];
          });
      },
      function(e, t) {
        e.exports = function(e) {
          return function(t) {
            return e(t);
          };
        };
      },
      function(e, t, n) {
        (function(e) {
          var r = n(25),
            o = t && !t.nodeType && t,
            i = o && 'object' == typeof e && e && !e.nodeType && e,
            a = i && i.exports === o && r.process,
            s = (function() {
              try {
                return (
                  (i && i.require && i.require('util').types) ||
                  (a && a.binding && a.binding('util'))
                );
              } catch (e) {}
            })();
          e.exports = s;
        }.call(this, n(29)(e)));
      },
      function(e, t, n) {
        var r = n(76),
          o = n(77),
          i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          if (!r(e)) return o(e);
          var t = [];
          for (var n in Object(e)) i.call(e, n) && 'constructor' != n && t.push(n);
          return t;
        };
      },
      function(e, t) {
        var n = Object.prototype;
        e.exports = function(e) {
          var t = e && e.constructor;
          return e === (('function' == typeof t && t.prototype) || n);
        };
      },
      function(e, t, n) {
        var r = n(78)(Object.keys, Object);
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e, t) {
          return function(n) {
            return e(t(n));
          };
        };
      },
      function(e, t, n) {
        var r = n(32);
        e.exports = function(e, t) {
          return function(n, o) {
            if (null == n) return n;
            if (!r(n)) return e(n, o);
            for (
              var i = n.length, a = t ? i : -1, s = Object(n);
              (t ? a-- : ++a < i) && !1 !== o(s[a], a, s);

            );
            return n;
          };
        };
      },
      function(e, t, n) {
        var r = n(81),
          o = n(127),
          i = n(138),
          a = n(1),
          s = n(139);
        e.exports = function(e) {
          return 'function' == typeof e
            ? e
            : null == e ? i : 'object' == typeof e ? (a(e) ? o(e[0], e[1]) : r(e)) : s(e);
        };
      },
      function(e, t, n) {
        var r = n(82),
          o = n(126),
          i = n(38);
        e.exports = function(e) {
          var t = o(e);
          return 1 == t.length && t[0][2]
            ? i(t[0][0], t[0][1])
            : function(n) {
                return n === e || r(n, e, t);
              };
        };
      },
      function(e, t, n) {
        var r = n(33),
          o = n(35);
        e.exports = function(e, t, n, i) {
          var a = n.length,
            s = a,
            u = !i;
          if (null == e) return !s;
          for (e = Object(e); a--; ) {
            var c = n[a];
            if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
          }
          for (; ++a < s; ) {
            var l = (c = n[a])[0],
              f = e[l],
              p = c[1];
            if (u && c[2]) {
              if (void 0 === f && !(l in e)) return !1;
            } else {
              var d = new r();
              if (i) var h = i(f, p, l, e, t, d);
              if (!(void 0 === h ? o(p, f, 3, i, d) : h)) return !1;
            }
          }
          return !0;
        };
      },
      function(e, t) {
        e.exports = function() {
          (this.__data__ = []), (this.size = 0);
        };
      },
      function(e, t, n) {
        var r = n(11),
          o = Array.prototype.splice;
        e.exports = function(e) {
          var t = this.__data__,
            n = r(t, e);
          return !(
            n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0)
          );
        };
      },
      function(e, t, n) {
        var r = n(11);
        e.exports = function(e) {
          var t = this.__data__,
            n = r(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      function(e, t, n) {
        var r = n(11);
        e.exports = function(e) {
          return r(this.__data__, e) > -1;
        };
      },
      function(e, t, n) {
        var r = n(11);
        e.exports = function(e, t) {
          var n = this.__data__,
            o = r(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      },
      function(e, t, n) {
        var r = n(10);
        e.exports = function() {
          (this.__data__ = new r()), (this.size = 0);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return this.__data__.get(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return this.__data__.has(e);
        };
      },
      function(e, t, n) {
        var r = n(10),
          o = n(20),
          i = n(21);
        e.exports = function(e, t) {
          var n = this.__data__;
          if (n instanceof r) {
            var a = n.__data__;
            if (!o || a.length < 199) return a.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new i(a);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      },
      function(e, t, n) {
        var r = n(94),
          o = n(10),
          i = n(20);
        e.exports = function() {
          (this.size = 0),
            (this.__data__ = {hash: new r(), map: new (i || o)(), string: new r()});
        };
      },
      function(e, t, n) {
        var r = n(95),
          o = n(96),
          i = n(97),
          a = n(98),
          s = n(99);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = i),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(12);
        e.exports = function() {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      function(e, t, n) {
        var r = n(12),
          o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          var t = this.__data__;
          if (r) {
            var n = t[e];
            return '__lodash_hash_undefined__' === n ? void 0 : n;
          }
          return o.call(t, e) ? t[e] : void 0;
        };
      },
      function(e, t, n) {
        var r = n(12),
          o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : o.call(t, e);
        };
      },
      function(e, t, n) {
        var r = n(12);
        e.exports = function(e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = r && void 0 === t ? '__lodash_hash_undefined__' : t),
            this
          );
        };
      },
      function(e, t, n) {
        var r = n(13);
        e.exports = function(e) {
          var t = r(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      function(e, t) {
        e.exports = function(e) {
          var t = typeof e;
          return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
            ? '__proto__' !== e
            : null === e;
        };
      },
      function(e, t, n) {
        var r = n(13);
        e.exports = function(e) {
          return r(this, e).get(e);
        };
      },
      function(e, t, n) {
        var r = n(13);
        e.exports = function(e) {
          return r(this, e).has(e);
        };
      },
      function(e, t, n) {
        var r = n(13);
        e.exports = function(e, t) {
          var n = r(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      function(e, t, n) {
        var r = n(33),
          o = n(36),
          i = n(111),
          a = n(115),
          s = n(121),
          u = n(1),
          c = n(28),
          l = n(31),
          f = '[object Arguments]',
          p = '[object Array]',
          d = '[object Object]',
          h = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, y, m, v) {
          var g = u(e),
            b = u(t),
            x = g ? p : s(e),
            _ = b ? p : s(t),
            A = (x = x == f ? d : x) == d,
            k = (_ = _ == f ? d : _) == d,
            w = x == _;
          if (w && c(e)) {
            if (!c(t)) return !1;
            (g = !0), (A = !1);
          }
          if (w && !A)
            return (
              v || (v = new r()), g || l(e) ? o(e, t, n, y, m, v) : i(e, t, x, n, y, m, v)
            );
          if (!(1 & n)) {
            var E = A && h.call(e, '__wrapped__'),
              C = k && h.call(t, '__wrapped__');
            if (E || C) {
              var j = E ? e.value() : e,
                O = C ? t.value() : t;
              return v || (v = new r()), m(j, O, n, y, v);
            }
          }
          return !!w && (v || (v = new r()), a(e, t, n, y, m, v));
        };
      },
      function(e, t, n) {
        var r = n(21),
          o = n(107),
          i = n(108);
        function a(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
        }
        (a.prototype.add = a.prototype.push = o), (a.prototype.has = i), (e.exports = a);
      },
      function(e, t) {
        e.exports = function(e) {
          return this.__data__.set(e, '__lodash_hash_undefined__'), this;
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return this.__data__.has(e);
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          return e.has(t);
        };
      },
      function(e, t, n) {
        var r = n(6),
          o = n(112),
          i = n(34),
          a = n(36),
          s = n(113),
          u = n(114),
          c = r ? r.prototype : void 0,
          l = c ? c.valueOf : void 0;
        e.exports = function(e, t, n, r, c, f, p) {
          switch (n) {
            case '[object DataView]':
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              (e = e.buffer), (t = t.buffer);
            case '[object ArrayBuffer]':
              return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return i(+e, +t);
            case '[object Error]':
              return e.name == t.name && e.message == t.message;
            case '[object RegExp]':
            case '[object String]':
              return e == t + '';
            case '[object Map]':
              var d = s;
            case '[object Set]':
              var h = 1 & r;
              if ((d || (d = u), e.size != t.size && !h)) return !1;
              var y = p.get(e);
              if (y) return y == t;
              (r |= 2), p.set(e, t);
              var m = a(d(e), d(t), r, c, f, p);
              return p.delete(e), m;
            case '[object Symbol]':
              if (l) return l.call(e) == l.call(t);
          }
          return !1;
        };
      },
      function(e, t, n) {
        var r = n(2).Uint8Array;
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        };
      },
      function(e, t) {
        e.exports = function(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++t] = e;
            }),
            n
          );
        };
      },
      function(e, t, n) {
        var r = n(116),
          o = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, i, a, s) {
          var u = 1 & n,
            c = r(e),
            l = c.length;
          if (l != r(t).length && !u) return !1;
          for (var f = l; f--; ) {
            var p = c[f];
            if (!(u ? p in t : o.call(t, p))) return !1;
          }
          var d = s.get(e);
          if (d && s.get(t)) return d == t;
          var h = !0;
          s.set(e, t), s.set(t, e);
          for (var y = u; ++f < l; ) {
            var m = e[(p = c[f])],
              v = t[p];
            if (i) var g = u ? i(v, m, p, t, e, s) : i(m, v, p, e, t, s);
            if (!(void 0 === g ? m === v || a(m, v, n, i, s) : g)) {
              h = !1;
              break;
            }
            y || (y = 'constructor' == p);
          }
          if (h && !y) {
            var b = e.constructor,
              x = t.constructor;
            b != x &&
              'constructor' in e &&
              'constructor' in t &&
              !(
                'function' == typeof b &&
                b instanceof b &&
                'function' == typeof x &&
                x instanceof x
              ) &&
              (h = !1);
          }
          return s.delete(e), s.delete(t), h;
        };
      },
      function(e, t, n) {
        var r = n(117),
          o = n(118),
          i = n(18);
        e.exports = function(e) {
          return r(e, i, o);
        };
      },
      function(e, t, n) {
        var r = n(24),
          o = n(1);
        e.exports = function(e, t, n) {
          var i = t(e);
          return o(e) ? i : r(i, n(e));
        };
      },
      function(e, t, n) {
        var r = n(119),
          o = n(120),
          i = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          s = a
            ? function(e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(a(e), function(t) {
                      return i.call(e, t);
                    }));
              }
            : o;
        e.exports = s;
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
            var a = e[n];
            t(a, n, e) && (i[o++] = a);
          }
          return i;
        };
      },
      function(e, t) {
        e.exports = function() {
          return [];
        };
      },
      function(e, t, n) {
        var r = n(122),
          o = n(20),
          i = n(123),
          a = n(124),
          s = n(125),
          u = n(7),
          c = n(27),
          l = c(r),
          f = c(o),
          p = c(i),
          d = c(a),
          h = c(s),
          y = u;
        ((r && '[object DataView]' != y(new r(new ArrayBuffer(1)))) ||
          (o && '[object Map]' != y(new o())) ||
          (i && '[object Promise]' != y(i.resolve())) ||
          (a && '[object Set]' != y(new a())) ||
          (s && '[object WeakMap]' != y(new s()))) &&
          (y = function(e) {
            var t = u(e),
              n = '[object Object]' == t ? e.constructor : void 0,
              r = n ? c(n) : '';
            if (r)
              switch (r) {
                case l:
                  return '[object DataView]';
                case f:
                  return '[object Map]';
                case p:
                  return '[object Promise]';
                case d:
                  return '[object Set]';
                case h:
                  return '[object WeakMap]';
              }
            return t;
          }),
          (e.exports = y);
      },
      function(e, t, n) {
        var r = n(3)(n(2), 'DataView');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(3)(n(2), 'Promise');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(3)(n(2), 'Set');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(3)(n(2), 'WeakMap');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(37),
          o = n(18);
        e.exports = function(e) {
          for (var t = o(e), n = t.length; n--; ) {
            var i = t[n],
              a = e[i];
            t[n] = [i, a, r(a)];
          }
          return t;
        };
      },
      function(e, t, n) {
        var r = n(35),
          o = n(128),
          i = n(135),
          a = n(22),
          s = n(37),
          u = n(38),
          c = n(14);
        e.exports = function(e, t) {
          return a(e) && s(t)
            ? u(c(e), t)
            : function(n) {
                var a = o(n, e);
                return void 0 === a && a === t ? i(n, e) : r(t, a, 3);
              };
        };
      },
      function(e, t, n) {
        var r = n(39);
        e.exports = function(e, t, n) {
          var o = null == e ? void 0 : r(e, t);
          return void 0 === o ? n : o;
        };
      },
      function(e, t, n) {
        var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          i = n(130)(function(e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(''),
              e.replace(r, function(e, n, r, i) {
                t.push(r ? i.replace(o, '$1') : n || e);
              }),
              t
            );
          });
        e.exports = i;
      },
      function(e, t, n) {
        var r = n(131);
        e.exports = function(e) {
          var t = r(e, function(e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        };
      },
      function(e, t, n) {
        var r = n(21),
          o = 'Expected a function';
        function i(e, t) {
          if ('function' != typeof e || (null != t && 'function' != typeof t))
            throw new TypeError(o);
          var n = function() {
            var r = arguments,
              o = t ? t.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, r);
            return (n.cache = i.set(o, a) || i), a;
          };
          return (n.cache = new (i.Cache || r)()), n;
        }
        (i.Cache = r), (e.exports = i);
      },
      function(e, t, n) {
        var r = n(133);
        e.exports = function(e) {
          return null == e ? '' : r(e);
        };
      },
      function(e, t, n) {
        var r = n(6),
          o = n(134),
          i = n(1),
          a = n(23),
          s = r ? r.prototype : void 0,
          u = s ? s.toString : void 0;
        e.exports = function e(t) {
          if ('string' == typeof t) return t;
          if (i(t)) return o(t, e) + '';
          if (a(t)) return u ? u.call(t) : '';
          var n = t + '';
          return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
            o[n] = t(e[n], n, e);
          return o;
        };
      },
      function(e, t, n) {
        var r = n(136),
          o = n(137);
        e.exports = function(e, t) {
          return null != e && o(e, t, r);
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          return null != e && t in Object(e);
        };
      },
      function(e, t, n) {
        var r = n(40),
          o = n(16),
          i = n(1),
          a = n(30),
          s = n(19),
          u = n(14);
        e.exports = function(e, t, n) {
          for (var c = -1, l = (t = r(t, e)).length, f = !1; ++c < l; ) {
            var p = u(t[c]);
            if (!(f = null != e && n(e, p))) break;
            e = e[p];
          }
          return f || ++c != l
            ? f
            : !!(l = null == e ? 0 : e.length) && s(l) && a(p, l) && (i(e) || o(e));
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return e;
        };
      },
      function(e, t, n) {
        var r = n(140),
          o = n(141),
          i = n(22),
          a = n(14);
        e.exports = function(e) {
          return i(e) ? r(a(e)) : o(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return function(t) {
            return null == t ? void 0 : t[e];
          };
        };
      },
      function(e, t, n) {
        var r = n(39);
        e.exports = function(e) {
          return function(t) {
            return r(t, e);
          };
        };
      },
      function(e, t, n) {
        var r = n(143);
        'string' == typeof r && (r = [[e.i, r, '']]);
        n(145)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
          r.locals && (e.exports = r.locals);
      },
      function(e, t, n) {
        (e.exports = n(144)(!0)).push([
          e.i,
          '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
          '',
          {
            version: 3,
            sources: [
              '/home/daniel/dev/go/src/github.com/grafana/grafana/data/plugins/influxdb-flux-datasource/src/styles.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,8DAA8D;EAC9D,YAAY,EAAE;;AAEhB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,sBAAsB;EACtB,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB,EAAE;;AAExB;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,iCAAiC;EACjC,gCAAgC,EAAE;;AAEpC;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB,EAAE;;AAErB;EACE,YAAY;EACZ,8DAA8D;EAC9D,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,6NAA6N,EAAE;;AAEjO;EACE,yBAAyB;EACzB,cAAc,EAAE;EAChB;IACE,eAAe;IACf,cAAc,EAAE;;AAEpB,WAAW;AACX;;;;;EAKE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;;;;;;;;EAQE,cAAc,EAAE;;AAElB;;;;;;;EAOE,cAAc,EAAE;;AAElB;;;;EAIE,cAAc,EAAE;;AAElB;;;;EAIE,cAAc,EAAE;;AAElB;;EAEE,cAAc,EAAE;;AAElB;EACE,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE;;AAEtB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE',
            file: 'styles.css',
            sourcesContent: [
              '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
            ],
            sourceRoot: '',
          },
        ]);
      },
      function(e, t, n) {
        'use strict';
        e.exports = function(e) {
          var t = [];
          return (
            (t.toString = function() {
              return this.map(function(t) {
                var n = (function(e, t) {
                  var n = e[1] || '',
                    r = e[3];
                  if (!r) return n;
                  if (t && 'function' == typeof btoa) {
                    var o = (function(e) {
                        return (
                          '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
                          ' */'
                        );
                      })(r),
                      i = r.sources.map(function(e) {
                        return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                      });
                    return [n]
                      .concat(i)
                      .concat([o])
                      .join('\n');
                  }
                  return [n].join('\n');
                })(t, e);
                return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
              }).join('');
            }),
            (t.i = function(e, n) {
              'string' == typeof e && (e = [[null, e, '']]);
              for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0);
              }
              for (o = 0; o < e.length; o++) {
                var a = e[o];
                (null != a[0] && r[a[0]]) ||
                  (n && !a[2]
                    ? (a[2] = n)
                    : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
                  t.push(a));
              }
            }),
            t
          );
        };
      },
      function(e, t, n) {
        var r = {},
          o = (function(e) {
            var t;
            return function() {
              return (
                void 0 === t &&
                  (t = function() {
                    return window && document && document.all && !window.atob;
                  }.apply(this, arguments)),
                t
              );
            };
          })(),
          i = (function(e) {
            var t = {};
            return function(e) {
              if ('function' == typeof e) return e();
              if (void 0 === t[e]) {
                var n = function(e) {
                  return document.querySelector(e);
                }.call(this, e);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            };
          })(),
          a = null,
          s = 0,
          u = [],
          c = n(146);
        function l(e, t) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n],
              i = r[o.id];
            if (i) {
              i.refs++;
              for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
              for (; a < o.parts.length; a++) i.parts.push(m(o.parts[a], t));
            } else {
              var s = [];
              for (a = 0; a < o.parts.length; a++) s.push(m(o.parts[a], t));
              r[o.id] = {id: o.id, refs: 1, parts: s};
            }
          }
        }
        function f(e, t) {
          for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.base ? i[0] + t.base : i[0],
              s = {css: i[1], media: i[2], sourceMap: i[3]};
            r[a] ? r[a].parts.push(s) : n.push((r[a] = {id: a, parts: [s]}));
          }
          return n;
        }
        function p(e, t) {
          var n = i(e.insertInto);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var r = u[u.length - 1];
          if ('top' === e.insertAt)
            r
              ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)
              : n.insertBefore(t, n.firstChild),
              u.push(t);
          else if ('bottom' === e.insertAt) n.appendChild(t);
          else {
            if ('object' != typeof e.insertAt || !e.insertAt.before)
              throw new Error(
                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
              );
            var o = i(e.insertInto + ' ' + e.insertAt.before);
            n.insertBefore(t, o);
          }
        }
        function d(e) {
          if (null === e.parentNode) return !1;
          e.parentNode.removeChild(e);
          var t = u.indexOf(e);
          t >= 0 && u.splice(t, 1);
        }
        function h(e) {
          var t = document.createElement('style');
          return (
            void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
            y(t, e.attrs),
            p(e, t),
            t
          );
        }
        function y(e, t) {
          Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n]);
          });
        }
        function m(e, t) {
          var n, r, o, i;
          if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function() {};
            e.css = i;
          }
          if (t.singleton) {
            var u = s++;
            (n = a || (a = h(t))),
              (r = g.bind(null, n, u, !1)),
              (o = g.bind(null, n, u, !0));
          } else
            e.sourceMap &&
            'function' == typeof URL &&
            'function' == typeof URL.createObjectURL &&
            'function' == typeof URL.revokeObjectURL &&
            'function' == typeof Blob &&
            'function' == typeof btoa
              ? ((n = (function(e) {
                  var t = document.createElement('link');
                  return (
                    void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                    (e.attrs.rel = 'stylesheet'),
                    y(t, e.attrs),
                    p(e, t),
                    t
                  );
                })(t)),
                (r = function(e, t, n) {
                  var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && o;
                  (t.convertToAbsoluteUrls || i) && (r = c(r)),
                    o &&
                      (r +=
                        '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                        ' */');
                  var a = new Blob([r], {type: 'text/css'}),
                    s = e.href;
                  (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
                }.bind(null, n, t)),
                (o = function() {
                  d(n), n.href && URL.revokeObjectURL(n.href);
                }))
              : ((n = h(t)),
                (r = function(e, t) {
                  var n = t.css,
                    r = t.media;
                  if ((r && e.setAttribute('media', r), e.styleSheet))
                    e.styleSheet.cssText = n;
                  else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                  }
                }.bind(null, n)),
                (o = function() {
                  d(n);
                }));
          return (
            r(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function(e, t) {
          if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
            throw new Error(
              'The style-loader cannot be used in a non-browser environment'
            );
          ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
            t.singleton || 'boolean' == typeof t.singleton || (t.singleton = o()),
            t.insertInto || (t.insertInto = 'head'),
            t.insertAt || (t.insertAt = 'bottom');
          var n = f(e, t);
          return (
            l(n, t),
            function(e) {
              for (var o = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = r[a.id]).refs--, o.push(s);
              }
              for (e && l(f(e, t), t), i = 0; i < o.length; i++) {
                var s;
                if (0 === (s = o[i]).refs) {
                  for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                  delete r[s.id];
                }
              }
            }
          );
        };
        var v = (function() {
          var e = [];
          return function(t, n) {
            return (e[t] = n), e.filter(Boolean).join('\n');
          };
        })();
        function g(e, t, n, r) {
          var o = n ? '' : r.css;
          if (e.styleSheet) e.styleSheet.cssText = v(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
          }
        }
      },
      function(e, t) {
        e.exports = function(e) {
          var t = 'undefined' != typeof window && window.location;
          if (!t) throw new Error('fixUrls requires window.location');
          if (!e || 'string' != typeof e) return e;
          var n = t.protocol + '//' + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, '/');
          return e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function(e, t) {
              var o,
                i = t
                  .trim()
                  .replace(/^"(.*)"$/, function(e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function(e, t) {
                    return t;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
                ? e
                : ((o =
                    0 === i.indexOf('//')
                      ? i
                      : 0 === i.indexOf('/') ? n + i : r + i.replace(/^\.\//, '')),
                  'url(' + JSON.stringify(o) + ')');
            }
          );
        };
      },
      function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(4),
          o = n.n(r),
          i = n(41),
          a = n(42),
          s = n.n(a),
          u = n(43),
          c = n.n(u),
          l = n(44),
          f = n.n(l),
          p = function(e) {
            return e && '_' !== e[0] && 'result' !== e && 'table' !== e;
          },
          d = ['result', '', 'table'],
          h = function(e) {
            return Object.keys(e)
              .filter(function(e) {
                return '_' !== e[0];
              })
              .filter(function(e) {
                return -1 === d.indexOf(e);
              })
              .reduce(function(t, n) {
                return (t[n] = e[n]), t;
              }, {});
          },
          y = function(e) {
            var t = [e._measurement, e._field],
              n = h(e),
              r = Object.keys(n).map(function(e) {
                return e + '=' + n[e];
              });
            return t.concat(r).join(' ');
          },
          m = function(e) {
            var t = s.a.parse(e, {header: !0, comments: '#'});
            return {
              data: t.data,
              types: (function(e, t) {
                var n = {};
                if ('#' === e[0]) {
                  var r = e
                    .split('\n')[0]
                    .slice(1)
                    .split(',');
                  r.length === t.fields.length &&
                    t.fields.forEach(function(e, t) {
                      n[e] = r[t];
                    });
                }
                return n;
              })(e, t.meta),
            };
          },
          v = function(e) {
            var t = parseFloat(e);
            return isNaN(t) ? null : t;
          },
          g = function(e, t) {
            var n = e;
            if (t)
              try {
                switch (t) {
                  case 'float':
                  case 'double':
                    n = parseFloat(e);
                    break;
                  case 'integer':
                  case 'long':
                    n = parseInt(e, 10);
                }
              } catch (e) {
                console.error(e);
              }
            return n;
          },
          b = function(e) {
            return Date.parse(e);
          };
        function x(e) {
          return e.trim().split(/\n\s*\s/);
        }
        function _(e) {
          var t = m(e),
            n = t.data,
            r = t.types,
            o = {type: 'table', columns: [], rows: []};
          if (n.length > 0) {
            var i = n[0],
              a = Object.keys(i)
                .filter(p)
                .map(function(e) {
                  return {id: e, text: e};
                }),
              s = {id: '_value', text: 'Value'},
              u = [
                {text: 'Time', id: '_time'},
                {text: 'Measurement', id: '_measurement'},
                {text: 'Field', id: '_field'},
              ].concat(a, [s]);
            u.forEach(function(e) {
              return o.columns.push(e);
            });
            var c = u.length - 1,
              l = r[s.id];
            n.forEach(function(e) {
              var t = u.map(function(t) {
                return e[t.id];
              });
              (t[c] = g(t[c], l)), o.rows.push(t);
            });
          }
          return o;
        }
        function A(e) {
          var t = m(e).data;
          if (0 === t.length) return [];
          var n = f()(t, 'table');
          return Object.keys(n)
            .map(function(e) {
              return n[e];
            })
            .map(function(e) {
              return {
                datapoints: e.map(function(e) {
                  return [v(e._value), b(e._time)];
                }),
                target: y(e[0]),
              };
            });
        }
        function k(e) {
          return m(e).data.map(function(e) {
            return e._value;
          });
        }
        var w = /^\s*measurements\((.+)\)\s*$/,
          E = /^\s*tags\((.+)\s*,\s*(.+)\)\s*$/,
          C = /^\s*tag_values\((.+)\s*,\s*(.+)\s*,\s*(.+)\)\s*$/,
          j = /^\s*field_keys\((.+)\s*,\s*(.+)\)\s*$/,
          O =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            },
          q = (function() {
            function e(e, t, n) {
              (this.backendSrv = t),
                (this.templateSrv = n),
                (this.type = 'influxdb-flux'),
                (this.url = e.url.trim()),
                (this.username = e.username),
                (this.password = e.password),
                (this.name = e.name),
                (this.basicAuth = e.basicAuth),
                (this.withCredentials = e.withCredentials),
                (this.interval = (e.jsonData || {}).timeInterval),
                (this.bucket = (e.jsonData || {}).bucket),
                (this.supportAnnotations = !0),
                (this.supportMetrics = !0);
            }
            return (
              (e.$inject = ['instanceSettings', 'backendSrv', 'templateSrv']),
              (e.prototype.prepareQueryTarget = function(e, t) {
                var n = this.getTimeFilter(t);
                t.scopedVars.range = {value: n};
                var r = this.templateSrv.replace(e.query, t.scopedVars, 'pipe');
                return O({}, e, {query: r});
              }),
              (e.prototype.query = function(e) {
                var t = this,
                  n = e.targets
                    .filter(function(e) {
                      return e.query;
                    })
                    .map(function(n) {
                      return t.prepareQueryTarget(n, e);
                    });
                if (0 === n.length) return Promise.resolve({data: []});
                var r = n.map(function(n) {
                  var r = n.query;
                  return 'table' === n.resultFormat
                    ? t
                        ._seriesQuery(r, e)
                        .then(function(e) {
                          return x(e.data);
                        })
                        .then(function(e) {
                          return e.map(_);
                        })
                    : t
                        ._seriesQuery(r, e)
                        .then(function(e) {
                          return x(e.data);
                        })
                        .then(function(e) {
                          return e.map(A);
                        });
                });
                return Promise.all(r).then(function(e) {
                  return {data: o.a.flattenDeep(e).slice(0, 20)};
                });
              }),
              (e.prototype.annotationQuery = function(e) {
                if (!e.annotation.query)
                  return Promise.reject({
                    message: 'Query missing in annotation definition',
                  });
                var t = e.annotation.query,
                  n = O({scopedVars: {}}, e, {silent: !0}),
                  r = this.prepareQueryTarget({query: t}, n);
                return this._seriesQuery(r.query, n).then(function(t) {
                  var n = x(t.data);
                  if (0 === n.length)
                    throw {message: 'No results in response from InfluxDB'};
                  return o.a.flatten(
                    n.map(function(t) {
                      return (function(e, t) {
                        var n = m(e).data;
                        if (0 === n.length) return [];
                        var r = [],
                          o = t.textCol || '_value',
                          i = (t.tagsCol || '').split(',').map(function(e) {
                            return e.trim();
                          });
                        return (
                          n.forEach(function(e) {
                            var n = h(e),
                              a = c()(
                                i
                                  .filter(function(e) {
                                    return n[e];
                                  })
                                  .map(function(e) {
                                    return n[e].split(',');
                                  })
                              );
                            r.push({
                              annotation: t,
                              time: b(e._time),
                              tags: a,
                              text: e[o],
                            });
                          }),
                          r
                        );
                      })(t, e.annotation);
                    })
                  );
                });
              }),
              (e.prototype.metricFindQuery = function(e, t) {
                var n = (function(e) {
                    var t = e.match(w);
                    if (t)
                      return (
                        'from(bucket:"' +
                        (o = t[1]) +
                        '")\n    |> range($range)\n    |> group(by:["_measurement"])\n    |> distinct(column:"_measurement")\n    |> group(none:true)'
                      );
                    var n = e.match(E);
                    if (n)
                      return (
                        'from(bucket:"' +
                        (o = n[1]) +
                        '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                        (i = n[2]) +
                        '")\n    |> keys()'
                      );
                    var r = e.match(C);
                    if (r) {
                      var o = r[1],
                        i = r[2],
                        a = r[3];
                      return (
                        'from(bucket:"' +
                        o +
                        '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                        i +
                        '")\n    |> group(by:["' +
                        a +
                        '"])\n    |> distinct(column:"' +
                        a +
                        '")\n    |> group(none:true)'
                      );
                    }
                    var s = e.match(j);
                    return s
                      ? 'from(bucket:"' +
                          (o = s[1]) +
                          '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                          (i = s[2]) +
                          '")\n    |> group(by:["_field"])\n    |> distinct(column:"_field")\n    |> group(none:true)'
                      : e;
                  })(e),
                  r = O({rangeRaw: {to: 'now', from: 'now - 1h'}, scopedVars: {}}, t, {
                    silent: !0,
                  }),
                  i = this.prepareQueryTarget({query: n}, r);
                return this._seriesQuery(i.query, r).then(function(e) {
                  var t = x(e.data);
                  return o.a
                    .uniq(o.a.flatten(t.map(k)))
                    .filter(function(e) {
                      return e && '_' !== e[0];
                    })
                    .map(function(e) {
                      return {text: e};
                    });
                });
              }),
              (e.prototype._seriesQuery = function(e, t) {
                return e
                  ? this._influxRequest('POST', '/api/v2/query', e, t)
                  : Promise.resolve({data: ''});
              }),
              (e.prototype.testDatasource = function() {
                var e =
                  'from(bucket:"' +
                  this.bucket +
                  '") \n        |> range(start:-10y) \n        |> last()';
                return this.bucket.indexOf('/') < 0
                  ? Promise.resolve({
                      status: 'error',
                      message: 'The bucket is missing a retention policy',
                    })
                  : this._influxRequest('POST', '/api/v2/query', e)
                      .then(function(e) {
                        return e && e.data && e.data.trim()
                          ? {
                              status: 'success',
                              message: 'Data source connected and database found.',
                            }
                          : {
                              status: 'error',
                              message:
                                'Data source connected, but has no data. Verify the "bucket" field and make sure the bucket has data.',
                            };
                      })
                      .catch(function(e) {
                        return {status: 'error', message: e.message};
                      });
              }),
              (e.prototype._influxRequest = function(e, t, n, r) {
                var o = {};
                this.username && ((o.u = this.username), (o.p = this.password));
                var i = {
                  method: e,
                  url: this.url + t,
                  params: o,
                  data: n,
                  precision: 'ms',
                  inspect: {type: this.type},
                  headers: {
                    Accept: 'application/csv',
                    'Content-Type': 'application/vnd.flux',
                  },
                };
                return (
                  (this.basicAuth || this.withCredentials) && (i.withCredentials = !0),
                  this.basicAuth && (i.headers.Authorization = this.basicAuth),
                  this.backendSrv.datasourceRequest(i).then(
                    function(e) {
                      return e;
                    },
                    function(e) {
                      if (0 !== e.status || e.status >= 300)
                        throw e.data && e.data.error
                          ? {
                              message: 'InfluxDB Error: ' + e.data.error,
                              data: e.data,
                              config: e.config,
                            }
                          : {
                              message:
                                'Network Error: ' + e.statusText + '(' + e.status + ')',
                              data: e.data,
                              config: e.config,
                            };
                    }
                  )
                );
              }),
              (e.prototype.getTimeFilter = function(e) {
                var t = this.getInfluxTime(e.rangeRaw.from, !1),
                  n = this.getInfluxTime(e.rangeRaw.to, !0);
                return 'now' === n ? 'start: ' + t : 'start: ' + t + ', stop: ' + n;
              }),
              (e.prototype.getInfluxTime = function(e, t) {
                if (o.a.isString(e)) {
                  if ('now' === e) return e;
                  var n = /^now\s*-\s*(\d+)([d|h|m|s])$/.exec(e);
                  if (n) return '-' + parseInt(n[1]) + n[2];
                  e = i.parse(e, t);
                }
                return e.toISOString();
              }),
              e
            );
          })(),
          S = n(45),
          B = n.n(S),
          T = n(46),
          R = n(0),
          D = n.n(R),
          P = n(47),
          I = n.n(P),
          M = n(15),
          z = n.n(M),
          F = n(48),
          L = n.n(F),
          N = n(9),
          U = n(49),
          $ = {'[': ']', '{': '}', '(': ')'},
          Q = n(5),
          K = n.n(Q),
          W = 'prism-token',
          Y = (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })(),
          H =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            },
          V = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.getRef = function(e) {
                  t.el = e;
                }),
                t
              );
            }
            return (
              Y(t, e),
              (t.prototype.componentDidUpdate = function(e) {
                this.props.isSelected &&
                  !e.isSelected &&
                  (function(e) {
                    if (e && e.offsetParent) {
                      var t = e.offsetParent;
                      (e.offsetTop > t.scrollTop + t.offsetHeight ||
                        e.offsetTop < t.scrollTop) &&
                        (t.scrollTop = e.offsetTop - t.offsetTop);
                    }
                  })(this.el);
              }),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.hint,
                  n = e.isSelected,
                  r = e.label,
                  o = e.onClickItem,
                  i = n ? 'typeahead-item typeahead-item__selected' : 'typeahead-item';
                return D.a.createElement(
                  'li',
                  {
                    ref: this.getRef,
                    className: i,
                    onClick: function() {
                      return o(r);
                    },
                  },
                  r,
                  t && n
                    ? D.a.createElement('div', {className: 'typeahead-item-hint'}, t)
                    : null
                );
              }),
              t
            );
          })(D.a.PureComponent),
          J = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Y(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.items,
                  n = e.label,
                  r = e.selected,
                  o = e.onClickItem;
                return D.a.createElement(
                  'li',
                  {className: 'typeahead-group'},
                  D.a.createElement('div', {className: 'typeahead-group__title'}, n),
                  D.a.createElement(
                    'ul',
                    {className: 'typeahead-group__list'},
                    t.map(function(e) {
                      var t = 'object' == typeof e ? e.text : e,
                        n = 'object' == typeof e ? e.display || e.text : e;
                      return D.a.createElement(V, {
                        key: t,
                        onClickItem: o,
                        isSelected: r.indexOf(t) > -1,
                        hint: e.hint,
                        label: n,
                      });
                    })
                  )
                );
              }),
              t
            );
          })(D.a.PureComponent),
          X = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Y(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.groupedItems,
                  n = e.menuRef,
                  r = e.selectedItems,
                  o = e.onClickItem;
                return D.a.createElement(
                  'ul',
                  {className: 'typeahead', ref: n},
                  t.map(function(e) {
                    return D.a.createElement(
                      J,
                      H({key: e.label, onClickItem: o, selected: r}, e)
                    );
                  })
                );
              }),
              t
            );
          })(D.a.PureComponent),
          G = (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })();
        function Z(e) {
          return e
            ? e.reduce(function(e, t) {
                return e.concat(t.items);
              }, [])
            : [];
        }
        var ee = function(e) {
            var t = e.split('\n').map(function(e) {
              return N.Block.create({type: 'paragraph', nodes: [N.Text.create(e)]});
            });
            return N.Document.create({nodes: t});
          },
          te = function(e) {
            return N.Value.create({document: ee(e)});
          },
          ne = (function(e) {
            function t(t) {
              var n = e.call(this, t) || this,
                r = t.index,
                o = void 0 === r ? 0 : r,
                i = t.prefix,
                a = void 0 === i ? 'query' : i;
              return (
                (n.node = document.createElement('div')),
                n.node.classList.add('slate-typeahead', 'slate-typeahead-' + a + '-' + o),
                document.body.appendChild(n.node),
                n
              );
            }
            return (
              G(t, e),
              (t.prototype.componentWillUnmount = function() {
                document.body.removeChild(this.node);
              }),
              (t.prototype.render = function() {
                return L.a.createPortal(this.props.children, this.node);
              }),
              t
            );
          })(D.a.Component),
          re = (function(e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              (r.onChange = function(e) {
                var t = e.value,
                  n = t.document !== r.state.value.document;
                r.setState({value: t}, function() {
                  n && r.handleChangeQuery();
                }),
                  window.requestAnimationFrame(r.handleTypeahead);
              }),
                (r.onMetricsReceived = function() {
                  r.state.metrics &&
                    ((function(e, t, n, r) {
                      void 0 === r && (r = 'variable'),
                        (K.a.languages[e].metrics = {
                          alias: r,
                          pattern: new RegExp('(?:^|\\s)(' + n.join('|') + ')(?:$|\\s)'),
                        });
                    })(r.props.language, 0, r.state.metrics),
                    window.requestAnimationFrame(function() {
                      var e = r.state.value
                        .change()
                        .insertText(' ')
                        .deleteBackward(1);
                      r.onChange(e);
                    }));
                }),
                (r.request = function(e) {
                  return r.props.request ? r.props.request(e) : fetch(e);
                }),
                (r.handleChangeQuery = function() {
                  var e = r.props.onQueryChange;
                  e && e(z.a.serialize(r.state.value));
                }),
                (r.onKeyDown = function(e, t) {
                  var n = r.state,
                    o = n.typeaheadIndex,
                    i = n.suggestions;
                  switch (e.key) {
                    case 'Escape':
                      if (r.menuEl)
                        return (
                          e.preventDefault(), e.stopPropagation(), r.resetTypeahead(), !0
                        );
                      break;
                    case ' ':
                      if (e.ctrlKey) return e.preventDefault(), r.handleTypeahead(), !0;
                      break;
                    case 'Tab':
                      if (r.menuEl) {
                        if ((e.preventDefault(), !i || 0 === i.length)) return;
                        var a = Z(i),
                          s = a[Math.abs(o) % a.length || 0];
                        return r.applyTypeahead(t, s), !0;
                      }
                      break;
                    case 'ArrowDown':
                      r.menuEl &&
                        (e.preventDefault(), r.setState({typeaheadIndex: o + 1}));
                      break;
                    case 'ArrowUp':
                      r.menuEl &&
                        (e.preventDefault(),
                        r.setState({typeaheadIndex: Math.max(0, o - 1)}));
                  }
                }),
                (r.handleTypeahead = function(e, t) {
                  return e || r.state.value.change();
                }),
                (r.resetTypeahead = function() {
                  r.setState({
                    suggestions: [],
                    typeaheadIndex: 0,
                    typeaheadPrefix: '',
                    typeaheadContext: null,
                  });
                }),
                (r.handleBlur = function() {
                  var e = r.props.onBlur;
                  (r.resetTimer = setTimeout(r.resetTypeahead, 100)), e && e();
                }),
                (r.handleFocus = function() {
                  var e = r.props.onFocus;
                  e && e();
                }),
                (r.handleClickMenu = function(e) {
                  var t = r.applyTypeahead(r.state.value.change(), e);
                  r.onChange(t);
                }),
                (r.updateMenu = function() {
                  var e = r.state.suggestions,
                    t = r.menuEl,
                    n = window.getSelection().anchorNode;
                  if (t)
                    if (e && e.length > 0) {
                      if (n && n.parentElement) {
                        var o = n.parentElement.getBoundingClientRect(),
                          i = window.scrollX,
                          a = window.scrollY;
                        requestAnimationFrame(function() {
                          (t.style.opacity = 1),
                            (t.style.top = o.top + a + o.height + 4 + 'px'),
                            (t.style.left = o.left + i - 2 + 'px');
                        });
                      }
                    } else t.removeAttribute('style');
                }),
                (r.menuRef = function(e) {
                  r.menuEl = e;
                }),
                (r.renderMenu = function() {
                  var e = r.props.portalPrefix,
                    t = r.state.suggestions;
                  if (!(t && t.length > 0)) return null;
                  var n = Math.max(r.state.typeaheadIndex, 0),
                    o = Z(t);
                  n = n % o.length || 0;
                  var i = (o.length > 0 ? [o[n]] : []).map(function(e) {
                    return 'object' == typeof e ? e.text : e;
                  });
                  return D.a.createElement(
                    ne,
                    {prefix: e},
                    D.a.createElement(X, {
                      menuRef: r.menuRef,
                      selectedItems: i,
                      onClickItem: r.handleClickMenu,
                      groupedItems: t,
                    })
                  );
                });
              var o = t.prismDefinition,
                i = void 0 === o ? {} : o,
                a = t.prismLanguage,
                s = void 0 === a ? 'promql' : a;
              return (
                (r.plugins = [
                  {
                    onKeyDown: function(e, t) {
                      var n = t.value;
                      if (n.isCollapsed)
                        switch (e.key) {
                          case '{':
                          case '[':
                            return (
                              e.preventDefault(),
                              t
                                .insertText('' + e.key + $[e.key])
                                .move(-1)
                                .focus(),
                              !0
                            );
                          case '(':
                            e.preventDefault();
                            var r = n.anchorText.text,
                              o = n.anchorOffset,
                              i = r.indexOf(' ', o),
                              a = (i > 0 ? i : r.length) - o;
                            return (
                              t
                                .insertText(e.key)
                                .move(a)
                                .insertText($[e.key])
                                .move(-1 - a)
                                .focus(),
                              !0
                            );
                        }
                    },
                  },
                  {
                    onKeyDown: function(e, t) {
                      var n = t.value;
                      if (n.isCollapsed && 'k' === e.key && e.ctrlKey) {
                        e.preventDefault();
                        var r = n.anchorText.text,
                          o = n.anchorOffset,
                          i = r.length - o;
                        return t.deleteForward(i), !0;
                      }
                    },
                  },
                  (function(e) {
                    var t = e.handler;
                    return {
                      onKeyDown: function(e) {
                        if (t && 'Enter' === e.key && !e.shiftKey)
                          return e.preventDefault(), t(e), !0;
                      },
                    };
                  })({handler: t.onPressEnter}),
                  {
                    onKeyDown: function(e, t) {
                      var n = t.value;
                      if (n.isCollapsed && 'Enter' === e.key && e.shiftKey) {
                        e.preventDefault();
                        var r = (function(e) {
                          var t = e.length - e.trimLeft().length;
                          if (t) {
                            for (var n = e[0]; --t; ) n += e[0];
                            return n;
                          }
                          return '';
                        })(n.startBlock.text);
                        return t
                          .splitBlock()
                          .insertText(r)
                          .focus();
                      }
                    },
                  },
                  (function(e) {
                    var t = e.definition,
                      n = e.language;
                    return (
                      t && (K.a.languages[n] = K.a.languages[n] || t),
                      {
                        renderMark: function(e) {
                          var t = e.children,
                            n = e.mark;
                          if (n.type === W) {
                            var r = 'token ' + n.data.get('types');
                            return D.a.createElement('span', {className: r}, t);
                          }
                        },
                        decorateNode: function(e) {
                          if ('paragraph' !== e.type) return [];
                          var t = e.getTexts().toArray(),
                            r = t
                              .map(function(e) {
                                return e.text;
                              })
                              .join('\n'),
                            o = K.a.languages[n],
                            i = K.a.tokenize(r, o),
                            a = [],
                            s = t.shift(),
                            u = s,
                            c = 0,
                            l = 0,
                            f = 0;
                          function p(e, n) {
                            var r =
                              (n || '') + ' ' + (e.type || '') + ' ' + (e.alias || '');
                            if ('string' == typeof e || 'string' == typeof e.content) {
                              (s = u), (c = l);
                              var o = 'string' == typeof e ? e : e.content,
                                i = o.split('\n').length - 1,
                                d = o.length - i,
                                h = f + d,
                                y = s.text.length - c,
                                m = d;
                              for (l = c + m; y < m; )
                                (m = d - y), (y = (u = t.shift()).text.length), (l = m);
                              if ('string' != typeof e || n) {
                                var v = {
                                  anchorKey: s.key,
                                  anchorOffset: c,
                                  focusKey: u.key,
                                  focusOffset: l,
                                  marks: [{type: W, data: {types: r}}],
                                };
                                a.push(v);
                              }
                              f = h;
                            } else if (e.content && e.content.length)
                              for (var g = 0, b = e.content; g < b.length; g++)
                                p(b[g], r);
                          }
                          for (var d = 0, h = i; d < h.length; d++) p(h[d]);
                          return a;
                        },
                      }
                    );
                  })({definition: i, language: s}),
                ]),
                (r.state = {
                  labelKeys: {},
                  labelValues: {},
                  metrics: t.metrics || [],
                  suggestions: [],
                  typeaheadIndex: 0,
                  typeaheadPrefix: '',
                  value: te(t.initialQuery || ''),
                }),
                r
              );
            }
            return (
              G(t, e),
              (t.prototype.componentDidMount = function() {
                this.updateMenu();
              }),
              (t.prototype.componentWillUnmount = function() {
                clearTimeout(this.resetTimer);
              }),
              (t.prototype.componentDidUpdate = function() {
                this.updateMenu();
              }),
              (t.prototype.componentWillReceiveProps = function(e) {
                e.metrics &&
                  e.metrics !== this.props.metrics &&
                  this.setState({metrics: e.metrics}, this.onMetricsReceived),
                  null !== e.initialQuery &&
                    e.initialQuery !== this.props.initialQuery &&
                    this.setState({value: te(e.initialQuery)});
              }),
              (t.prototype.applyTypeahead = function(e, t) {
                return {value: {}};
              }),
              (t.prototype.render = function() {
                return D.a.createElement(
                  'div',
                  {className: 'slate-query-field'},
                  this.renderMenu(),
                  D.a.createElement(U.Editor, {
                    autoCorrect: !1,
                    onBlur: this.handleBlur,
                    onKeyDown: this.onKeyDown,
                    onChange: this.onChange,
                    onFocus: this.handleFocus,
                    placeholder: this.props.placeholder,
                    plugins: this.plugins,
                    spellCheck: !1,
                    value: this.state.value,
                  })
                );
              }),
              t
            );
          })(D.a.Component);
        function oe(e, t) {
          for (var n, r = e.parentElement.previousSibling; r; ) {
            if ((n = r.querySelector(t))) return n;
            r = r.previousSibling;
          }
        }
        function ie(e) {
          void 0 === e && (e = window);
          var t = e.getSelection();
          if (!t.anchorNode) return null;
          var n = t.getRangeAt(0),
            r = t.anchorNode.textContent;
          if (null === r) return null;
          var o = n.startOffset;
          return r.substr(o, 1);
        }
        'Element' in window &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function(e) {
            var t,
              n = (this.document || this.ownerDocument).querySelectorAll(e),
              r = this;
            do {
              for (t = n.length; --t >= 0 && n.item(t) !== r; );
            } while (t < 0 && (r = r.parentElement));
            return r;
          });
        var ae = [
            {
              text: 'count',
              display: 'count()',
              hint: 'For each aggregated column, ouput the number of non-null records.',
            },
            {
              text: 'covariance',
              display: 'covariance(columns: ["valA", "valB"])',
              hint: 'Compute covariance between two columns and write it to "_value".',
            },
            {
              text: 'derivative',
              display: 'derivative()',
              hint: 'Computes the time based difference between subsequent records',
            },
            {
              text: 'difference',
              display: 'difference()',
              hint: 'Computes the difference between subsequent records.',
            },
            {
              text: 'distinct',
              display: 'distinct(column: "host")',
              hint: 'Produce unique values for a given column',
            },
            {
              text: 'filter',
              display: 'filter(fn: (r) => r["_value"] > 0)',
              hint:
                'Applies a predicate function to each input record, output tables contain only records that matched the predicate.',
            },
            {
              text: 'first',
              display: 'first()',
              hint: 'Selects the first non-null record from the input table.',
            },
            {
              text: 'from',
              display: 'from(bucket: "database/policy")',
              hint: 'Starting point of a query, produces a table from the given bucket.',
            },
            {
              text: 'group',
              display: 'group(by: ["host"]) ',
              hint: 'Groups results by a specified list of columns',
            },
            {
              text: 'integral',
              display: 'integral()',
              hint: 'For each aggregate column, output the area under the curve.',
            },
            {
              text: 'join',
              display: 'join(tables: {cpu: cpu, mem: mem}, on: ["host"])',
              hint:
                'Join two time series together on time and the list of "on" column keys.',
            },
            {
              text: 'last',
              display: 'last()',
              hint: 'Selects the last non-null record from the input table.',
            },
            {
              text: 'limit',
              display: 'limit(n: 10)',
              hint:
                'Limit the output table to the first "n" records of the input table. ',
            },
            {
              text: 'map',
              display: 'map(fn: (r) => r)',
              hint: 'Applies a function to each record of the input tables.',
            },
            {
              text: 'max',
              display: 'max()',
              hint: 'Selects the maximum record from the input table.',
            },
            {
              text: 'mean',
              display: 'mean()',
              hint: 'For each aggregated column, it outputs the mean as a float.',
            },
            {
              text: 'min',
              display: 'min()',
              hint: 'Selects the minimum record from the input table.',
            },
            {
              text: 'percentile',
              display: 'percentile(percentile: 0.95)',
              hint:
                ' For each aggregated column, it outputs the value that represents the specified percentile of the non-null record as a float.',
            },
            {
              text: 'range',
              display: 'range($range)',
              hint:
                'Filters the results by time boundaries "start" and "stop". Use "$range" to apply the dashboard range.',
            },
            {
              text: 'sample',
              display: 'sample(n: 10)',
              hint: 'Selects a every "n"-th record from the input table.',
            },
            {
              text: 'set',
              display: 'set(key: "myKey", value: "42")',
              hint: 'Assigns a static value to each record',
            },
            {
              text: 'shift',
              display: 'shift(shift: +12h)',
              hint: 'Add a fixed duration to time columns.',
            },
            {
              text: 'skew',
              display: 'skew()',
              hint: 'For each aggregated column, it outputs the skew as a float.',
            },
            {
              text: 'sort',
              display: 'sort(cols: ["host", "value"], desc: true)',
              hint:
                'Sorts the results by the specified columns, default sort is ascending',
            },
            {
              text: 'spread',
              display: 'spread()',
              hint:
                'For each aggregated column, it outputs the difference between the min and max values.',
            },
            {
              text: 'stddev',
              display: 'stddev()',
              hint:
                'For each aggregated column, it outputs the standard deviation as a float.',
            },
            {
              text: 'sum',
              display: 'sum()',
              hint: 'For each aggregated column, it outputs the sum of all records. ',
            },
            {
              text: 'window',
              display: 'window(every: 10m)',
              hint: 'Partitions the results by a given time range.',
            },
            {
              text: 'yield',
              display: 'yield()',
              hint: 'Yield the input table as the result of the query.',
            },
          ],
          se = {
            comment: {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0},
            'context-short': {
              pattern: /^\w+\.\.(\w+\.\.)?\w*$/i,
              alias: 'symbol',
              inside: {
                'short-root': /^\w+(?=\.\.)/,
                'short-delimiter': /\.\./,
                'short-field': /\w+$/,
              },
            },
            'function-context': {pattern: /[a-z0-9_]+\(.*?\)/i, inside: {}},
            duration: {pattern: /-?\d+(ns|u|µ|ms|s|m|h|d|w)/i, alias: 'number'},
            builtin: new RegExp(
              '\\b(?:' +
                ae
                  .map(function(e) {
                    return e.text;
                  })
                  .join('|') +
                ')(?=\\s*\\()',
              'i'
            ),
            string: {
              pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            keyword: /\b(?:and|empty|import|in|not|or|return)\b/,
            boolean: /\b(?:true|false)\b/,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /-|\+|\*|\/|%|==|<=?|>=?|!=|!~|=~|=|<-|\|>/,
            punctuation: /[{}[\];(),.:]/,
          };
        se['function-context'].inside = {
          argument: {pattern: /[a-z0-9_]+(?=:)/i, alias: 'symbol'},
          duration: se.duration,
          number: se.number,
          builtin: se.builtin,
          string: se.string,
        };
        var ue = se,
          ce = (n(142),
          (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })()),
          le = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                e.done
                  ? o(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          fe = function(e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = {next: s(0), throw: s(1), return: s(2)}),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this;
                }),
              i
            );
            function s(i) {
              return function(s) {
                return (function(i) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, {value: i[1], done: !1};
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return {value: i[0] ? i[1] : void 0, done: !0};
                })([i, s]);
              };
            }
          },
          pe = function(e) {
            return e.replace(/[{}[\]="(),!~+\-*\/^%]/g, '').trim();
          },
          de = function(e) {
            return {text: e};
          },
          he = ['1m', '5m', '10m', '30m', '1h'],
          ye = 'telegraf',
          me = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.handleTypeahead = (function(e, t) {
                  var n;
                  return function() {
                    var t = this,
                      r = arguments;
                    clearTimeout(n),
                      (n = setTimeout(function() {
                        (n = null), e.apply(t, r);
                      }, 500));
                  };
                })(function() {
                  var e = window.getSelection();
                  if (e.anchorNode) {
                    var n = e.anchorNode.parentElement;
                    if (null === n) return;
                    if (!n.closest('.slate-query-field') || t.state.value.isBlurred)
                      return;
                    var r = e.getRangeAt(0),
                      o = e.anchorNode.textContent;
                    if (null === o) return;
                    var i = r.startOffset,
                      a = pe(o.substr(0, i)),
                      s = t.state.value.anchorOffset,
                      u = t.state.value.anchorText.text.slice(0, s),
                      c = [],
                      l = n.classList,
                      f = null,
                      p = t.props.defaultDatabase || ye;
                    if (l.contains('context-range'))
                      (f = 'context-range'),
                        c.push({label: 'Range vector', items: he.slice().map(de)});
                    else if (l.contains('short-delimiter') || l.contains('short-field')) {
                      var d = oe(n, '.short-root'),
                        h = d && d.textContent.replace('..', ''),
                        y = oe(n, '.short-field'),
                        m = y && y.textContent;
                      if (h && m) {
                        var v = (function(e, t, n) {
                          return n
                            ? 'from(bucket: "' +
                                e +
                                '")\n  |> filter(fn: (r) => r["_measurement"] == "' +
                                t +
                                '" AND r["_field"] == "' +
                                n +
                                '")\n  |> range($range)\n  |> limit(n: 1000)'
                            : 'from(bucket: "' +
                                e +
                                '")\n  |> filter(fn: (r) => r["_measurement"] == "' +
                                t +
                                '")\n  |> range($range)\n  |> limit(n: 1000)';
                        })(h, m, (a = a.replace(/\w*\.\./g, '')));
                        c.push({
                          label: 'Expand',
                          items: [{deleteBackwards: s, text: v}],
                          skipFilter: !0,
                        });
                        var g = t.fields && t.fields[h] && t.fields[h][m];
                        if (!g) return void t.fetchFields(h, m);
                        (f = 'context-fields'), c.push({label: 'Fields', items: g});
                      } else if (h) {
                        var b = t.measurements && t.measurements[h];
                        if (!b) return void t.fetchMeasurements(h);
                        (a = a.replace(/\w*\.\./g, '')),
                          (f = 'context-measurements'),
                          c.push({label: 'Measurements', items: b});
                      }
                    } else
                      u.match(/(^\s+$)|(\)\s+$)/)
                        ? ((f = 'context-operator'),
                          c.push({
                            prefixMatch: !0,
                            label: 'Operators',
                            items: [
                              '|>',
                              '<-',
                              '+',
                              '-',
                              '*',
                              '/',
                              '<',
                              '>',
                              '<=',
                              '=>',
                              '==',
                              '=~',
                              '!=',
                              '!~',
                            ].map(de),
                          }))
                        : a && !l.contains('argument')
                          ? ((f = 'context-builtin'),
                            c.push({prefixMatch: !0, label: 'Functions', items: ae}))
                          : ('' === z.a.serialize(t.state.value) ||
                              o.match(/[+\-*\/^%]/)) &&
                            ((f = 'context-new'),
                            c.push({
                              prefixMatch: !0,
                              label: 'Templates',
                              items: ['from(bucket: "' + p + '") |> range($range) '].map(
                                de
                              ),
                            }),
                            c.push({
                              prefixMatch: !0,
                              label: 'Shortcodes',
                              items: [p + '..'].map(de),
                            }));
                    var x = 0,
                      _ = c.map(function(e) {
                        return (
                          e.items &&
                            a &&
                            !e.skipFilter &&
                            ((e.items = e.items.filter(function(e) {
                              return e.text.length >= a.length;
                            })),
                            e.prefixMatch
                              ? (e.items = e.items.filter(function(e) {
                                  return 0 === e.text.indexOf(a);
                                }))
                              : (e.items = e.items.filter(function(e) {
                                  return e.text.indexOf(a) > -1;
                                }))),
                          (x += e.items.length),
                          e
                        );
                      });
                    console.log('handleTypeahead', e.anchorNode, l, o, i, a, f),
                      t.setState({
                        typeaheadPrefix: a,
                        typeaheadContext: f,
                        typeaheadText: o,
                        suggestions: x > 0 ? _ : [],
                      });
                  }
                })),
                t
              );
            }
            return (
              ce(t, e),
              (t.prototype.componentDidMount = function() {
                this.updateMenu();
              }),
              (t.prototype.componentWillReceiveProps = function(e) {
                null !== e.initialQuery &&
                  e.initialQuery !== this.props.initialQuery &&
                  this.setState({value: te(e.initialQuery)});
              }),
              (t.prototype.applyTypeahead = function(e, t) {
                var n = this.state,
                  r = n.typeaheadPrefix,
                  o = n.typeaheadContext,
                  i = n.typeaheadText,
                  a = t.display || t.text;
                switch (o) {
                  case 'context-operator':
                    (s = ie()) || ' ' === s || (a += ' ');
                    break;
                  case 'context-measurements':
                    var s;
                    (s = ie()) || '.' === s || (a += '..');
                }
                this.resetTypeahead();
                var u = t.deleteBackwards || r.length,
                  c = pe(i).length - r.length,
                  l = i.indexOf(r),
                  f = r && ((c > 0 && l > -1) || a === i) ? c + l : 0;
                if (a.match(/\n/)) {
                  var p = ee(a);
                  return e
                    .deleteBackward(u)
                    .deleteForward(f)
                    .insertFragment(p)
                    .focus();
                }
                return e
                  .deleteBackward(u)
                  .deleteForward(f)
                  .insertText(a)
                  .move(0)
                  .focus();
              }),
              (t.prototype.fetchFields = function(e, t) {
                return le(this, void 0, void 0, function() {
                  var n, r;
                  return fe(this, function(o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (n = 'field_keys(' + e + ',' + t + ')'), [4, this.request(n)]
                        );
                      case 1:
                        return (
                          (r = o.sent()),
                          this.fields || (this.fields = {}),
                          this.fields[e] || (this.fields[e] = {}),
                          (this.fields[e][t] = r),
                          setTimeout(this.handleTypeahead, 0),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.fetchMeasurements = function(e) {
                return le(this, void 0, void 0, function() {
                  var t, n;
                  return fe(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (t = 'measurements(' + e + ')'), [4, this.request(t)];
                      case 1:
                        return (
                          (n = r.sent()),
                          this.measurements || (this.measurements = {}),
                          (this.measurements[e] = n),
                          setTimeout(this.handleTypeahead, 0),
                          [2]
                        );
                    }
                  });
                });
              }),
              t
            );
          })(re),
          ve = (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })(),
          ge = (function(e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.handleChangeQuery = function(e) {
                  var t = n.props,
                    r = t.index,
                    o = t.change,
                    i = n.state.query !== e;
                  n.setState({edited: i, query: e}), o && o(e, r);
                }),
                (n.handlePressEnter = function() {
                  var e = n.props.execute;
                  e && e();
                }),
                (n.state = {edited: !1, query: t.query || ''}),
                n
              );
            }
            return (
              ve(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.database,
                  n = e.request,
                  r = this.state,
                  o = r.edited,
                  i = r.query;
                return D.a.createElement(
                  'div',
                  {className: 'gf-form-input', style: {height: 'initial'}},
                  D.a.createElement(me, {
                    defaultDatabase: t,
                    initialQuery: o ? null : i,
                    onPressEnter: this.handlePressEnter,
                    onQueryChange: this.handleChangeQuery,
                    prismLanguage: 'python',
                    prismDefinition: ue,
                    placeholder: 'Enter a FLUX query',
                    request: n,
                  })
                );
              }),
              t
            );
          })(R.Component);
        I.a.directive('fluxEditor', [
          'reactDirective',
          function(e) {
            return e(ge, ['change', 'database', 'execute', 'query', 'request']);
          },
        ]);
        var be = (function() {
            var e =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })(),
          xe = (function(e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                (r.onDataReceived = function(e) {
                  (r.resultRecordCount = e.reduce(function(e, t) {
                    return e + ('table' === t.type ? t.rows.length : t.datapoints.length);
                  }, 0)),
                    (r.resultTableCount = e.length);
                }),
                (r.onResponseReceived = function(e) {
                  r.dataPreview = e.data;
                }),
                (r.onRefresh = function() {
                  (r.dataPreview = ''),
                    (r.resultRecordCount = ''),
                    (r.resultTableCount = '');
                }),
                (r.onChange = function(e) {
                  console.log('nextQuery', e), (r.target.query = e);
                }),
                (r.onExecute = function() {
                  console.log('Influx refresh metric data', r.target),
                    r.panelCtrl.refresh();
                }),
                (r.requestMetadata = function(e) {
                  return r.datasource.metricFindQuery(e);
                }),
                (r.resultRecordCount = ''),
                (r.resultTableCount = ''),
                void 0 === r.target.query &&
                  (r.target.query =
                    'from(bucket: "' +
                    r.datasource.bucket +
                    '")\n  |> range($range)\n  |> limit(n:1000)\n'),
                (r.defaultBucket = r.datasource.bucket),
                (r.resultFormats = [
                  {text: 'Time series', value: 'time_series'},
                  {text: 'Table', value: 'table'},
                ]),
                B.a.on('ds-request-response', r.onResponseReceived, t),
                r.panelCtrl.events.on('refresh', r.onRefresh, t),
                r.panelCtrl.events.on('data-received', r.onDataReceived, t),
                r
              );
            }
            return (
              (t.$inject = ['$scope', '$injector']),
              be(t, e),
              (t.prototype.getCollapsedText = function() {
                return this.target.query;
              }),
              (t.templateUrl = 'partials/query.editor.html'),
              t
            );
          })(T.QueryCtrl);
        n.d(t, 'ConfigCtrl', function() {
          return _e;
        }),
          n.d(t, 'AnnotationsQueryCtrl', function() {
            return Ae;
          }),
          n.d(t, 'Datasource', function() {
            return q;
          }),
          n.d(t, 'QueryCtrl', function() {
            return xe;
          });
        var _e = (function() {
            function e() {}
            return (e.templateUrl = 'partials/config.html'), e;
          })(),
          Ae = (function() {
            function e() {}
            return (e.templateUrl = 'partials/annotations.editor.html'), e;
          })();
      },
    ]);
  }
);
//# sourceMappingURL=module.js.map
