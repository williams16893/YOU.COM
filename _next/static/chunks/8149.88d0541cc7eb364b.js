"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8149], {
        29734: function(n, e, t) {
            t.r(e), t.d(e, {
                AppButtons: function() {
                    return J
                }
            });
            var r = t(26042),
                i = t(69396),
                o = t(85893),
                a = t(67294),
                c = t(53766),
                s = t(67273),
                u = t(10253),
                l = t(95793),
                d = t(47044),
                f = t.n(d),
                h = t(4480),
                p = t(23747),
                g = t(21426),
                v = t(23563),
                m = t(15985),
                b = t(2507),
                w = t(64027),
                I = t(7297),
                x = t(89282),
                Z = t(23376),
                k = t(24622),
                j = t(52015),
                y = t(19696);

            function C() {
                var n = (0, I.Z)(["\n  font-weight: 600;\n  font-size: ", ";\n"]);
                return C = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, I.Z)(["\n  background-color: ", ";\n  border: none;\n  cursor: pointer;\n  padding: ", " ", ";\n  border-radius: ", ";\n  display: flex;\n  align-items: center;\n  margin: 0 ", " 0 ", ";\n  transition: background-color 0.1s ease-in-out;\n  &:hover {\n    background: ", ";\n  }\n  &:hover + div {\n    display: initial;\n  }\n"]);
                return M = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, I.Z)(["\n  height: 25rem;\n"]);
                return O = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, I.Z)(["\n  margin-right: ", ";\n  width: 20px;\n  height: 20px;\n"]);
                return A = function() {
                    return n
                }, n
            }
            var N, S, W = (0, j.ZP)(x.Z).withConfig({
                    componentId: "sc-2a08a7d6-0"
                })(C(), Z.JB.body),
                P = (0, j.ZP)(y.e).withConfig({
                    componentId: "sc-2a08a7d6-1"
                })(M(), (function(n) {
                    return n.theme.transparent
                }), Z.W0.xs, Z.W0.xs, Z.E0.sm, Z.W0.xxs, Z.W0.xxs, (function(n) {
                    return n.theme.alphaBlack_07
                })),
                _ = j.ZP.div.withConfig({
                    componentId: "sc-2a08a7d6-2"
                })(O()),
                B = (0, j.ZP)(k.l).withConfig({
                    componentId: "sc-2a08a7d6-3"
                })(A(), Z.W0.xs),
                E = function(n) {
                    var e = n.src,
                        t = n.label,
                        r = n.href,
                        i = n.children,
                        c = n.dropDown,
                        s = (0, u.Z)((0, h.FV)(v.c), 2),
                        d = s[0],
                        I = s[1],
                        x = (0, a.useState)(!1),
                        Z = x[0],
                        k = x[1],
                        j = (0, g.$)(),
                        y = (0, p.Z)().sendEvent,
                        C = function() {
                            return k((function(n) {
                                return !n
                            }))
                        },
                        M = w.k.includes(t);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("div", {
                            onMouseOver: C,
                            onMouseOut: C,
                            "data-testid": "appButton-container",
                            children: [(0, o.jsxs)(P, {
                                href: r || "",
                                isInternal: !0,
                                onClick: function() {
                                    if (r) {
                                        var n = "Click ".concat(t);
                                        y(m.j.UserClickInNonApp, {
                                            appname: b.a6.LandingPageTopButtons,
                                            actionTitle: n,
                                            actionName: f()(n.toLowerCase())
                                        })
                                    }
                                },
                                "data-testid": "appButton-".concat(t),
                                children: [e && (0, o.jsx)(B, {
                                    src: e
                                }), (0, o.jsx)(W, {
                                    shouldNotTranslate: M,
                                    children: t
                                })]
                            }), Z && (0, o.jsx)("div", {
                                children: i
                            })]
                        }), c && j && (0, o.jsx)(l.Z, {
                            title: "Featured apps",
                            closeActions: function() {
                                return I(!1)
                            },
                            isModalOpen: d,
                            children: (0, o.jsx)(_, {
                                children: c
                            })
                        })]
                    })
                },
                L = t(29815),
                z = t(5152),
                R = t.n(z);
            ! function(n) {
                n.Write = "/search?q=how+to+write+well&&tbm=youwrite&cfr=write&", n.Imagine = "/search?q=%40draw+a+cute+dog+in+space", n.Shopping = "/search?q=best+headphones&tbm=shop", n.Social = "/social"
            }(N || (N = {})),
            function(n) {
                n.Write = "YouWrite", n.Imagine = "YouImagine", n.More = "More", n.Shopping = "Shopping", n.Social = "Social"
            }(S || (S = {}));
            var T = R()((function() {
                    return t.e(7564).then(t.bind(t, 47564)).then((function(n) {
                        return n.DropdownContent
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [47564]
                        }
                    }
                }),
                F = [{
                    title: S.Write,
                    label: "Use AI to write blogs, emails or social media posts",
                    href: N.Write,
                    icon: "/app-icons/icon-youwrite.svg"
                }, {
                    title: S.Imagine,
                    label: "Find and create stunning images using AI",
                    href: N.Imagine,
                    icon: "/images/landing-page/icon-stablediffusion-landing.svg"
                }],
                q = [{
                    title: S.Shopping,
                    label: "Visually shop for your favorite items",
                    href: N.Shopping,
                    icon: "/app-icons/icon-shopping.svg"
                }, {
                    title: S.Social,
                    label: "Explore content from social sources",
                    href: N.Social,
                    icon: "/app-icons/icon-social.svg"
                }],
                D = [{
                    label: S.Write,
                    href: N.Write,
                    src: "/app-icons/icon-youwrite.svg"
                }, {
                    label: S.Imagine,
                    href: N.Imagine,
                    src: "/images/landing-page/icon-stablediffusion-landing.svg"
                }, {
                    label: S.More,
                    src: "/shared/icon-three-vertical-dots.svg",
                    children: (0, o.jsx)(T, {
                        menuItems: q
                    })
                }, {
                    label: null,
                    src: null,
                    dropDown: (0, o.jsx)(T, {
                        menuItems: (0, L.Z)(F).concat((0, L.Z)(q))
                    })
                }],
                J = function() {
                    return (0, o.jsx)(s.zb, {
                        "data-testid": c.IR,
                        children: D.map((function(n) {
                            return (0, a.createElement)(E, (0, i.Z)((0, r.Z)({}, n), {
                                key: n.label
                            }))
                        }))
                    })
                }
        },
        19696: function(n, e, t) {
            t.d(e, {
                e: function() {
                    return b
                }
            });
            var r = t(26042),
                i = t(69396),
                o = t(99534),
                a = t(85893),
                c = t(41664),
                s = t.n(c),
                u = t(64027),
                l = t(47837),
                d = t(7297),
                f = t(66970),
                h = t(52015);

            function p() {
                var n = (0, d.Z)(["\n      width: auto;\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, d.Z)(["\n  width: fit-content;\n  width: -moz-fit-content;\n\n  ", "\n"]);
                return g = function() {
                    return n
                }, n
            }
            var v = (0, h.ZP)(f.P).withConfig({
                    componentId: "sc-a64c1f04-0"
                })(g(), (function(n) {
                    return n.$fillAvailableWidth && (0, h.iv)(p())
                })),
                m = (0, l.a)(),
                b = function(n) {
                    var e = n.href,
                        t = n.isInternal,
                        c = void 0 !== t && t,
                        l = n.children,
                        d = n.invokeActionOnClick,
                        f = n.fillAvailableWidth,
                        h = n.shouldOpenInNewTab,
                        p = (0, o.Z)(n, ["href", "isInternal", "children", "invokeActionOnClick", "fillAvailableWidth", "shouldOpenInNewTab"]);
                    if (!m && c) {
                        var g = "string" === typeof l && u.k.includes(l);
                        return (0, a.jsx)(s(), {
                            href: e,
                            prefetch: !1,
                            passHref: !0,
                            children: (0, a.jsx)("a", (0, i.Z)((0, r.Z)({}, p), {
                                translate: g ? "no" : void 0,
                                children: l
                            }))
                        })
                    }
                    return (0, a.jsx)(v, (0, i.Z)((0, r.Z)({
                        href: e,
                        invokeActionOnClick: d,
                        $fillAvailableWidth: f,
                        shouldForceOpenInNewTab: m || h
                    }, p), {
                        children: l
                    }))
                };
            b.displayName = "YDCLink"
        },
        57190: function(n, e, t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = t(94941).Z;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(n) {
                var e = n.rootRef,
                    t = n.rootMargin,
                    u = n.disabled || !a,
                    l = r(i.useState(!1), 2),
                    d = l[0],
                    f = l[1],
                    h = r(i.useState(null), 2),
                    p = h[0],
                    g = h[1];
                i.useEffect((function() {
                    if (a) {
                        if (u || d) return;
                        if (p && p.tagName) {
                            var n = function(n, e, t) {
                                var r = function(n) {
                                        var e, t = {
                                                root: n.root || null,
                                                margin: n.rootMargin || ""
                                            },
                                            r = s.find((function(n) {
                                                return n.root === t.root && n.margin === t.margin
                                            }));
                                        if (r && (e = c.get(r))) return e;
                                        var i = new Map,
                                            o = new IntersectionObserver((function(n) {
                                                n.forEach((function(n) {
                                                    var e = i.get(n.target),
                                                        t = n.isIntersecting || n.intersectionRatio > 0;
                                                    e && t && e(t)
                                                }))
                                            }), n);
                                        return e = {
                                            id: t,
                                            observer: o,
                                            elements: i
                                        }, s.push(t), c.set(t, e), e
                                    }(t),
                                    i = r.id,
                                    o = r.observer,
                                    a = r.elements;
                                return a.set(n, e), o.observe(n),
                                    function() {
                                        if (a.delete(n), o.unobserve(n), 0 === a.size) {
                                            o.disconnect(), c.delete(i);
                                            var e = s.findIndex((function(n) {
                                                return n.root === i.root && n.margin === i.margin
                                            }));
                                            e > -1 && s.splice(e, 1)
                                        }
                                    }
                            }(p, (function(n) {
                                return n && f(n)
                            }), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: t
                            });
                            return n
                        }
                    } else if (!d) {
                        var r = o.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return o.cancelIdleCallback(r)
                        }
                    }
                }), [p, u, t, e, d]);
                var v = i.useCallback((function() {
                    f(!1)
                }), []);
                return [g, d, v]
            };
            var i = t(67294),
                o = t(9311),
                a = "function" === typeof IntersectionObserver,
                c = new Map,
                s = [];
            ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        89282: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return h
                }
            });
            var r = t(7297),
                i = t(85893),
                o = t(40684),
                a = t(52015),
                c = t(57698),
                s = t(93554),
                u = t(23376);

            function l() {
                var n = (0, r.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n\n  ", " {\n    line-height: 1.42;\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }
            var d = o.ZP.lib((function() {
                    return Promise.all([t.e(8699), t.e(8997)]).then(t.bind(t, 38997))
                })),
                f = a.ZP.p.withConfig({
                    componentId: "sc-1c3334c6-0"
                })(l(), (function(n) {
                    return n.theme.text.primary
                }), (function(n) {
                    switch (n.size) {
                        case s.S.NORMAL:
                            return u.JB.body;
                        case s.S.LARGE:
                            return u.JB.bodyLarge;
                        default:
                            return u.JB.body
                    }
                }), u.Ue.normal, c.BC.small),
                h = function(n) {
                    var e = n.size,
                        t = void 0 === e ? s.S.NORMAL : e,
                        r = n.stringifyHTML,
                        o = n.className,
                        a = n.children,
                        c = n.shouldNotTranslate;
                    return r ? (0, i.jsx)(f, {
                        className: o,
                        size: t,
                        translate: c ? "no" : void 0,
                        children: (0, i.jsx)(d, {
                            children: function(n) {
                                return (0, n.default)(r)
                            }
                        })
                    }) : (0, i.jsx)(f, {
                        className: o,
                        size: t,
                        translate: c ? "no" : void 0,
                        children: a
                    })
                }
        },
        93554: function(n, e, t) {
            var r;
            t.d(e, {
                    S: function() {
                        return r
                    }
                }),
                function(n) {
                    n.NORMAL = "normal", n.LARGE = "large"
                }(r || (r = {}))
        }
    }
]);