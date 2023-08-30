"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5361], {
        57407: function(n, e, t) {
            var r, i, o;
            t.d(e, {
                    Wq: function() {
                        return o
                    },
                    e: function() {
                        return i
                    },
                    oj: function() {
                        return r
                    }
                }),
                function(n) {
                    n.LandingPage = "landing-page", n.Serp = "serp", n.Sidebar = "sidebar", n.Header = "header"
                }(r || (r = {})),
                function(n) {
                    n[n.Button = 0] = "Button", n[n.Text = 1] = "Text"
                }(i || (i = {})),
                function(n) {
                    n[n.AddToBrowserToGetStarted = 0] = "AddToBrowserToGetStarted", n[n.AddToBrowser = 1] = "AddToBrowser", n[n.Extension = 2] = "Extension"
                }(o || (o = {}))
        },
        10831: function(n, e, t) {
            t.d(e, {
                c: function() {
                    return i
                }
            });
            var r = t(5152),
                i = t.n(r)()((function() {
                    return t.e(772).then(t.bind(t, 772)).then((function(n) {
                        return n.GenericCallToActionButtons
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [772]
                        }
                    }
                })
        },
        3109: function(n, e, t) {
            t.d(e, {
                s: function() {
                    return p
                }
            });
            var r = t(85893),
                i = t(10646),
                o = t(52380),
                c = t(88329),
                u = t(69537),
                a = t(7297),
                s = t(89282),
                l = t(23376),
                d = t(52015),
                f = t(19696);

            function h() {
                var n = (0, a.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, a.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  letter-spacing: -0.15px;\n"]);
                return g = function() {
                    return n
                }, n
            }
            var v = (0, d.ZP)(f.e).withConfig({
                    componentId: "sc-f49cf201-0"
                })(h()),
                m = (0, d.ZP)(s.Z).withConfig({
                    componentId: "sc-f49cf201-1"
                })(g(), (function(n) {
                    return n.theme.text.primary
                }), l.JB.body, l.Ue.semiBold, l.Nv.ml),
                p = function() {
                    var n = (0, i.Vb)().abYouProButtonRedirectionVersion2,
                        e = (0, u.lv)().initializeABTest,
                        t = "treatment" === n,
                        a = t ? c.fL : o.y4;
                    return (0, r.jsx)(v, {
                        onClick: function() {
                            "string" === typeof n && e({
                                abYouProButtonRedirectionVersion2: n
                            })
                        },
                        href: a,
                        "data-eventtiletitle": "YouPro",
                        isInternal: !0,
                        children: (0, r.jsx)(m, {
                            shouldNotTranslate: t,
                            children: "YouPro"
                        })
                    })
                }
        },
        83056: function(n, e, t) {
            t.d(e, {
                Y: function() {
                    return c
                }
            });
            var r = t(31052),
                i = t(10646),
                o = t(11163),
                c = function() {
                    var n = (0, o.useRouter)().pathname,
                        e = (0, i.Vb)().abYouPay,
                        t = (0, r.j)(),
                        c = t.isSmallDevice,
                        u = t.isMediumDevice,
                        a = c || u,
                        s = "/" === n,
                        l = "soft" === e;
                    return {
                        shouldShowOnLeft: a && !s && l,
                        shouldShowOnRight: (!a || s) && l
                    }
                }
        },
        66579: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return _
                }
            });
            var r, i, o = t(85893),
                c = t(31052),
                u = t(11163),
                a = t(67294),
                s = t(4480),
                l = t(57407),
                d = t(27402),
                f = t(6917),
                h = t(21426),
                g = t(56541);

            function v() {
                return v = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, v.apply(this, arguments)
            }
            var m = function(n) {
                    return a.createElement("svg", v({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), a.createElement("mask", {
                        id: "Dot-Icon_svg__a",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    }, r || (r = a.createElement("path", {
                        fill: "#D9D9D9",
                        d: "M0 0h24v24H0z"
                    }))), i || (i = a.createElement("g", {
                        mask: "url(#Dot-Icon_svg__a)"
                    }, a.createElement("path", {
                        d: "M6 8c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 4 6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 6 4c.55 0 1.02.196 1.412.588C7.804 4.979 8 5.45 8 6c0 .55-.196 1.02-.588 1.412A1.923 1.923 0 0 1 6 8Zm6 12c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 10 18c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 12 16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.021-.587 1.413A1.928 1.928 0 0 1 12 20Zm-6 0c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 18c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.021-.588 1.413A1.925 1.925 0 0 1 6 20Zm0-6c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 4 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 10c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.412A1.923 1.923 0 0 1 6 14Zm6 0c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 10 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 12 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0 1 12 14Zm6-6c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 0 1 16 6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 18 4c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 18 8Zm-6 0c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 10 6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 12 4c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 12 8Zm6 6c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 0 1 16 12c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 18 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0 1 18 14Zm0 6c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 16 18c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 18 16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 20Z",
                        fill: "#4A72F5"
                    }))))
                },
                p = t(23563),
                b = t(53766),
                x = t(88329),
                w = t(7297),
                A = t(89282),
                Z = t(23376),
                j = t(52015),
                y = t(19696);

            function k() {
                var n = (0, w.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n"]);
                return k = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, w.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  letter-spacing: -0.15px;\n"]);
                return C = function() {
                    return n
                }, n
            }
            var I = (0, j.ZP)(y.e).withConfig({
                    componentId: "sc-f49cf201-0"
                })(k()),
                S = (0, j.ZP)(A.Z).withConfig({
                    componentId: "sc-f49cf201-1"
                })(C(), (function(n) {
                    return n.theme.text.primary
                }), Z.JB.body, Z.Ue.semiBold, Z.Nv.ml),
                O = function() {
                    return (0, o.jsx)(I, {
                        href: x.Vs,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-eventtiletitle": "Join discord",
                        isInternal: !0,
                        children: (0, o.jsx)(S, {
                            children: "Community"
                        })
                    })
                },
                B = t(3109),
                P = t(83056),
                M = t(6304),
                N = t(42504);
            var _ = function(n) {
                var e = n.shouldShowSignUpForFree,
                    t = n.isFixed,
                    r = n.toggleUserDropdown,
                    i = (0, u.useRouter)().pathname,
                    v = (0, s.Zl)(p.c),
                    x = (0, f.t)(),
                    w = (0, c.j)(),
                    A = w.isLargeDevice,
                    Z = w.isXLargeDevice,
                    j = "/" === i,
                    y = (0, P.Y)().shouldShowOnRight,
                    k = (0, a.useMemo)((function() {
                        return A || Z
                    }), [A, Z]),
                    C = (0, g.a)(),
                    I = C.user,
                    S = C.isLoading,
                    _ = Boolean(I),
                    E = (0, h.$)();
                return S ? null : (0, o.jsxs)(N.Yr, {
                    isFixed: t,
                    $isIncognito: x,
                    children: [(0, o.jsxs)(N.qO, {
                        children: [y && (0, o.jsx)(B.s, {}), k && (0, o.jsx)(O, {}), (0, o.jsx)(N.aw, {
                            isAddBrowserExtensionSectionEnabled: !0,
                            buttonLocation: l.oj.Header
                        }), !_ && (0, o.jsx)(d.Z, {
                            shouldShowSignUpForFree: e
                        }), (0, o.jsx)("div", {
                            onClick: E && r ? r : void 0,
                            "data-testid": b.kCn,
                            children: (0, o.jsx)(N.wn, {
                                hasUser: Boolean(I),
                                $isIncognito: x,
                                hasCaret: !E,
                                isUserDropdown: !0,
                                title: (0, o.jsx)(M.S, {
                                    user: I,
                                    isIncognito: x
                                }),
                                isUserSection: !0,
                                listPosition: E ? "left" : "right",
                                isMobile: E
                            })
                        })]
                    }), (0, o.jsx)(N.oI, {
                        isSmallDevice: E,
                        onClick: function() {
                            return v((function(n) {
                                return !n
                            }))
                        },
                        "data-eventactionname": "click_featured_apps",
                        isVisible: E && j,
                        "data-testid": b.Qjp,
                        children: (0, o.jsx)(m, {})
                    })]
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
                c = t(85893),
                u = t(41664),
                a = t.n(u),
                s = t(64027),
                l = t(47837),
                d = t(7297),
                f = t(66970),
                h = t(52015);

            function g() {
                var n = (0, d.Z)(["\n      width: auto;\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, d.Z)(["\n  width: fit-content;\n  width: -moz-fit-content;\n\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }
            var m = (0, h.ZP)(f.P).withConfig({
                    componentId: "sc-a64c1f04-0"
                })(v(), (function(n) {
                    return n.$fillAvailableWidth && (0, h.iv)(g())
                })),
                p = (0, l.a)(),
                b = function(n) {
                    var e = n.href,
                        t = n.isInternal,
                        u = void 0 !== t && t,
                        l = n.children,
                        d = n.invokeActionOnClick,
                        f = n.fillAvailableWidth,
                        h = n.shouldOpenInNewTab,
                        g = (0, o.Z)(n, ["href", "isInternal", "children", "invokeActionOnClick", "fillAvailableWidth", "shouldOpenInNewTab"]);
                    if (!p && u) {
                        var v = "string" === typeof l && s.k.includes(l);
                        return (0, c.jsx)(a(), {
                            href: e,
                            prefetch: !1,
                            passHref: !0,
                            children: (0, c.jsx)("a", (0, i.Z)((0, r.Z)({}, g), {
                                translate: v ? "no" : void 0,
                                children: l
                            }))
                        })
                    }
                    return (0, c.jsx)(m, (0, i.Z)((0, r.Z)({
                        href: e,
                        invokeActionOnClick: d,
                        $fillAvailableWidth: f,
                        shouldForceOpenInNewTab: p || h
                    }, g), {
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
                    s = n.disabled || !c,
                    l = r(i.useState(!1), 2),
                    d = l[0],
                    f = l[1],
                    h = r(i.useState(null), 2),
                    g = h[0],
                    v = h[1];
                i.useEffect((function() {
                    if (c) {
                        if (s || d) return;
                        if (g && g.tagName) {
                            var n = function(n, e, t) {
                                var r = function(n) {
                                        var e, t = {
                                                root: n.root || null,
                                                margin: n.rootMargin || ""
                                            },
                                            r = a.find((function(n) {
                                                return n.root === t.root && n.margin === t.margin
                                            }));
                                        if (r && (e = u.get(r))) return e;
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
                                        }, a.push(t), u.set(t, e), e
                                    }(t),
                                    i = r.id,
                                    o = r.observer,
                                    c = r.elements;
                                return c.set(n, e), o.observe(n),
                                    function() {
                                        if (c.delete(n), o.unobserve(n), 0 === c.size) {
                                            o.disconnect(), u.delete(i);
                                            var e = a.findIndex((function(n) {
                                                return n.root === i.root && n.margin === i.margin
                                            }));
                                            e > -1 && a.splice(e, 1)
                                        }
                                    }
                            }(g, (function(n) {
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
                }), [g, s, t, e, d]);
                var m = i.useCallback((function() {
                    f(!1)
                }), []);
                return [v, d, m]
            };
            var i = t(67294),
                o = t(9311),
                c = "function" === typeof IntersectionObserver,
                u = new Map,
                a = [];
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
                c = t(52015),
                u = t(57698),
                a = t(93554),
                s = t(23376);

            function l() {
                var n = (0, r.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n\n  ", " {\n    line-height: 1.42;\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }
            var d = o.ZP.lib((function() {
                    return Promise.all([t.e(8699), t.e(8997)]).then(t.bind(t, 38997))
                })),
                f = c.ZP.p.withConfig({
                    componentId: "sc-1c3334c6-0"
                })(l(), (function(n) {
                    return n.theme.text.primary
                }), (function(n) {
                    switch (n.size) {
                        case a.S.NORMAL:
                            return s.JB.body;
                        case a.S.LARGE:
                            return s.JB.bodyLarge;
                        default:
                            return s.JB.body
                    }
                }), s.Ue.normal, u.BC.small),
                h = function(n) {
                    var e = n.size,
                        t = void 0 === e ? a.S.NORMAL : e,
                        r = n.stringifyHTML,
                        o = n.className,
                        c = n.children,
                        u = n.shouldNotTranslate;
                    return r ? (0, i.jsx)(f, {
                        className: o,
                        size: t,
                        translate: u ? "no" : void 0,
                        children: (0, i.jsx)(d, {
                            children: function(n) {
                                return (0, n.default)(r)
                            }
                        })
                    }) : (0, i.jsx)(f, {
                        className: o,
                        size: t,
                        translate: u ? "no" : void 0,
                        children: c
                    })
                }
        },
        81268: function(n, e, t) {
            t.d(e, {
                e: function() {
                    return u
                }
            });
            var r = t(26042),
                i = t(99534),
                o = t(85893),
                c = t(12482),
                u = function(n) {
                    var e = n.src,
                        t = n.loading,
                        u = void 0 === t ? "lazy" : t,
                        a = n.shouldBypassProxy,
                        s = void 0 !== a && a,
                        l = (0, i.Z)(n, ["src", "loading", "shouldBypassProxy"]),
                        d = s ? e : (0, c.g)(e);
                    return (0, o.jsx)("img", (0, r.Z)({
                        loading: u,
                        src: d
                    }, l))
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
        },
        33685: function(n, e, t) {
            var r;
            t.d(e, {
                    Y: function() {
                        return r
                    }
                }),
                function(n) {
                    n.Close = "close", n.Discord = "discord", n.Extension = "extension", n.Expand = "expand", n.Gear = "gear", n.Grid = "grid", n.HamburgerMenu = "hamburgerMenu", n.Lightning = "lightning", n.NarrowArrow = "narrowArrow"
                }(r || (r = {}))
        },
        22438: function(n, e, t) {
            t.d(e, {
                J: function() {
                    return x
                }
            });
            var r, i = t(14924),
                o = t(85893),
                c = t(40684),
                u = t(67294),
                a = t(33685),
                s = (0, c.Vo)((function() {
                    return t.e(9940).then(t.bind(t, 69940))
                })),
                l = (0, c.Vo)((function() {
                    return t.e(4838).then(t.bind(t, 36641))
                })),
                d = (0, c.Vo)((function() {
                    return t.e(5570).then(t.bind(t, 85570))
                })),
                f = (0, c.Vo)((function() {
                    return t.e(3923).then(t.bind(t, 93923))
                })),
                h = (0, c.Vo)((function() {
                    return t.e(3276).then(t.bind(t, 33276))
                })),
                g = (0, c.Vo)((function() {
                    return t.e(7876).then(t.bind(t, 87876))
                })),
                v = (0, c.Vo)((function() {
                    return t.e(6181).then(t.bind(t, 36181))
                })),
                m = (0, c.Vo)((function() {
                    return t.e(2849).then(t.bind(t, 2849))
                })),
                p = (0, c.Vo)((function() {
                    return t.e(2573).then(t.bind(t, 92573))
                })),
                b = (r = {}, (0, i.Z)(r, a.Y.Close, s), (0, i.Z)(r, a.Y.Discord, l), (0, i.Z)(r, a.Y.Extension, d), (0, i.Z)(r, a.Y.Expand, f), (0, i.Z)(r, a.Y.Gear, h), (0, i.Z)(r, a.Y.Grid, g), (0, i.Z)(r, a.Y.HamburgerMenu, v), (0, i.Z)(r, a.Y.Lightning, m), (0, i.Z)(r, a.Y.NarrowArrow, p), r),
                x = function(n) {
                    var e = n.type,
                        t = n.height,
                        r = n.width,
                        i = n.backgroundColor,
                        c = n.color,
                        a = void 0 === c ? "#F8F8F8" : c,
                        s = n.colorSecondary,
                        l = n.className,
                        d = n.onClick,
                        f = b[e],
                        h = function() {
                            return (0, o.jsx)(o.Fragment, {})
                        };
                    return f ? (0, o.jsx)(u.Suspense, {
                        fallback: (0, o.jsx)(h, {}),
                        children: (0, o.jsx)(f, {
                            height: t,
                            width: r,
                            backgroundColor: i,
                            color: a,
                            colorSecondary: s,
                            className: l,
                            onClick: d
                        })
                    }) : null
                }
        }
    }
]);