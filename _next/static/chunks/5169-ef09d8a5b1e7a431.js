"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5169], {
        57407: function(n, t, r) {
            var e, i, o;
            r.d(t, {
                    Wq: function() {
                        return o
                    },
                    e: function() {
                        return i
                    },
                    oj: function() {
                        return e
                    }
                }),
                function(n) {
                    n.LandingPage = "landing-page", n.Serp = "serp", n.Sidebar = "sidebar", n.Header = "header"
                }(e || (e = {})),
                function(n) {
                    n[n.Button = 0] = "Button", n[n.Text = 1] = "Text"
                }(i || (i = {})),
                function(n) {
                    n[n.AddToBrowserToGetStarted = 0] = "AddToBrowserToGetStarted", n[n.AddToBrowser = 1] = "AddToBrowser", n[n.Extension = 2] = "Extension"
                }(o || (o = {}))
        },
        10831: function(n, t, r) {
            r.d(t, {
                c: function() {
                    return i
                }
            });
            var e = r(5152),
                i = r.n(e)()((function() {
                    return r.e(772).then(r.bind(r, 772)).then((function(n) {
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
        76380: function(n, t, r) {
            r.d(t, {
                QB: function() {
                    return b
                },
                W2: function() {
                    return y
                },
                XQ: function() {
                    return m
                },
                gU: function() {
                    return v
                }
            });
            var e = r(7297),
                i = r(23376),
                o = r(57698),
                u = r(52015);

            function c() {
                var n = (0, e.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(", ");\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, e.Z)(["\n  position: absolute;\n  left: ", ";\n\n  ", " {\n    display: none;\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, e.Z)(["\n      animation: ", " ", ";\n    "]);
                return s = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, e.Z)(["\n      padding-right: ", ";\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, e.Z)(["\n        border: none;\n        background: none;\n        padding ", " ", " ", ";\n      "]);
                return l = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, e.Z)(["\n      ", " {\n        padding-bottom: ", ";\n      }\n\n      padding-bottom: ", ";\n    "]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, e.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: ", " 0;\n  gap: ", ";\n  min-height: ", ";\n\n  backdrop-filter: blur(20px);\n  border-top: 1px solid\n    ", ";\n  background-color: ", ";\n  z-index: ", ";\n\n  position: fixed;\n  bottom: ", ";\n  left: 0;\n\n  transition: padding 0.6s;\n\n  /* space on the left defined by Layout Left Navigation Sidebar */\n  padding-left: 68px;\n\n  ", "\n\n  ", "\n\n  ", " {\n    gap: ", ";\n\n    padding: 0 ", ";\n\n    ", "\n  }\n\n  ", "\n"]);
                return p = function() {
                    return n
                }, n
            }
            var v = "6.25rem",
                m = "584px",
                g = (0, u.F4)(c(), v),
                b = u.ZP.div.withConfig({
                    componentId: "sc-209077c6-0"
                })(a(), i.W0.lg, o.BC.xmedium),
                y = (u.ZP.div.withConfig({
                    componentId: "sc-209077c6-1"
                })(d()), u.ZP.div.withConfig({
                    componentId: "sc-209077c6-2"
                })(p(), i.W0.md, i.W0.md, (function(n) {
                    var t = n.isChromeExtensionPopup,
                        r = n.isChromeExtensionEmbedded;
                    return t && r ? "5rem" : v
                }), (function(n) {
                    return n.theme.darkMode ? "#181818" : "#e4e4e4"
                }), (function(n) {
                    return n.theme.darkMode ? "#3C3C3E99" : "#E1E1E199"
                }), i.W5.top - 2, (function(n) {
                    return n.isChromeExtensionPopup ? "1.75rem" : 0
                }), (function(n) {
                    return n.withAnimation && (0, u.iv)(s(), g, "0.6s")
                }), (function(n) {
                    return n.isPanelOpened && (0, u.iv)(f(), m)
                }), o.BC.xmedium, i.W0.sm, i.W0.sm, (function(n) {
                    var t = n.isChromeExtensionPopup,
                        r = n.isChromeExtensionEmbedded;
                    return t && (0, u.iv)(l(), i.W0.md, i.W0.md, r ? i.W0.sm : i.W0.xxxl)
                }), (function(n) {
                    var t = n.isEnabledYouPro,
                        r = n.isChromeExtensionPopup,
                        e = n.isChromeExtensionEmbedded;
                    return t && (0, u.iv)(h(), o.BC.xmedium, r ? "".concat(e ? i.W0.sm : i.W0.xxxl) : i.W0.lg, i.W0.xl)
                })))
        },
        19696: function(n, t, r) {
            r.d(t, {
                e: function() {
                    return b
                }
            });
            var e = r(26042),
                i = r(69396),
                o = r(99534),
                u = r(85893),
                c = r(41664),
                a = r.n(c),
                d = r(64027),
                s = r(47837),
                f = r(7297),
                l = r(66970),
                h = r(52015);

            function p() {
                var n = (0, f.Z)(["\n      width: auto;\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, f.Z)(["\n  width: fit-content;\n  width: -moz-fit-content;\n\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }
            var m = (0, h.ZP)(l.P).withConfig({
                    componentId: "sc-a64c1f04-0"
                })(v(), (function(n) {
                    return n.$fillAvailableWidth && (0, h.iv)(p())
                })),
                g = (0, s.a)(),
                b = function(n) {
                    var t = n.href,
                        r = n.isInternal,
                        c = void 0 !== r && r,
                        s = n.children,
                        f = n.invokeActionOnClick,
                        l = n.fillAvailableWidth,
                        h = n.shouldOpenInNewTab,
                        p = (0, o.Z)(n, ["href", "isInternal", "children", "invokeActionOnClick", "fillAvailableWidth", "shouldOpenInNewTab"]);
                    if (!g && c) {
                        var v = "string" === typeof s && d.k.includes(s);
                        return (0, u.jsx)(a(), {
                            href: t,
                            prefetch: !1,
                            passHref: !0,
                            children: (0, u.jsx)("a", (0, i.Z)((0, e.Z)({}, p), {
                                translate: v ? "no" : void 0,
                                children: s
                            }))
                        })
                    }
                    return (0, u.jsx)(m, (0, i.Z)((0, e.Z)({
                        href: t,
                        invokeActionOnClick: f,
                        $fillAvailableWidth: l,
                        shouldForceOpenInNewTab: g || h
                    }, p), {
                        children: s
                    }))
                };
            b.displayName = "YDCLink"
        },
        67273: function(n, t, r) {
            r.d(t, {
                BP: function() {
                    return L
                },
                M9: function() {
                    return _
                },
                hc: function() {
                    return z
                },
                im: function() {
                    return P
                },
                ip: function() {
                    return j
                },
                j3: function() {
                    return S
                },
                qw: function() {
                    return N
                },
                tz: function() {
                    return Y
                },
                vs: function() {
                    return A
                },
                zb: function() {
                    return T
                }
            });
            var e = r(7297),
                i = r(23376),
                o = r(57698),
                u = r(52015),
                c = r(2507),
                a = r(76380),
                d = r(12475);

            function s() {
                var n = (0, e.Z)(["\n  position: relative;\n"]);
                return s = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, e.Z)(["\n        transform: translate3d(", "px, 0, 0);\n      "]);
                return f = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, e.Z)(["\n        transform: translate3d(-", "px, 0, 0);\n      "]);
                return l = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, e.Z)(["\n  left: 0;\n  position: relative;\n  backface-visibility: hidden;\n  will-change: left, right;\n  transition: left 0.5s ease;\n\n  ", "\n"]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: calc(", " + 2px);\n  left: ", ";\n  z-index: ", ";\n  @media screen and (max-width: 1024px) {\n    visibility: hidden;\n    display: none;\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, e.Z)(["\n      justify-content: space-between;\n    "]);
                return v = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, e.Z)(["\n      padding-top: calc(\n        ", " +\n          ", "\n      );\n\n      // The top nav isn't fixed on xmedium and smaller\n      ", " {\n        margin-top: 0;\n        padding-top: 0;\n        min-height: unset;\n      }\n    "]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, e.Z)(["\n      a:visited,\n      a:visited > :is(h1, h2, h3, h4, h5, h6) {\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n        }\n      }\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, e.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n\n  a,\n  a > :is(h1, h2, h3, h4, h5, h6) {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);
                return b = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, e.Z)(["\n      ", " {\n        padding: 0;\n      }\n    "]);
                return y = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, e.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex: ", ";\n\n  ", " {\n    flex-direction: column;\n    padding: ", ";\n  }\n\n  ", " {\n    padding: 0;\n  }\n\n  ", "\n"]);
                return x = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, e.Z)(["\n      min-width: ", ";\n    "]);
                return w = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, e.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  z-index: ", ";\n  margin-bottom: ", ";\n\n  ", "\n\n  ", " {\n    display: none;\n    flex-direction: row;\n  }\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, e.Z)(["\n      /* Hide Safari's horizontal scrollbar (to fix incorrect overflow of all layers) */\n      ::-webkit-scrollbar {\n        height: 0;\n      }\n    "]);
                return C = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, e.Z)(["\n  position: relative;\n  width: 100%;\n  overflow-y: ", ";\n  /* Enable horizontal scroll to right rail on tablets */\n  overflow-x: ", ";\n\n  ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, e.Z)(["\n      cursor: pointer;\n      opacity: 1;\n      visibility: visible;\n    "]);
                return W = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, e.Z)(["\n  background: ", ";\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: opacity 0.5s ease, visibility 0.5s ease;\n  visibility: hidden;\n  width: 100%;\n  z-index: ", ";\n\n  ", "\n"]);
                return B = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, e.Z)([""]);
                return E = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, e.Z)(["\n  margin: ", " ", " ", " ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  letter-spacing: -0.28px;\n"]);
                return I = function() {
                    return n
                }, n
            }
            var P = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-0"
                })(s()),
                S = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-1"
                })(h(), (function(n) {
                    var t = n.mobileMenuOpenDirection;
                    return t === d.d.LEFT && (0, u.iv)(f(), d.m) || t === d.d.RIGHT && (0, u.iv)(l(), d.m)
                })),
                T = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-2"
                })(p(), i.W0.lg, i.W0.md, i.W5.topmost),
                Y = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-3"
                })(b(), (function(n) {
                    return n.theme.text.link
                }), (function(n) {
                    return n.theme.text.link
                }), (function(n) {
                    return n.hideTopBar && (0, u.iv)(v())
                }), (function(n) {
                    var t = n.hideTopBar,
                        r = n.isNudgeShown,
                        e = n.isYouChat;
                    return !t && (0, u.iv)(m(), e ? c.aL : c.AF, r ? "2.5rem" : "0px", o.BC.xmedium)
                }), (function(n) {
                    return !n.incognito && (0, u.iv)(g(), (function(n) {
                        return n.theme.text.linkVisited
                    }), (function(n) {
                        return n.theme.text.link
                    }))
                })),
                A = u.ZP.section.withConfig({
                    componentId: "sc-dd970417-4"
                })(x(), (function(n) {
                    return n.hideTopBar ? "none" : 1
                }), o.BC.xmedium, (function(n) {
                    return n.hideTopBar ? 0 : i.W0.md
                }), o.BC.small, (function(n) {
                    return n.isYouChat && (0, u.iv)(y(), o.BC.xmedium)
                })),
                L = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-5"
                })(Z(), i.W5.high + 2, a.gU, (function(n) {
                    return !n.isYouChat && (0, u.iv)(w(), c._)
                }), o.BC.xmedium),
                _ = u.ZP.main.withConfig({
                    componentId: "sc-dd970417-6"
                })(k(), (function(n) {
                    return n.hideTopBar ? "visible" : "hidden"
                }), (function(n) {
                    var t = n.hideTopBar,
                        r = n.isSmallDevice,
                        e = n.isYouChat;
                    return t ? "visible" : r || e ? "hidden" : "auto"
                }), (function(n) {
                    var t = n.browserAndDeviceState;
                    return (null === t || void 0 === t ? void 0 : t.isSafari) && (0, u.iv)(C())
                }), o.BC.small, (function(n) {
                    return n.isYouChat ? 0 : i.W0.md
                })),
                j = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-7"
                })(B(), (function(n) {
                    return n.theme.alphaBlack_25
                }), i.W5.top, (function(n) {
                    return n.isMobileMenuOpen && (0, u.iv)(W())
                })),
                N = u.ZP.div.withConfig({
                    componentId: "sc-dd970417-8"
                })(E()),
                z = u.ZP.h3.withConfig({
                    componentId: "sc-dd970417-9"
                })(I(), i.W0.md, i.W0.md, i.W0.xs, i.W0.md, i.Ue.semiBold, i.JB.body, i.Nv.ml)
        },
        12475: function(n, t, r) {
            r.d(t, {
                d: function() {
                    return e
                },
                m: function() {
                    return i
                }
            });
            var e, i = 302;
            ! function(n) {
                n.LEFT = "LEFT", n.RIGHT = "RIGHT"
            }(e || (e = {}))
        },
        92154: function(n, t, r) {
            r.d(t, {
                O: function() {
                    return x
                }
            });
            var e = r(47568),
                i = r(10253),
                o = r(97582),
                u = r(65961),
                c = r(9669),
                a = r.n(c),
                d = r(62286),
                s = r(67294),
                f = r(4480),
                l = r(56541),
                h = r(29769),
                p = (0, f.cn)({
                    key: h.v.UserSubscriptions,
                    default: void 0
                }),
                v = r(31679),
                m = r(60676),
                g = r(22880),
                b = function() {
                    var n = (0, e.Z)((function(n) {
                        var t, r, e, i;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    t = n.service, r = n.tier, e = {
                                        has_active_subscription: !1
                                    }, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 5]), [4, fetch("/api/payments/orders/subscriptions/check?service=".concat(t, "&tier=").concat(r))];
                                case 2:
                                    return [4, o.sent().json()];
                                case 3:
                                    return e = o.sent(), [3, 5];
                                case 4:
                                    throw i = o.sent(), new Error(i);
                                case 5:
                                    return [2, e]
                            }
                        }))
                    }));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }(),
                y = !1,
                x = function() {
                    var n, t = (0, l.a)(),
                        r = t.user,
                        c = t.isLoading,
                        h = Boolean(r),
                        x = (0, d.parseCookies)()[v.W1];
                    void 0 !== x && (n = "true" === x);
                    var w = (0, i.Z)((0, f.FV)(p), 2),
                        Z = w[0],
                        C = w[1],
                        k = (0, s.useState)(!1),
                        W = k[0],
                        B = k[1],
                        E = (0, s.useState)(!0),
                        I = E[0],
                        P = E[1],
                        S = (0, s.useState)(n || void 0),
                        T = S[0],
                        Y = S[1],
                        A = function() {
                            var n = (0, e.Z)((function() {
                                var n, t, r, e;
                                return (0, o.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (B(!0), void 0 !== Z || c || y) return [3, 6];
                                            if (y = !0, !h) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, a().get("/api/payments/orders/subscriptions/current")];
                                        case 2:
                                            return t = i.sent(), r = null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.map((function(n) {
                                                return {
                                                    service: n.service,
                                                    tier: n.tier
                                                }
                                            })), C(r || []), [3, 4];
                                        case 3:
                                            return e = i.sent(), g.Z.error("Error retrieving current subscriptions", e), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            C([]), i.label = 6;
                                        case 6:
                                            return y = !1, B(!1), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, u.L)((0, e.Z)((function() {
                        return (0, o.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return I ? [4, A()] : [3, 2];
                                case 1:
                                    n.sent(), P(!1), n.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    })), [I, c]), (0, s.useEffect)((function() {
                        if (Array.isArray(Z) && !W) {
                            var n = null === Z || void 0 === Z ? void 0 : Z.find((function(n) {
                                    return "youpro" === n.service
                                })),
                                t = Boolean(n);
                            Y(t), (0, m.lE)(v.W1, t.toString(), null, 2592e3)
                        }
                    }), [null === Z || void 0 === Z ? void 0 : Z.length, W, T]), {
                        subscriptions: Z || [],
                        isLoading: W,
                        setShouldReload: P,
                        isYouProSubscriber: T,
                        forceCheckSubscriptionOnStripe: b
                    }
                }
        },
        69825: function(n, t, r) {
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var e = r(4480),
                i = r(29087),
                o = function(n) {
                    return (0, e.sJ)(i.d3).domain === n
                }
        },
        23563: function(n, t, r) {
            r.d(t, {
                c: function() {
                    return u
                },
                t: function() {
                    return o
                }
            });
            var e = r(4480),
                i = r(29769),
                o = (0, e.cn)({
                    key: i.v.IsNudgeShown,
                    default: !1
                }),
                u = (0, e.cn)({
                    key: i.v.IsMobileFeaturedAppsShown,
                    default: !1
                })
        },
        34033: function(n, t, r) {
            r.d(t, {
                K: function() {
                    return o
                },
                b: function() {
                    return u
                }
            });
            var e = r(4480),
                i = r(29769),
                o = (0, e.cn)({
                    key: i.v.LastSearchQuery,
                    default: null
                }),
                u = (0, e.cn)({
                    key: i.v.LastSearchDomain,
                    default: null
                })
        },
        64027: function(n, t, r) {
            r.d(t, {
                k: function() {
                    return e
                }
            });
            var e = ["Pro", "Go Pro", "Sign Up", "Sign In", "Log In", "Login", "YouImagine", "YouCode", "YouSocial", "YouStudy", "YouChat", "YouPro", "YouWrite"]
        },
        88329: function(n, t, r) {
            r.d(t, {
                Ar: function() {
                    return d
                },
                FY: function() {
                    return a
                },
                JQ: function() {
                    return o
                },
                Kc: function() {
                    return e
                },
                N$: function() {
                    return s
                },
                Ng: function() {
                    return p
                },
                Ql: function() {
                    return i
                },
                Vs: function() {
                    return u
                },
                Z9: function() {
                    return f
                },
                fL: function() {
                    return m
                },
                iI: function() {
                    return l
                },
                ix: function() {
                    return h
                },
                k8: function() {
                    return v
                },
                mU: function() {
                    return c
                },
                vG: function() {
                    return g
                },
                yU: function() {
                    return b
                }
            });
            var e = "https://play.google.com/store/apps/details?id=com.you.browser",
                i = "https://blog.you.com",
                o = "https://yousearch.canny.io",
                u = "http://you.club",
                c = "mailto:hey@you.com",
                a = "https://apps.apple.com/us/app/you-com-search-and-browser/id1600782099",
                d = "https://jobs.lever.co/you",
                s = "https://twitter.com/YouSearchEngine",
                f = "https://about.you.com/default",
                l = "https://about.you.com/connect",
                h = "https://about.you.com/youpro",
                p = "https://about.you.com/youpro-gopro",
                v = "https://about.you.com/youpro-nudge",
                m = "https://about.you.com/youpro-header ",
                g = "https://about.you.com/youpro-bottom",
                b = "https://airtable.com/shrDRPGvYqEUc8sI4"
        }
    }
]);