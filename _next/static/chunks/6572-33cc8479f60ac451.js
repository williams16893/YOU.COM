(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6572], {
        71210: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, a) {
                var r = o(78875).normalizeLocalePath,
                    l = o(38748).detectDomainLocale,
                    u = t || r(e, n).detectedLocale,
                    c = l(a, void 0, u);
                if (c) {
                    var f = "http".concat(c.http ? "" : "s", "://"),
                        i = u === c.defaultLocale ? "" : "/".concat(u);
                    return "".concat(f).concat(c.domain).concat("").concat(i).concat(e)
                }
                return !1
            };
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48418: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(94941).Z;
            o(45753).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(92648).Z,
                r = o(17273).Z,
                l = a(o(67294)),
                u = o(76273),
                c = o(22725),
                f = o(63462),
                i = o(21018),
                d = o(57190),
                s = o(71210),
                p = o(98684),
                v = {};

            function h(e, t, o, n) {
                if (e && u.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, o, n)).catch((function(e) {
                        0
                    }));
                    var a = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    v[t + "%" + o + (a ? "%" + a : "")] = !0
                }
            }
            var y = l.default.forwardRef((function(e, t) {
                var o, a = e.href,
                    y = e.as,
                    L = e.children,
                    b = e.prefetch,
                    C = e.passHref,
                    _ = e.replace,
                    m = e.shallow,
                    x = e.scroll,
                    O = e.locale,
                    k = e.onClick,
                    j = e.onMouseEnter,
                    M = e.onTouchStart,
                    w = e.legacyBehavior,
                    P = void 0 === w ? !0 !== Boolean(!1) : w,
                    g = r(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = L, !P || "string" !== typeof o && "number" !== typeof o || (o = l.default.createElement("a", null, o));
                var R = !1 !== b,
                    T = l.default.useContext(f.RouterContext),
                    E = l.default.useContext(i.AppRouterContext);
                E && (T = E);
                var N, Z = l.default.useMemo((function() {
                        var e = n(u.resolveHref(T, a, !0), 2),
                            t = e[0],
                            o = e[1];
                        return {
                            href: t,
                            as: y ? u.resolveHref(T, y) : o || t
                        }
                    }), [T, a, y]),
                    S = Z.href,
                    A = Z.as,
                    D = l.default.useRef(S),
                    I = l.default.useRef(A);
                P && (N = l.default.Children.only(o));
                var K = P ? N && "object" === typeof N && N.ref : t,
                    U = n(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    B = U[0],
                    z = U[1],
                    F = U[2],
                    H = l.default.useCallback((function(e) {
                        I.current === A && D.current === S || (F(), I.current = A, D.current = S), B(e), K && ("function" === typeof K ? K(e) : "object" === typeof K && (K.current = e))
                    }), [A, K, S, F, B]);
                l.default.useEffect((function() {
                    var e = z && R && u.isLocalURL(S),
                        t = "undefined" !== typeof O ? O : T && T.locale,
                        o = v[S + "%" + A + (t ? "%" + t : "")];
                    e && !o && h(T, S, A, {
                        locale: t
                    })
                }), [A, S, z, O, R, T]);
                var G = {
                    ref: H,
                    onClick: function(e) {
                        P || "function" !== typeof k || k(e), P && N.props && "function" === typeof N.props.onClick && N.props.onClick(e), e.defaultPrevented || function(e, t, o, n, a, r, c, f, i, d) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && u.isLocalURL(o)) {
                                e.preventDefault();
                                var s = function() {
                                    "beforePopState" in t ? t[a ? "replace" : "push"](o, n, {
                                        shallow: r,
                                        locale: f,
                                        scroll: c
                                    }) : t[a ? "replace" : "push"](o, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                i ? l.default.startTransition(s) : s()
                            }
                        }(e, T, S, A, _, m, x, O, Boolean(E), R)
                    },
                    onMouseEnter: function(e) {
                        P || "function" !== typeof j || j(e), P && N.props && "function" === typeof N.props.onMouseEnter && N.props.onMouseEnter(e), !R && E || u.isLocalURL(S) && h(T, S, A, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        P || "function" !== typeof M || M(e), P && N.props && "function" === typeof N.props.onTouchStart && N.props.onTouchStart(e), !R && E || u.isLocalURL(S) && h(T, S, A, {
                            priority: !0
                        })
                    }
                };
                if (!P || C || "a" === N.type && !("href" in N.props)) {
                    var J = "undefined" !== typeof O ? O : T && T.locale,
                        V = T && T.isLocaleDomain && s.getDomainLocale(A, J, T.locales, T.domainLocales);
                    G.href = V || p.addBasePath(c.addLocale(A, J, T && T.defaultLocale))
                }
                return P ? l.default.cloneElement(N, G) : l.default.createElement("a", Object.assign({}, g, G), o)
            }));
            t.default = y, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        78875: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalizeLocalePath = void 0;
            t.normalizeLocalePath = function(e, t) {
                return o(94317).normalizeLocalePath(e, t)
            }, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        21018: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var n = (0, o(92648).Z)(o(67294)),
                a = n.default.createContext(null);
            t.AppRouterContext = a;
            var r = n.default.createContext(null);
            t.LayoutRouterContext = r;
            var l = n.default.createContext(null);
            t.GlobalLayoutRouterContext = l;
            var u = n.default.createContext(null);
            t.TemplateContext = u
        },
        66970: function(e, t, o) {
            "use strict";
            o.d(t, {
                P: function() {
                    return c
                }
            });
            var n = o(26042),
                a = o(69396),
                r = o(99534),
                l = o(85893),
                u = o(66914),
                c = function(e) {
                    var t = e.href,
                        o = e.children,
                        c = e.invokeActionOnClick,
                        f = e.shouldForceOpenInNewTab,
                        i = void 0 !== f && f,
                        d = (0, r.Z)(e, ["href", "children", "invokeActionOnClick", "shouldForceOpenInNewTab"]),
                        s = (0, u.Z)({
                            shouldForceOpenInNewTab: i
                        }).openLink;
                    return (0, l.jsx)("a", (0, a.Z)((0, n.Z)({
                        href: t
                    }, d), {
                        onClick: function(e) {
                            e.ctrlKey || e.metaKey || (e.preventDefault(), c && c(e), s(t))
                        },
                        "data-eventactiontitle": "Open Anchor Link",
                        children: o
                    }))
                }
        },
        66914: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = o(70189),
                a = function(e) {
                    var t = e.shouldForceOpenInNewTab,
                        o = void 0 !== t && t;
                    return {
                        openLink: function(e) {
                            return JSON.parse(window.localStorage.getItem(n.Vi)) || o || !1 ? window.open(e, "_blank", "noopener noreferrer") : window.open(e, "_self")
                        }
                    }
                }
        },
        41664: function(e, t, o) {
            e.exports = o(48418)
        }
    }
]);