"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8150], {
        57190: function(n, t, e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = e(94941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(n) {
                var t = n.rootRef,
                    e = n.rootMargin,
                    l = n.disabled || !a,
                    d = r(o.useState(!1), 2),
                    s = d[0],
                    f = d[1],
                    v = r(o.useState(null), 2),
                    p = v[0],
                    h = v[1];
                o.useEffect((function() {
                    if (a) {
                        if (l || s) return;
                        if (p && p.tagName) {
                            var n = function(n, t, e) {
                                var r = function(n) {
                                        var t, e = {
                                                root: n.root || null,
                                                margin: n.rootMargin || ""
                                            },
                                            r = c.find((function(n) {
                                                return n.root === e.root && n.margin === e.margin
                                            }));
                                        if (r && (t = u.get(r))) return t;
                                        var o = new Map,
                                            i = new IntersectionObserver((function(n) {
                                                n.forEach((function(n) {
                                                    var t = o.get(n.target),
                                                        e = n.isIntersecting || n.intersectionRatio > 0;
                                                    t && e && t(e)
                                                }))
                                            }), n);
                                        return t = {
                                            id: e,
                                            observer: i,
                                            elements: o
                                        }, c.push(e), u.set(e, t), t
                                    }(e),
                                    o = r.id,
                                    i = r.observer,
                                    a = r.elements;
                                return a.set(n, t), i.observe(n),
                                    function() {
                                        if (a.delete(n), i.unobserve(n), 0 === a.size) {
                                            i.disconnect(), u.delete(o);
                                            var t = c.findIndex((function(n) {
                                                return n.root === o.root && n.margin === o.margin
                                            }));
                                            t > -1 && c.splice(t, 1)
                                        }
                                    }
                            }(p, (function(n) {
                                return n && f(n)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: e
                            });
                            return n
                        }
                    } else if (!s) {
                        var r = i.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(r)
                        }
                    }
                }), [p, l, e, t, s]);
                var b = o.useCallback((function() {
                    f(!1)
                }), []);
                return [h, s, b]
            };
            var o = e(67294),
                i = e(9311),
                a = "function" === typeof IntersectionObserver,
                u = new Map,
                c = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), n.exports = t.default)
        },
        88469: function(n, t, e) {
            e.d(t, {
                a: function() {
                    return E
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(85893),
                u = e(67294),
                c = e(70189),
                l = e(31332),
                d = e(7297),
                s = e(52015),
                f = e(57698),
                v = e(23376),
                p = e(32802);

            function h() {
                var n = (0, d.Z)(["\n        pointer-events: none;\n      "]);
                return h = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, d.Z)(['\n      &:after {\n        content: "";\n        z-index: ', ";\n        display: block;\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: ", ";\n      }\n\n      ", "\n    "]);
                return b = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, d.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: hidden;\n\n  width: ", ";\n  height: ", ";\n  z-index: ", ";\n\n  box-sizing: border-box;\n  padding: ", ";\n  margin: 2px 0;\n  border: 1px solid rgba(22, 22, 117, 0.15);\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: 0px 1px 2px ", ",\n    0px 0px 1px ", ";\n\n  &:active {\n    cursor: grabbing;\n    border: 1px solid ", ";\n  }\n\n  &:hover {\n    box-shadow: 0px 12px 33px rgba(0, 0, 0, 0.12);\n  }\n\n  &:focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  // TODO - should we follow this pattern with grabbing cursor?\n  cursor: grab;\n\n  // reset all elements cursor\n  * :not(div) {\n    cursor: auto;\n  }\n\n  button,\n  a,\n  a * {\n    cursor: pointer;\n  }\n\n  ", " {\n    height: ", ";\n    max-height: 90vh;\n    max-width: 100%;\n    width: ", ";\n  }\n\n  ", "\n"]);
                return I = function() {
                    return n
                }, n
            }
            var _ = v.W5.bottom,
                g = {
                    base: _,
                    disabledOverlay: _ + 1,
                    disabledOverlayText: _ + 2
                },
                m = s.ZP.div.withConfig({
                    componentId: "sc-2c96f945-0"
                })(I(), (function(n) {
                    var t = n.width;
                    return (0, p.rV)(t)
                }), (function(n) {
                    var t = n.height;
                    return (0, p.cK)(t)
                }), g.base, (function(n) {
                    return n.withPadding ? v.W0.md : 0
                }), v.E0.md, (function(n) {
                    return n.theme.tableOddRow
                }), v.$_.alphaBlack_10, v.$_.alphaBlack_15, (function(n) {
                    return n.theme.primary
                }), (function(n) {
                    return n.theme.primary
                }), f.BC.small, (function(n) {
                    var t = n.height;
                    return (0, p.yc)(t)
                }), (function(n) {
                    var t = n.width;
                    return (0, p.HH)(t)
                }), (function(n) {
                    var t = n.isDisabled,
                        e = n.allowDisabledClick,
                        r = n.theme;
                    return t && (0, s.iv)(b(), g.disabledOverlay, r.alphaWhite_50, !e && (0, s.iv)(h()))
                })),
                E = (0, u.forwardRef)((function(n, t) {
                    var e = n.width,
                        u = void 0 === e ? l.c.GRID_TILE_MEDIUM_LARGE : e,
                        d = n.height,
                        s = void 0 === d ? l.MP.AUTO : d,
                        f = n.tag,
                        v = void 0 === f ? l.Qy.LI : f,
                        p = n.withPadding,
                        h = void 0 === p || p,
                        b = n.dataTestId,
                        I = void 0 === b ? "" : b,
                        _ = n.dataEventTilePosition,
                        g = void 0 === _ ? "" : _,
                        E = n.dataEventTileTitle,
                        L = void 0 === E ? "" : E,
                        M = n.className,
                        T = n.children,
                        R = n.isDisabled,
                        w = void 0 !== R && R,
                        x = n.allowDisabledClick,
                        D = void 0 !== x && x,
                        Z = (0, i.Z)(n, ["width", "height", "tag", "withPadding", "dataTestId", "dataEventTilePosition", "dataEventTileTitle", "className", "children", "isDisabled", "allowDisabledClick"]),
                        G = ["app-tile", M].filter(Boolean).join(" "),
                        A = {
                            listStyleType: v === l.Qy.LI && "none"
                        };
                    return (0, a.jsx)(m, (0, o.Z)((0, r.Z)({
                        ref: t,
                        as: v,
                        className: G,
                        width: u,
                        height: s,
                        withPadding: h,
                        "data-type": c.lU,
                        "data-testid": I,
                        tabIndex: 0,
                        style: A,
                        "data-eventtileposition": g,
                        "data-eventtiletitle": L,
                        isDisabled: w,
                        allowDisabledClick: D,
                        "aria-disabled": w && !D
                    }, Z), {
                        children: T
                    }))
                }));
            E.displayName = "AppTile"
        },
        32802: function(n, t, e) {
            e.d(t, {
                cK: function() {
                    return a
                },
                yc: function() {
                    return u
                },
                rV: function() {
                    return c
                },
                HH: function() {
                    return l
                }
            });
            var r = e(14924),
                o = e(31332),
                i = "18.75rem",
                a = function(n) {
                    var t = 21.875;
                    switch (n) {
                        case o.MP.AUTO:
                            return "auto";
                        case o.MP.SHORT:
                            return "".concat(10.9375, "rem");
                        case o.MP.MEDIUM:
                            return "".concat(t / 1.3, "rem");
                        case o.MP.NORMAL:
                            return "".concat(t, "rem");
                        case o.MP.TALL:
                            return "".concat(32.8125, "rem");
                        case o.MP.FULL:
                            return "100%";
                        case o.MP.GRID_TILE_SHORT:
                            return "9.125rem";
                        case o.MP.GRID_TILE_NORMAL:
                            return "13.9375rem";
                        case o.MP.GRID_TILE_MEDIUM:
                            return "16.375rem";
                        default:
                            return "auto"
                    }
                },
                u = function(n) {
                    switch (n) {
                        case o.MP.GRID_TILE_MEDIUM:
                        case o.MP.MEDIUM:
                            return "".concat(17.8125 / 1.3, "rem");
                        case o.MP.GRID_TILE_NORMAL:
                            return "13.9375rem";
                        default:
                            return "auto"
                    }
                },
                c = function(n) {
                    var t, e = (t = {}, (0, r.Z)(t, o.c.GRID_TILE_EXTRA_SMALL, "9.125rem"), (0, r.Z)(t, o.c.GRID_TILE_SMALL, "13.9375rem"), (0, r.Z)(t, o.c.GRID_TILE_MEDIUM, i), (0, r.Z)(t, o.c.GRID_TILE_MEDIUM_LARGE, "23.5625rem"), (0, r.Z)(t, o.c.GRID_TILE_LARGE, "38rem"), (0, r.Z)(t, o.c.GRID_TILE_EXTRA_LARGE, "47.5rem"), t);
                    return (null === e || void 0 === e ? void 0 : e[n]) || i
                },
                l = function(n) {
                    var t, e = (t = {}, (0, r.Z)(t, o.c.GRID_TILE_EXTRA_SMALL, "9.125rem"), (0, r.Z)(t, o.c.GRID_TILE_SMALL, "13.9375rem"), (0, r.Z)(t, o.c.GRID_TILE_MEDIUM, i), (0, r.Z)(t, o.c.GRID_TILE_MEDIUM_LARGE, "21.4375rem"), (0, r.Z)(t, o.c.GRID_TILE_LARGE, "21.4375rem"), (0, r.Z)(t, o.c.GRID_TILE_EXTRA_LARGE, "21.4375rem"), t);
                    return (null === e || void 0 === e ? void 0 : e[n]) || i
                }
        },
        24622: function(n, t, e) {
            e.d(t, {
                l: function() {
                    return u
                }
            });
            var r = e(26042),
                o = e(99534),
                i = e(85893),
                a = e(70189),
                u = function(n) {
                    var t = n.src,
                        e = (0, o.Z)(n, ["src"]);
                    return (0, i.jsx)("img", (0, r.Z)({
                        src: "".concat(a.qn).concat(t)
                    }, e))
                }
        },
        23552: function(n, t, e) {
            e.d(t, {
                u: function() {
                    return G
                }
            });
            var r = e(14924),
                o = e(26042),
                i = e(69396),
                a = e(99534),
                u = e(85893),
                c = e(67294),
                l = e(28703),
                d = e(7297),
                s = e(52015),
                f = e(23376);

            function v() {
                var n = (0, d.Z)(["\n  font-size: ", ";\n  position: absolute;\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  z-index: ", ';\n\n  &::after {\n    content: "";\n    position: absolute;\n    display: block;\n    width: 0px;\n    border: 10px solid transparent;\n  }\n']);
                return v = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, d.Z)(["\n        ", " {\n          display: ", ";\n        }\n      "]);
                return p = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, d.Z)(["\n          @media (hover: hover) and (pointer: fine) {\n            &:hover ", " {\n              display: block;\n            }\n          }\n        "]);
                return h = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, d.Z)(["\n        ", " {\n          display: none;\n        }\n\n        ", "\n      "]);
                return b = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, d.Z)(["\n  width: 100%;\n  position: relative;\n\n  ", ";\n"]);
                return I = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, d.Z)(["\n  bottom: calc(100% + 10px);\n  &::after {\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 100%);\n    border-bottom: 0;\n    border-top: 10px solid ", ";\n  }\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, d.Z)(["\n  top: 50%;\n  left: calc(100% + 15px);\n  transform: translateY(-50%);\n  &::after {\n    left: 0;\n    top: 50%;\n    transform: translate(-100%, -50%);\n    border-left: 0;\n    border-right: 10px solid\n      ", ";\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, d.Z)(["\n  top: calc(100% + 10px);\n  &::after {\n    left: 50%;\n    top: 0;\n    transform: translate(-50%, -100%);\n    border-top: 0;\n    border-bottom: 10px solid\n      ", ";\n  }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, d.Z)(["\n  right: calc(100% + 15px);\n  top: 50%;\n  transform: translateY(-50%);\n  &::after {\n    transform: translate(100%, -50%);\n    right: 0;\n    top: 50%;\n    border-right: 0;\n    border-left: 10px solid ", ";\n  }\n"]);
                return E = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, d.Z)(["\n  width: 100%;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-all;\n"]);
                return L = function() {
                    return n
                }, n
            }
            var M = s.ZP.div.withConfig({
                    componentId: "sc-d43764f4-0"
                })(v(), f.JB.caption, (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                }), f.$_.white, f.W0.xxs, f.E0.xxs, f.W5.topmost),
                T = s.ZP.div.withConfig({
                    componentId: "sc-d43764f4-1"
                })(I(), (function(n) {
                    var t = n.$isVisible,
                        e = n.shouldShowOnHover;
                    return "boolean" === typeof t ? (0, s.iv)(p(), M, t ? "block" : "none") : (0, s.iv)(b(), M, e && (0, s.iv)(h(), M))
                })),
                R = (0, s.ZP)(M).withConfig({
                    componentId: "sc-d43764f4-2"
                })(_(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                w = (0, s.ZP)(M).withConfig({
                    componentId: "sc-d43764f4-3"
                })(g(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                x = (0, s.ZP)(M).withConfig({
                    componentId: "sc-d43764f4-4"
                })(m(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                D = (0, s.ZP)(M).withConfig({
                    componentId: "sc-d43764f4-5"
                })(E(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                Z = s.ZP.div.withConfig({
                    componentId: "sc-d43764f4-6"
                })(L()),
                G = function(n) {
                    var t, e = n.children,
                        d = n.placement,
                        s = void 0 === d ? l.iQ.BOTTOM : d,
                        f = n.tooltipContent,
                        v = void 0 === f ? "" : f,
                        p = n.isEllipsis,
                        h = void 0 !== p && p,
                        b = n.isVisible,
                        I = n.bgColor,
                        _ = (0, a.Z)(n, ["children", "placement", "tooltipContent", "isEllipsis", "isVisible", "bgColor"]),
                        g = (0, c.useState)(!1),
                        m = g[0],
                        E = g[1],
                        L = (t = {}, (0, r.Z)(t, l.iQ.TOP, R), (0, r.Z)(t, l.iQ.RIGHT, w), (0, r.Z)(t, l.iQ.BOTTOM, x), (0, r.Z)(t, l.iQ.LEFT, D), t)[s];
                    return (0, u.jsxs)(T, (0, i.Z)((0, o.Z)({
                        shouldShowOnHover: (!h || m) && "boolean" !== typeof b,
                        $isVisible: b
                    }, _), {
                        children: [(0, u.jsx)(L, {
                            $bgColor: I,
                            children: v
                        }), h ? (0, u.jsx)(Z, {
                            onMouseOver: function(n) {
                                var t = n.target,
                                    e = t.scrollWidth > t.clientWidth;
                                E(e)
                            },
                            children: e
                        }) : e]
                    }))
                };
            G.BaseTooltip = M
        },
        31332: function(n, t, e) {
            var r, o, i;
            e.d(t, {
                    MP: function() {
                        return o
                    },
                    Qy: function() {
                        return i
                    },
                    c: function() {
                        return r
                    }
                }),
                function(n) {
                    n.GRID_TILE_EXTRA_SMALL = "grid tile extra small", n.GRID_TILE_SMALL = "grid tile small", n.GRID_TILE_MEDIUM = "grid tile medium", n.GRID_TILE_MEDIUM_LARGE = "grid tile medium large", n.GRID_TILE_LARGE = "grid tile large", n.GRID_TILE_EXTRA_LARGE = "grid tile extra large"
                }(r || (r = {})),
                function(n) {
                    n.AUTO = "auto", n.SHORT = "short", n.MEDIUM = "medium", n.NORMAL = "normal", n.TALL = "tall", n.FULL = "full", n.GRID_TILE_SHORT = "grid tile short", n.GRID_TILE_NORMAL = "grid tile normal", n.GRID_TILE_MEDIUM = "grid tile medium"
                }(o || (o = {})),
                function(n) {
                    n.UL = "ul", n.OL = "ol", n.LI = "li", n.DIV = "div", n.FIGURE = "figure", n.ARTICLE = "article"
                }(i || (i = {}))
        },
        68120: function(n, t, e) {
            e.d(t, {
                O: function() {
                    return o
                }
            });
            var r = e(67294),
                o = function(n, t) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        a = (0, r.useState)(e),
                        u = a[0],
                        c = a[1],
                        l = function() {
                            c((function(n) {
                                return !n
                            })), Boolean(n) && Boolean(t) && i(t, u, n, o)
                        },
                        d = function() {
                            return c(!0)
                        },
                        s = function() {
                            return c(!1)
                        };
                    return {
                        isVisible: u,
                        toggle: l,
                        open: d,
                        close: s
                    }
                },
                i = function(n, t, e, r) {
                    return document.dispatchEvent(new CustomEvent(n, {
                        detail: {
                            isVisible: t,
                            ref: e,
                            parentRef: r
                        }
                    }))
                }
        },
        8740: function(n, t, e) {
            e.d(t, {
                A: function() {
                    return l
                }
            });
            var r = e(85893),
                o = e(7297),
                i = e(52015),
                a = e(24622);

            function u() {
                var n = (0, o.Z)(["\n  width: 100%;\n  height: 100%;\n"]);
                return u = function() {
                    return n
                }, n
            }
            var c = (0, i.ZP)(a.l).withConfig({
                    componentId: "sc-dec408d0-0"
                })(u()),
                l = function(n) {
                    var t = n.className;
                    return (0, r.jsx)(c, {
                        src: "/shared/logos/ydc-logo.svg",
                        className: t,
                        alt: "Logo"
                    })
                }
        }
    }
]);