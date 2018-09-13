define(
  [
    'react',
    'slate-plain-serializer',
    'lodash',
    'app/core/utils/datemath',
    'app/core/app_events',
    'app/plugins/sdk',
    'app/core/core_module',
    'react-dom',
    'slate',
    'slate-react',
    'prismjs',
  ],
  function(e, t, n, r, i, o, a, s, u, l, f) {
    return (function(e) {
      var t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = {i: r, l: !1, exports: {}});
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
          n.o(e, t) ||
            Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r});
        }),
        (n.r = function(e) {
          Object.defineProperty(e, '__esModule', {value: !0});
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
        n((n.s = 56))
      );
    })([
      function(e, t) {
        var n = Array.isArray;
        e.exports = n;
      },
      function(e, t, n) {
        var r = n(38),
          i = 'object' == typeof self && self && self.Object === Object && self,
          o = r || i || Function('return this')();
        e.exports = o;
      },
      function(e, t) {
        var n;
        n = (function() {
          return this;
        })();
        try {
          n = n || Function('return this')() || (0, eval)('this');
        } catch (e) {
          'object' == typeof window && (n = window);
        }
        e.exports = n;
      },
      function(e, t, n) {
        'use strict';
        var r = n(11),
          i =
            Object.keys ||
            function(e) {
              var t = [];
              for (var n in e) t.push(n);
              return t;
            };
        e.exports = c;
        var o = n(6);
        o.inherits = n(5);
        var a = n(30),
          s = n(21);
        o.inherits(c, a);
        for (var u = i(s.prototype), l = 0; l < u.length; l++) {
          var f = u[l];
          c.prototype[f] || (c.prototype[f] = s.prototype[f]);
        }
        function c(e) {
          if (!(this instanceof c)) return new c(e);
          a.call(this, e),
            s.call(this, e),
            e && !1 === e.readable && (this.readable = !1),
            e && !1 === e.writable && (this.writable = !1),
            (this.allowHalfOpen = !0),
            e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once('end', h);
        }
        function h() {
          this.allowHalfOpen || this._writableState.ended || r(d, this);
        }
        function d(e) {
          e.end();
        }
        Object.defineProperty(c.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
          },
        }),
          (c.prototype._destroy = function(e, t) {
            this.push(null), this.end(), r(t, e);
          });
      },
      function(e, t, n) {
        var r = n(84),
          i = n(87);
        e.exports = function(e, t) {
          var n = i(e, t);
          return r(n) ? n : void 0;
        };
      },
      function(e, t) {
        'function' == typeof Object.create
          ? (e.exports = function(e, t) {
              (e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {value: e, enumerable: !1, writable: !0, configurable: !0},
                }));
            })
          : (e.exports = function(e, t) {
              e.super_ = t;
              var n = function() {};
              (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.prototype.constructor = e);
            });
      },
      function(e, t, n) {
        (function(e) {
          function n(e) {
            return Object.prototype.toString.call(e);
          }
          (t.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : '[object Array]' === n(e);
          }),
            (t.isBoolean = function(e) {
              return 'boolean' == typeof e;
            }),
            (t.isNull = function(e) {
              return null === e;
            }),
            (t.isNullOrUndefined = function(e) {
              return null == e;
            }),
            (t.isNumber = function(e) {
              return 'number' == typeof e;
            }),
            (t.isString = function(e) {
              return 'string' == typeof e;
            }),
            (t.isSymbol = function(e) {
              return 'symbol' == typeof e;
            }),
            (t.isUndefined = function(e) {
              return void 0 === e;
            }),
            (t.isRegExp = function(e) {
              return '[object RegExp]' === n(e);
            }),
            (t.isObject = function(e) {
              return 'object' == typeof e && null !== e;
            }),
            (t.isDate = function(e) {
              return '[object Date]' === n(e);
            }),
            (t.isError = function(e) {
              return '[object Error]' === n(e) || e instanceof Error;
            }),
            (t.isFunction = function(e) {
              return 'function' == typeof e;
            }),
            (t.isPrimitive = function(e) {
              return (
                null === e ||
                'boolean' == typeof e ||
                'number' == typeof e ||
                'string' == typeof e ||
                'symbol' == typeof e ||
                void 0 === e
              );
            }),
            (t.isBuffer = e.isBuffer);
        }.call(this, n(33).Buffer));
      },
      function(e, t, n) {
        var r = n(1).Symbol;
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(7),
          i = n(79),
          o = n(80),
          a = r ? r.toStringTag : void 0;
        e.exports = function(e) {
          return null == e
            ? void 0 === e ? '[object Undefined]' : '[object Null]'
            : a && a in Object(e) ? i(e) : o(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return null != e && 'object' == typeof e;
        };
      },
      function(e, t) {
        var n,
          r,
          i = (e.exports = {});
        function o() {
          throw new Error('setTimeout has not been defined');
        }
        function a() {
          throw new Error('clearTimeout has not been defined');
        }
        function s(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
          try {
            return n(e, 0);
          } catch (t) {
            try {
              return n.call(null, e, 0);
            } catch (t) {
              return n.call(this, e, 0);
            }
          }
        }
        !(function() {
          try {
            n = 'function' == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            n = o;
          }
          try {
            r = 'function' == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            r = a;
          }
        })();
        var u,
          l = [],
          f = !1,
          c = -1;
        function h() {
          f && u && ((f = !1), u.length ? (l = u.concat(l)) : (c = -1), l.length && d());
        }
        function d() {
          if (!f) {
            var e = s(h);
            f = !0;
            for (var t = l.length; t; ) {
              for (u = l, l = []; ++c < t; ) u && u[c].run();
              (c = -1), (t = l.length);
            }
            (u = null),
              (f = !1),
              (function(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(e);
                try {
                  r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              })(e);
          }
        }
        function p(e, t) {
          (this.fun = e), (this.array = t);
        }
        function y() {}
        (i.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new p(e, t)), 1 !== l.length || f || s(d);
        }),
          (p.prototype.run = function() {
            this.fun.apply(null, this.array);
          }),
          (i.title = 'browser'),
          (i.browser = !0),
          (i.env = {}),
          (i.argv = []),
          (i.version = ''),
          (i.versions = {}),
          (i.on = y),
          (i.addListener = y),
          (i.once = y),
          (i.off = y),
          (i.removeListener = y),
          (i.removeAllListeners = y),
          (i.emit = y),
          (i.prependListener = y),
          (i.prependOnceListener = y),
          (i.listeners = function(e) {
            return [];
          }),
          (i.binding = function(e) {
            throw new Error('process.binding is not supported');
          }),
          (i.cwd = function() {
            return '/';
          }),
          (i.chdir = function(e) {
            throw new Error('process.chdir is not supported');
          }),
          (i.umask = function() {
            return 0;
          });
      },
      function(e, t, n) {
        'use strict';
        (function(t) {
          !t.version ||
          0 === t.version.indexOf('v0.') ||
          (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
            ? (e.exports = function(e, n, r, i) {
                if ('function' != typeof e)
                  throw new TypeError('"callback" argument must be a function');
                var o,
                  a,
                  s = arguments.length;
                switch (s) {
                  case 0:
                  case 1:
                    return t.nextTick(e);
                  case 2:
                    return t.nextTick(function() {
                      e.call(null, n);
                    });
                  case 3:
                    return t.nextTick(function() {
                      e.call(null, n, r);
                    });
                  case 4:
                    return t.nextTick(function() {
                      e.call(null, n, r, i);
                    });
                  default:
                    for (o = new Array(s - 1), a = 0; a < o.length; )
                      o[a++] = arguments[a];
                    return t.nextTick(function() {
                      e.apply(null, o);
                    });
                }
              })
            : (e.exports = t.nextTick);
        }.call(this, n(10)));
      },
      function(e, t, n) {
        var r = n(33),
          i = r.Buffer;
        function o(e, t) {
          for (var n in e) t[n] = e[n];
        }
        function a(e, t, n) {
          return i(e, t, n);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (e.exports = r)
          : (o(r, t), (t.Buffer = a)),
          o(i, a),
          (a.from = function(e, t, n) {
            if ('number' == typeof e)
              throw new TypeError('Argument must not be a number');
            return i(e, t, n);
          }),
          (a.alloc = function(e, t, n) {
            if ('number' != typeof e) throw new TypeError('Argument must be a number');
            var r = i(e);
            return (
              void 0 !== t
                ? 'string' == typeof n ? r.fill(t, n) : r.fill(t)
                : r.fill(0),
              r
            );
          }),
          (a.allocUnsafe = function(e) {
            if ('number' != typeof e) throw new TypeError('Argument must be a number');
            return i(e);
          }),
          (a.allocUnsafeSlow = function(e) {
            if ('number' != typeof e) throw new TypeError('Argument must be a number');
            return r.SlowBuffer(e);
          });
      },
      function(e, t, n) {
        var r = n(109),
          i = n(110),
          o = n(111),
          a = n(112),
          s = n(113);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(47);
        e.exports = function(e, t) {
          for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
          return -1;
        };
      },
      function(e, t, n) {
        var r = n(4)(Object, 'create');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(127);
        e.exports = function(e, t) {
          var n = e.__data__;
          return r(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
        };
      },
      function(e, t, n) {
        var r = n(29);
        e.exports = function(e) {
          if ('string' == typeof e || r(e)) return e;
          var t = e + '';
          return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
        };
      },
      function(t, n) {
        t.exports = e;
      },
      function(e, t) {
        function n() {
          (this._events = this._events || {}),
            (this._maxListeners = this._maxListeners || void 0);
        }
        function r(e) {
          return 'function' == typeof e;
        }
        function i(e) {
          return 'object' == typeof e && null !== e;
        }
        function o(e) {
          return void 0 === e;
        }
        (e.exports = n),
          (n.EventEmitter = n),
          (n.prototype._events = void 0),
          (n.prototype._maxListeners = void 0),
          (n.defaultMaxListeners = 10),
          (n.prototype.setMaxListeners = function(e) {
            if ('number' != typeof e || e < 0 || isNaN(e))
              throw TypeError('n must be a positive number');
            return (this._maxListeners = e), this;
          }),
          (n.prototype.emit = function(e) {
            var t, n, a, s, u, l;
            if (
              (this._events || (this._events = {}),
              'error' === e &&
                (!this._events.error ||
                  (i(this._events.error) && !this._events.error.length)))
            ) {
              if ((t = arguments[1]) instanceof Error) throw t;
              var f = new Error('Uncaught, unspecified "error" event. (' + t + ')');
              throw ((f.context = t), f);
            }
            if (o((n = this._events[e]))) return !1;
            if (r(n))
              switch (arguments.length) {
                case 1:
                  n.call(this);
                  break;
                case 2:
                  n.call(this, arguments[1]);
                  break;
                case 3:
                  n.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  (s = Array.prototype.slice.call(arguments, 1)), n.apply(this, s);
              }
            else if (i(n))
              for (
                s = Array.prototype.slice.call(arguments, 1),
                  a = (l = n.slice()).length,
                  u = 0;
                u < a;
                u++
              )
                l[u].apply(this, s);
            return !0;
          }),
          (n.prototype.addListener = function(e, t) {
            var a;
            if (!r(t)) throw TypeError('listener must be a function');
            return (
              this._events || (this._events = {}),
              this._events.newListener &&
                this.emit('newListener', e, r(t.listener) ? t.listener : t),
              this._events[e]
                ? i(this._events[e])
                  ? this._events[e].push(t)
                  : (this._events[e] = [this._events[e], t])
                : (this._events[e] = t),
              i(this._events[e]) &&
                !this._events[e].warned &&
                (a = o(this._maxListeners)
                  ? n.defaultMaxListeners
                  : this._maxListeners) &&
                a > 0 &&
                this._events[e].length > a &&
                ((this._events[e].warned = !0),
                console.error(
                  '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                  this._events[e].length
                ),
                'function' == typeof console.trace && console.trace()),
              this
            );
          }),
          (n.prototype.on = n.prototype.addListener),
          (n.prototype.once = function(e, t) {
            if (!r(t)) throw TypeError('listener must be a function');
            var n = !1;
            function i() {
              this.removeListener(e, i), n || ((n = !0), t.apply(this, arguments));
            }
            return (i.listener = t), this.on(e, i), this;
          }),
          (n.prototype.removeListener = function(e, t) {
            var n, o, a, s;
            if (!r(t)) throw TypeError('listener must be a function');
            if (!this._events || !this._events[e]) return this;
            if (
              ((a = (n = this._events[e]).length),
              (o = -1),
              n === t || (r(n.listener) && n.listener === t))
            )
              delete this._events[e],
                this._events.removeListener && this.emit('removeListener', e, t);
            else if (i(n)) {
              for (s = a; s-- > 0; )
                if (n[s] === t || (n[s].listener && n[s].listener === t)) {
                  o = s;
                  break;
                }
              if (o < 0) return this;
              1 === n.length ? ((n.length = 0), delete this._events[e]) : n.splice(o, 1),
                this._events.removeListener && this.emit('removeListener', e, t);
            }
            return this;
          }),
          (n.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener)
              return (
                0 === arguments.length
                  ? (this._events = {})
                  : this._events[e] && delete this._events[e],
                this
              );
            if (0 === arguments.length) {
              for (t in this._events)
                'removeListener' !== t && this.removeAllListeners(t);
              return this.removeAllListeners('removeListener'), (this._events = {}), this;
            }
            if (r((n = this._events[e]))) this.removeListener(e, n);
            else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this;
          }),
          (n.prototype.listeners = function(e) {
            return this._events && this._events[e]
              ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice()
              : [];
          }),
          (n.prototype.listenerCount = function(e) {
            if (this._events) {
              var t = this._events[e];
              if (r(t)) return 1;
              if (t) return t.length;
            }
            return 0;
          }),
          (n.listenerCount = function(e, t) {
            return e.listenerCount(t);
          });
      },
      function(e, t, n) {
        ((t = e.exports = n(30)).Stream = t),
          (t.Readable = t),
          (t.Writable = n(21)),
          (t.Duplex = n(3)),
          (t.Transform = n(36)),
          (t.PassThrough = n(70));
      },
      function(e, t, n) {
        'use strict';
        (function(t, r, i) {
          var o = n(11);
          function a(e) {
            var t = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function() {
                !(function(e, t, n) {
                  var r = e.entry;
                  for (e.entry = null; r; ) {
                    var i = r.callback;
                    t.pendingcb--, i(void 0), (r = r.next);
                  }
                  t.corkedRequestsFree
                    ? (t.corkedRequestsFree.next = e)
                    : (t.corkedRequestsFree = e);
                })(t, e);
              });
          }
          e.exports = v;
          var s,
            u =
              !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
                ? r
                : o;
          v.WritableState = m;
          var l = n(6);
          l.inherits = n(5);
          var f,
            c = {deprecate: n(69)},
            h = n(32),
            d = n(12).Buffer,
            p = i.Uint8Array || function() {},
            y = n(34);
          function g() {}
          function m(e, t) {
            (s = s || n(3)),
              (e = e || {}),
              (this.objectMode = !!e.objectMode),
              t instanceof s &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var r = e.highWaterMark,
              i = this.objectMode ? 16 : 16384;
            (this.highWaterMark = r || 0 === r ? r : i),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var l = !1 === e.decodeStrings;
            (this.decodeStrings = !l),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function(e) {
                !(function(e, t) {
                  var n = e._writableState,
                    r = n.sync,
                    i = n.writecb;
                  if (
                    ((function(e) {
                      (e.writing = !1),
                        (e.writecb = null),
                        (e.length -= e.writelen),
                        (e.writelen = 0);
                    })(n),
                    t)
                  )
                    !(function(e, t, n, r, i) {
                      --t.pendingcb,
                        n
                          ? (o(i, r),
                            o(E, e, t),
                            (e._writableState.errorEmitted = !0),
                            e.emit('error', r))
                          : (i(r),
                            (e._writableState.errorEmitted = !0),
                            e.emit('error', r),
                            E(e, t));
                    })(e, n, r, t, i);
                  else {
                    var a = x(n);
                    a || n.corked || n.bufferProcessing || !n.bufferedRequest || w(e, n),
                      r ? u(_, e, n, a, i) : _(e, n, a, i);
                  }
                })(t, e);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new a(this));
          }
          function v(e) {
            if (((s = s || n(3)), !(f.call(v, this) || this instanceof s)))
              return new v(e);
            (this._writableState = new m(e, this)),
              (this.writable = !0),
              e &&
                ('function' == typeof e.write && (this._write = e.write),
                'function' == typeof e.writev && (this._writev = e.writev),
                'function' == typeof e.destroy && (this._destroy = e.destroy),
                'function' == typeof e.final && (this._final = e.final)),
              h.call(this);
          }
          function b(e, t, n, r, i, o, a) {
            (t.writelen = r),
              (t.writecb = a),
              (t.writing = !0),
              (t.sync = !0),
              n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
              (t.sync = !1);
          }
          function _(e, t, n, r) {
            n ||
              (function(e, t) {
                0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
              })(e, t),
              t.pendingcb--,
              r(),
              E(e, t);
          }
          function w(e, t) {
            t.bufferProcessing = !0;
            var n = t.bufferedRequest;
            if (e._writev && n && n.next) {
              var r = t.bufferedRequestCount,
                i = new Array(r),
                o = t.corkedRequestsFree;
              o.entry = n;
              for (var s = 0, u = !0; n; )
                (i[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
              (i.allBuffers = u),
                b(e, t, !0, t.length, i, '', o.finish),
                t.pendingcb++,
                (t.lastBufferedRequest = null),
                o.next
                  ? ((t.corkedRequestsFree = o.next), (o.next = null))
                  : (t.corkedRequestsFree = new a(t));
            } else {
              for (; n; ) {
                var l = n.chunk,
                  f = n.encoding,
                  c = n.callback;
                if (
                  (b(e, t, !1, t.objectMode ? 1 : l.length, l, f, c),
                  (n = n.next),
                  t.writing)
                )
                  break;
              }
              null === n && (t.lastBufferedRequest = null);
            }
            (t.bufferedRequestCount = 0),
              (t.bufferedRequest = n),
              (t.bufferProcessing = !1);
          }
          function x(e) {
            return (
              e.ending &&
              0 === e.length &&
              null === e.bufferedRequest &&
              !e.finished &&
              !e.writing
            );
          }
          function A(e, t) {
            e._final(function(n) {
              t.pendingcb--,
                n && e.emit('error', n),
                (t.prefinished = !0),
                e.emit('prefinish'),
                E(e, t);
            });
          }
          function E(e, t) {
            var n = x(t);
            return (
              n &&
                ((function(e, t) {
                  t.prefinished ||
                    t.finalCalled ||
                    ('function' == typeof e._final
                      ? (t.pendingcb++, (t.finalCalled = !0), o(A, e, t))
                      : ((t.prefinished = !0), e.emit('prefinish')));
                })(e, t),
                0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
              n
            );
          }
          l.inherits(v, h),
            (m.prototype.getBuffer = function() {
              for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
              return t;
            }),
            (function() {
              try {
                Object.defineProperty(m.prototype, 'buffer', {
                  get: c.deprecate(
                    function() {
                      return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003'
                  ),
                });
              } catch (e) {}
            })(),
            'function' == typeof Symbol &&
            Symbol.hasInstance &&
            'function' == typeof Function.prototype[Symbol.hasInstance]
              ? ((f = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(v, Symbol.hasInstance, {
                  value: function(e) {
                    return !!f.call(this, e) || (e && e._writableState instanceof m);
                  },
                }))
              : (f = function(e) {
                  return e instanceof this;
                }),
            (v.prototype.pipe = function() {
              this.emit('error', new Error('Cannot pipe, not readable'));
            }),
            (v.prototype.write = function(e, t, n) {
              var r,
                i = this._writableState,
                a = !1,
                s = ((r = e), (d.isBuffer(r) || r instanceof p) && !i.objectMode);
              return (
                s &&
                  !d.isBuffer(e) &&
                  (e = (function(e) {
                    return d.from(e);
                  })(e)),
                'function' == typeof t && ((n = t), (t = null)),
                s ? (t = 'buffer') : t || (t = i.defaultEncoding),
                'function' != typeof n && (n = g),
                i.ended
                  ? (function(e, t) {
                      var n = new Error('write after end');
                      e.emit('error', n), o(t, n);
                    })(this, n)
                  : (s ||
                      (function(e, t, n, r) {
                        var i = !0,
                          a = !1;
                        return (
                          null === n
                            ? (a = new TypeError('May not write null values to stream'))
                            : 'string' == typeof n ||
                              void 0 === n ||
                              t.objectMode ||
                              (a = new TypeError('Invalid non-string/buffer chunk')),
                          a && (e.emit('error', a), o(r, a), (i = !1)),
                          i
                        );
                      })(this, i, e, n)) &&
                    (i.pendingcb++,
                    (a = (function(e, t, n, r, i, o) {
                      if (!n) {
                        var a = (function(e, t, n) {
                          return (
                            e.objectMode ||
                              !1 === e.decodeStrings ||
                              'string' != typeof t ||
                              (t = d.from(t, n)),
                            t
                          );
                        })(t, r, i);
                        r !== a && ((n = !0), (i = 'buffer'), (r = a));
                      }
                      var s = t.objectMode ? 1 : r.length;
                      t.length += s;
                      var u = t.length < t.highWaterMark;
                      if ((u || (t.needDrain = !0), t.writing || t.corked)) {
                        var l = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                          chunk: r,
                          encoding: i,
                          isBuf: n,
                          callback: o,
                          next: null,
                        }),
                          l
                            ? (l.next = t.lastBufferedRequest)
                            : (t.bufferedRequest = t.lastBufferedRequest),
                          (t.bufferedRequestCount += 1);
                      } else b(e, t, !1, s, r, i, o);
                      return u;
                    })(this, i, s, e, t, n))),
                a
              );
            }),
            (v.prototype.cork = function() {
              this._writableState.corked++;
            }),
            (v.prototype.uncork = function() {
              var e = this._writableState;
              e.corked &&
                (e.corked--,
                e.writing ||
                  e.corked ||
                  e.finished ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  w(this, e));
            }),
            (v.prototype.setDefaultEncoding = function(e) {
              if (
                ('string' == typeof e && (e = e.toLowerCase()),
                !(
                  [
                    'hex',
                    'utf8',
                    'utf-8',
                    'ascii',
                    'binary',
                    'base64',
                    'ucs2',
                    'ucs-2',
                    'utf16le',
                    'utf-16le',
                    'raw',
                  ].indexOf((e + '').toLowerCase()) > -1
                ))
              )
                throw new TypeError('Unknown encoding: ' + e);
              return (this._writableState.defaultEncoding = e), this;
            }),
            (v.prototype._write = function(e, t, n) {
              n(new Error('_write() is not implemented'));
            }),
            (v.prototype._writev = null),
            (v.prototype.end = function(e, t, n) {
              var r = this._writableState;
              'function' == typeof e
                ? ((n = e), (e = null), (t = null))
                : 'function' == typeof t && ((n = t), (t = null)),
                null !== e && void 0 !== e && this.write(e, t),
                r.corked && ((r.corked = 1), this.uncork()),
                r.ending ||
                  r.finished ||
                  (function(e, t, n) {
                    (t.ending = !0),
                      E(e, t),
                      n && (t.finished ? o(n) : e.once('finish', n)),
                      (t.ended = !0),
                      (e.writable = !1);
                  })(this, r, n);
            }),
            Object.defineProperty(v.prototype, 'destroyed', {
              get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed;
              },
              set: function(e) {
                this._writableState && (this._writableState.destroyed = e);
              },
            }),
            (v.prototype.destroy = y.destroy),
            (v.prototype._undestroy = y.undestroy),
            (v.prototype._destroy = function(e, t) {
              this.end(), t(e);
            });
        }.call(this, n(10), n(67).setImmediate, n(2)));
      },
      function(e, t, n) {
        var r = n(78),
          i = n(9),
          o = Object.prototype,
          a = o.hasOwnProperty,
          s = o.propertyIsEnumerable,
          u = r(
            (function() {
              return arguments;
            })()
          )
            ? r
            : function(e) {
                return i(e) && a.call(e, 'callee') && !s.call(e, 'callee');
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
        var r = n(95),
          i = n(101),
          o = n(45);
        e.exports = function(e) {
          return o(e) ? r(e) : i(e);
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        };
      },
      function(e, t, n) {
        var r = n(4)(n(1), 'Map');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(119),
          i = n(126),
          o = n(128),
          a = n(129),
          s = n(130);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(0),
          i = n(29),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        e.exports = function(e, t) {
          if (r(e)) return !1;
          var n = typeof e;
          return (
            !('number' != n && 'symbol' != n && 'boolean' != n && null != e && !i(e)) ||
            a.test(e) ||
            !o.test(e) ||
            (null != t && e in Object(t))
          );
        };
      },
      function(e, t, n) {
        var r = n(8),
          i = n(9);
        e.exports = function(e) {
          return 'symbol' == typeof e || (i(e) && '[object Symbol]' == r(e));
        };
      },
      function(e, t, n) {
        'use strict';
        (function(t, r) {
          var i = n(11);
          e.exports = b;
          var o,
            a = n(31);
          (b.ReadableState = v), n(19).EventEmitter;
          var s = function(e, t) {
              return e.listeners(t).length;
            },
            u = n(32),
            l = n(12).Buffer,
            f = t.Uint8Array || function() {},
            c = n(6);
          c.inherits = n(5);
          var h = n(65),
            d = void 0;
          d = h && h.debuglog ? h.debuglog('stream') : function() {};
          var p,
            y = n(66),
            g = n(34);
          c.inherits(b, u);
          var m = ['error', 'close', 'destroy', 'pause', 'resume'];
          function v(e, t) {
            (o = o || n(3)),
              (e = e || {}),
              (this.objectMode = !!e.objectMode),
              t instanceof o &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var r = e.highWaterMark,
              i = this.objectMode ? 16 : 16384;
            (this.highWaterMark = r || 0 === r ? r : i),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.buffer = new y()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (p || (p = n(35).StringDecoder),
                (this.decoder = new p(e.encoding)),
                (this.encoding = e.encoding));
          }
          function b(e) {
            if (((o = o || n(3)), !(this instanceof b))) return new b(e);
            (this._readableState = new v(e, this)),
              (this.readable = !0),
              e &&
                ('function' == typeof e.read && (this._read = e.read),
                'function' == typeof e.destroy && (this._destroy = e.destroy)),
              u.call(this);
          }
          function _(e, t, n, r, i) {
            var o,
              a = e._readableState;
            return (
              null === t
                ? ((a.reading = !1),
                  (function(e, t) {
                    if (!t.ended) {
                      if (t.decoder) {
                        var n = t.decoder.end();
                        n &&
                          n.length &&
                          (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
                      }
                      (t.ended = !0), E(e);
                    }
                  })(e, a))
                : (i ||
                    (o = (function(e, t) {
                      var n, r;
                      return (
                        (r = t),
                        l.isBuffer(r) ||
                          r instanceof f ||
                          'string' == typeof t ||
                          void 0 === t ||
                          e.objectMode ||
                          (n = new TypeError('Invalid non-string/buffer chunk')),
                        n
                      );
                    })(a, t)),
                  o
                    ? e.emit('error', o)
                    : a.objectMode || (t && t.length > 0)
                      ? ('string' == typeof t ||
                          a.objectMode ||
                          Object.getPrototypeOf(t) === l.prototype ||
                          (t = (function(e) {
                            return l.from(e);
                          })(t)),
                        r
                          ? a.endEmitted
                            ? e.emit(
                                'error',
                                new Error('stream.unshift() after end event')
                              )
                            : w(e, a, t, !0)
                          : a.ended
                            ? e.emit('error', new Error('stream.push() after EOF'))
                            : ((a.reading = !1),
                              a.decoder && !n
                                ? ((t = a.decoder.write(t)),
                                  a.objectMode || 0 !== t.length
                                    ? w(e, a, t, !1)
                                    : C(e, a))
                                : w(e, a, t, !1)))
                      : r || (a.reading = !1)),
              (function(e) {
                return (
                  !e.ended &&
                  (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                );
              })(a)
            );
          }
          function w(e, t, n, r) {
            t.flowing && 0 === t.length && !t.sync
              ? (e.emit('data', n), e.read(0))
              : ((t.length += t.objectMode ? 1 : n.length),
                r ? t.buffer.unshift(n) : t.buffer.push(n),
                t.needReadable && E(e)),
              C(e, t);
          }
          Object.defineProperty(b.prototype, 'destroyed', {
            get: function() {
              return void 0 !== this._readableState && this._readableState.destroyed;
            },
            set: function(e) {
              this._readableState && (this._readableState.destroyed = e);
            },
          }),
            (b.prototype.destroy = g.destroy),
            (b.prototype._undestroy = g.undestroy),
            (b.prototype._destroy = function(e, t) {
              this.push(null), t(e);
            }),
            (b.prototype.push = function(e, t) {
              var n,
                r = this._readableState;
              return (
                r.objectMode
                  ? (n = !0)
                  : 'string' == typeof e &&
                    ((t = t || r.defaultEncoding) !== r.encoding &&
                      ((e = l.from(e, t)), (t = '')),
                    (n = !0)),
                _(this, e, t, !1, n)
              );
            }),
            (b.prototype.unshift = function(e) {
              return _(this, e, null, !0, !1);
            }),
            (b.prototype.isPaused = function() {
              return !1 === this._readableState.flowing;
            }),
            (b.prototype.setEncoding = function(e) {
              return (
                p || (p = n(35).StringDecoder),
                (this._readableState.decoder = new p(e)),
                (this._readableState.encoding = e),
                this
              );
            });
          var x = 8388608;
          function A(e, t) {
            return e <= 0 || (0 === t.length && t.ended)
              ? 0
              : t.objectMode
                ? 1
                : e != e
                  ? t.flowing && t.length ? t.buffer.head.data.length : t.length
                  : (e > t.highWaterMark &&
                      (t.highWaterMark = (function(e) {
                        return (
                          e >= x
                            ? (e = x)
                            : (e--,
                              (e |= e >>> 1),
                              (e |= e >>> 2),
                              (e |= e >>> 4),
                              (e |= e >>> 8),
                              (e |= e >>> 16),
                              e++),
                          e
                        );
                      })(e)),
                    e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
          }
          function E(e) {
            var t = e._readableState;
            (t.needReadable = !1),
              t.emittedReadable ||
                (d('emitReadable', t.flowing),
                (t.emittedReadable = !0),
                t.sync ? i(k, e) : k(e));
          }
          function k(e) {
            d('emit readable'), e.emit('readable'), j(e);
          }
          function C(e, t) {
            t.readingMore || ((t.readingMore = !0), i(S, e, t));
          }
          function S(e, t) {
            for (
              var n = t.length;
              !t.reading &&
              !t.flowing &&
              !t.ended &&
              t.length < t.highWaterMark &&
              (d('maybeReadMore read 0'), e.read(0), n !== t.length);

            )
              n = t.length;
            t.readingMore = !1;
          }
          function T(e) {
            d('readable nexttick read 0'), e.read(0);
          }
          function R(e, t) {
            t.reading || (d('resume read 0'), e.read(0)),
              (t.resumeScheduled = !1),
              (t.awaitDrain = 0),
              e.emit('resume'),
              j(e),
              t.flowing && !t.reading && e.read(0);
          }
          function j(e) {
            var t = e._readableState;
            for (d('flow', t.flowing); t.flowing && null !== e.read(); );
          }
          function O(e, t) {
            return 0 === t.length
              ? null
              : (t.objectMode
                  ? (n = t.buffer.shift())
                  : !e || e >= t.length
                    ? ((n = t.decoder
                        ? t.buffer.join('')
                        : 1 === t.buffer.length
                          ? t.buffer.head.data
                          : t.buffer.concat(t.length)),
                      t.buffer.clear())
                    : (n = (function(e, t, n) {
                        var r;
                        return (
                          e < t.head.data.length
                            ? ((r = t.head.data.slice(0, e)),
                              (t.head.data = t.head.data.slice(e)))
                            : (r =
                                e === t.head.data.length
                                  ? t.shift()
                                  : n
                                    ? (function(e, t) {
                                        var n = t.head,
                                          r = 1,
                                          i = n.data;
                                        for (e -= i.length; (n = n.next); ) {
                                          var o = n.data,
                                            a = e > o.length ? o.length : e;
                                          if (
                                            (a === o.length
                                              ? (i += o)
                                              : (i += o.slice(0, e)),
                                            0 == (e -= a))
                                          ) {
                                            a === o.length
                                              ? (++r,
                                                n.next
                                                  ? (t.head = n.next)
                                                  : (t.head = t.tail = null))
                                              : ((t.head = n), (n.data = o.slice(a)));
                                            break;
                                          }
                                          ++r;
                                        }
                                        return (t.length -= r), i;
                                      })(e, t)
                                    : (function(e, t) {
                                        var n = l.allocUnsafe(e),
                                          r = t.head,
                                          i = 1;
                                        for (
                                          r.data.copy(n), e -= r.data.length;
                                          (r = r.next);

                                        ) {
                                          var o = r.data,
                                            a = e > o.length ? o.length : e;
                                          if (
                                            (o.copy(n, n.length - e, 0, a), 0 == (e -= a))
                                          ) {
                                            a === o.length
                                              ? (++i,
                                                r.next
                                                  ? (t.head = r.next)
                                                  : (t.head = t.tail = null))
                                              : ((t.head = r), (r.data = o.slice(a)));
                                            break;
                                          }
                                          ++i;
                                        }
                                        return (t.length -= i), n;
                                      })(e, t)),
                          r
                        );
                      })(e, t.buffer, t.decoder)),
                n);
            var n;
          }
          function B(e) {
            var t = e._readableState;
            if (t.length > 0)
              throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || ((t.ended = !0), i(P, t, e));
          }
          function P(e, t) {
            e.endEmitted ||
              0 !== e.length ||
              ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
          }
          function M(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          }
          (b.prototype.read = function(e) {
            d('read', e), (e = parseInt(e, 10));
            var t = this._readableState,
              n = e;
            if (
              (0 !== e && (t.emittedReadable = !1),
              0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
            )
              return (
                d('read: emitReadable', t.length, t.ended),
                0 === t.length && t.ended ? B(this) : E(this),
                null
              );
            if (0 === (e = A(e, t)) && t.ended) return 0 === t.length && B(this), null;
            var r,
              i = t.needReadable;
            return (
              d('need readable', i),
              (0 === t.length || t.length - e < t.highWaterMark) &&
                d('length less than watermark', (i = !0)),
              t.ended || t.reading
                ? d('reading or ended', (i = !1))
                : i &&
                  (d('do read'),
                  (t.reading = !0),
                  (t.sync = !0),
                  0 === t.length && (t.needReadable = !0),
                  this._read(t.highWaterMark),
                  (t.sync = !1),
                  t.reading || (e = A(n, t))),
              null === (r = e > 0 ? O(e, t) : null)
                ? ((t.needReadable = !0), (e = 0))
                : (t.length -= e),
              0 === t.length &&
                (t.ended || (t.needReadable = !0), n !== e && t.ended && B(this)),
              null !== r && this.emit('data', r),
              r
            );
          }),
            (b.prototype._read = function(e) {
              this.emit('error', new Error('_read() is not implemented'));
            }),
            (b.prototype.pipe = function(e, t) {
              var n = this,
                o = this._readableState;
              switch (o.pipesCount) {
                case 0:
                  o.pipes = e;
                  break;
                case 1:
                  o.pipes = [o.pipes, e];
                  break;
                default:
                  o.pipes.push(e);
              }
              (o.pipesCount += 1), d('pipe count=%d opts=%j', o.pipesCount, t);
              var u = (t && !1 === t.end) || e === r.stdout || e === r.stderr ? v : l;
              function l() {
                d('onend'), e.end();
              }
              o.endEmitted ? i(u) : n.once('end', u),
                e.on('unpipe', function t(r, i) {
                  d('onunpipe'),
                    r === n &&
                      i &&
                      !1 === i.hasUnpiped &&
                      ((i.hasUnpiped = !0),
                      d('cleanup'),
                      e.removeListener('close', g),
                      e.removeListener('finish', m),
                      e.removeListener('drain', f),
                      e.removeListener('error', y),
                      e.removeListener('unpipe', t),
                      n.removeListener('end', l),
                      n.removeListener('end', v),
                      n.removeListener('data', p),
                      (c = !0),
                      !o.awaitDrain ||
                        (e._writableState && !e._writableState.needDrain) ||
                        f());
                });
              var f = (function(e) {
                return function() {
                  var t = e._readableState;
                  d('pipeOnDrain', t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && s(e, 'data') && ((t.flowing = !0), j(e));
                };
              })(n);
              e.on('drain', f);
              var c = !1,
                h = !1;
              function p(t) {
                d('ondata'),
                  (h = !1),
                  !1 !== e.write(t) ||
                    h ||
                    (((1 === o.pipesCount && o.pipes === e) ||
                      (o.pipesCount > 1 && -1 !== M(o.pipes, e))) &&
                      !c &&
                      (d('false write response, pause', n._readableState.awaitDrain),
                      n._readableState.awaitDrain++,
                      (h = !0)),
                    n.pause());
              }
              function y(t) {
                d('onerror', t),
                  v(),
                  e.removeListener('error', y),
                  0 === s(e, 'error') && e.emit('error', t);
              }
              function g() {
                e.removeListener('finish', m), v();
              }
              function m() {
                d('onfinish'), e.removeListener('close', g), v();
              }
              function v() {
                d('unpipe'), n.unpipe(e);
              }
              return (
                n.on('data', p),
                (function(e, t, n) {
                  if ('function' == typeof e.prependListener)
                    return e.prependListener(t, n);
                  e._events && e._events[t]
                    ? a(e._events[t])
                      ? e._events[t].unshift(n)
                      : (e._events[t] = [n, e._events[t]])
                    : e.on(t, n);
                })(e, 'error', y),
                e.once('close', g),
                e.once('finish', m),
                e.emit('pipe', n),
                o.flowing || (d('pipe resume'), n.resume()),
                e
              );
            }),
            (b.prototype.unpipe = function(e) {
              var t = this._readableState,
                n = {hasUnpiped: !1};
              if (0 === t.pipesCount) return this;
              if (1 === t.pipesCount)
                return e && e !== t.pipes
                  ? this
                  : (e || (e = t.pipes),
                    (t.pipes = null),
                    (t.pipesCount = 0),
                    (t.flowing = !1),
                    e && e.emit('unpipe', this, n),
                    this);
              if (!e) {
                var r = t.pipes,
                  i = t.pipesCount;
                (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                for (var o = 0; o < i; o++) r[o].emit('unpipe', this, n);
                return this;
              }
              var a = M(t.pipes, e);
              return -1 === a
                ? this
                : (t.pipes.splice(a, 1),
                  (t.pipesCount -= 1),
                  1 === t.pipesCount && (t.pipes = t.pipes[0]),
                  e.emit('unpipe', this, n),
                  this);
            }),
            (b.prototype.on = function(e, t) {
              var n = u.prototype.on.call(this, e, t);
              if ('data' === e) !1 !== this._readableState.flowing && this.resume();
              else if ('readable' === e) {
                var r = this._readableState;
                r.endEmitted ||
                  r.readableListening ||
                  ((r.readableListening = r.needReadable = !0),
                  (r.emittedReadable = !1),
                  r.reading ? r.length && E(this) : i(T, this));
              }
              return n;
            }),
            (b.prototype.addListener = b.prototype.on),
            (b.prototype.resume = function() {
              var e = this._readableState;
              return (
                e.flowing ||
                  (d('resume'),
                  (e.flowing = !0),
                  (function(e, t) {
                    t.resumeScheduled || ((t.resumeScheduled = !0), i(R, e, t));
                  })(this, e)),
                this
              );
            }),
            (b.prototype.pause = function() {
              return (
                d('call pause flowing=%j', this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (d('pause'), (this._readableState.flowing = !1), this.emit('pause')),
                this
              );
            }),
            (b.prototype.wrap = function(e) {
              var t = this._readableState,
                n = !1,
                r = this;
              for (var i in (e.on('end', function() {
                if ((d('wrapped end'), t.decoder && !t.ended)) {
                  var e = t.decoder.end();
                  e && e.length && r.push(e);
                }
                r.push(null);
              }),
              e.on('data', function(i) {
                d('wrapped data'),
                  t.decoder && (i = t.decoder.write(i)),
                  (!t.objectMode || (null !== i && void 0 !== i)) &&
                    (t.objectMode || (i && i.length)) &&
                    (r.push(i) || ((n = !0), e.pause()));
              }),
              e))
                void 0 === this[i] &&
                  'function' == typeof e[i] &&
                  (this[i] = (function(t) {
                    return function() {
                      return e[t].apply(e, arguments);
                    };
                  })(i));
              for (var o = 0; o < m.length; o++) e.on(m[o], r.emit.bind(r, m[o]));
              return (
                (r._read = function(t) {
                  d('wrapped _read', t), n && ((n = !1), e.resume());
                }),
                r
              );
            }),
            (b._fromList = O);
        }.call(this, n(2), n(10)));
      },
      function(e, t) {
        var n = {}.toString;
        e.exports =
          Array.isArray ||
          function(e) {
            return '[object Array]' == n.call(e);
          };
      },
      function(e, t, n) {
        e.exports = n(19).EventEmitter;
      },
      function(e, t, n) {
        'use strict';
        (function(e) {
          /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
          var r = n(63),
            i = n(64),
            o = n(31);
          function a() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function s(e, t) {
            if (a() < t) throw new RangeError('Invalid typed array length');
            return (
              u.TYPED_ARRAY_SUPPORT
                ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
                : (null === e && (e = new u(t)), (e.length = t)),
              e
            );
          }
          function u(e, t, n) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
            if ('number' == typeof e) {
              if ('string' == typeof t)
                throw new Error(
                  'If encoding is specified then the first argument must be a string'
                );
              return c(this, e);
            }
            return l(this, e, t, n);
          }
          function l(e, t, n, r) {
            if ('number' == typeof t)
              throw new TypeError('"value" argument must not be a number');
            return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
              ? (function(e, t, n, r) {
                  if ((t.byteLength, n < 0 || t.byteLength < n))
                    throw new RangeError("'offset' is out of bounds");
                  if (t.byteLength < n + (r || 0))
                    throw new RangeError("'length' is out of bounds");
                  return (
                    (t =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(t)
                        : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r)),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((e = t).__proto__ = u.prototype)
                      : (e = h(e, t)),
                    e
                  );
                })(e, t, n, r)
              : 'string' == typeof t
                ? (function(e, t, n) {
                    if (
                      (('string' == typeof n && '' !== n) || (n = 'utf8'),
                      !u.isEncoding(n))
                    )
                      throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | p(t, n),
                      i = (e = s(e, r)).write(t, n);
                    return i !== r && (e = e.slice(0, i)), e;
                  })(e, t, n)
                : (function(e, t) {
                    if (u.isBuffer(t)) {
                      var n = 0 | d(t.length);
                      return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
                    }
                    if (t) {
                      if (
                        ('undefined' != typeof ArrayBuffer &&
                          t.buffer instanceof ArrayBuffer) ||
                        'length' in t
                      )
                        return 'number' != typeof t.length || (r = t.length) != r
                          ? s(e, 0)
                          : h(e, t);
                      if ('Buffer' === t.type && o(t.data)) return h(e, t.data);
                    }
                    var r;
                    throw new TypeError(
                      'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                    );
                  })(e, t);
          }
          function f(e) {
            if ('number' != typeof e)
              throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative');
          }
          function c(e, t) {
            if ((f(t), (e = s(e, t < 0 ? 0 : 0 | d(t))), !u.TYPED_ARRAY_SUPPORT))
              for (var n = 0; n < t; ++n) e[n] = 0;
            return e;
          }
          function h(e, t) {
            var n = t.length < 0 ? 0 : 0 | d(t.length);
            e = s(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e;
          }
          function d(e) {
            if (e >= a())
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                  a().toString(16) +
                  ' bytes'
              );
            return 0 | e;
          }
          function p(e, t) {
            if (u.isBuffer(e)) return e.length;
            if (
              'undefined' != typeof ArrayBuffer &&
              'function' == typeof ArrayBuffer.isView &&
              (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
            )
              return e.byteLength;
            'string' != typeof e && (e = '' + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1; ; )
              switch (t) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return n;
                case 'utf8':
                case 'utf-8':
                case void 0:
                  return N(e).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * n;
                case 'hex':
                  return n >>> 1;
                case 'base64':
                  return F(e).length;
                default:
                  if (r) return N(e).length;
                  (t = ('' + t).toLowerCase()), (r = !0);
              }
          }
          function y(e, t, n) {
            var r = e[t];
            (e[t] = e[n]), (e[n] = r);
          }
          function g(e, t, n, r, i) {
            if (0 === e.length) return -1;
            if (
              ('string' == typeof n
                ? ((r = n), (n = 0))
                : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
              (n = +n),
              isNaN(n) && (n = i ? 0 : e.length - 1),
              n < 0 && (n = e.length + n),
              n >= e.length)
            ) {
              if (i) return -1;
              n = e.length - 1;
            } else if (n < 0) {
              if (!i) return -1;
              n = 0;
            }
            if (('string' == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
              return 0 === t.length ? -1 : m(e, t, n, r, i);
            if ('number' == typeof t)
              return (
                (t &= 255),
                u.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf
                  ? i
                    ? Uint8Array.prototype.indexOf.call(e, t, n)
                    : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                  : m(e, [t], n, r, i)
              );
            throw new TypeError('val must be string, number or Buffer');
          }
          function m(e, t, n, r, i) {
            var o,
              a = 1,
              s = e.length,
              u = t.length;
            if (
              void 0 !== r &&
              ('ucs2' === (r = String(r).toLowerCase()) ||
                'ucs-2' === r ||
                'utf16le' === r ||
                'utf-16le' === r)
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              (a = 2), (s /= 2), (u /= 2), (n /= 2);
            }
            function l(e, t) {
              return 1 === a ? e[t] : e.readUInt16BE(t * a);
            }
            if (i) {
              var f = -1;
              for (o = n; o < s; o++)
                if (l(e, o) === l(t, -1 === f ? 0 : o - f)) {
                  if ((-1 === f && (f = o), o - f + 1 === u)) return f * a;
                } else -1 !== f && (o -= o - f), (f = -1);
            } else
              for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                for (var c = !0, h = 0; h < u; h++)
                  if (l(e, o + h) !== l(t, h)) {
                    c = !1;
                    break;
                  }
                if (c) return o;
              }
            return -1;
          }
          function v(e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            r ? (r = Number(r)) > i && (r = i) : (r = i);
            var o = t.length;
            if (o % 2 != 0) throw new TypeError('Invalid hex string');
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
              var s = parseInt(t.substr(2 * a, 2), 16);
              if (isNaN(s)) return a;
              e[n + a] = s;
            }
            return a;
          }
          function b(e, t, n, r) {
            return z(N(t, e.length - n), e, n, r);
          }
          function _(e, t, n, r) {
            return z(
              (function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t;
              })(t),
              e,
              n,
              r
            );
          }
          function w(e, t, n, r) {
            return _(e, t, n, r);
          }
          function x(e, t, n, r) {
            return z(F(t), e, n, r);
          }
          function A(e, t, n, r) {
            return z(
              (function(e, t) {
                for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                  (r = (n = e.charCodeAt(a)) >> 8), (i = n % 256), o.push(i), o.push(r);
                return o;
              })(t, e.length - n),
              e,
              n,
              r
            );
          }
          function E(e, t, n) {
            return 0 === t && n === e.length
              ? r.fromByteArray(e)
              : r.fromByteArray(e.slice(t, n));
          }
          function k(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], i = t; i < n; ) {
              var o,
                a,
                s,
                u,
                l = e[i],
                f = null,
                c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
              if (i + c <= n)
                switch (c) {
                  case 1:
                    l < 128 && (f = l);
                    break;
                  case 2:
                    128 == (192 & (o = e[i + 1])) &&
                      (u = ((31 & l) << 6) | (63 & o)) > 127 &&
                      (f = u);
                    break;
                  case 3:
                    (o = e[i + 1]),
                      (a = e[i + 2]),
                      128 == (192 & o) &&
                        128 == (192 & a) &&
                        (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 &&
                        (u < 55296 || u > 57343) &&
                        (f = u);
                    break;
                  case 4:
                    (o = e[i + 1]),
                      (a = e[i + 2]),
                      (s = e[i + 3]),
                      128 == (192 & o) &&
                        128 == (192 & a) &&
                        128 == (192 & s) &&
                        (u =
                          ((15 & l) << 18) |
                          ((63 & o) << 12) |
                          ((63 & a) << 6) |
                          (63 & s)) > 65535 &&
                        u < 1114112 &&
                        (f = u);
                }
              null === f
                ? ((f = 65533), (c = 1))
                : f > 65535 &&
                  ((f -= 65536),
                  r.push(((f >>> 10) & 1023) | 55296),
                  (f = 56320 | (1023 & f))),
                r.push(f),
                (i += c);
            }
            return (function(e) {
              var t = e.length;
              if (t <= C) return String.fromCharCode.apply(String, e);
              for (var n = '', r = 0; r < t; )
                n += String.fromCharCode.apply(String, e.slice(r, (r += C)));
              return n;
            })(r);
          }
          (t.Buffer = u),
            (t.SlowBuffer = function(e) {
              return +e != e && (e = 0), u.alloc(+e);
            }),
            (t.INSPECT_MAX_BYTES = 50),
            (u.TYPED_ARRAY_SUPPORT =
              void 0 !== e.TYPED_ARRAY_SUPPORT
                ? e.TYPED_ARRAY_SUPPORT
                : (function() {
                    try {
                      var e = new Uint8Array(1);
                      return (
                        (e.__proto__ = {
                          __proto__: Uint8Array.prototype,
                          foo: function() {
                            return 42;
                          },
                        }),
                        42 === e.foo() &&
                          'function' == typeof e.subarray &&
                          0 === e.subarray(1, 1).byteLength
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
            (t.kMaxLength = a()),
            (u.poolSize = 8192),
            (u._augment = function(e) {
              return (e.__proto__ = u.prototype), e;
            }),
            (u.from = function(e, t, n) {
              return l(null, e, t, n);
            }),
            u.TYPED_ARRAY_SUPPORT &&
              ((u.prototype.__proto__ = Uint8Array.prototype),
              (u.__proto__ = Uint8Array),
              'undefined' != typeof Symbol &&
                Symbol.species &&
                u[Symbol.species] === u &&
                Object.defineProperty(u, Symbol.species, {
                  value: null,
                  configurable: !0,
                })),
            (u.alloc = function(e, t, n) {
              return (function(e, t, n, r) {
                return (
                  f(t),
                  t <= 0
                    ? s(e, t)
                    : void 0 !== n
                      ? 'string' == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n)
                      : s(e, t)
                );
              })(null, e, t, n);
            }),
            (u.allocUnsafe = function(e) {
              return c(null, e);
            }),
            (u.allocUnsafeSlow = function(e) {
              return c(null, e);
            }),
            (u.isBuffer = function(e) {
              return !(null == e || !e._isBuffer);
            }),
            (u.compare = function(e, t) {
              if (!u.isBuffer(e) || !u.isBuffer(t))
                throw new TypeError('Arguments must be Buffers');
              if (e === t) return 0;
              for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                if (e[i] !== t[i]) {
                  (n = e[i]), (r = t[i]);
                  break;
                }
              return n < r ? -1 : r < n ? 1 : 0;
            }),
            (u.isEncoding = function(e) {
              switch (String(e).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (u.concat = function(e, t) {
              if (!o(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e.length) return u.alloc(0);
              var n;
              if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
              var r = u.allocUnsafe(t),
                i = 0;
              for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!u.isBuffer(a))
                  throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, i), (i += a.length);
              }
              return r;
            }),
            (u.byteLength = p),
            (u.prototype._isBuffer = !0),
            (u.prototype.swap16 = function() {
              var e = this.length;
              if (e % 2 != 0)
                throw new RangeError('Buffer size must be a multiple of 16-bits');
              for (var t = 0; t < e; t += 2) y(this, t, t + 1);
              return this;
            }),
            (u.prototype.swap32 = function() {
              var e = this.length;
              if (e % 4 != 0)
                throw new RangeError('Buffer size must be a multiple of 32-bits');
              for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
              return this;
            }),
            (u.prototype.swap64 = function() {
              var e = this.length;
              if (e % 8 != 0)
                throw new RangeError('Buffer size must be a multiple of 64-bits');
              for (var t = 0; t < e; t += 8)
                y(this, t, t + 7),
                  y(this, t + 1, t + 6),
                  y(this, t + 2, t + 5),
                  y(this, t + 3, t + 4);
              return this;
            }),
            (u.prototype.toString = function() {
              var e = 0 | this.length;
              return 0 === e
                ? ''
                : 0 === arguments.length
                  ? k(this, 0, e)
                  : function(e, t, n) {
                      var r = !1;
                      if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                        return '';
                      if (
                        ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
                      )
                        return '';
                      if ((n >>>= 0) <= (t >>>= 0)) return '';
                      for (e || (e = 'utf8'); ; )
                        switch (e) {
                          case 'hex':
                            return R(this, t, n);
                          case 'utf8':
                          case 'utf-8':
                            return k(this, t, n);
                          case 'ascii':
                            return S(this, t, n);
                          case 'latin1':
                          case 'binary':
                            return T(this, t, n);
                          case 'base64':
                            return E(this, t, n);
                          case 'ucs2':
                          case 'ucs-2':
                          case 'utf16le':
                          case 'utf-16le':
                            return j(this, t, n);
                          default:
                            if (r) throw new TypeError('Unknown encoding: ' + e);
                            (e = (e + '').toLowerCase()), (r = !0);
                        }
                    }.apply(this, arguments);
            }),
            (u.prototype.equals = function(e) {
              if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
              return this === e || 0 === u.compare(this, e);
            }),
            (u.prototype.inspect = function() {
              var e = '',
                n = t.INSPECT_MAX_BYTES;
              return (
                this.length > 0 &&
                  ((e = this.toString('hex', 0, n)
                    .match(/.{2}/g)
                    .join(' ')),
                  this.length > n && (e += ' ... ')),
                '<Buffer ' + e + '>'
              );
            }),
            (u.prototype.compare = function(e, t, n, r, i) {
              if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
              if (
                (void 0 === t && (t = 0),
                void 0 === n && (n = e ? e.length : 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = this.length),
                t < 0 || n > e.length || r < 0 || i > this.length)
              )
                throw new RangeError('out of range index');
              if (r >= i && t >= n) return 0;
              if (r >= i) return -1;
              if (t >= n) return 1;
              if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
              for (
                var o = i - r,
                  a = n - t,
                  s = Math.min(o, a),
                  l = this.slice(r, i),
                  f = e.slice(t, n),
                  c = 0;
                c < s;
                ++c
              )
                if (l[c] !== f[c]) {
                  (o = l[c]), (a = f[c]);
                  break;
                }
              return o < a ? -1 : a < o ? 1 : 0;
            }),
            (u.prototype.includes = function(e, t, n) {
              return -1 !== this.indexOf(e, t, n);
            }),
            (u.prototype.indexOf = function(e, t, n) {
              return g(this, e, t, n, !0);
            }),
            (u.prototype.lastIndexOf = function(e, t, n) {
              return g(this, e, t, n, !1);
            }),
            (u.prototype.write = function(e, t, n, r) {
              if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
              else if (void 0 === n && 'string' == typeof t)
                (r = t), (n = this.length), (t = 0);
              else {
                if (!isFinite(t))
                  throw new Error(
                    'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                  );
                (t |= 0),
                  isFinite(n)
                    ? ((n |= 0), void 0 === r && (r = 'utf8'))
                    : ((r = n), (n = void 0));
              }
              var i = this.length - t;
              if (
                ((void 0 === n || n > i) && (n = i),
                (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
              )
                throw new RangeError('Attempt to write outside buffer bounds');
              r || (r = 'utf8');
              for (var o = !1; ; )
                switch (r) {
                  case 'hex':
                    return v(this, e, t, n);
                  case 'utf8':
                  case 'utf-8':
                    return b(this, e, t, n);
                  case 'ascii':
                    return _(this, e, t, n);
                  case 'latin1':
                  case 'binary':
                    return w(this, e, t, n);
                  case 'base64':
                    return x(this, e, t, n);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return A(this, e, t, n);
                  default:
                    if (o) throw new TypeError('Unknown encoding: ' + r);
                    (r = ('' + r).toLowerCase()), (o = !0);
                }
            }),
            (u.prototype.toJSON = function() {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          var C = 4096;
          function S(e, t, n) {
            var r = '';
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
            return r;
          }
          function T(e, t, n) {
            var r = '';
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
            return r;
          }
          function R(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = '', o = t; o < n; ++o) i += U(e[o]);
            return i;
          }
          function j(e, t, n) {
            for (var r = e.slice(t, n), i = '', o = 0; o < r.length; o += 2)
              i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i;
          }
          function O(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
            if (e + t > n) throw new RangeError('Trying to access beyond buffer length');
          }
          function B(e, t, n, r, i, o) {
            if (!u.isBuffer(e))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError('Index out of range');
          }
          function P(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
              e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
          }
          function M(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
              e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
          }
          function q(e, t, n, r, i, o) {
            if (n + r > e.length) throw new RangeError('Index out of range');
            if (n < 0) throw new RangeError('Index out of range');
          }
          function I(e, t, n, r, o) {
            return o || q(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
          }
          function D(e, t, n, r, o) {
            return o || q(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
          }
          (u.prototype.slice = function(e, t) {
            var n,
              r = this.length;
            if (
              ((e = ~~e),
              (t = void 0 === t ? r : ~~t),
              e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
              t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              t < e && (t = e),
              u.TYPED_ARRAY_SUPPORT)
            )
              (n = this.subarray(e, t)).__proto__ = u.prototype;
            else {
              var i = t - e;
              n = new u(i, void 0);
              for (var o = 0; o < i; ++o) n[o] = this[o + e];
            }
            return n;
          }),
            (u.prototype.readUIntLE = function(e, t, n) {
              (e |= 0), (t |= 0), n || O(e, t, this.length);
              for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                r += this[e + o] * i;
              return r;
            }),
            (u.prototype.readUIntBE = function(e, t, n) {
              (e |= 0), (t |= 0), n || O(e, t, this.length);
              for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                r += this[e + --t] * i;
              return r;
            }),
            (u.prototype.readUInt8 = function(e, t) {
              return t || O(e, 1, this.length), this[e];
            }),
            (u.prototype.readUInt16LE = function(e, t) {
              return t || O(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
            (u.prototype.readUInt16BE = function(e, t) {
              return t || O(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
            (u.prototype.readUInt32LE = function(e, t) {
              return (
                t || O(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              );
            }),
            (u.prototype.readUInt32BE = function(e, t) {
              return (
                t || O(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
            (u.prototype.readIntLE = function(e, t, n) {
              (e |= 0), (t |= 0), n || O(e, t, this.length);
              for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                r += this[e + o] * i;
              return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
            }),
            (u.prototype.readIntBE = function(e, t, n) {
              (e |= 0), (t |= 0), n || O(e, t, this.length);
              for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
                o += this[e + --r] * i;
              return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
            }),
            (u.prototype.readInt8 = function(e, t) {
              return (
                t || O(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
              );
            }),
            (u.prototype.readInt16LE = function(e, t) {
              t || O(e, 2, this.length);
              var n = this[e] | (this[e + 1] << 8);
              return 32768 & n ? 4294901760 | n : n;
            }),
            (u.prototype.readInt16BE = function(e, t) {
              t || O(e, 2, this.length);
              var n = this[e + 1] | (this[e] << 8);
              return 32768 & n ? 4294901760 | n : n;
            }),
            (u.prototype.readInt32LE = function(e, t) {
              return (
                t || O(e, 4, this.length),
                this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
              );
            }),
            (u.prototype.readInt32BE = function(e, t) {
              return (
                t || O(e, 4, this.length),
                (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
              );
            }),
            (u.prototype.readFloatLE = function(e, t) {
              return t || O(e, 4, this.length), i.read(this, e, !0, 23, 4);
            }),
            (u.prototype.readFloatBE = function(e, t) {
              return t || O(e, 4, this.length), i.read(this, e, !1, 23, 4);
            }),
            (u.prototype.readDoubleLE = function(e, t) {
              return t || O(e, 8, this.length), i.read(this, e, !0, 52, 8);
            }),
            (u.prototype.readDoubleBE = function(e, t) {
              return t || O(e, 8, this.length), i.read(this, e, !1, 52, 8);
            }),
            (u.prototype.writeUIntLE = function(e, t, n, r) {
              (e = +e),
                (t |= 0),
                (n |= 0),
                r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              var i = 1,
                o = 0;
              for (this[t] = 255 & e; ++o < n && (i *= 256); )
                this[t + o] = (e / i) & 255;
              return t + n;
            }),
            (u.prototype.writeUIntBE = function(e, t, n, r) {
              (e = +e),
                (t |= 0),
                (n |= 0),
                r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              var i = n - 1,
                o = 1;
              for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                this[t + i] = (e / o) & 255;
              return t + n;
            }),
            (u.prototype.writeUInt8 = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 1, 255, 0),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (u.prototype.writeUInt16LE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                  : P(this, e, t, !0),
                t + 2
              );
            }),
            (u.prototype.writeUInt16BE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                  : P(this, e, t, !1),
                t + 2
              );
            }),
            (u.prototype.writeUInt32LE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e))
                  : M(this, e, t, !0),
                t + 4
              );
            }),
            (u.prototype.writeUInt32BE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e))
                  : M(this, e, t, !1),
                t + 4
              );
            }),
            (u.prototype.writeIntLE = function(e, t, n, r) {
              if (((e = +e), (t |= 0), !r)) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, e, t, n, i - 1, -i);
              }
              var o = 0,
                a = 1,
                s = 0;
              for (this[t] = 255 & e; ++o < n && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                  (this[t + o] = (((e / a) >> 0) - s) & 255);
              return t + n;
            }),
            (u.prototype.writeIntBE = function(e, t, n, r) {
              if (((e = +e), (t |= 0), !r)) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, e, t, n, i - 1, -i);
              }
              var o = n - 1,
                a = 1,
                s = 0;
              for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                  (this[t + o] = (((e / a) >> 0) - s) & 255);
              return t + n;
            }),
            (u.prototype.writeInt8 = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 1, 127, -128),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (u.prototype.writeInt16LE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                  : P(this, e, t, !0),
                t + 2
              );
            }),
            (u.prototype.writeInt16BE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                  : P(this, e, t, !1),
                t + 2
              );
            }),
            (u.prototype.writeInt32LE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 4, 2147483647, -2147483648),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24))
                  : M(this, e, t, !0),
                t + 4
              );
            }),
            (u.prototype.writeInt32BE = function(e, t, n) {
              return (
                (e = +e),
                (t |= 0),
                n || B(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                u.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e))
                  : M(this, e, t, !1),
                t + 4
              );
            }),
            (u.prototype.writeFloatLE = function(e, t, n) {
              return I(this, e, t, !0, n);
            }),
            (u.prototype.writeFloatBE = function(e, t, n) {
              return I(this, e, t, !1, n);
            }),
            (u.prototype.writeDoubleLE = function(e, t, n) {
              return D(this, e, t, !0, n);
            }),
            (u.prototype.writeDoubleBE = function(e, t, n) {
              return D(this, e, t, !1, n);
            }),
            (u.prototype.copy = function(e, t, n, r) {
              if (
                (n || (n = 0),
                r || 0 === r || (r = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                r > 0 && r < n && (r = n),
                r === n)
              )
                return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw new RangeError('targetStart out of bounds');
              if (n < 0 || n >= this.length)
                throw new RangeError('sourceStart out of bounds');
              if (r < 0) throw new RangeError('sourceEnd out of bounds');
              r > this.length && (r = this.length),
                e.length - t < r - n && (r = e.length - t + n);
              var i,
                o = r - n;
              if (this === e && n < t && t < r)
                for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
              else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) e[i + t] = this[i + n];
              else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
              return o;
            }),
            (u.prototype.fill = function(e, t, n, r) {
              if ('string' == typeof e) {
                if (
                  ('string' == typeof t
                    ? ((r = t), (t = 0), (n = this.length))
                    : 'string' == typeof n && ((r = n), (n = this.length)),
                  1 === e.length)
                ) {
                  var i = e.charCodeAt(0);
                  i < 256 && (e = i);
                }
                if (void 0 !== r && 'string' != typeof r)
                  throw new TypeError('encoding must be a string');
                if ('string' == typeof r && !u.isEncoding(r))
                  throw new TypeError('Unknown encoding: ' + r);
              } else 'number' == typeof e && (e &= 255);
              if (t < 0 || this.length < t || this.length < n)
                throw new RangeError('Out of range index');
              if (n <= t) return this;
              var o;
              if (
                ((t >>>= 0),
                (n = void 0 === n ? this.length : n >>> 0),
                e || (e = 0),
                'number' == typeof e)
              )
                for (o = t; o < n; ++o) this[o] = e;
              else {
                var a = u.isBuffer(e) ? e : N(new u(e, r).toString()),
                  s = a.length;
                for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
              }
              return this;
            });
          var L = /[^+\/0-9A-Za-z-_]/g;
          function U(e) {
            return e < 16 ? '0' + e.toString(16) : e.toString(16);
          }
          function N(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
              if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                if (!i) {
                  if (n > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (a + 1 === r) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = n;
                  continue;
                }
                if (n < 56320) {
                  (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                  continue;
                }
                n = 65536 + (((i - 55296) << 10) | (n - 56320));
              } else i && (t -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), n < 128)) {
                if ((t -= 1) < 0) break;
                o.push(n);
              } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                o.push((n >> 6) | 192, (63 & n) | 128);
              } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
              } else {
                if (!(n < 1114112)) throw new Error('Invalid code point');
                if ((t -= 4) < 0) break;
                o.push(
                  (n >> 18) | 240,
                  ((n >> 12) & 63) | 128,
                  ((n >> 6) & 63) | 128,
                  (63 & n) | 128
                );
              }
            }
            return o;
          }
          function F(e) {
            return r.toByteArray(
              (function(e) {
                if (
                  (e = (function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
                  })(e).replace(L, '')).length < 2
                )
                  return '';
                for (; e.length % 4 != 0; ) e += '=';
                return e;
              })(e)
            );
          }
          function z(e, t, n, r) {
            for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
              t[i + n] = e[i];
            return i;
          }
        }.call(this, n(2)));
      },
      function(e, t, n) {
        'use strict';
        var r = n(11);
        function i(e, t) {
          e.emit('error', t);
        }
        e.exports = {
          destroy: function(e, t) {
            var n = this,
              o = this._readableState && this._readableState.destroyed,
              a = this._writableState && this._writableState.destroyed;
            o || a
              ? t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  r(i, this, e)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function(e) {
                  !t && e
                    ? (r(i, n, e),
                      n._writableState && (n._writableState.errorEmitted = !0))
                    : t && t(e);
                }));
          },
          undestroy: function() {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      },
      function(e, t, n) {
        'use strict';
        var r = n(12).Buffer,
          i =
            r.isEncoding ||
            function(e) {
              switch ((e = '' + e) && e.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                  return !0;
                default:
                  return !1;
              }
            };
        function o(e) {
          var t;
          switch (((this.encoding = (function(e) {
            var t = (function(e) {
              if (!e) return 'utf8';
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e;
                  default:
                    if (t) return;
                    (e = ('' + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ('string' != typeof t && (r.isEncoding === i || !i(e)))
              throw new Error('Unknown encoding: ' + e);
            return t || e;
          })(e)),
          this.encoding)) {
            case 'utf16le':
              (this.text = u), (this.end = l), (t = 4);
              break;
            case 'utf8':
              (this.fillLast = s), (t = 4);
              break;
            case 'base64':
              (this.text = f), (this.end = c), (t = 3);
              break;
            default:
              return (this.write = h), void (this.end = d);
          }
          (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = r.allocUnsafe(t));
        }
        function a(e) {
          return e <= 127
            ? 0
            : e >> 5 == 6
              ? 2
              : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
        }
        function s(e) {
          var t = this.lastTotal - this.lastNeed,
            n = (function(e, t, n) {
              if (128 != (192 & t[0])) return (e.lastNeed = 0), '�';
              if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return (e.lastNeed = 1), '�';
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                  return (e.lastNeed = 2), '�';
              }
            })(this, e);
          return void 0 !== n
            ? n
            : this.lastNeed <= e.length
              ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
        }
        function u(e, t) {
          if ((e.length - t) % 2 == 0) {
            var n = e.toString('utf16le', t);
            if (n) {
              var r = n.charCodeAt(n.length - 1);
              if (r >= 55296 && r <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1]),
                  n.slice(0, -1)
                );
            }
            return n;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = e[e.length - 1]),
            e.toString('utf16le', t, e.length - 1)
          );
        }
        function l(e) {
          var t = e && e.length ? this.write(e) : '';
          if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString('utf16le', 0, n);
          }
          return t;
        }
        function f(e, t) {
          var n = (e.length - t) % 3;
          return 0 === n
            ? e.toString('base64', t)
            : ((this.lastNeed = 3 - n),
              (this.lastTotal = 3),
              1 === n
                ? (this.lastChar[0] = e[e.length - 1])
                : ((this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1])),
              e.toString('base64', t, e.length - n));
        }
        function c(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed
            ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
            : t;
        }
        function h(e) {
          return e.toString(this.encoding);
        }
        function d(e) {
          return e && e.length ? this.write(e) : '';
        }
        (t.StringDecoder = o),
          (o.prototype.write = function(e) {
            if (0 === e.length) return '';
            var t, n;
            if (this.lastNeed) {
              if (void 0 === (t = this.fillLast(e))) return '';
              (n = this.lastNeed), (this.lastNeed = 0);
            } else n = 0;
            return n < e.length ? (t ? t + this.text(e, n) : this.text(e, n)) : t || '';
          }),
          (o.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : '';
            return this.lastNeed ? t + '�' : t;
          }),
          (o.prototype.text = function(e, t) {
            var n = (function(e, t, n) {
              var r = t.length - 1;
              if (r < n) return 0;
              var i = a(t[r]);
              return i >= 0
                ? (i > 0 && (e.lastNeed = i - 1), i)
                : --r < n || -2 === i
                  ? 0
                  : (i = a(t[r])) >= 0
                    ? (i > 0 && (e.lastNeed = i - 2), i)
                    : --r < n || -2 === i
                      ? 0
                      : (i = a(t[r])) >= 0
                        ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                        : 0;
            })(this, e, t);
            if (!this.lastNeed) return e.toString('utf8', t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString('utf8', t, r);
          }),
          (o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
              return (
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
              (this.lastNeed -= e.length);
          });
      },
      function(e, t, n) {
        'use strict';
        e.exports = o;
        var r = n(3),
          i = n(6);
        function o(e) {
          if (!(this instanceof o)) return new o(e);
          r.call(this, e),
            (this._transformState = new function(e) {
              (this.afterTransform = function(t, n) {
                return (function(e, t, n) {
                  var r = e._transformState;
                  r.transforming = !1;
                  var i = r.writecb;
                  if (!i)
                    return e.emit(
                      'error',
                      new Error('write callback called multiple times')
                    );
                  (r.writechunk = null),
                    (r.writecb = null),
                    null !== n && void 0 !== n && e.push(n),
                    i(t);
                  var o = e._readableState;
                  (o.reading = !1),
                    (o.needReadable || o.length < o.highWaterMark) &&
                      e._read(o.highWaterMark);
                })(e, t, n);
              }),
                (this.needTransform = !1),
                (this.transforming = !1),
                (this.writecb = null),
                (this.writechunk = null),
                (this.writeencoding = null);
            }(this));
          var t = this;
          (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            e &&
              ('function' == typeof e.transform && (this._transform = e.transform),
              'function' == typeof e.flush && (this._flush = e.flush)),
            this.once('prefinish', function() {
              'function' == typeof this._flush
                ? this._flush(function(e, n) {
                    a(t, e, n);
                  })
                : a(t);
            });
        }
        function a(e, t, n) {
          if (t) return e.emit('error', t);
          null !== n && void 0 !== n && e.push(n);
          var r = e._writableState,
            i = e._transformState;
          if (r.length) throw new Error('Calling transform done when ws.length != 0');
          if (i.transforming)
            throw new Error('Calling transform done when still transforming');
          return e.push(null);
        }
        (i.inherits = n(5)),
          i.inherits(o, r),
          (o.prototype.push = function(e, t) {
            return (
              (this._transformState.needTransform = !1), r.prototype.push.call(this, e, t)
            );
          }),
          (o.prototype._transform = function(e, t, n) {
            throw new Error('_transform() is not implemented');
          }),
          (o.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (
              ((r.writecb = n),
              (r.writechunk = e),
              (r.writeencoding = t),
              !r.transforming)
            ) {
              var i = this._readableState;
              (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming
              ? ((t.transforming = !0),
                this._transform(t.writechunk, t.writeencoding, t.afterTransform))
              : (t.needTransform = !0);
          }),
          (o.prototype._destroy = function(e, t) {
            var n = this;
            r.prototype._destroy.call(this, e, function(e) {
              t(e), n.emit('close');
            });
          });
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
          return e;
        };
      },
      function(e, t, n) {
        (function(t) {
          var n = 'object' == typeof t && t && t.Object === Object && t;
          e.exports = n;
        }.call(this, n(2)));
      },
      function(e, t, n) {
        var r = n(8),
          i = n(23);
        e.exports = function(e) {
          if (!i(e)) return !1;
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
          var r = n(1),
            i = n(97),
            o = 'object' == typeof t && t && !t.nodeType && t,
            a = o && 'object' == typeof e && e && !e.nodeType && e,
            s = a && a.exports === o ? r.Buffer : void 0,
            u = (s ? s.isBuffer : void 0) || i;
          e.exports = u;
        }.call(this, n(42)(e)));
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
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ('number' == typeof e || n.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        };
      },
      function(e, t, n) {
        var r = n(98),
          i = n(99),
          o = n(100),
          a = o && o.isTypedArray,
          s = a ? i(a) : r;
        e.exports = s;
      },
      function(e, t, n) {
        var r = n(39),
          i = n(25);
        e.exports = function(e) {
          return null != e && i(e.length) && !r(e);
        };
      },
      function(e, t, n) {
        var r = n(13),
          i = n(114),
          o = n(115),
          a = n(116),
          s = n(117),
          u = n(118);
        function l(e) {
          var t = (this.__data__ = new r(e));
          this.size = t.size;
        }
        (l.prototype.clear = i),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = s),
          (l.prototype.set = u),
          (e.exports = l);
      },
      function(e, t) {
        e.exports = function(e, t) {
          return e === t || (e != e && t != t);
        };
      },
      function(e, t, n) {
        var r = n(131),
          i = n(9);
        e.exports = function e(t, n, o, a, s) {
          return (
            t === n ||
            (null == t || null == n || (!i(t) && !i(n))
              ? t != t && n != n
              : r(t, n, o, a, e, s))
          );
        };
      },
      function(e, t, n) {
        var r = n(132),
          i = n(135),
          o = n(136);
        e.exports = function(e, t, n, a, s, u) {
          var l = 1 & n,
            f = e.length,
            c = t.length;
          if (f != c && !(l && c > f)) return !1;
          var h = u.get(e);
          if (h && u.get(t)) return h == t;
          var d = -1,
            p = !0,
            y = 2 & n ? new r() : void 0;
          for (u.set(e, t), u.set(t, e); ++d < f; ) {
            var g = e[d],
              m = t[d];
            if (a) var v = l ? a(m, g, d, t, e, u) : a(g, m, d, e, t, u);
            if (void 0 !== v) {
              if (v) continue;
              p = !1;
              break;
            }
            if (y) {
              if (
                !i(t, function(e, t) {
                  if (!o(y, t) && (g === e || s(g, e, n, a, u))) return y.push(t);
                })
              ) {
                p = !1;
                break;
              }
            } else if (g !== m && !s(g, m, n, a, u)) {
              p = !1;
              break;
            }
          }
          return u.delete(e), u.delete(t), p;
        };
      },
      function(e, t, n) {
        var r = n(23);
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
        var r = n(53),
          i = n(17);
        e.exports = function(e, t) {
          for (var n = 0, o = (t = r(t, e)).length; null != e && n < o; )
            e = e[i(t[n++])];
          return n && n == o ? e : void 0;
        };
      },
      function(e, t, n) {
        var r = n(0),
          i = n(28),
          o = n(155),
          a = n(158);
        e.exports = function(e, t) {
          return r(e) ? e : i(e, t) ? [e] : o(a(e));
        };
      },
      function(e, n) {
        e.exports = t;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = (t.FUNCTIONS = [
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
              display: 'from(db: "database)',
              hint: 'Starting point of a query, produces a table from the given "db".',
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
          ]),
          i = {
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
                r
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
        (i['function-context'].inside = {
          argument: {pattern: /[a-z0-9_]+(?=:)/i, alias: 'symbol'},
          duration: i.duration,
          number: i.number,
          builtin: i.builtin,
          string: i.string,
        }),
          (t.default = i);
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.AnnotationsQueryCtrl = t.ConfigCtrl = t.QueryCtrl = t.Datasource = void 0);
        var r,
          i = (r = n(57)) && r.__esModule ? r : {default: r},
          o = n(169),
          a = (function() {
            function e() {}
            return (e.templateUrl = 'partials/config.html'), e;
          })(),
          s = (function() {
            function e() {}
            return (e.templateUrl = 'partials/annotations.editor.html'), e;
          })();
        (t.Datasource = i.default),
          (t.QueryCtrl = o.InfluxFluxQueryCtrl),
          (t.ConfigCtrl = a),
          (t.AnnotationsQueryCtrl = s);
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = s(n(58)),
          i = (function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(59)),
          o = n(60),
          a = s(n(168));
        function s(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var u =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          };
        function l(e) {
          return e
            ? r.default
                .reduce(
                  e,
                  function(e, t, n) {
                    return null === t || void 0 === t
                      ? e
                      : (e.push(encodeURIComponent(n) + '=' + encodeURIComponent(t)), e);
                  },
                  []
                )
                .join('&')
            : '';
        }
        var f = (function() {
          function e(e, t, n) {
            (this.backendSrv = t),
              (this.templateSrv = n),
              (this.type = 'influxdb-flux'),
              (this.url = e.url.trim()),
              (this.username = e.username),
              (this.password = e.password),
              (this.name = e.name),
              (this.orgName = e.orgName || 'defaultorgname'),
              (this.basicAuth = e.basicAuth),
              (this.withCredentials = e.withCredentials),
              (this.interval = (e.jsonData || {}).timeInterval),
              (this.database = (e.jsonData || {}).database),
              (this.supportAnnotations = !0),
              (this.supportMetrics = !0);
          }
          return (
            (e.$inject = ['instanceSettings', 'backendSrv', 'templateSrv']),
            (e.prototype.prepareQueryTarget = function(e, t) {
              var n = this.getTimeFilter(t);
              t.scopedVars.range = {value: n};
              var r = this.templateSrv.replace(e.query, t.scopedVars);
              return u({}, e, {query: r});
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
              var i = n.map(function(n) {
                var r = n.query;
                return 'table' === n.resultFormat
                  ? t
                      ._seriesQuery(r, e)
                      .then(function(e) {
                        return (0, o.parseResults)(e.data);
                      })
                      .then(function(e) {
                        return e.map(o.getTableModelFromResult);
                      })
                  : t
                      ._seriesQuery(r, e)
                      .then(function(e) {
                        return (0, o.parseResults)(e.data);
                      })
                      .then(function(e) {
                        return e.map(o.getTimeSeriesFromResult);
                      });
              });
              return Promise.all(i).then(function(e) {
                return {data: r.default.flattenDeep(e).slice(0, 20)};
              });
            }),
            (e.prototype.annotationQuery = function(e) {
              if (!e.annotation.query)
                return Promise.reject({
                  message: 'Query missing in annotation definition',
                });
              var t = e.annotation.query,
                n = u({scopedVars: {}}, e, {silent: !0}),
                i = this.prepareQueryTarget({query: t}, n);
              return this._seriesQuery(i.query, n).then(function(t) {
                var n = (0, o.parseResults)(t.data);
                if (0 === n.length)
                  throw {message: 'No results in response from InfluxDB'};
                return r.default.flatten(
                  n.map(function(t) {
                    return (0, o.getAnnotationsFromResult)(t, e.annotation);
                  })
                );
              });
            }),
            (e.prototype.metricFindQuery = function(e, t) {
              var n = (0, a.default)(e),
                i = u({rangeRaw: {to: 'now', from: 'now - 1h'}, scopedVars: {}}, t, {
                  silent: !0,
                }),
                s = this.prepareQueryTarget({query: n}, i);
              return this._seriesQuery(s.query, i).then(function(e) {
                var t = (0, o.parseResults)(e.data);
                return r.default
                  .uniq(r.default.flatten(t.map(o.getValuesFromResult)))
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
                ? this._influxRequest('POST', '/query', {query: e}, t)
                : Promise.resolve({data: ''});
            }),
            (e.prototype.testDatasource = function() {
              var e = 'from(bucket:"' + this.database + '") |> last()';
              return this._influxRequest('POST', '/query', {query: e})
                .then(function(e) {
                  return e && e.data && e.data.trim()
                    ? {
                        status: 'success',
                        message: 'Data source connected and database found.',
                      }
                    : {
                        status: 'error',
                        message:
                          'Data source connected, but has no data. Verify the "Database" field and make sure the database has data.',
                      };
                })
                .catch(function(e) {
                  return {status: 'error', message: e.message};
                });
            }),
            (e.prototype._influxRequest = function(e, t, n, i) {
              var o = {organization: 'my-org'};
              this.username && ((o.u = this.username), (o.p = this.password)),
                r.default.extend(o, n),
                (n = null);
              var a = {
                method: e,
                url: this.url + t,
                params: o,
                data: n,
                precision: 'ms',
                inspect: {type: this.type},
                paramSerializer: l,
              };
              return (
                (a.headers = a.headers || {}),
                (this.basicAuth || this.withCredentials) && (a.withCredentials = !0),
                this.basicAuth && (a.headers.Authorization = this.basicAuth),
                this.backendSrv.datasourceRequest(a).then(
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
              if (r.default.isString(e)) {
                if ('now' === e) return e;
                var n = /^now\s*-\s*(\d+)([d|h|m|s])$/.exec(e);
                if (n) return '-' + parseInt(n[1]) + n[2];
                e = i.parse(e, t);
              }
              return e.toISOString();
            }),
            e
          );
        })();
        t.default = f;
      },
      function(e, t) {
        e.exports = n;
      },
      function(e, t) {
        e.exports = r;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.parseTime = t.parseValue = t.getNameFromRecord = t.getTagsFromRecord = void 0),
          (t.parseResults = function(e) {
            return e.trim().split(/\n\s*\s/);
          }),
          (t.getAnnotationsFromResult = function(e, t) {
            var n = c(e);
            if (0 === n.length) return [];
            var r = [],
              o = t.textCol || '_value',
              a = (t.tagsCol || '').split(',').map(function(e) {
                return e.trim();
              });
            return (
              n.forEach(function(e) {
                var n = l(e),
                  s = (0, i.default)(
                    a
                      .filter(function(e) {
                        return n[e];
                      })
                      .map(function(e) {
                        return n[e].split(',');
                      })
                  );
                r.push({annotation: t, time: d(e._time), tags: s, text: e[o]});
              }),
              r
            );
          }),
          (t.getTableModelFromResult = function(e) {
            var t = c(e),
              n = {type: 'table', columns: [], rows: []};
            if (t.length > 0) {
              var r = t[0],
                i = Object.keys(r)
                  .filter(s)
                  .map(function(e) {
                    return {id: e, text: e};
                  }),
                o = [
                  {text: 'Time', id: '_time'},
                  {text: 'Measurement', id: '_measurement'},
                  {text: 'Field', id: '_field'},
                ].concat(i, [{id: '_value', text: 'Value'}]);
              o.forEach(function(e) {
                return n.columns.push(e);
              }),
                t.forEach(function(e) {
                  var t = o.map(function(t) {
                    return e[t.id];
                  });
                  n.rows.push(t);
                });
            }
            return n;
          }),
          (t.getTimeSeriesFromResult = function(e) {
            var t = c(e);
            if (0 === t.length) return [];
            var n = (0, o.default)(t, 'table');
            return Object.keys(n)
              .map(function(e) {
                return n[e];
              })
              .map(function(e) {
                return {
                  datapoints: e.map(function(e) {
                    return [h(e._value), d(e._time)];
                  }),
                  target: f(e[0]),
                };
              });
          }),
          (t.getValuesFromResult = function(e) {
            return c(e).map(function(e) {
              return e._value;
            });
          });
        var r = a(n(61)),
          i = a(n(75)),
          o = a(n(81));
        function a(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var s = function(e) {
            return e && '_' !== e[0] && 'result' !== e && 'table' !== e;
          },
          u = ['result', '', 'table'],
          l = (t.getTagsFromRecord = function(e) {
            return Object.keys(e)
              .filter(function(e) {
                return '_' !== e[0];
              })
              .filter(function(e) {
                return -1 === u.indexOf(e);
              })
              .reduce(function(t, n) {
                return (t[n] = e[n]), t;
              }, {});
          }),
          f = (t.getNameFromRecord = function(e) {
            var t = [e._measurement, e._field],
              n = l(e),
              r = Object.keys(n).map(function(e) {
                return e + '=' + n[e];
              });
            return t.concat(r).join(' ');
          }),
          c = function(e) {
            return r.default.parse(e, {header: !0, comments: '#'}).data;
          },
          h = (t.parseValue = function(e) {
            var t = parseFloat(e);
            return isNaN(t) ? null : t;
          }),
          d = (t.parseTime = function(e) {
            return Date.parse(e);
          });
      },
      function(e, t, n) {
        var r, i;
        /*@license
	Papa Parse
	v4.5.0
	https://github.com/mholt/PapaParse
	License: MIT
*/ void 0 ===
          (i =
            'function' ==
            typeof (r = function() {
              'use strict';
              var e,
                t,
                r =
                  'undefined' != typeof self
                    ? self
                    : 'undefined' != typeof window ? window : void 0 !== r ? r : {},
                i = !r.document && !!r.postMessage,
                o = i && /(\?|&)papaworker(=|&|$)/.test(r.location.search),
                a = !1,
                s = {},
                u = 0,
                l = {
                  parse: function(t, n) {
                    var i = (n = n || {}).dynamicTyping || !1;
                    if (
                      (E(i) && ((n.dynamicTypingFunction = i), (i = {})),
                      (n.dynamicTyping = i),
                      (n.transform = !!E(n.transform) && n.transform),
                      n.worker && l.WORKERS_SUPPORTED)
                    ) {
                      var o = (function() {
                        if (!l.WORKERS_SUPPORTED) return !1;
                        if (!a && null === l.SCRIPT_PATH)
                          throw new Error(
                            'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.'
                          );
                        var t = l.SCRIPT_PATH || e;
                        t += (-1 !== t.indexOf('?') ? '&' : '?') + 'papaworker';
                        var n = new r.Worker(t);
                        return (n.onmessage = b), (n.id = u++), (s[n.id] = n), n;
                      })();
                      return (
                        (o.userStep = n.step),
                        (o.userChunk = n.chunk),
                        (o.userComplete = n.complete),
                        (o.userError = n.error),
                        (n.step = E(n.step)),
                        (n.chunk = E(n.chunk)),
                        (n.complete = E(n.complete)),
                        (n.error = E(n.error)),
                        delete n.worker,
                        void o.postMessage({input: t, config: n, workerId: o.id})
                      );
                    }
                    var f = null;
                    return t === l.NODE_STREAM_INPUT
                      ? (f = new g(n)).getStream()
                      : ('string' == typeof t
                          ? (f = n.download ? new h(n) : new p(n))
                          : !0 === t.readable && E(t.read) && E(t.on)
                            ? (f = new y(n))
                            : ((r.File && t instanceof File) || t instanceof Object) &&
                              (f = new d(n)),
                        f.stream(t));
                  },
                  unparse: function(e, t) {
                    var n = !1,
                      r = !0,
                      i = ',',
                      o = '\r\n',
                      a = '"';
                    'object' == typeof t &&
                      ('string' == typeof t.delimiter &&
                        1 === t.delimiter.length &&
                        -1 === l.BAD_DELIMITERS.indexOf(t.delimiter) &&
                        (i = t.delimiter),
                      ('boolean' == typeof t.quotes || t.quotes instanceof Array) &&
                        (n = t.quotes),
                      'string' == typeof t.newline && (o = t.newline),
                      'string' == typeof t.quoteChar && (a = t.quoteChar),
                      'boolean' == typeof t.header && (r = t.header));
                    var s = new RegExp(a, 'g');
                    if (
                      ('string' == typeof e && (e = JSON.parse(e)), e instanceof Array)
                    ) {
                      if (!e.length || e[0] instanceof Array) return f(null, e);
                      if ('object' == typeof e[0]) return f(u(e[0]), e);
                    } else if ('object' == typeof e)
                      return (
                        'string' == typeof e.data && (e.data = JSON.parse(e.data)),
                        e.data instanceof Array &&
                          (e.fields || (e.fields = e.meta && e.meta.fields),
                          e.fields ||
                            (e.fields =
                              e.data[0] instanceof Array ? e.fields : u(e.data[0])),
                          e.data[0] instanceof Array ||
                            'object' == typeof e.data[0] ||
                            (e.data = [e.data])),
                        f(e.fields || [], e.data || [])
                      );
                    throw 'exception: Unable to serialize unrecognized input';
                    function u(e) {
                      if ('object' != typeof e) return [];
                      var t = [];
                      for (var n in e) t.push(n);
                      return t;
                    }
                    function f(e, t) {
                      var n = '';
                      'string' == typeof e && (e = JSON.parse(e)),
                        'string' == typeof t && (t = JSON.parse(t));
                      var a = e instanceof Array && e.length > 0,
                        s = !(t[0] instanceof Array);
                      if (a && r) {
                        for (var u = 0; u < e.length; u++)
                          u > 0 && (n += i), (n += c(e[u], u));
                        t.length > 0 && (n += o);
                      }
                      for (var l = 0; l < t.length; l++) {
                        for (var f = a ? e.length : t[l].length, h = 0; h < f; h++) {
                          h > 0 && (n += i);
                          var d = a && s ? e[h] : h;
                          n += c(t[l][d], h);
                        }
                        l < t.length - 1 && (n += o);
                      }
                      return n;
                    }
                    function c(e, t) {
                      return void 0 === e || null === e
                        ? ''
                        : e.constructor === Date
                          ? JSON.stringify(e).slice(1, 25)
                          : ((e = e.toString().replace(s, a + a)),
                            ('boolean' == typeof n && n) ||
                            (n instanceof Array && n[t]) ||
                            (function(e, t) {
                              for (var n = 0; n < t.length; n++)
                                if (e.indexOf(t[n]) > -1) return !0;
                              return !1;
                            })(e, l.BAD_DELIMITERS) ||
                            e.indexOf(i) > -1 ||
                            ' ' === e.charAt(0) ||
                            ' ' === e.charAt(e.length - 1)
                              ? a + e + a
                              : e);
                    }
                  },
                };
              if (
                ((l.RECORD_SEP = String.fromCharCode(30)),
                (l.UNIT_SEP = String.fromCharCode(31)),
                (l.BYTE_ORDER_MARK = '\ufeff'),
                (l.BAD_DELIMITERS = ['\r', '\n', '"', l.BYTE_ORDER_MARK]),
                (l.WORKERS_SUPPORTED = !i && !!r.Worker),
                (l.SCRIPT_PATH = null),
                (l.NODE_STREAM_INPUT = 1),
                (l.LocalChunkSize = 10485760),
                (l.RemoteChunkSize = 5242880),
                (l.DefaultDelimiter = ','),
                (l.Parser = v),
                (l.ParserHandle = m),
                (l.NetworkStreamer = h),
                (l.FileStreamer = d),
                (l.StringStreamer = p),
                (l.ReadableStreamStreamer = y),
                (l.DuplexStreamStreamer = g),
                r.jQuery)
              ) {
                var f = r.jQuery;
                f.fn.parse = function(e) {
                  var t = e.config || {},
                    n = [];
                  return (
                    this.each(function(e) {
                      if (
                        !(
                          'INPUT' ===
                            f(this)
                              .prop('tagName')
                              .toUpperCase() &&
                          'file' ===
                            f(this)
                              .attr('type')
                              .toLowerCase() &&
                          r.FileReader
                        ) ||
                        !this.files ||
                        0 === this.files.length
                      )
                        return !0;
                      for (var i = 0; i < this.files.length; i++)
                        n.push({
                          file: this.files[i],
                          inputElem: this,
                          instanceConfig: f.extend({}, t),
                        });
                    }),
                    i(),
                    this
                  );
                  function i() {
                    if (0 !== n.length) {
                      var t,
                        r,
                        i,
                        a,
                        s = n[0];
                      if (E(e.before)) {
                        var u = e.before(s.file, s.inputElem);
                        if ('object' == typeof u) {
                          if ('abort' === u.action)
                            return (
                              (t = 'AbortError'),
                              (r = s.file),
                              (i = s.inputElem),
                              (a = u.reason),
                              void (E(e.error) && e.error({name: t}, r, i, a))
                            );
                          if ('skip' === u.action) return void o();
                          'object' == typeof u.config &&
                            (s.instanceConfig = f.extend(s.instanceConfig, u.config));
                        } else if ('skip' === u) return void o();
                      }
                      var c = s.instanceConfig.complete;
                      (s.instanceConfig.complete = function(e) {
                        E(c) && c(e, s.file, s.inputElem), o();
                      }),
                        l.parse(s.file, s.instanceConfig);
                    } else E(e.complete) && e.complete();
                  }
                  function o() {
                    n.splice(0, 1), i();
                  }
                };
              }
              function c(e) {
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
                    var t = x(e);
                    (t.chunkSize = parseInt(t.chunkSize)),
                      e.step || e.chunk || (t.chunkSize = null),
                      (this._handle = new m(t)),
                      (this._handle.streamer = this),
                      (this._config = t);
                  }.call(this, e),
                  (this.parseChunk = function(e, t) {
                    if (this.isFirstChunk && E(this._config.beforeFirstChunk)) {
                      var n = this._config.beforeFirstChunk(e);
                      void 0 !== n && (e = n);
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
                      var u =
                        this._finished ||
                        (this._config.preview && this._rowCount >= this._config.preview);
                      if (o)
                        r.postMessage({results: a, workerId: l.WORKER_ID, finished: u});
                      else if (E(this._config.chunk) && !t) {
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
                          !u ||
                          !E(this._config.complete) ||
                          (a && a.meta.aborted) ||
                          (this._config.complete(this._completeResults, this._input),
                          (this._completed = !0)),
                        u || (a && a.meta.paused) || this._nextChunk(),
                        a
                      );
                    }
                  }),
                  (this._sendError = function(e) {
                    E(this._config.error)
                      ? this._config.error(e)
                      : o &&
                        this._config.error &&
                        r.postMessage({workerId: l.WORKER_ID, error: e, finished: !1});
                  });
              }
              function h(e) {
                var t;
                (e = e || {}).chunkSize || (e.chunkSize = l.RemoteChunkSize),
                  c.call(this, e),
                  (this._nextChunk = i
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
                        i ||
                          ((t.onload = A(this._chunkLoaded, this)),
                          (t.onerror = A(this._chunkError, this))),
                        t.open('GET', this._input, !i),
                        this._config.downloadRequestHeaders)
                      ) {
                        var e = this._config.downloadRequestHeaders;
                        for (var n in e) t.setRequestHeader(n, e[n]);
                      }
                      if (this._config.chunkSize) {
                        var r = this._start + this._config.chunkSize - 1;
                        t.setRequestHeader('Range', 'bytes=' + this._start + '-' + r),
                          t.setRequestHeader('If-None-Match', 'webkit-no-cache');
                      }
                      try {
                        t.send();
                      } catch (e) {
                        this._chunkError(e.message);
                      }
                      i && 0 === t.status
                        ? this._chunkError()
                        : (this._start += this._config.chunkSize);
                    }
                  }),
                  (this._chunkLoaded = function() {
                    4 === t.readyState &&
                      (t.status < 200 || t.status >= 400
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
              function d(e) {
                var t, n;
                (e = e || {}).chunkSize || (e.chunkSize = l.LocalChunkSize),
                  c.call(this, e);
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
                      var i = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size
                      );
                      e = n.call(e, this._start, i);
                    }
                    var o = t.readAsText(e, this._config.encoding);
                    r || this._chunkLoaded({target: {result: o}});
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
              function p(e) {
                var t;
                (e = e || {}),
                  c.call(this, e),
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
              function y(e) {
                (e = e || {}), c.call(this, e);
                var t = [],
                  n = !0,
                  r = !1;
                (this.pause = function() {
                  c.prototype.pause.apply(this, arguments), this._input.pause();
                }),
                  (this.resume = function() {
                    c.prototype.resume.apply(this, arguments), this._input.resume();
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
                          ((n = !1), this._checkIsFinished(), this.parseChunk(t.shift()));
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
              function g(e) {
                var t = n(62).Duplex,
                  r = x(e),
                  i = !0,
                  o = !1,
                  a = [],
                  s = null;
                (this._onCsvData = function(e) {
                  for (var t = e.data, n = 0; n < t.length; n++)
                    s.push(t[n]) || this._handle.paused() || this._handle.pause();
                }),
                  (this._onCsvComplete = function() {
                    s.push(null);
                  }),
                  (r.step = A(this._onCsvData, this)),
                  (r.complete = A(this._onCsvComplete, this)),
                  c.call(this, r),
                  (this._nextChunk = function() {
                    o && 1 === a.length && (this._finished = !0),
                      a.length ? a.shift()() : (i = !0);
                  }),
                  (this._addToParseQueue = function(e, t) {
                    a.push(
                      A(function() {
                        if (
                          (this.parseChunk(
                            'string' == typeof e ? e : e.toString(r.encoding)
                          ),
                          E(t))
                        )
                          return t();
                      }, this)
                    ),
                      i && ((i = !1), this._nextChunk());
                  }),
                  (this._onRead = function() {
                    this._handle.paused() && this._handle.resume();
                  }),
                  (this._onWrite = function(e, t, n) {
                    this._addToParseQueue(e, n);
                  }),
                  (this._onWriteComplete = function() {
                    (o = !0), this._addToParseQueue('');
                  }),
                  (this.getStream = function() {
                    return s;
                  }),
                  (s = new t({
                    readableObjectMode: !0,
                    decodeStrings: !1,
                    read: A(this._onRead, this),
                    write: A(this._onWrite, this),
                  })).once('finish', A(this._onWriteComplete, this));
              }
              function m(e) {
                var t,
                  n,
                  r,
                  i = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
                  o = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                  a = this,
                  s = 0,
                  u = 0,
                  f = !1,
                  c = !1,
                  h = [],
                  d = {data: [], errors: [], meta: {}};
                if (E(e.step)) {
                  var p = e.step;
                  e.step = function(t) {
                    if (((d = t), g())) y();
                    else {
                      if ((y(), 0 === d.data.length)) return;
                      (s += t.data.length),
                        e.preview && s > e.preview ? n.abort() : p(d, a);
                    }
                  };
                }
                function y() {
                  if (
                    (d &&
                      r &&
                      (b(
                        'Delimiter',
                        'UndetectableDelimiter',
                        "Unable to auto-detect delimiting character; defaulted to '" +
                          l.DefaultDelimiter +
                          "'"
                      ),
                      (r = !1)),
                    e.skipEmptyLines)
                  )
                    for (var t = 0; t < d.data.length; t++)
                      1 === d.data[t].length &&
                        '' === d.data[t][0] &&
                        d.data.splice(t--, 1);
                  return (
                    g() &&
                      (function() {
                        if (d) {
                          for (var t = 0; g() && t < d.data.length; t++)
                            for (var n = 0; n < d.data[t].length; n++) {
                              var r = d.data[t][n];
                              e.trimHeaders && (r = r.trim()), h.push(r);
                            }
                          d.data.splice(0, 1);
                        }
                      })(),
                    (function() {
                      if (!d || (!e.header && !e.dynamicTyping && !e.transform)) return d;
                      for (var t = 0; t < d.data.length; t++) {
                        var n,
                          r = e.header ? {} : [];
                        for (n = 0; n < d.data[t].length; n++) {
                          var i = n,
                            o = d.data[t][n];
                          e.header && (i = n >= h.length ? '__parsed_extra' : h[n]),
                            e.transform && (o = e.transform(o, i)),
                            (o = m(i, o)),
                            '__parsed_extra' === i
                              ? ((r[i] = r[i] || []), r[i].push(o))
                              : (r[i] = o);
                        }
                        (d.data[t] = r),
                          e.header &&
                            (n > h.length
                              ? b(
                                  'FieldMismatch',
                                  'TooManyFields',
                                  'Too many fields: expected ' +
                                    h.length +
                                    ' fields but parsed ' +
                                    n,
                                  u + t
                                )
                              : n < h.length &&
                                b(
                                  'FieldMismatch',
                                  'TooFewFields',
                                  'Too few fields: expected ' +
                                    h.length +
                                    ' fields but parsed ' +
                                    n,
                                  u + t
                                ));
                      }
                      return (
                        e.header && d.meta && (d.meta.fields = h), (u += d.data.length), d
                      );
                    })()
                  );
                }
                function g() {
                  return e.header && 0 === h.length;
                }
                function m(t, n) {
                  return (function(t) {
                    return (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    );
                  })(t)
                    ? 'true' === n ||
                        'TRUE' === n ||
                        ('false' !== n &&
                          'FALSE' !== n &&
                          (i.test(n)
                            ? parseFloat(n)
                            : o.test(n) ? new Date(n) : '' === n ? null : n))
                    : n;
                }
                function b(e, t, n, r) {
                  d.errors.push({type: e, code: t, message: n, row: r});
                }
                (this.parse = function(i, o, a) {
                  if (
                    (e.newline ||
                      (e.newline = (function(e) {
                        var t = (e = e.substr(0, 1048576)).split('\r'),
                          n = e.split('\n'),
                          r = n.length > 1 && n[0].length < t[0].length;
                        if (1 === t.length || r) return '\n';
                        for (var i = 0, o = 0; o < t.length; o++) '\n' === t[o][0] && i++;
                        return i >= t.length / 2 ? '\r\n' : '\r';
                      })(i)),
                    (r = !1),
                    e.delimiter)
                  )
                    E(e.delimiter) &&
                      ((e.delimiter = e.delimiter(i)), (d.meta.delimiter = e.delimiter));
                  else {
                    var s = (function(t, n, r, i) {
                      for (
                        var o,
                          a,
                          s,
                          u = [',', '\t', '|', ';', l.RECORD_SEP, l.UNIT_SEP],
                          f = 0;
                        f < u.length;
                        f++
                      ) {
                        var c = u[f],
                          h = 0,
                          d = 0,
                          p = 0;
                        s = void 0;
                        for (
                          var y = new v({
                              comments: i,
                              delimiter: c,
                              newline: n,
                              preview: 10,
                            }).parse(t),
                            g = 0;
                          g < y.data.length;
                          g++
                        )
                          if (r && 1 === y.data[g].length && 0 === y.data[g][0].length)
                            p++;
                          else {
                            var m = y.data[g].length;
                            (d += m),
                              void 0 !== s
                                ? m > 1 && ((h += Math.abs(m - s)), (s = m))
                                : (s = m);
                          }
                        y.data.length > 0 && (d /= y.data.length - p),
                          (void 0 === a || h < a) && d > 1.99 && ((a = h), (o = c));
                      }
                      return (e.delimiter = o), {successful: !!o, bestDelimiter: o};
                    })(i, e.newline, e.skipEmptyLines, e.comments);
                    s.successful
                      ? (e.delimiter = s.bestDelimiter)
                      : ((r = !0), (e.delimiter = l.DefaultDelimiter)),
                      (d.meta.delimiter = e.delimiter);
                  }
                  var u = x(e);
                  return (
                    e.preview && e.header && u.preview++,
                    (t = i),
                    (n = new v(u)),
                    (d = n.parse(t, o, a)),
                    y(),
                    f ? {meta: {paused: !0}} : d || {meta: {paused: !1}}
                  );
                }),
                  (this.paused = function() {
                    return f;
                  }),
                  (this.pause = function() {
                    (f = !0), n.abort(), (t = t.substr(n.getCharIndex()));
                  }),
                  (this.resume = function() {
                    (f = !1), a.streamer.parseChunk(t, !0);
                  }),
                  (this.aborted = function() {
                    return c;
                  }),
                  (this.abort = function() {
                    (c = !0),
                      n.abort(),
                      (d.meta.aborted = !0),
                      E(e.complete) && e.complete(d),
                      (t = '');
                  });
              }
              function v(e) {
                var t,
                  n = (e = e || {}).delimiter,
                  r = e.newline,
                  i = e.comments,
                  o = e.step,
                  a = e.preview,
                  s = e.fastMode,
                  u = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
                if (
                  (void 0 !== e.escapeChar && (u = e.escapeChar),
                  ('string' != typeof n || l.BAD_DELIMITERS.indexOf(n) > -1) && (n = ','),
                  i === n)
                )
                  throw 'Comment character same as delimiter';
                !0 === i
                  ? (i = '#')
                  : ('string' != typeof i || l.BAD_DELIMITERS.indexOf(i) > -1) &&
                    (i = !1),
                  '\n' !== r && '\r' !== r && '\r\n' !== r && (r = '\n');
                var f = 0,
                  c = !1;
                (this.parse = function(e, l, h) {
                  if ('string' != typeof e) throw 'Input must be a string';
                  var d = e.length,
                    p = n.length,
                    y = r.length,
                    g = i.length,
                    m = E(o);
                  f = 0;
                  var v = [],
                    b = [],
                    _ = [],
                    w = 0;
                  if (!e) return q();
                  if (s || (!1 !== s && -1 === e.indexOf(t))) {
                    for (var x = e.split(r), A = 0; A < x.length; A++) {
                      if (((_ = x[A]), (f += _.length), A !== x.length - 1))
                        f += r.length;
                      else if (h) return q();
                      if (!i || _.substr(0, g) !== i) {
                        if (m) {
                          if (((v = []), O(_.split(n)), I(), c)) return q();
                        } else O(_.split(n));
                        if (a && A >= a) return (v = v.slice(0, a)), q(!0);
                      }
                    }
                    return q();
                  }
                  for (
                    var k,
                      C = e.indexOf(n, f),
                      S = e.indexOf(r, f),
                      T = new RegExp(u.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') + t, 'g');
                    ;

                  )
                    if (e[f] !== t)
                      if (i && 0 === _.length && e.substr(f, g) === i) {
                        if (-1 === S) return q();
                        (f = S + y), (S = e.indexOf(r, f)), (C = e.indexOf(n, f));
                      } else if (-1 !== C && (C < S || -1 === S))
                        _.push(e.substring(f, C)), (f = C + p), (C = e.indexOf(n, f));
                      else {
                        if (-1 === S) break;
                        if ((_.push(e.substring(f, S)), M(S + y), m && (I(), c)))
                          return q();
                        if (a && v.length >= a) return q(!0);
                      }
                    else
                      for (k = f, f++; ; ) {
                        if (-1 === (k = e.indexOf(t, k + 1)))
                          return (
                            h ||
                              b.push({
                                type: 'Quotes',
                                code: 'MissingQuotes',
                                message: 'Quoted field unterminated',
                                row: v.length,
                                index: f,
                              }),
                            P()
                          );
                        if (k === d - 1) return P(e.substring(f, k).replace(T, t));
                        if (t !== u || e[k + 1] !== u) {
                          if (t === u || 0 === k || e[k - 1] !== u) {
                            var R = B(C);
                            if (e[k + 1 + R] === n) {
                              _.push(e.substring(f, k).replace(T, t)),
                                (f = k + 1 + R + p),
                                (C = e.indexOf(n, f)),
                                (S = e.indexOf(r, f));
                              break;
                            }
                            var j = B(S);
                            if (e.substr(k + 1 + j, y) === r) {
                              if (
                                (_.push(e.substring(f, k).replace(T, t)),
                                M(k + 1 + j + y),
                                (C = e.indexOf(n, f)),
                                m && (I(), c))
                              )
                                return q();
                              if (a && v.length >= a) return q(!0);
                              break;
                            }
                            b.push({
                              type: 'Quotes',
                              code: 'InvalidQuotes',
                              message: 'Trailing quote on quoted field is malformed',
                              row: v.length,
                              index: f,
                            }),
                              k++;
                          }
                        } else k++;
                      }
                  return P();
                  function O(e) {
                    v.push(e), (w = f);
                  }
                  function B(t) {
                    var n = 0;
                    if (-1 !== t) {
                      var r = e.substring(k + 1, t);
                      r && '' === r.trim() && (n = r.length);
                    }
                    return n;
                  }
                  function P(t) {
                    return h
                      ? q()
                      : (void 0 === t && (t = e.substr(f)),
                        _.push(t),
                        (f = d),
                        O(_),
                        m && I(),
                        q());
                  }
                  function M(t) {
                    (f = t), O(_), (_ = []), (S = e.indexOf(r, f));
                  }
                  function q(e) {
                    return {
                      data: v,
                      errors: b,
                      meta: {
                        delimiter: n,
                        linebreak: r,
                        aborted: c,
                        truncated: !!e,
                        cursor: w + (l || 0),
                      },
                    };
                  }
                  function I() {
                    o(q()), (v = []), (b = []);
                  }
                }),
                  (this.abort = function() {
                    c = !0;
                  }),
                  (this.getCharIndex = function() {
                    return f;
                  });
              }
              function b(e) {
                var t = e.data,
                  n = s[t.workerId],
                  r = !1;
                if (t.error) n.userError(t.error, t.file);
                else if (t.results && t.results.data) {
                  var i = {
                    abort: function() {
                      (r = !0),
                        _(t.workerId, {data: [], errors: [], meta: {aborted: !0}});
                    },
                    pause: w,
                    resume: w,
                  };
                  if (E(n.userStep)) {
                    for (
                      var o = 0;
                      o < t.results.data.length &&
                      (n.userStep(
                        {
                          data: [t.results.data[o]],
                          errors: t.results.errors,
                          meta: t.results.meta,
                        },
                        i
                      ),
                      !r);
                      o++
                    );
                    delete t.results;
                  } else
                    E(n.userChunk) &&
                      (n.userChunk(t.results, i, t.file), delete t.results);
                }
                t.finished && !r && _(t.workerId, t.results);
              }
              function _(e, t) {
                var n = s[e];
                E(n.userComplete) && n.userComplete(t), n.terminate(), delete s[e];
              }
              function w() {
                throw 'Not implemented.';
              }
              function x(e) {
                if ('object' != typeof e || null === e) return e;
                var t = e instanceof Array ? [] : {};
                for (var n in e) t[n] = x(e[n]);
                return t;
              }
              function A(e, t) {
                return function() {
                  e.apply(t, arguments);
                };
              }
              function E(e) {
                return 'function' == typeof e;
              }
              return (
                o
                  ? (r.onmessage = function(e) {
                      var t = e.data;
                      if (
                        (void 0 === l.WORKER_ID && t && (l.WORKER_ID = t.workerId),
                        'string' == typeof t.input)
                      )
                        r.postMessage({
                          workerId: l.WORKER_ID,
                          results: l.parse(t.input, t.config),
                          finished: !0,
                        });
                      else if (
                        (r.File && t.input instanceof File) ||
                        t.input instanceof Object
                      ) {
                        var n = l.parse(t.input, t.config);
                        n &&
                          r.postMessage({
                            workerId: l.WORKER_ID,
                            results: n,
                            finished: !0,
                          });
                      }
                    })
                  : l.WORKERS_SUPPORTED &&
                    ((t = document.getElementsByTagName('script')),
                    (e = t.length ? t[t.length - 1].src : ''),
                    document.body
                      ? document.addEventListener(
                          'DOMContentLoaded',
                          function() {
                            a = !0;
                          },
                          !0
                        )
                      : (a = !0)),
                (h.prototype = Object.create(c.prototype)),
                (h.prototype.constructor = h),
                (d.prototype = Object.create(c.prototype)),
                (d.prototype.constructor = d),
                (p.prototype = Object.create(p.prototype)),
                (p.prototype.constructor = p),
                (y.prototype = Object.create(c.prototype)),
                (y.prototype.constructor = y),
                (g.prototype = Object.create(c.prototype)),
                (g.prototype.constructor = g),
                l
              );
            })
              ? r.apply(t, [])
              : r) || (e.exports = i);
      },
      function(e, t, n) {
        e.exports = i;
        var r = n(19).EventEmitter;
        function i() {
          r.call(this);
        }
        n(5)(i, r),
          (i.Readable = n(20)),
          (i.Writable = n(71)),
          (i.Duplex = n(72)),
          (i.Transform = n(73)),
          (i.PassThrough = n(74)),
          (i.Stream = i),
          (i.prototype.pipe = function(e, t) {
            var n = this;
            function i(t) {
              e.writable && !1 === e.write(t) && n.pause && n.pause();
            }
            function o() {
              n.readable && n.resume && n.resume();
            }
            n.on('data', i),
              e.on('drain', o),
              e._isStdio || (t && !1 === t.end) || (n.on('end', s), n.on('close', u));
            var a = !1;
            function s() {
              a || ((a = !0), e.end());
            }
            function u() {
              a || ((a = !0), 'function' == typeof e.destroy && e.destroy());
            }
            function l(e) {
              if ((f(), 0 === r.listenerCount(this, 'error'))) throw e;
            }
            function f() {
              n.removeListener('data', i),
                e.removeListener('drain', o),
                n.removeListener('end', s),
                n.removeListener('close', u),
                n.removeListener('error', l),
                e.removeListener('error', l),
                n.removeListener('end', f),
                n.removeListener('close', f),
                e.removeListener('close', f);
            }
            return (
              n.on('error', l),
              e.on('error', l),
              n.on('end', f),
              n.on('close', f),
              e.on('close', f),
              e.emit('pipe', n),
              e
            );
          });
      },
      function(e, t, n) {
        'use strict';
        (t.byteLength = function(e) {
          var t = l(e),
            n = t[0],
            r = t[1];
          return 3 * (n + r) / 4 - r;
        }),
          (t.toByteArray = function(e) {
            for (
              var t,
                n = l(e),
                r = n[0],
                a = n[1],
                s = new o(3 * (r + a) / 4 - a),
                u = 0,
                f = a > 0 ? r - 4 : r,
                c = 0;
              c < f;
              c += 4
            )
              (t =
                (i[e.charCodeAt(c)] << 18) |
                (i[e.charCodeAt(c + 1)] << 12) |
                (i[e.charCodeAt(c + 2)] << 6) |
                i[e.charCodeAt(c + 3)]),
                (s[u++] = (t >> 16) & 255),
                (s[u++] = (t >> 8) & 255),
                (s[u++] = 255 & t);
            return (
              2 === a &&
                ((t = (i[e.charCodeAt(c)] << 2) | (i[e.charCodeAt(c + 1)] >> 4)),
                (s[u++] = 255 & t)),
              1 === a &&
                ((t =
                  (i[e.charCodeAt(c)] << 10) |
                  (i[e.charCodeAt(c + 1)] << 4) |
                  (i[e.charCodeAt(c + 2)] >> 2)),
                (s[u++] = (t >> 8) & 255),
                (s[u++] = 255 & t)),
              s
            );
          }),
          (t.fromByteArray = function(e) {
            for (
              var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
              a < s;
              a += 16383
            )
              o.push(f(e, a, a + 16383 > s ? s : a + 16383));
            return (
              1 === i
                ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + '=='))
                : 2 === i &&
                  ((t = (e[n - 2] << 8) + e[n - 1]),
                  o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + '=')),
              o.join('')
            );
          });
        for (
          var r = [],
            i = [],
            o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            s = 0,
            u = a.length;
          s < u;
          ++s
        )
          (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
        function l(e) {
          var t = e.length;
          if (t % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4');
          var n = e.indexOf('=');
          return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
        }
        function f(e, t, n) {
          for (var i, o, a = [], s = t; s < n; s += 3)
            (i =
              ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])),
              a.push(
                r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]
              );
          return a.join('');
        }
        (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
      },
      function(e, t) {
        (t.read = function(e, t, n, r, i) {
          var o,
            a,
            s = 8 * i - r - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            f = -7,
            c = n ? i - 1 : 0,
            h = n ? -1 : 1,
            d = e[t + c];
          for (
            c += h, o = d & ((1 << -f) - 1), d >>= -f, f += s;
            f > 0;
            o = 256 * o + e[t + c], c += h, f -= 8
          );
          for (
            a = o & ((1 << -f) - 1), o >>= -f, f += r;
            f > 0;
            a = 256 * a + e[t + c], c += h, f -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u) return a ? NaN : 1 / 0 * (d ? -1 : 1);
            (a += Math.pow(2, r)), (o -= l);
          }
          return (d ? -1 : 1) * a * Math.pow(2, o - r);
        }),
          (t.write = function(e, t, n, r, i, o) {
            var a,
              s,
              u,
              l = 8 * o - i - 1,
              f = (1 << l) - 1,
              c = f >> 1,
              h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = r ? 0 : o - 1,
              p = r ? 1 : -1,
              y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((s = isNaN(t) ? 1 : 0), (a = f))
                  : ((a = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                    (t += a + c >= 1 ? h / u : h * Math.pow(2, 1 - c)) * u >= 2 &&
                      (a++, (u /= 2)),
                    a + c >= f
                      ? ((s = 0), (a = f))
                      : a + c >= 1
                        ? ((s = (t * u - 1) * Math.pow(2, i)), (a += c))
                        : ((s = t * Math.pow(2, c - 1) * Math.pow(2, i)), (a = 0)));
              i >= 8;
              e[n + d] = 255 & s, d += p, s /= 256, i -= 8
            );
            for (
              a = (a << i) | s, l += i;
              l > 0;
              e[n + d] = 255 & a, d += p, a /= 256, l -= 8
            );
            e[n + d - p] |= 128 * y;
          });
      },
      function(e, t) {},
      function(e, t, n) {
        'use strict';
        var r = n(12).Buffer;
        e.exports = (function() {
          function e() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          return (
            (e.prototype.push = function(e) {
              var t = {data: e, next: null};
              this.length > 0 ? (this.tail.next = t) : (this.head = t),
                (this.tail = t),
                ++this.length;
            }),
            (e.prototype.unshift = function(e) {
              var t = {data: e, next: this.head};
              0 === this.length && (this.tail = t), (this.head = t), ++this.length;
            }),
            (e.prototype.shift = function() {
              if (0 !== this.length) {
                var e = this.head.data;
                return (
                  1 === this.length
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  e
                );
              }
            }),
            (e.prototype.clear = function() {
              (this.head = this.tail = null), (this.length = 0);
            }),
            (e.prototype.join = function(e) {
              if (0 === this.length) return '';
              for (var t = this.head, n = '' + t.data; (t = t.next); ) n += e + t.data;
              return n;
            }),
            (e.prototype.concat = function(e) {
              if (0 === this.length) return r.alloc(0);
              if (1 === this.length) return this.head.data;
              for (var t, n, i = r.allocUnsafe(e >>> 0), o = this.head, a = 0; o; )
                (t = i), (n = a), o.data.copy(t, n), (a += o.data.length), (o = o.next);
              return i;
            }),
            e
          );
        })();
      },
      function(e, t, n) {
        (function(e) {
          var r = (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
            i = Function.prototype.apply;
          function o(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          (t.setTimeout = function() {
            return new o(i.call(setTimeout, r, arguments), clearTimeout);
          }),
            (t.setInterval = function() {
              return new o(i.call(setInterval, r, arguments), clearInterval);
            }),
            (t.clearTimeout = t.clearInterval = function(e) {
              e && e.close();
            }),
            (o.prototype.unref = o.prototype.ref = function() {}),
            (o.prototype.close = function() {
              this._clearFn.call(r, this._id);
            }),
            (t.enroll = function(e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (t.unenroll = function(e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (t._unrefActive = t.active = function(e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function() {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
            n(68),
            (t.setImmediate =
              ('undefined' != typeof self && self.setImmediate) ||
              (void 0 !== e && e.setImmediate) ||
              (this && this.setImmediate)),
            (t.clearImmediate =
              ('undefined' != typeof self && self.clearImmediate) ||
              (void 0 !== e && e.clearImmediate) ||
              (this && this.clearImmediate));
        }.call(this, n(2)));
      },
      function(e, t, n) {
        (function(e, t) {
          !(function(e, n) {
            'use strict';
            if (!e.setImmediate) {
              var r,
                i,
                o,
                a,
                s,
                u = 1,
                l = {},
                f = !1,
                c = e.document,
                h = Object.getPrototypeOf && Object.getPrototypeOf(e);
              (h = h && h.setTimeout ? h : e),
                '[object process]' === {}.toString.call(e.process)
                  ? (r = function(e) {
                      t.nextTick(function() {
                        p(e);
                      });
                    })
                  : (function() {
                      if (e.postMessage && !e.importScripts) {
                        var t = !0,
                          n = e.onmessage;
                        return (
                          (e.onmessage = function() {
                            t = !1;
                          }),
                          e.postMessage('', '*'),
                          (e.onmessage = n),
                          t
                        );
                      }
                    })()
                    ? ((a = 'setImmediate$' + Math.random() + '$'),
                      (s = function(t) {
                        t.source === e &&
                          'string' == typeof t.data &&
                          0 === t.data.indexOf(a) &&
                          p(+t.data.slice(a.length));
                      }),
                      e.addEventListener
                        ? e.addEventListener('message', s, !1)
                        : e.attachEvent('onmessage', s),
                      (r = function(t) {
                        e.postMessage(a + t, '*');
                      }))
                    : e.MessageChannel
                      ? (((o = new MessageChannel()).port1.onmessage = function(e) {
                          p(e.data);
                        }),
                        (r = function(e) {
                          o.port2.postMessage(e);
                        }))
                      : c && 'onreadystatechange' in c.createElement('script')
                        ? ((i = c.documentElement),
                          (r = function(e) {
                            var t = c.createElement('script');
                            (t.onreadystatechange = function() {
                              p(e),
                                (t.onreadystatechange = null),
                                i.removeChild(t),
                                (t = null);
                            }),
                              i.appendChild(t);
                          }))
                        : (r = function(e) {
                            setTimeout(p, 0, e);
                          }),
                (h.setImmediate = function(e) {
                  'function' != typeof e && (e = new Function('' + e));
                  for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                    t[n] = arguments[n + 1];
                  var i = {callback: e, args: t};
                  return (l[u] = i), r(u), u++;
                }),
                (h.clearImmediate = d);
            }
            function d(e) {
              delete l[e];
            }
            function p(e) {
              if (f) setTimeout(p, 0, e);
              else {
                var t = l[e];
                if (t) {
                  f = !0;
                  try {
                    !(function(e) {
                      var t = e.callback,
                        r = e.args;
                      switch (r.length) {
                        case 0:
                          t();
                          break;
                        case 1:
                          t(r[0]);
                          break;
                        case 2:
                          t(r[0], r[1]);
                          break;
                        case 3:
                          t(r[0], r[1], r[2]);
                          break;
                        default:
                          t.apply(n, r);
                      }
                    })(t);
                  } finally {
                    d(e), (f = !1);
                  }
                }
              }
            }
          })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
        }.call(this, n(2), n(10)));
      },
      function(e, t, n) {
        (function(t) {
          function n(e) {
            try {
              if (!t.localStorage) return !1;
            } catch (e) {
              return !1;
            }
            var n = t.localStorage[e];
            return null != n && 'true' === String(n).toLowerCase();
          }
          e.exports = function(e, t) {
            if (n('noDeprecation')) return e;
            var r = !1;
            return function() {
              if (!r) {
                if (n('throwDeprecation')) throw new Error(t);
                n('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0);
              }
              return e.apply(this, arguments);
            };
          };
        }.call(this, n(2)));
      },
      function(e, t, n) {
        'use strict';
        e.exports = o;
        var r = n(36),
          i = n(6);
        function o(e) {
          if (!(this instanceof o)) return new o(e);
          r.call(this, e);
        }
        (i.inherits = n(5)),
          i.inherits(o, r),
          (o.prototype._transform = function(e, t, n) {
            n(null, e);
          });
      },
      function(e, t, n) {
        e.exports = n(21);
      },
      function(e, t, n) {
        e.exports = n(3);
      },
      function(e, t, n) {
        e.exports = n(20).Transform;
      },
      function(e, t, n) {
        e.exports = n(20).PassThrough;
      },
      function(e, t, n) {
        var r = n(76);
        e.exports = function(e) {
          return null != e && e.length ? r(e, 1) : [];
        };
      },
      function(e, t, n) {
        var r = n(37),
          i = n(77);
        e.exports = function e(t, n, o, a, s) {
          var u = -1,
            l = t.length;
          for (o || (o = i), s || (s = []); ++u < l; ) {
            var f = t[u];
            n > 0 && o(f)
              ? n > 1 ? e(f, n - 1, o, a, s) : r(s, f)
              : a || (s[s.length] = f);
          }
          return s;
        };
      },
      function(e, t, n) {
        var r = n(7),
          i = n(22),
          o = n(0),
          a = r ? r.isConcatSpreadable : void 0;
        e.exports = function(e) {
          return o(e) || i(e) || !!(a && e && e[a]);
        };
      },
      function(e, t, n) {
        var r = n(8),
          i = n(9);
        e.exports = function(e) {
          return i(e) && '[object Arguments]' == r(e);
        };
      },
      function(e, t, n) {
        var r = n(7),
          i = Object.prototype,
          o = i.hasOwnProperty,
          a = i.toString,
          s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
          var t = o.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var r = !0;
          } catch (e) {}
          var i = a.call(e);
          return r && (t ? (e[s] = n) : delete e[s]), i;
        };
      },
      function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
          return n.call(e);
        };
      },
      function(e, t, n) {
        var r = n(82),
          i = n(88),
          o = Object.prototype.hasOwnProperty,
          a = i(function(e, t, n) {
            o.call(e, n) ? e[n].push(t) : r(e, n, [t]);
          });
        e.exports = a;
      },
      function(e, t, n) {
        var r = n(83);
        e.exports = function(e, t, n) {
          '__proto__' == t && r
            ? r(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0})
            : (e[t] = n);
        };
      },
      function(e, t, n) {
        var r = n(4),
          i = (function() {
            try {
              var e = r(Object, 'defineProperty');
              return e({}, '', {}), e;
            } catch (e) {}
          })();
        e.exports = i;
      },
      function(e, t, n) {
        var r = n(39),
          i = n(85),
          o = n(23),
          a = n(40),
          s = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          l = Object.prototype,
          f = u.toString,
          c = l.hasOwnProperty,
          h = RegExp(
            '^' +
              f
                .call(c)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
        e.exports = function(e) {
          return !(!o(e) || i(e)) && (r(e) ? h : s).test(a(e));
        };
      },
      function(e, t, n) {
        var r,
          i = n(86),
          o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + r
            : '';
        e.exports = function(e) {
          return !!o && o in e;
        };
      },
      function(e, t, n) {
        var r = n(1)['__core-js_shared__'];
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      function(e, t, n) {
        var r = n(89),
          i = n(90),
          o = n(106),
          a = n(0);
        e.exports = function(e, t) {
          return function(n, s) {
            var u = a(n) ? r : i,
              l = t ? t() : {};
            return u(n, e, o(s, 2), l);
          };
        };
      },
      function(e, t) {
        e.exports = function(e, t, n, r) {
          for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
            var a = e[i];
            t(r, a, n(a), e);
          }
          return r;
        };
      },
      function(e, t, n) {
        var r = n(91);
        e.exports = function(e, t, n, i) {
          return (
            r(e, function(e, r, o) {
              t(i, e, n(e), o);
            }),
            i
          );
        };
      },
      function(e, t, n) {
        var r = n(92),
          i = n(105)(r);
        e.exports = i;
      },
      function(e, t, n) {
        var r = n(93),
          i = n(24);
        e.exports = function(e, t) {
          return e && r(e, t, i);
        };
      },
      function(e, t, n) {
        var r = n(94)();
        e.exports = r;
      },
      function(e, t) {
        e.exports = function(e) {
          return function(t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
              var u = a[e ? s : ++i];
              if (!1 === n(o[u], u, o)) break;
            }
            return t;
          };
        };
      },
      function(e, t, n) {
        var r = n(96),
          i = n(22),
          o = n(0),
          a = n(41),
          s = n(43),
          u = n(44),
          l = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
          var n = o(e),
            f = !n && i(e),
            c = !n && !f && a(e),
            h = !n && !f && !c && u(e),
            d = n || f || c || h,
            p = d ? r(e.length, String) : [],
            y = p.length;
          for (var g in e)
            (!t && !l.call(e, g)) ||
              (d &&
                ('length' == g ||
                  (c && ('offset' == g || 'parent' == g)) ||
                  (h && ('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
                  s(g, y))) ||
              p.push(g);
          return p;
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
        var r = n(8),
          i = n(25),
          o = n(9),
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
            return o(e) && i(e.length) && !!a[r(e)];
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
          var r = n(38),
            i = 'object' == typeof t && t && !t.nodeType && t,
            o = i && 'object' == typeof e && e && !e.nodeType && e,
            a = o && o.exports === i && r.process,
            s = (function() {
              try {
                return a && a.binding && a.binding('util');
              } catch (e) {}
            })();
          e.exports = s;
        }.call(this, n(42)(e)));
      },
      function(e, t, n) {
        var r = n(102),
          i = n(103),
          o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          if (!r(e)) return i(e);
          var t = [];
          for (var n in Object(e)) o.call(e, n) && 'constructor' != n && t.push(n);
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
        var r = n(104)(Object.keys, Object);
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
        var r = n(45);
        e.exports = function(e, t) {
          return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return e(n, i);
            for (
              var o = n.length, a = t ? o : -1, s = Object(n);
              (t ? a-- : ++a < o) && !1 !== i(s[a], a, s);

            );
            return n;
          };
        };
      },
      function(e, t, n) {
        var r = n(107),
          i = n(153),
          o = n(164),
          a = n(0),
          s = n(165);
        e.exports = function(e) {
          return 'function' == typeof e
            ? e
            : null == e ? o : 'object' == typeof e ? (a(e) ? i(e[0], e[1]) : r(e)) : s(e);
        };
      },
      function(e, t, n) {
        var r = n(108),
          i = n(152),
          o = n(51);
        e.exports = function(e) {
          var t = i(e);
          return 1 == t.length && t[0][2]
            ? o(t[0][0], t[0][1])
            : function(n) {
                return n === e || r(n, e, t);
              };
        };
      },
      function(e, t, n) {
        var r = n(46),
          i = n(48);
        e.exports = function(e, t, n, o) {
          var a = n.length,
            s = a,
            u = !o;
          if (null == e) return !s;
          for (e = Object(e); a--; ) {
            var l = n[a];
            if (u && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
          }
          for (; ++a < s; ) {
            var f = (l = n[a])[0],
              c = e[f],
              h = l[1];
            if (u && l[2]) {
              if (void 0 === c && !(f in e)) return !1;
            } else {
              var d = new r();
              if (o) var p = o(c, h, f, e, t, d);
              if (!(void 0 === p ? i(h, c, 3, o, d) : p)) return !1;
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
        var r = n(14),
          i = Array.prototype.splice;
        e.exports = function(e) {
          var t = this.__data__,
            n = r(t, e);
          return !(
            n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0)
          );
        };
      },
      function(e, t, n) {
        var r = n(14);
        e.exports = function(e) {
          var t = this.__data__,
            n = r(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      function(e, t, n) {
        var r = n(14);
        e.exports = function(e) {
          return r(this.__data__, e) > -1;
        };
      },
      function(e, t, n) {
        var r = n(14);
        e.exports = function(e, t) {
          var n = this.__data__,
            i = r(n, e);
          return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
        };
      },
      function(e, t, n) {
        var r = n(13);
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
        var r = n(13),
          i = n(26),
          o = n(27);
        e.exports = function(e, t) {
          var n = this.__data__;
          if (n instanceof r) {
            var a = n.__data__;
            if (!i || a.length < 199) return a.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new o(a);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      },
      function(e, t, n) {
        var r = n(120),
          i = n(13),
          o = n(26);
        e.exports = function() {
          (this.size = 0),
            (this.__data__ = {hash: new r(), map: new (o || i)(), string: new r()});
        };
      },
      function(e, t, n) {
        var r = n(121),
          i = n(122),
          o = n(123),
          a = n(124),
          s = n(125);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      function(e, t, n) {
        var r = n(15);
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
        var r = n(15),
          i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          var t = this.__data__;
          if (r) {
            var n = t[e];
            return '__lodash_hash_undefined__' === n ? void 0 : n;
          }
          return i.call(t, e) ? t[e] : void 0;
        };
      },
      function(e, t, n) {
        var r = n(15),
          i = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : i.call(t, e);
        };
      },
      function(e, t, n) {
        var r = n(15);
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
        var r = n(16);
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
        var r = n(16);
        e.exports = function(e) {
          return r(this, e).get(e);
        };
      },
      function(e, t, n) {
        var r = n(16);
        e.exports = function(e) {
          return r(this, e).has(e);
        };
      },
      function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t) {
          var n = r(this, e),
            i = n.size;
          return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
        };
      },
      function(e, t, n) {
        var r = n(46),
          i = n(49),
          o = n(137),
          a = n(141),
          s = n(147),
          u = n(0),
          l = n(41),
          f = n(44),
          c = '[object Arguments]',
          h = '[object Array]',
          d = '[object Object]',
          p = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, y, g, m) {
          var v = u(e),
            b = u(t),
            _ = v ? h : s(e),
            w = b ? h : s(t),
            x = (_ = _ == c ? d : _) == d,
            A = (w = w == c ? d : w) == d,
            E = _ == w;
          if (E && l(e)) {
            if (!l(t)) return !1;
            (v = !0), (x = !1);
          }
          if (E && !x)
            return (
              m || (m = new r()), v || f(e) ? i(e, t, n, y, g, m) : o(e, t, _, n, y, g, m)
            );
          if (!(1 & n)) {
            var k = x && p.call(e, '__wrapped__'),
              C = A && p.call(t, '__wrapped__');
            if (k || C) {
              var S = k ? e.value() : e,
                T = C ? t.value() : t;
              return m || (m = new r()), g(S, T, n, y, m);
            }
          }
          return !!E && (m || (m = new r()), a(e, t, n, y, g, m));
        };
      },
      function(e, t, n) {
        var r = n(27),
          i = n(133),
          o = n(134);
        function a(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
        }
        (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (e.exports = a);
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
        var r = n(7),
          i = n(138),
          o = n(47),
          a = n(49),
          s = n(139),
          u = n(140),
          l = r ? r.prototype : void 0,
          f = l ? l.valueOf : void 0;
        e.exports = function(e, t, n, r, l, c, h) {
          switch (n) {
            case '[object DataView]':
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              (e = e.buffer), (t = t.buffer);
            case '[object ArrayBuffer]':
              return !(e.byteLength != t.byteLength || !c(new i(e), new i(t)));
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return o(+e, +t);
            case '[object Error]':
              return e.name == t.name && e.message == t.message;
            case '[object RegExp]':
            case '[object String]':
              return e == t + '';
            case '[object Map]':
              var d = s;
            case '[object Set]':
              var p = 1 & r;
              if ((d || (d = u), e.size != t.size && !p)) return !1;
              var y = h.get(e);
              if (y) return y == t;
              (r |= 2), h.set(e, t);
              var g = a(d(e), d(t), r, l, c, h);
              return h.delete(e), g;
            case '[object Symbol]':
              if (f) return f.call(e) == f.call(t);
          }
          return !1;
        };
      },
      function(e, t, n) {
        var r = n(1).Uint8Array;
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
        var r = n(142),
          i = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, n, o, a, s) {
          var u = 1 & n,
            l = r(e),
            f = l.length;
          if (f != r(t).length && !u) return !1;
          for (var c = f; c--; ) {
            var h = l[c];
            if (!(u ? h in t : i.call(t, h))) return !1;
          }
          var d = s.get(e);
          if (d && s.get(t)) return d == t;
          var p = !0;
          s.set(e, t), s.set(t, e);
          for (var y = u; ++c < f; ) {
            var g = e[(h = l[c])],
              m = t[h];
            if (o) var v = u ? o(m, g, h, t, e, s) : o(g, m, h, e, t, s);
            if (!(void 0 === v ? g === m || a(g, m, n, o, s) : v)) {
              p = !1;
              break;
            }
            y || (y = 'constructor' == h);
          }
          if (p && !y) {
            var b = e.constructor,
              _ = t.constructor;
            b != _ &&
              'constructor' in e &&
              'constructor' in t &&
              !(
                'function' == typeof b &&
                b instanceof b &&
                'function' == typeof _ &&
                _ instanceof _
              ) &&
              (p = !1);
          }
          return s.delete(e), s.delete(t), p;
        };
      },
      function(e, t, n) {
        var r = n(143),
          i = n(144),
          o = n(24);
        e.exports = function(e) {
          return r(e, o, i);
        };
      },
      function(e, t, n) {
        var r = n(37),
          i = n(0);
        e.exports = function(e, t, n) {
          var o = t(e);
          return i(e) ? o : r(o, n(e));
        };
      },
      function(e, t, n) {
        var r = n(145),
          i = n(146),
          o = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          s = a
            ? function(e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(a(e), function(t) {
                      return o.call(e, t);
                    }));
              }
            : i;
        e.exports = s;
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a);
          }
          return o;
        };
      },
      function(e, t) {
        e.exports = function() {
          return [];
        };
      },
      function(e, t, n) {
        var r = n(148),
          i = n(26),
          o = n(149),
          a = n(150),
          s = n(151),
          u = n(8),
          l = n(40),
          f = l(r),
          c = l(i),
          h = l(o),
          d = l(a),
          p = l(s),
          y = u;
        ((r && '[object DataView]' != y(new r(new ArrayBuffer(1)))) ||
          (i && '[object Map]' != y(new i())) ||
          (o && '[object Promise]' != y(o.resolve())) ||
          (a && '[object Set]' != y(new a())) ||
          (s && '[object WeakMap]' != y(new s()))) &&
          (y = function(e) {
            var t = u(e),
              n = '[object Object]' == t ? e.constructor : void 0,
              r = n ? l(n) : '';
            if (r)
              switch (r) {
                case f:
                  return '[object DataView]';
                case c:
                  return '[object Map]';
                case h:
                  return '[object Promise]';
                case d:
                  return '[object Set]';
                case p:
                  return '[object WeakMap]';
              }
            return t;
          }),
          (e.exports = y);
      },
      function(e, t, n) {
        var r = n(4)(n(1), 'DataView');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(4)(n(1), 'Promise');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(4)(n(1), 'Set');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(4)(n(1), 'WeakMap');
        e.exports = r;
      },
      function(e, t, n) {
        var r = n(50),
          i = n(24);
        e.exports = function(e) {
          for (var t = i(e), n = t.length; n--; ) {
            var o = t[n],
              a = e[o];
            t[n] = [o, a, r(a)];
          }
          return t;
        };
      },
      function(e, t, n) {
        var r = n(48),
          i = n(154),
          o = n(161),
          a = n(28),
          s = n(50),
          u = n(51),
          l = n(17);
        e.exports = function(e, t) {
          return a(e) && s(t)
            ? u(l(e), t)
            : function(n) {
                var a = i(n, e);
                return void 0 === a && a === t ? o(n, e) : r(t, a, 3);
              };
        };
      },
      function(e, t, n) {
        var r = n(52);
        e.exports = function(e, t, n) {
          var i = null == e ? void 0 : r(e, t);
          return void 0 === i ? n : i;
        };
      },
      function(e, t, n) {
        var r = /^\./,
          i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = n(156)(function(e) {
            var t = [];
            return (
              r.test(e) && t.push(''),
              e.replace(i, function(e, n, r, i) {
                t.push(r ? i.replace(o, '$1') : n || e);
              }),
              t
            );
          });
        e.exports = a;
      },
      function(e, t, n) {
        var r = n(157);
        e.exports = function(e) {
          var t = r(e, function(e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        };
      },
      function(e, t, n) {
        var r = n(27),
          i = 'Expected a function';
        function o(e, t) {
          if ('function' != typeof e || (null != t && 'function' != typeof t))
            throw new TypeError(i);
          var n = function() {
            var r = arguments,
              i = t ? t.apply(this, r) : r[0],
              o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = e.apply(this, r);
            return (n.cache = o.set(i, a) || o), a;
          };
          return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (e.exports = o);
      },
      function(e, t, n) {
        var r = n(159);
        e.exports = function(e) {
          return null == e ? '' : r(e);
        };
      },
      function(e, t, n) {
        var r = n(7),
          i = n(160),
          o = n(0),
          a = n(29),
          s = r ? r.prototype : void 0,
          u = s ? s.toString : void 0;
        e.exports = function e(t) {
          if ('string' == typeof t) return t;
          if (o(t)) return i(t, e) + '';
          if (a(t)) return u ? u.call(t) : '';
          var n = t + '';
          return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
            i[n] = t(e[n], n, e);
          return i;
        };
      },
      function(e, t, n) {
        var r = n(162),
          i = n(163);
        e.exports = function(e, t) {
          return null != e && i(e, t, r);
        };
      },
      function(e, t) {
        e.exports = function(e, t) {
          return null != e && t in Object(e);
        };
      },
      function(e, t, n) {
        var r = n(53),
          i = n(22),
          o = n(0),
          a = n(43),
          s = n(25),
          u = n(17);
        e.exports = function(e, t, n) {
          for (var l = -1, f = (t = r(t, e)).length, c = !1; ++l < f; ) {
            var h = u(t[l]);
            if (!(c = null != e && n(e, h))) break;
            e = e[h];
          }
          return c || ++l != f
            ? c
            : !!(f = null == e ? 0 : e.length) && s(f) && a(h, f) && (o(e) || i(e));
        };
      },
      function(e, t) {
        e.exports = function(e) {
          return e;
        };
      },
      function(e, t, n) {
        var r = n(166),
          i = n(167),
          o = n(28),
          a = n(17);
        e.exports = function(e) {
          return o(e) ? r(a(e)) : i(e);
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
        var r = n(52);
        e.exports = function(e) {
          return function(t) {
            return r(t, e);
          };
        };
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function(e) {
            var t = e.match(r);
            if (t)
              return (
                'from(db:"' +
                (u = t[1]) +
                '")\n    |> range($range)\n    |> group(by:["_measurement"])\n    |> distinct(column:"_measurement")\n    |> group(none:true)'
              );
            var n = e.match(i);
            if (n)
              return (
                'from(db:"' +
                (u = n[1]) +
                '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                (l = n[2]) +
                '")\n    |> keys()'
              );
            var s = e.match(o);
            if (s) {
              var u = s[1],
                l = s[2],
                f = s[3];
              return (
                'from(db:"' +
                u +
                '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                l +
                '")\n    |> group(by:["' +
                f +
                '"])\n    |> distinct(column:"' +
                f +
                '")\n    |> group(none:true)'
              );
            }
            var c = e.match(a);
            return c
              ? 'from(db:"' +
                  (u = c[1]) +
                  '")\n    |> range($range)\n    |> filter(fn:(r) => r._measurement == "' +
                  (l = c[2]) +
                  '")\n    |> group(by:["_field"])\n    |> distinct(column:"_field")\n    |> group(none:true)'
              : e;
          });
        var r = /^\s*measurements\((.+)\)\s*$/,
          i = /^\s*tags\((.+)\s*,\s*(.+)\)\s*$/,
          o = /^\s*tag_values\((.+)\s*,\s*(.+)\s*,\s*(.+)\)\s*$/,
          a = /^\s*field_keys\((.+)\s*,\s*(.+)\)\s*$/;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.InfluxFluxQueryCtrl = void 0);
        var r,
          i = (r = n(170)) && r.__esModule ? r : {default: r},
          o = n(171);
        n(172);
        var a,
          s = ((a =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            a(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
          u = (function(e) {
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
                    'from(db: "' +
                    r.datasource.database +
                    '")\n  |> range($range)\n  |> limit(n:1000)\n'),
                (r.defaultDatabase = r.datasource.database),
                (r.resultFormats = [
                  {text: 'Time series', value: 'time_series'},
                  {text: 'Table', value: 'table'},
                ]),
                i.default.on('ds-request-response', r.onResponseReceived, t),
                r.panelCtrl.events.on('refresh', r.onRefresh, t),
                r.panelCtrl.events.on('data-received', r.onDataReceived, t),
                r
              );
            }
            return (
              s(t, e),
              (t.$inject = ['$scope', '$injector']),
              (t.prototype.getCollapsedText = function() {
                return this.target.query;
              }),
              (t.templateUrl = 'partials/query.editor.html'),
              t
            );
          })(o.QueryCtrl);
        t.InfluxFluxQueryCtrl = u;
      },
      function(e, t) {
        e.exports = i;
      },
      function(e, t) {
        e.exports = o;
      },
      function(e, t, n) {
        'use strict';
        var r = n(18),
          i = u(r),
          o = u(n(173)),
          a = u(n(174)),
          s = u(n(55));
        function u(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var l,
          f = ((l =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            l(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
          c = (function(e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.handleChangeQuery = function(e) {
                  var t = n.props,
                    r = t.index,
                    i = t.change,
                    o = n.state.query !== e;
                  n.setState({edited: o, query: e}), i && i(e, r);
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
              f(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.database,
                  n = e.request,
                  r = this.state,
                  o = r.edited,
                  u = r.query;
                return i.default.createElement(
                  'div',
                  {className: 'gf-form-input'},
                  i.default.createElement(a.default, {
                    defaultDatabase: t,
                    initialQuery: o ? null : u,
                    onPressEnter: this.handlePressEnter,
                    onQueryChange: this.handleChangeQuery,
                    prismLanguage: 'python',
                    prismDefinition: s.default,
                    placeholder: 'Enter a FLUX query',
                    request: n,
                  })
                );
              }),
              t
            );
          })(r.Component);
        o.default.directive('fluxEditor', [
          'reactDirective',
          function(e) {
            return e(c, ['change', 'database', 'execute', 'query', 'request']);
          },
        ]);
      },
      function(e, t) {
        e.exports = a;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = l(n(54)),
          i = n(175),
          o = l(i),
          a = l(n(186)),
          s = n(187),
          u = n(55);
        function l(e) {
          return e && e.__esModule ? e : {default: e};
        }
        n(188);
        var f,
          c = ((f =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            f(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
          h = function(e, t, n, r) {
            return new (n || (n = Promise))(function(i, o) {
              function a(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(a, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
          d = function(e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function() {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {next: s(0), throw: s(1), return: s(2)}),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function s(o) {
              return function(s) {
                return (function(o) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, {value: o[1], done: !1};
                        case 5:
                          a.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = t.call(e, a);
                    } catch (e) {
                      (o = [6, e]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return {value: o[0] ? o[1] : void 0, done: !0};
                })([o, s]);
              };
            }
          },
          p = function(e) {
            return e.replace(/[{}[\]="(),!~+\-*/^%]/g, '').trim();
          },
          y = function(e) {
            return {text: e};
          },
          g = ['1m', '5m', '10m', '30m', '1h'],
          m = 'telegraf',
          v = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.handleTypeahead = (0, a.default)(function() {
                  var e = window.getSelection();
                  if (e.anchorNode) {
                    var n = e.anchorNode.parentElement;
                    if (null === n) return;
                    if (!n.closest('.slate-query-field') || t.state.value.isBlurred)
                      return;
                    var i = e.getRangeAt(0),
                      o = e.anchorNode.textContent;
                    if (null === o) return;
                    var a = i.startOffset,
                      l = p(o.substr(0, a)),
                      f = t.state.value.anchorOffset,
                      c = t.state.value.anchorText.text.slice(0, f),
                      h = [],
                      d = n.classList,
                      v = null,
                      b = t.props.defaultDatabase || m;
                    if (d.contains('context-range'))
                      (v = 'context-range'),
                        h.push({label: 'Range vector', items: g.slice().map(y)});
                    else if (d.contains('short-delimiter') || d.contains('short-field')) {
                      var _ = (0, s.getPreviousCousin)(n, '.short-root'),
                        w = _ && _.textContent.replace('..', ''),
                        x = (0, s.getPreviousCousin)(n, '.short-field'),
                        A = x && x.textContent;
                      if (w && A) {
                        var E = (function(e, t, n) {
                          return n
                            ? 'from(db: "' +
                                e +
                                '")\n  |> filter(fn: (r) => r["_measurement"] == "' +
                                t +
                                '" AND r["_field"] == "' +
                                n +
                                '")\n  |> range($range)\n  |> limit(n: 1000)'
                            : 'from(db: "' +
                                e +
                                '")\n  |> filter(fn: (r) => r["_measurement"] == "' +
                                t +
                                '")\n  |> range($range)\n  |> limit(n: 1000)';
                        })(w, A, (l = l.replace(/\w*\.\./g, '')));
                        h.push({
                          label: 'Expand',
                          items: [{deleteBackwards: f, text: E}],
                          skipFilter: !0,
                        });
                        var k = t.fields && t.fields[w] && t.fields[w][A];
                        if (!k) return void t.fetchFields(w, A);
                        (v = 'context-fields'), h.push({label: 'Fields', items: k});
                      } else if (w) {
                        var C = t.measurements && t.measurements[w];
                        if (!C) return void t.fetchMeasurements(w);
                        (l = l.replace(/\w*\.\./g, '')),
                          (v = 'context-measurements'),
                          h.push({label: 'Measurements', items: C});
                      }
                    } else
                      c.match(/(^\s+$)|(\)\s+$)/)
                        ? ((v = 'context-operator'),
                          h.push({
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
                            ].map(y),
                          }))
                        : l && !d.contains('argument')
                          ? ((v = 'context-builtin'),
                            h.push({
                              prefixMatch: !0,
                              label: 'Functions',
                              items: u.FUNCTIONS,
                            }))
                          : ('' === r.default.serialize(t.state.value) ||
                              o.match(/[+\-*/^%]/)) &&
                            ((v = 'context-new'),
                            h.push({
                              prefixMatch: !0,
                              label: 'Templates',
                              items: ['from(db: "' + b + '") |> range($range) '].map(y),
                            }),
                            h.push({
                              prefixMatch: !0,
                              label: 'Shortcodes',
                              items: [b + '..'].map(y),
                            }));
                    var S = 0,
                      T = h.map(function(e) {
                        return (
                          e.items &&
                            l &&
                            !e.skipFilter &&
                            ((e.items = e.items.filter(function(e) {
                              return e.text.length >= l.length;
                            })),
                            e.prefixMatch
                              ? (e.items = e.items.filter(function(e) {
                                  return 0 === e.text.indexOf(l);
                                }))
                              : (e.items = e.items.filter(function(e) {
                                  return e.text.indexOf(l) > -1;
                                }))),
                          (S += e.items.length),
                          e
                        );
                      });
                    console.log('handleTypeahead', e.anchorNode, d, o, a, l, v),
                      t.setState({
                        typeaheadPrefix: l,
                        typeaheadContext: v,
                        typeaheadText: o,
                        suggestions: S > 0 ? T : [],
                      });
                  }
                }, 500)),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.componentDidMount = function() {
                this.updateMenu();
              }),
              (t.prototype.componentWillReceiveProps = function(e) {
                null !== e.initialQuery &&
                  e.initialQuery !== this.props.initialQuery &&
                  this.setState({value: (0, i.getInitialValue)(e.initialQuery)});
              }),
              (t.prototype.applyTypeahead = function(e, t) {
                var n = this.state,
                  r = n.typeaheadPrefix,
                  o = n.typeaheadContext,
                  a = n.typeaheadText,
                  u = t.display || t.text;
                switch (o) {
                  case 'context-operator':
                    (l = (0, s.getNextCharacter)()) || ' ' === l || (u += ' ');
                    break;
                  case 'context-measurements':
                    var l;
                    (l = (0, s.getNextCharacter)()) || '.' === l || (u += '..');
                }
                this.resetTypeahead();
                var f = t.deleteBackwards || r.length,
                  c = p(a).length - r.length,
                  h = a.indexOf(r),
                  d = r && ((c > 0 && h > -1) || u === a) ? c + h : 0;
                if (u.match(/\n/)) {
                  var y = (0, i.makeFragment)(u);
                  return e
                    .deleteBackward(f)
                    .deleteForward(d)
                    .insertFragment(y)
                    .focus();
                }
                return e
                  .deleteBackward(f)
                  .deleteForward(d)
                  .insertText(u)
                  .move(0)
                  .focus();
              }),
              (t.prototype.fetchFields = function(e, t) {
                return h(this, void 0, void 0, function() {
                  var n, r;
                  return d(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = 'field_keys(' + e + ',' + t + ')'), [4, this.request(n)]
                        );
                      case 1:
                        return (
                          (r = i.sent()),
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
                return h(this, void 0, void 0, function() {
                  var t, n;
                  return d(this, function(r) {
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
          })(o.default);
        t.default = v;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.getInitialValue = t.makeFragment = t.TYPEAHEAD_DEBOUNCE = void 0);
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          i = g(n(18)),
          o = g(n(176)),
          a = n(177),
          s = n(178),
          u = g(n(54)),
          l = g(n(179)),
          f = g(n(180)),
          c = g(n(181)),
          h = n(182),
          d = g(h),
          p = g(n(184)),
          y = g(n(185));
        function g(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var m,
          v = ((m =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            m(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          });
        function b(e) {
          return e
            ? e.reduce(function(e, t) {
                return e.concat(t.items);
              }, [])
            : [];
        }
        t.TYPEAHEAD_DEBOUNCE = 300;
        var _ = (t.makeFragment = function(e) {
            var t = e.split('\n').map(function(e) {
              return a.Block.create({type: 'paragraph', nodes: [a.Text.create(e)]});
            });
            return a.Document.create({nodes: t});
          }),
          w = (t.getInitialValue = function(e) {
            return a.Value.create({document: _(e)});
          }),
          x = (function(e) {
            function t(t) {
              var n = e.call(this, t) || this,
                r = t.index,
                i = void 0 === r ? 0 : r,
                o = t.prefix,
                a = void 0 === o ? 'query' : o;
              return (
                (n.node = document.createElement('div')),
                n.node.classList.add('slate-typeahead', 'slate-typeahead-' + a + '-' + i),
                document.body.appendChild(n.node),
                n
              );
            }
            return (
              v(t, e),
              (t.prototype.componentWillUnmount = function() {
                document.body.removeChild(this.node);
              }),
              (t.prototype.render = function() {
                return o.default.createPortal(this.props.children, this.node);
              }),
              t
            );
          })(i.default.Component),
          A = (function(e) {
            function t(t, n) {
              var o = e.call(this, t, n) || this;
              (o.onChange = function(e) {
                var t = e.value,
                  n = t.document !== o.state.value.document;
                o.setState({value: t}, function() {
                  n && o.handleChangeQuery();
                }),
                  window.requestAnimationFrame(o.handleTypeahead);
              }),
                (o.onMetricsReceived = function() {
                  o.state.metrics &&
                    ((0, h.setPrismTokens)(o.props.language, 'metrics', o.state.metrics),
                    window.requestAnimationFrame(function() {
                      var e = o.state.value
                        .change()
                        .insertText(' ')
                        .deleteBackward(1);
                      o.onChange(e);
                    }));
                }),
                (o.request = function(e) {
                  return o.props.request ? o.props.request(e) : fetch(e);
                }),
                (o.handleChangeQuery = function() {
                  var e = o.props.onQueryChange;
                  e && e(u.default.serialize(o.state.value));
                }),
                (o.onKeyDown = function(e, t) {
                  var n = o.state,
                    r = n.typeaheadIndex,
                    i = n.suggestions;
                  switch (e.key) {
                    case 'Escape':
                      if (o.menuEl)
                        return (
                          e.preventDefault(), e.stopPropagation(), o.resetTypeahead(), !0
                        );
                      break;
                    case ' ':
                      if (e.ctrlKey) return e.preventDefault(), o.handleTypeahead(), !0;
                      break;
                    case 'Tab':
                      if (o.menuEl) {
                        if ((e.preventDefault(), !i || 0 === i.length)) return;
                        var a = b(i),
                          s = a[Math.abs(r) % a.length || 0];
                        return o.applyTypeahead(t, s), !0;
                      }
                      break;
                    case 'ArrowDown':
                      o.menuEl &&
                        (e.preventDefault(), o.setState({typeaheadIndex: r + 1}));
                      break;
                    case 'ArrowUp':
                      o.menuEl &&
                        (e.preventDefault(),
                        o.setState({typeaheadIndex: Math.max(0, r - 1)}));
                  }
                }),
                (o.handleTypeahead = function(e, t) {
                  return e || o.state.value.change();
                }),
                (o.resetTypeahead = function() {
                  o.setState({
                    suggestions: [],
                    typeaheadIndex: 0,
                    typeaheadPrefix: '',
                    typeaheadContext: null,
                  });
                }),
                (o.handleBlur = function() {
                  var e = o.props.onBlur;
                  (o.resetTimer = setTimeout(o.resetTypeahead, 100)), e && e();
                }),
                (o.handleFocus = function() {
                  var e = o.props.onFocus;
                  e && e();
                }),
                (o.handleClickMenu = function(e) {
                  var t = o.applyTypeahead(o.state.value.change(), e);
                  o.onChange(t);
                }),
                (o.updateMenu = function() {
                  var e = o.state.suggestions,
                    t = o.menuEl,
                    n = window.getSelection().anchorNode;
                  if (t)
                    if (e && e.length > 0) {
                      if (n && n.parentElement) {
                        var r = n.parentElement.getBoundingClientRect(),
                          i = window.scrollX,
                          a = window.scrollY;
                        requestAnimationFrame(function() {
                          (t.style.opacity = 1),
                            (t.style.top = r.top + a + r.height + 4 + 'px'),
                            (t.style.left = r.left + i - 2 + 'px');
                        });
                      }
                    } else t.removeAttribute('style');
                }),
                (o.menuRef = function(e) {
                  o.menuEl = e;
                }),
                (o.renderMenu = function() {
                  var e = o.props.portalPrefix,
                    t = o.state.suggestions;
                  if (!(t && t.length > 0)) return null;
                  var n = Math.max(o.state.typeaheadIndex, 0),
                    a = b(t);
                  n = n % a.length || 0;
                  var s = (a.length > 0 ? [a[n]] : []).map(function(e) {
                    return 'object' === (void 0 === e ? 'undefined' : r(e)) ? e.text : e;
                  });
                  return i.default.createElement(
                    x,
                    {prefix: e},
                    i.default.createElement(y.default, {
                      menuRef: o.menuRef,
                      selectedItems: s,
                      onClickItem: o.handleClickMenu,
                      groupedItems: t,
                    })
                  );
                });
              var a = t.prismDefinition,
                s = void 0 === a ? {} : a,
                g = t.prismLanguage,
                m = void 0 === g ? 'promql' : g;
              return (
                (o.plugins = [
                  (0, l.default)(),
                  (0, f.default)(),
                  (0, p.default)({handler: t.onPressEnter}),
                  (0, c.default)(),
                  (0, d.default)({definition: s, language: m}),
                ]),
                (o.state = {
                  labelKeys: {},
                  labelValues: {},
                  metrics: t.metrics || [],
                  suggestions: [],
                  typeaheadIndex: 0,
                  typeaheadPrefix: '',
                  value: w(t.initialQuery || ''),
                }),
                o
              );
            }
            return (
              v(t, e),
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
                    this.setState({value: w(e.initialQuery)});
              }),
              (t.prototype.applyTypeahead = function(e, t) {
                return {value: {}};
              }),
              (t.prototype.render = function() {
                return i.default.createElement(
                  'div',
                  {className: 'slate-query-field'},
                  this.renderMenu(),
                  i.default.createElement(s.Editor, {
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
          })(i.default.Component);
        t.default = A;
      },
      function(e, t) {
        e.exports = s;
      },
      function(e, t) {
        e.exports = u;
      },
      function(e, t) {
        e.exports = l;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function() {
            return {
              onKeyDown: function(e, t) {
                var n = t.value;
                if (n.isCollapsed)
                  switch (e.key) {
                    case '{':
                    case '[':
                      return (
                        e.preventDefault(),
                        t
                          .insertText('' + e.key + r[e.key])
                          .move(-1)
                          .focus(),
                        !0
                      );
                    case '(':
                      e.preventDefault();
                      var i = n.anchorText.text,
                        o = n.anchorOffset,
                        a = i.indexOf(' ', o),
                        s = (a > 0 ? a : i.length) - o;
                      return (
                        t
                          .insertText(e.key)
                          .move(s)
                          .insertText(r[e.key])
                          .move(-1 - s)
                          .focus(),
                        !0
                      );
                  }
              },
            };
          });
        var r = {'[': ']', '{': '}', '(': ')'};
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function() {
            return {
              onKeyDown: function(e, t) {
                var n = t.value;
                if (n.isCollapsed && 'k' === e.key && e.ctrlKey) {
                  e.preventDefault();
                  var r = n.anchorText.text,
                    i = n.anchorOffset,
                    o = r.length - i;
                  return t.deleteForward(o), !0;
                }
              },
            };
          });
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function() {
            return {
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
            };
          });
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.setPrismTokens = function(e, t, n, r) {
            void 0 === r && (r = 'variable'),
              (i.default.languages[e][t] = {
                alias: r,
                pattern: new RegExp('(?:^|\\s)(' + n.join('|') + ')(?:$|\\s)'),
              });
          }),
          (t.default = function(e) {
            var t = e.definition,
              n = e.language;
            return (
              t && (i.default.languages[n] = i.default.languages[n] || t),
              {
                renderMark: function(e) {
                  var t = e.children,
                    n = e.mark;
                  if (n.type === a) {
                    var i = 'token ' + n.data.get('types');
                    return r.default.createElement('span', {className: i}, t);
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
                    o = i.default.languages[n],
                    s = i.default.tokenize(r, o),
                    u = [],
                    l = t.shift(),
                    f = l,
                    c = 0,
                    h = 0,
                    d = 0;
                  function p(e, n) {
                    var r = (n || '') + ' ' + (e.type || '') + ' ' + (e.alias || '');
                    if ('string' == typeof e || 'string' == typeof e.content) {
                      (l = f), (c = h);
                      var i = 'string' == typeof e ? e : e.content,
                        o = i.split('\n').length - 1,
                        s = i.length - o,
                        y = d + s,
                        g = l.text.length - c,
                        m = s;
                      for (h = c + m; g < m; )
                        (m = s - g), (g = (f = t.shift()).text.length), (h = m);
                      if ('string' != typeof e || n) {
                        var v = {
                          anchorKey: l.key,
                          anchorOffset: c,
                          focusKey: f.key,
                          focusOffset: h,
                          marks: [{type: a, data: {types: r}}],
                        };
                        u.push(v);
                      }
                      d = y;
                    } else if (e.content && e.content.length)
                      for (var b = 0, _ = e.content; b < _.length; b++) {
                        p(_[b], r);
                      }
                  }
                  for (var y = 0, g = s; y < g.length; y++) {
                    p(g[y]);
                  }
                  return u;
                },
              }
            );
          });
        var r = o(n(18)),
          i = o(n(183));
        function o(e) {
          return e && e.__esModule ? e : {default: e};
        }
        var a = 'prism-token';
      },
      function(e, t) {
        e.exports = f;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function(e) {
            var t = e.handler;
            return {
              onKeyDown: function(e) {
                if (t && 'Enter' === e.key && !e.shiftKey)
                  return e.preventDefault(), t(e), !0;
              },
            };
          });
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r,
          i,
          o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          a = (r = n(18)) && r.__esModule ? r : {default: r},
          s = ((i =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
          u =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            },
          l = (function(e) {
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
              s(t, e),
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
                  i = e.onClickItem,
                  o = n ? 'typeahead-item typeahead-item__selected' : 'typeahead-item';
                return a.default.createElement(
                  'li',
                  {
                    ref: this.getRef,
                    className: o,
                    onClick: function() {
                      return i(r);
                    },
                  },
                  r,
                  t && n
                    ? a.default.createElement(
                        'div',
                        {className: 'typeahead-item-hint'},
                        t
                      )
                    : null
                );
              }),
              t
            );
          })(a.default.PureComponent),
          f = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              s(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.items,
                  n = e.label,
                  r = e.selected,
                  i = e.onClickItem;
                return a.default.createElement(
                  'li',
                  {className: 'typeahead-group'},
                  a.default.createElement(
                    'div',
                    {className: 'typeahead-group__title'},
                    n
                  ),
                  a.default.createElement(
                    'ul',
                    {className: 'typeahead-group__list'},
                    t.map(function(e) {
                      var t =
                          'object' === (void 0 === e ? 'undefined' : o(e)) ? e.text : e,
                        n =
                          'object' === (void 0 === e ? 'undefined' : o(e))
                            ? e.display || e.text
                            : e;
                      return a.default.createElement(l, {
                        key: t,
                        onClickItem: i,
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
          })(a.default.PureComponent),
          c = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              s(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.groupedItems,
                  n = e.menuRef,
                  r = e.selectedItems,
                  i = e.onClickItem;
                return a.default.createElement(
                  'ul',
                  {className: 'typeahead', ref: n},
                  t.map(function(e) {
                    return a.default.createElement(
                      f,
                      u({key: e.label, onClickItem: i, selected: r}, e)
                    );
                  })
                );
              }),
              t
            );
          })(a.default.PureComponent);
        t.default = c;
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.default = function(e, t) {
            var n;
            return function() {
              var r = this,
                i = arguments;
              clearTimeout(n),
                (n = setTimeout(function() {
                  (n = null), e.apply(r, i);
                }, t));
            };
          });
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
          (t.getPreviousCousin = function(e, t) {
            for (var n, r = e.parentElement.previousSibling; r; ) {
              if ((n = r.querySelector(t))) return n;
              r = r.previousSibling;
            }
          }),
          (t.getNextCharacter = function(e) {
            void 0 === e && (e = window);
            var t = e.getSelection();
            if (!t.anchorNode) return null;
            var n = t.getRangeAt(0),
              r = t.anchorNode.textContent;
            if (null === r) return null;
            var i = n.startOffset;
            return r.substr(i, 1);
          }),
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
      },
      function(e, t, n) {
        var r = n(189);
        'string' == typeof r && (r = [[e.i, r, '']]);
        n(191)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
          r.locals && (e.exports = r.locals);
      },
      function(e, t, n) {
        (e.exports = n(190)(!0)).push([
          e.i,
          '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
          '',
          {
            version: 3,
            sources: [
              '/Users/david/go/src/github.com/grafana/grafana/data/plugins/flux-datasource/src/styles.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,gBAAgB;EAChB,+DAA+D;EAC/D,aAAa,EAAE;;AAEjB;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,mBAAmB;EACnB,qBAAqB,EAAE;;AAEzB;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,kCAAkC;EAClC,iCAAiC,EAAE;;AAErC;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB,EAAE;;AAEtB;EACE,aAAa;EACb,+DAA+D;EAC/D,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,8NAA8N,EAAE;;AAElO;EACE,0BAA0B;EAC1B,eAAe,EAAE;EACjB;IACE,gBAAgB;IAChB,eAAe,EAAE;;AAErB,YAAY;AACZ;;;;;EAKE,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE;;AAEnB;;;;;;;;EAQE,eAAe,EAAE;;AAEnB;;;;;;;EAOE,eAAe,EAAE;;AAEnB;;;;EAIE,eAAe,EAAE;;AAEnB;;;;EAIE,eAAe,EAAE;;AAEnB;;EAEE,eAAe,EAAE;;AAEnB;EACE,oBAAoB,EAAE;;AAExB;EACE,kBAAkB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;;AAEvB;EACE,aAAa,EAAE;;AAEjB;EACE,aAAa,EAAE',
            file: 'styles.css',
            sourcesContent: [
              '.slate-query-field {\n  font-size: 14px;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  height: auto; }\n\n.slate-query-field-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 6px 7px 4px;\n  width: 100%;\n  cursor: text;\n  line-height: 1.5;\n  color: #767980;\n  background-color: #fff;\n  background-image: none;\n  border: solid 1px #dde4ed;\n  border-radius: 3px;\n  transition: all 0.3s; }\n\n.slate-typeahead .typeahead {\n  position: absolute;\n  z-index: auto;\n  top: -10000px;\n  left: -10000px;\n  opacity: 0;\n  border-radius: 3px;\n  transition: opacity 0.75s;\n  border: solid 1px #dde4ed;\n  max-height: calc(66vh);\n  overflow-y: scroll;\n  max-width: calc(66%);\n  overflow-x: hidden;\n  outline: none;\n  list-style: none;\n  background: #fff;\n  color: #52545c;\n  transition: opacity 0.4s ease-out;\n  box-shadow: 0 5px 10px 0 #dde4ed; }\n\n.slate-typeahead .typeahead-group__title {\n  color: #767980;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 10px; }\n\n.slate-typeahead .typeahead-item {\n  height: auto;\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n  padding: 8px 10px;\n  padding-left: 20px;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  z-index: 1;\n  display: block;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.slate-typeahead .typeahead-item__selected {\n  background-color: #d7effc;\n  color: #0083b3; }\n  .slate-typeahead .typeahead-item__selected .typeahead-item-hint {\n    font-size: 10px;\n    color: #52545c; }\n\n/* SYNTAX */\n.slate-query-field .token.comment,\n.slate-query-field .token.block-comment,\n.slate-query-field .token.prolog,\n.slate-query-field .token.doctype,\n.slate-query-field .token.cdata {\n  color: #767980; }\n\n.slate-query-field .token.punctuation {\n  color: #767980; }\n\n.slate-query-field .token.property,\n.slate-query-field .token.tag,\n.slate-query-field .token.boolean,\n.slate-query-field .token.number,\n.slate-query-field .token.function-name,\n.slate-query-field .token.constant,\n.slate-query-field .token.symbol,\n.slate-query-field .token.deleted {\n  color: #d44939; }\n\n.slate-query-field .token.selector,\n.slate-query-field .token.attr-name,\n.slate-query-field .token.string,\n.slate-query-field .token.char,\n.slate-query-field .token.function,\n.slate-query-field .token.builtin,\n.slate-query-field .token.inserted {\n  color: #3aa655; }\n\n.slate-query-field .token.operator,\n.slate-query-field .token.entity,\n.slate-query-field .token.url,\n.slate-query-field .token.variable {\n  color: #9954bb; }\n\n.slate-query-field .token.atrule,\n.slate-query-field .token.attr-value,\n.slate-query-field .token.keyword,\n.slate-query-field .token.class-name {\n  color: #0083b3; }\n\n.slate-query-field .token.regex,\n.slate-query-field .token.important {\n  color: #ff7941; }\n\n.slate-query-field .token.important {\n  font-weight: normal; }\n\n.slate-query-field .token.bold {\n  font-weight: bold; }\n\n.slate-query-field .token.italic {\n  font-style: italic; }\n\n.slate-query-field .token.entity {\n  cursor: help; }\n\n.slate-query-field .namespace {\n  opacity: 0.7; }\n',
            ],
            sourceRoot: '',
          },
        ]);
      },
      function(e, t) {
        e.exports = function(e) {
          var t = [];
          return (
            (t.toString = function() {
              return this.map(function(t) {
                var n = (function(e, t) {
                  var n,
                    r = e[1] || '',
                    i = e[3];
                  if (!i) return r;
                  if (t && 'function' == typeof btoa) {
                    var o = ((n = i),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                        ' */'),
                      a = i.sources.map(function(e) {
                        return '/*# sourceURL=' + i.sourceRoot + e + ' */';
                      });
                    return [r]
                      .concat(a)
                      .concat([o])
                      .join('\n');
                  }
                  return [r].join('\n');
                })(t, e);
                return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
              }).join('');
            }),
            (t.i = function(e, n) {
              'string' == typeof e && (e = [[null, e, '']]);
              for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                'number' == typeof o && (r[o] = !0);
              }
              for (i = 0; i < e.length; i++) {
                var a = e[i];
                ('number' == typeof a[0] && r[a[0]]) ||
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
        var r,
          i,
          o = {},
          a = ((r = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === i && (i = r.apply(this, arguments)), i;
          }),
          s = (function(e) {
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
          u = null,
          l = 0,
          f = [],
          c = n(192);
        function h(e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = o[r.id];
            if (i) {
              i.refs++;
              for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
              for (; a < r.parts.length; a++) i.parts.push(v(r.parts[a], t));
            } else {
              var s = [];
              for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t));
              o[r.id] = {id: r.id, refs: 1, parts: s};
            }
          }
        }
        function d(e, t) {
          for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
              a = t.base ? o[0] + t.base : o[0],
              s = {css: o[1], media: o[2], sourceMap: o[3]};
            r[a] ? r[a].parts.push(s) : n.push((r[a] = {id: a, parts: [s]}));
          }
          return n;
        }
        function p(e, t) {
          var n = s(e.insertInto);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var r = f[f.length - 1];
          if ('top' === e.insertAt)
            r
              ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)
              : n.insertBefore(t, n.firstChild),
              f.push(t);
          else if ('bottom' === e.insertAt) n.appendChild(t);
          else {
            if ('object' != typeof e.insertAt || !e.insertAt.before)
              throw new Error(
                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
              );
            var i = s(e.insertInto + ' ' + e.insertAt.before);
            n.insertBefore(t, i);
          }
        }
        function y(e) {
          if (null === e.parentNode) return !1;
          e.parentNode.removeChild(e);
          var t = f.indexOf(e);
          t >= 0 && f.splice(t, 1);
        }
        function g(e) {
          var t = document.createElement('style');
          return (
            void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
            m(t, e.attrs),
            p(e, t),
            t
          );
        }
        function m(e, t) {
          Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n]);
          });
        }
        function v(e, t) {
          var n, r, i, o;
          if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function() {};
            e.css = o;
          }
          if (t.singleton) {
            var a = l++;
            (n = u || (u = g(t))),
              (r = w.bind(null, n, a, !1)),
              (i = w.bind(null, n, a, !0));
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
                    m(t, e.attrs),
                    p(e, t),
                    t
                  );
                })(t)),
                (r = function(e, t, n) {
                  var r = n.css,
                    i = n.sourceMap,
                    o = void 0 === t.convertToAbsoluteUrls && i;
                  (t.convertToAbsoluteUrls || o) && (r = c(r)),
                    i &&
                      (r +=
                        '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                        ' */');
                  var a = new Blob([r], {type: 'text/css'}),
                    s = e.href;
                  (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
                }.bind(null, n, t)),
                (i = function() {
                  y(n), n.href && URL.revokeObjectURL(n.href);
                }))
              : ((n = g(t)),
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
                (i = function() {
                  y(n);
                }));
          return (
            r(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                  return;
                r((e = t));
              } else i();
            }
          );
        }
        e.exports = function(e, t) {
          if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
            throw new Error(
              'The style-loader cannot be used in a non-browser environment'
            );
          ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
            t.singleton || 'boolean' == typeof t.singleton || (t.singleton = a()),
            t.insertInto || (t.insertInto = 'head'),
            t.insertAt || (t.insertAt = 'bottom');
          var n = d(e, t);
          return (
            h(n, t),
            function(e) {
              for (var r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = o[a.id]).refs--, r.push(s);
              }
              for (e && h(d(e, t), t), i = 0; i < r.length; i++) {
                var s;
                if (0 === (s = r[i]).refs) {
                  for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                  delete o[s.id];
                }
              }
            }
          );
        };
        var b,
          _ = ((b = []),
          function(e, t) {
            return (b[e] = t), b.filter(Boolean).join('\n');
          });
        function w(e, t, n, r) {
          var i = n ? '' : r.css;
          if (e.styleSheet) e.styleSheet.cssText = _(t, i);
          else {
            var o = document.createTextNode(i),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
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
              var i,
                o = t
                  .trim()
                  .replace(/^"(.*)"$/, function(e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function(e, t) {
                    return t;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
                ? e
                : ((i =
                    0 === o.indexOf('//')
                      ? o
                      : 0 === o.indexOf('/') ? n + o : r + o.replace(/^\.\//, '')),
                  'url(' + JSON.stringify(i) + ')');
            }
          );
        };
      },
    ]);
  }
);
//# sourceMappingURL=module.js.map
