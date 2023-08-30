"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9914], {
        59914: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return dn
                }
            });
            var o = t(26042),
                r = t(69396),
                i = t(99534),
                a = t(85893),
                u = t(68120),
                s = t(5152),
                c = t.n(s),
                l = t(67294),
                d = t(4480),
                h = t(12475),
                f = t(4298),
                p = t.n(f),
                g = t(10646),
                m = t(6917),
                b = function() {
                    var n = (0, g.Vb)().enableFingerprint,
                        e = (0, m.t)();
                    return n && !e
                },
                v = (0, d.cn)({
                    key: "StytchFingerprintScriptLoadedAtom",
                    default: !1
                }),
                x = function() {
                    var n = b(),
                        e = (0, d.Zl)(v);
                    return n ? (0, a.jsx)(p(), {
                        src: "https://elements.stytch.com/telemetry.js",
                        onLoad: function() {
                            return e(!0)
                        }
                    }) : null
                },
                w = t(52118),
                k = t(11163),
                y = t(19638),
                j = t(69825),
                P = t(21426),
                Z = t(23563),
                C = t(92177),
                B = t(2507),
                _ = t(49804),
                M = t(53766),
                S = t(24622),
                F = t(23747),
                T = t(15985),
                A = t(31798),
                Y = t(52380),
                V = t(88329),
                L = t(69537),
                I = function() {
                    var n = (0, k.useRouter)().push,
                        e = (0, L.lv)().initializeABTest,
                        t = (0, g.Vb)(),
                        o = t.abYouProAnnouncementModalV2,
                        r = t.abYouPay,
                        i = t.abYouProButtonRedirectionVersion2,
                        a = "string" === typeof o && "soft" === r,
                        s = "treatment" === o && "soft" === r,
                        c = "treatment" === i ? V.k8 : Y.y4,
                        d = (0, u.O)(),
                        h = d.isVisible,
                        f = d.open,
                        p = d.close,
                        m = "true" === localStorage.getItem(A.RB),
                        b = (0, F.Z)().sendEvent,
                        v = function() {
                            b(T.j.UserClickInNonApp, {
                                actionTitle: "Closed YouPro announcement modal without navigating",
                                actionName: "click_close_x",
                                appname: "youpro_announcement_modal"
                            })
                        },
                        x = function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            n || v(), p()
                        };
                    return (0, l.useEffect)((function() {
                        s && !m && (f(), localStorage.setItem(A.RB, "true"))
                    }), [s, m]), (0, l.useEffect)((function() {
                        a && e({
                            abYouProAnnouncementModalV2: o
                        })
                    }), [a]), {
                        isVisible: h,
                        close: x,
                        navToPlans: function() {
                            b(T.j.UserClickInNonApp, {
                                actionTitle: "Click Learn More",
                                actionName: "click_learn_more",
                                appname: "youpro_announcement_modal"
                            }), x(!0), n(c), "string" === typeof i && e({
                                abYouProButtonRedirectionVersion2: i
                            })
                        }
                    }
                },
                U = ["Enhanced answers for complex queries", "Improved response accuracy and details", "Faster image generations", "Photorealistic image creation"],
                z = t(7297),
                E = t(95793),
                N = t(23376),
                R = t(3038),
                G = t(52015);

            function J() {
                var n = (0, z.Z)(["\n  ", " {\n    h3 {\n      font-size: ", ";\n      font-weight: ", ";\n      white-space: break-spaces;\n      line-height: 1.75rem;\n      letter-spacing: -0.36px;\n    }\n  }\n\n  ", " {\n    background-color: ", ";\n    max-width: 420px;\n    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.4);\n    padding: ", ";\n  }\n\n  ", " {\n    background-color: ", ";\n  }\n"]);
                return J = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, z.Z)(["\n      color: #888;\n    "]);
                return W = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, z.Z)(["\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  max-width: 300px;\n  line-height: ", ";\n  letter-spacing: -0.5px;\n\n  ", ";\n"]);
                return D = function() {
                    return n
                }, n
            }

            function $() {
                var n = (0, z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  margin-top: ", ";\n"]);
                return $ = function() {
                    return n
                }, n
            }

            function q() {
                var n = (0, z.Z)(["\n      color: ", ";\n    "]);
                return q = function() {
                    return n
                }, n
            }

            function H() {
                var n = (0, z.Z)(["\n  display: flex;\n  gap: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n\n  ", ";\n"]);
                return H = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, z.Z)(["\n  margin-top: ", ";\n"]);
                return O = function() {
                    return n
                }, n
            }
            var X = (0, G.ZP)(E.Z).withConfig({
                    componentId: "sc-276197-0"
                })(J(), E.Z.Header, N.JB.displayXXL, N.Ue.semiBold, E.Z.Wrapper, (function(n) {
                    var e = n.theme;
                    return e.darkMode ? e.backgroundPrimary : e.white
                }), N.W0.lg, E.Z.CloseButton, (function(n) {
                    return n.theme.darkMode ? N.$_.tableEvenRow : N.$_.backgroundTertiary
                })),
                K = G.ZP.span.withConfig({
                    componentId: "sc-276197-1"
                })(D(), N.Ue.lighterThanNormal, N.JB.bodyLarge, (function(n) {
                    return n.theme.darkMode ? N.$_.white : N.$_.grayscale_70
                }), N.Nv.lg, (function(n) {
                    return n.overrideText && (0, G.iv)(W())
                })),
                Q = G.ZP.div.withConfig({
                    componentId: "sc-276197-2"
                })($(), N.W0.md, N.W0.lg),
                nn = G.ZP.div.withConfig({
                    componentId: "sc-276197-3"
                })(H(), N.W0.sm, N.JB.body, N.Ue.semiBold, (function(n) {
                    return n.theme.darkMode && (0, G.iv)(q(), N.$_.backgroundTertiary)
                })),
                en = (0, G.ZP)(R.Z).withConfig({
                    componentId: "sc-276197-4"
                })(O(), N.W0.lg),
                tn = function() {
                    var n = (0, k.useRouter)().pathname,
                        e = I(),
                        t = e.isVisible,
                        o = e.close,
                        r = e.navToPlans;
                    return t ? (0, a.jsxs)(X, {
                        title: (0, a.jsx)(a.Fragment, {
                            children: "\ud83c\udf89 You.com now includes GPT\u20114 & Stable Diffusion XL"
                        }),
                        isModalOpen: !0,
                        closeActions: o,
                        children: [(0, a.jsx)(K, {
                            overrideText: "/plans" === n,
                            children: "Supercharge your searches with the latest AI writing and image models"
                        }), (0, a.jsx)(Q, {
                            children: U.map((function(n) {
                                return (0, a.jsxs)(nn, {
                                    children: [(0, a.jsx)(S.l, {
                                        src: "/app-assets/app-youpro/feature-list-check-mark.svg",
                                        height: 20,
                                        width: 20
                                    }), n]
                                }, n)
                            }))
                        }), (0, a.jsx)(en, {
                            onClick: r,
                            "data-eventactionname": "nav-to-plans",
                            children: "Learn more"
                        })]
                    }) : null
                },
                on = t(67273),
                rn = c()((function() {
                    return Promise.all([t.e(5675), t.e(6695)]).then(t.bind(t, 58827)).then((function(n) {
                        return n.MobileMenus
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [58827]
                        }
                    }
                }),
                an = c()((function() {
                    return Promise.all([t.e(6572), t.e(4101), t.e(7536), t.e(6617), t.e(1328)]).then(t.bind(t, 55350)).then((function(n) {
                        return n.AppFooter
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [55350]
                        }
                    }
                }),
                un = c()((function() {
                    return Promise.all([t.e(6572), t.e(8149)]).then(t.bind(t, 29734)).then((function(n) {
                        return n.AppButtons
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [29734]
                        }
                    }
                }),
                sn = c()((function() {
                    return Promise.all([t.e(6572), t.e(6105), t.e(5361)]).then(t.bind(t, 66579))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [66579]
                        }
                    }
                }),
                cn = c()((function() {
                    return Promise.all([t.e(6572), t.e(5675), t.e(6105), t.e(6095)]).then(t.bind(t, 98629))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [98629]
                        }
                    }
                }),
                ln = c()((function() {
                    return t.e(1182).then(t.bind(t, 41182)).then((function(n) {
                        return n.LayoutSideBar
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [41182]
                        }
                    }
                }),
                dn = function(n) {
                    var e = n.children,
                        t = n.hideTopBar,
                        s = n.hideFooter,
                        c = n.hideAside,
                        f = n.isLandingPage,
                        p = n.shouldShowSignUpForFree,
                        g = n.hideAppButtons,
                        m = (0, i.Z)(n, ["children", "hideTopBar", "hideFooter", "hideAside", "isLandingPage", "shouldShowSignUpForFree", "hideAppButtons"]);
                    ! function() {
                        var n = (0, d.sJ)(v),
                            e = (0, k.useRouter)().query.q,
                            t = b();
                        (0, l.useEffect)((function() {
                            t && n && (0, y.X)()
                        }), [e, t, n])
                    }();
                    var S = (0, l.useState)(0)[1],
                        F = (0, d.sJ)(C.z),
                        T = (0, d.sJ)(Z.t),
                        A = (0, w.P)().browserAndDeviceState,
                        Y = (0, P.$)(),
                        V = (0, j.z)(_.YG.YouChat),
                        L = (0, u.O)(),
                        I = L.isVisible,
                        U = L.toggle,
                        z = (0, u.O)(),
                        E = z.isVisible,
                        N = z.toggle,
                        R = (0, l.useCallback)((function(n) {
                            var e, t;
                            S((null === (e = null === n || void 0 === n ? void 0 : n.getClientRects()) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.top) || 0)
                        }), []);
                    return (0, a.jsxs)(on.im, (0, r.Z)((0, o.Z)({}, m), {
                        children: [(0, a.jsx)(tn, {}), Y && (0, a.jsx)(rn, {
                            toggleMobileMenu: U,
                            isMobileMenuVisible: I,
                            toggleMobileChatHistory: N,
                            isMobileChatHistoryVisible: E
                        }), (0, a.jsxs)(on.j3, {
                            style: {
                                left: (E || I) && Y ? "-".concat(h.m, "px") : "0"
                            },
                            children: [t && (0, a.jsxs)(a.Fragment, {
                                children: [!g && (0, a.jsx)(un, {}), (0, a.jsx)(sn, {
                                    isFixed: !0,
                                    shouldShowSignUpForFree: p,
                                    toggleUserDropdown: U
                                })]
                            }), !t && (0, a.jsx)(cn, {
                                isLandingPage: f,
                                toggleUserDropdown: U,
                                toggleChatHistory: N
                            }), (0, a.jsxs)(on.tz, {
                                hideTopBar: t,
                                isYouChat: V,
                                incognito: F,
                                isNudgeShown: T,
                                "data-testid": M.zrM,
                                children: [t && (0, a.jsx)(on.qw, {}), (0, a.jsxs)(on.vs, {
                                    hideTopBar: t,
                                    id: B.WF,
                                    ref: R,
                                    isYouChat: V,
                                    children: [!(t || c) && (0, a.jsx)(on.BP, {
                                        isYouChat: V,
                                        children: (0, a.jsx)(ln, {
                                            isYouChatTab: V
                                        })
                                    }), (0, a.jsx)(on.M9, {
                                        isSmallDevice: Y,
                                        hideTopBar: t,
                                        browserAndDeviceState: A,
                                        isYouChat: V,
                                        children: e
                                    })]
                                }), !(s || V) && (0, a.jsx)(an, {
                                    isLandingPage: f
                                })]
                            })]
                        }), (0, a.jsx)(x, {})]
                    }))
                }
        },
        23747: function(n, e, t) {
            var o = t(47568),
                r = t(97582),
                i = t(4480),
                a = t(92177),
                u = t(88829),
                s = t(69537);
            e.Z = function() {
                var n = (0, i.sJ)(u.F),
                    e = (0, i.sJ)(a.z),
                    t = function() {
                        var t = (0, o.Z)((function(t, o) {
                            return (0, r.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, (0, s.qP)(t, o, n, e)];
                                    case 1:
                                        return r.sent(), [2]
                                }
                            }))
                        }));
                        return function(n, e) {
                            return t.apply(this, arguments)
                        }
                    }();
                return {
                    sendEvent: t
                }
            }
        }
    }
]);