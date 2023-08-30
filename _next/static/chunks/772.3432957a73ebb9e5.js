"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [772], {
        42275: function(n, e, t) {
            t.d(e, {
                T: function() {
                    return f
                },
                W: function() {
                    return m
                }
            });
            var r = t(7297),
                i = t(23376),
                o = t(24622),
                a = t(52015),
                c = t(57407);

            function d() {
                var n = (0, r.Z)(["\n      border: none;\n      background: none;\n      font-size: ", ";\n      color: ", ";\n      padding: 0;\n      justify-content: flex-start;\n    "]);
                return d = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, r.Z)(["\n      display: none;\n    "]);
                return l = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, r.Z)(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  letter-spacing: -0.15px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: ", ";\n  border: 1px solid rgba(21, 21, 110, 0.08);\n\n  padding: ", " ", ";\n\n  color: ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", "\n"]);
                return s = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, r.Z)(["\n  margin-right: ", ";\n\n  width: 20px;\n  height: 20px;\n"]);
                return u = function() {
                    return n
                }, n
            }
            var m = a.ZP.div.withConfig({
                    componentId: "sc-e244a64c-0"
                })(s(), i.JB.body, i.Ue.semiBold, i.Nv.ml, i.E0.xl, i.W0.xs, i.W0.md, (function(n) {
                    return n.theme.text.primary
                }), (function(n) {
                    return n.theme.darkMode ? i.eE.backgroundTertiary : i.$_.white
                }), (function(n) {
                    return n.variant === c.e.Text && (0, a.iv)(d(), i.JB.caption, (function(n) {
                        return n.theme.text.secondary
                    }))
                }), (function(n) {
                    return n.isMobile && (0, a.iv)(l())
                })),
                f = (0, a.ZP)(o.l).withConfig({
                    componentId: "sc-e244a64c-1"
                })(u(), i.W0.xs)
        },
        772: function(n, e, t) {
            t.r(e), t.d(e, {
                GenericCallToActionButtons: function() {
                    return gn
                }
            });
            var r, i = t(14924),
                o = t(85893),
                a = t(67294),
                c = t(52118),
                d = t(19696),
                l = t(24622),
                s = t(79468),
                u = function() {
                    var n = (0, c.P)().browserAndDeviceState;
                    if (!n) return null;
                    var e = (null === n || void 0 === n ? void 0 : n.isAndroid) ? {
                            url: s.Cb,
                            button: (0, o.jsx)(l.l, {
                                src: "/images/serp-module/google-play-store_CTA.svg",
                                alt: "Download from Google Play Button"
                            })
                        } : {
                            url: s.l5,
                            button: (0, o.jsx)(l.l, {
                                src: "/images/serp-module/apple_store_download_CTA_dark.svg",
                                alt: "Download from App Store Button"
                            })
                        },
                        t = (null === n || void 0 === n ? void 0 : n.isAndroid) ? "Google Play" : "App Store";
                    return (0, o.jsx)(d.e, {
                        href: e.url,
                        "data-eventtiletitle": "Download from ".concat(t, " Button"),
                        children: e.button
                    })
                },
                m = t(57407),
                f = t(26042),
                p = t(15985),
                g = t(17962),
                v = t(23747),
                h = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = (0, v.Z)().sendEvent,
                        t = function() {
                            var t = "Click Make Default",
                                r = (0, f.Z)({
                                    appname: "make_default_landing_page_cta",
                                    actionTitle: t,
                                    actionName: (0, g.K)(t)
                                }, n);
                            e(p.j.UserClickInNonApp, r)
                        };
                    return {
                        sendClickMakeDefaultEvent: t
                    }
                },
                b = (r = {}, (0, i.Z)(r, m.Wq.Extension, "Extension"), (0, i.Z)(r, m.Wq.AddToBrowser, "Add to {{browserName}}"), (0, i.Z)(r, m.Wq.AddToBrowserToGetStarted, "Add You.com to {{browserName}} to get started"), r),
                x = t(42275),
                _ = function(n) {
                    var e = n.iconSrc,
                        t = n.extensionUrl,
                        r = n.browserName,
                        i = n.browserAndDeviceState,
                        a = n.variant,
                        c = void 0 === a ? m.e.Button : a,
                        l = n.textVariant,
                        s = void 0 === l ? m.Wq.AddToBrowserToGetStarted : l,
                        f = n.hideOnMobile,
                        p = n.eventData,
                        g = n.shouldOpenInNewTab,
                        v = h(p).sendClickMakeDefaultEvent,
                        _ = null === i || void 0 === i ? void 0 : i.isMobile,
                        w = b[s].replace("{{browserName}}", r);
                    return f && _ ? null : (0, o.jsxs)(d.e, {
                        href: t,
                        invokeActionOnClick: v,
                        onContextMenu: v,
                        "data-eventtiletitle": "Add to ".concat(r, " Button"),
                        shouldOpenInNewTab: g,
                        children: [_ && (0, o.jsx)(u, {}), (0, o.jsxs)(x.W, {
                            isMobile: _,
                            variant: c,
                            children: [e && (0, o.jsx)(x.T, {
                                src: e,
                                alt: r
                            }), w]
                        })]
                    })
                },
                w = t(31052),
                I = t(52015),
                L = t(2135),
                E = t(4207),
                D = t(31798),
                T = function() {
                    var n = (0, I.Fg)().darkMode,
                        e = (0, c.P)().browserAndDeviceState,
                        t = n ? "/images/serp-module/dark_mode_browser_graphic.png" : "/images/serp-module/light_mode_browser_graphic.png",
                        r = (null === e || void 0 === e ? void 0 : e.isAndroid) && n ? "/images/serp-module/dark_mode_android_phone.png" : "/images/serp-module/light_mode_android_phone.png",
                        i = (null === e || void 0 === e ? void 0 : e.isSafari) && n ? "/images/serp-module/dark_mode_iPhone_11_Pro.png" : "/images/serp-module/iPhone-11-Pro.png";
                    return {
                        browserGraphicSrc: t,
                        mobileGraphicSrc: (null === e || void 0 === e ? void 0 : e.isSafari) ? i : r
                    }
                },
                M = t(7297),
                A = t(23376),
                Z = t(3038),
                k = t(57698);

            function y() {
                var n = (0, M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  margin-top: min(\n    5vh,\n    ", "\n  );\n"]);
                return y = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, M.Z)(["\n  white-space: nowrap;\n  border-radius: 3.125rem;\n  margin: 0 ", " 0 0;\n  padding: ", " ", " ", " ", ";\n\n  ", " {\n    display: none;\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, M.Z)(["\n  margin-right: ", ";\n\n  width: 20px;\n  height: 20px;\n"]);
                return R = function() {
                    return n
                }, n
            }
            var P = I.ZP.div.withConfig({
                    componentId: "sc-86d96672-0"
                })(y(), (function(n) {
                    return n.isSmallDevice ? A.W0.md : A.W0.xs
                })),
                S = (0, I.ZP)(Z.Z).withConfig({
                    componentId: "sc-86d96672-1"
                })(C(), A.W0.xs, A.W0.xs, A.W0.sm, A.W0.xs, A.W0.xs, k.BC.small),
                j = I.ZP.img.withConfig({
                    componentId: "sc-86d96672-2"
                })(R(), A.W0.xs),
                G = function(n) {
                    var e = n.iconSrc,
                        t = n.isSmallDevice,
                        r = (0, c.P)(),
                        i = r.extensionUrl,
                        a = r.browserName,
                        l = h().sendClickMakeDefaultEvent,
                        s = t ? "appstore-button" : "extension-button",
                        m = (0, o.jsxs)(S, {
                            "data-eventactionname": "add_to_browser",
                            children: [(0, o.jsx)(j, {
                                src: e,
                                alt: a
                            }), "Add to ", a, " - it's free!"]
                        });
                    return t ? (0, o.jsx)(P, {
                        "data-testid": s,
                        isSmallDevice: t,
                        children: (0, o.jsx)(u, {})
                    }) : (0, o.jsx)(d.e, {
                        href: i,
                        invokeActionOnClick: l,
                        "data-eventtiletitle": "Add to ".concat(a, " Button"),
                        children: (0, o.jsx)(P, {
                            "data-testid": s,
                            isSmallDevice: t,
                            children: m
                        })
                    })
                },
                B = t(38111);

            function U() {
                var n = (0, M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin-top: ", ";\n  }\n"]);
                return U = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return W = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, M.Z)(["\n  ", " {\n    font-size: ", ";\n  }\n"]);
                return N = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, M.Z)(["\n  color: ", ";\n  margin-top: ", ";\n  white-space: nowrap;\n  font-size: ", ";\n\n  ", " {\n    font-size: ", ";\n  }\n\n  ", " {\n    letter-spacing: -0.5px;\n    white-space: normal;\n  }\n\n  ", " {\n    padding: ", " ", " 1.69rem;\n    text-align: center;\n    max-width: 328px;\n  }\n"]);
                return O = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, M.Z)(["\n  ", " {\n    display: none;\n  }\n  ", " {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);
                return z = function() {
                    return n
                }, n
            }
            var q = I.ZP.div.withConfig({
                    componentId: "sc-233bb85c-0"
                })(U(), k.BC.xmedium, k.BC.small, A.W0.sm),
                H = I.ZP.div.withConfig({
                    componentId: "sc-233bb85c-1"
                })(W()),
                F = (0, I.ZP)(B.Z).withConfig({
                    componentId: "sc-233bb85c-2"
                })(N(), k.BC.xmedium, A.JB.bodyLarge),
                J = I.ZP.p.withConfig({
                    componentId: "sc-233bb85c-3"
                })(O(), (function(n) {
                    return n.theme.darkMode ? A.eE.text.secondary : A.$_.text.secondary
                }), A.W0.xxs, A.JB.body, k.BC.mlg, A.JB.body, k.BC.xmedium, k.BC.small, A.W0.xxs, A.W0.xxs),
                X = (0, I.ZP)(l.l).withConfig({
                    componentId: "sc-233bb85c-4"
                })(z(), k.BC.xlarge, k.BC.small),
                V = function(n) {
                    var e = n.iconSrc,
                        t = n.isSmallDevice,
                        r = T().mobileGraphicSrc,
                        i = t ? "Search, chat, and create with AI" : "Accomplish more with AI \u2728",
                        a = t ? "Use cutting-edge AI to get answers instantly and accomplish more while browsing privately" : "Use AI to search, chat, and create from your URL bar";
                    return (0, o.jsxs)(q, {
                        children: [(0, o.jsx)(F, {
                            children: i
                        }), (0, o.jsx)(J, {
                            children: a
                        }), t && (0, o.jsx)(X, {
                            src: r
                        }), (0, o.jsx)(H, {
                            children: (0, o.jsx)(G, {
                                isSmallDevice: t,
                                iconSrc: e
                            })
                        })]
                    })
                },
                $ = t(81265),
                K = t(53766);

            function Q() {
                var n = (0, M.Z)(["\n  position: absolute;\n  right: 1.5rem;\n  top: ", ";\n\n  cursor: pointer;\n\n  ", " {\n    right: ", ";\n    top: ", ";\n  }\n"]);
                return Q = function() {
                    return n
                }, n
            }
            var Y = I.ZP.div.withConfig({
                    componentId: "sc-67af7e33-0"
                })(Q(), A.W0.ml, k.BC.xmedium, A.W0.sl, A.W0.sl),
                nn = function(n) {
                    var e = n.handleCloseButtonClick;
                    return (0, o.jsx)(Y, {
                        "data-testid": K.ebA,
                        "data-eventname": p.j.UserClickInNonApp,
                        "data-eventactiontitle": "Click Close Button",
                        "data-eventappname": "signup module",
                        "data-eventapptitle": "SignUpModule",
                        children: (0, o.jsx)($.P, {
                            "data-eventactionname": "click_close_button",
                            onClick: e,
                            style: {
                                backgroundColor: "transparent"
                            }
                        })
                    })
                },
                en = t(88469),
                tn = t(70189);

            function rn() {
                var n = (0, M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  position: relative;\n\n  background-size: cover;\n  background-repeat: no-repeat !important;\n  background: ", ";\n  background-image: url(", ");\n\n  margin: ", " 0;\n  padding: ", " 30px;\n  border-radius: ", ";\n  border: 1px solid rgba(22, 22, 117, 0.15);\n  max-width: 946px;\n\n  @media (min-width: ", ") {\n    width: 368px;\n  }\n\n  @media (min-width: ", ") {\n    width: unset;\n    height: 152px;\n  }\n\n  ", " {\n    margin: ", " 0 ", ";\n    flex-direction: column;\n    padding: ", ';\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url("', '/images/serp-module/default_mobile_bg_img.png");\n  }\n\n  ', ' {\n    width: 92vw;\n    background-size: cover;\n    background-image: url("', '/images/serp-module/default_mobile_bg_img.png");\n  }\n\n  // remove the top border of the following search result\n  // if it is an app\n  + div {\n    [data-type="app"] {\n      border-top: none;\n    }\n  }\n']);
                return rn = function() {
                    return n
                }, n
            }

            function on() {
                var n = (0, M.Z)(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n"]);
                return on = function() {
                    return n
                }, n
            }

            function an() {
                var n = (0, M.Z)(["\n  margin-right: ", ";\n\n  width: 20px;\n  height: 20px;\n"]);
                return an = function() {
                    return n
                }, n
            }

            function cn() {
                var n = (0, M.Z)(["\n  position: absolute;\n  right: -2.5rem;\n  bottom: 0;\n  z-index: -1;\n"]);
                return cn = function() {
                    return n
                }, n
            }
            var dn = (0, I.ZP)(en.a).withConfig({
                    componentId: "sc-1e466635-0"
                })(rn(), (function(n) {
                    return n.theme.darkMode ? "#313135" : A.$_.white
                }), (function(n) {
                    var e = n.appTileBackground;
                    return "".concat(tn.qn, "/").concat(e)
                }), A.W0.sm, A.W0.lg, A.E0.md, k.eq.small, k.eq.xmedium, k.BC.xmedium, A.W0.lg, A.W0.lg, A.W0.lg, tn.qn, k.BC.small, tn.qn),
                ln = I.ZP.div.withConfig({
                    componentId: "sc-1e466635-1"
                })(on()),
                sn = (I.ZP.img.withConfig({
                    componentId: "sc-1e466635-2"
                })(an(), A.W0.xs), (0, I.ZP)(l.l).withConfig({
                    componentId: "sc-1e466635-3"
                })(cn())),
                un = function(n) {
                    var e = n.iconSrc,
                        t = (0, I.Fg)().darkMode,
                        r = (0, L.l)().isLoggedIn,
                        i = (0, w.j)(),
                        d = i.isSmallDevice,
                        l = i.isLargeDevice,
                        s = i.isXLargeDevice,
                        u = T(),
                        m = u.browserGraphicSrc,
                        f = u.mobileGraphicSrc,
                        p = (0, c.P)(),
                        g = p.extensionUrl,
                        v = p.browserName,
                        h = p.browserAndDeviceState,
                        b = (0, a.useState)(!0),
                        x = b[0],
                        _ = b[1],
                        M = (0, E.R)(D.sr, !1),
                        A = M.local,
                        Z = M.setLocal;
                    if (r || !x || A) return null;
                    var k = t ? "images/serp-module/default_chrome_extension_dark_bg_theme.png" : "images/serp-module/default_chrome_extension_light_bg_theme.png",
                        y = (null === h || void 0 === h ? void 0 : h.isMobile) ? f : m,
                        C = l || s;
                    return (0, o.jsxs)(dn, {
                        appTileBackground: k,
                        children: [(0, o.jsx)(V, {
                            iconSrc: e,
                            extensionUrl: g,
                            isSmallDevice: d,
                            browserName: v
                        }), C && (0, o.jsx)(ln, {
                            children: (0, o.jsx)(sn, {
                                src: y
                            })
                        }), (0, o.jsx)(nn, {
                            handleCloseButtonClick: function() {
                                _(!1), Z(!0)
                            }
                        })]
                    })
                };

            function mn() {
                var n = (0, M.Z)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-top: ", ";\n    "]);
                return mn = function() {
                    return n
                }, n
            }

            function fn() {
                var n = (0, M.Z)(["\n  &:empty {\n    display: none;\n  }\n\n  ", "\n"]);
                return fn = function() {
                    return n
                }, n
            }
            var pn = I.ZP.div.withConfig({
                    componentId: "sc-42f19d8d-0"
                })(fn(), (function(n) {
                    var e = n.buttonLocation,
                        t = n.isMobile;
                    return (e === m.oj.LandingPage || t) && (0, I.iv)(mn(), A.W0.md)
                })),
                gn = function(n) {
                    var e = n.buttonLocation,
                        t = n.isAddBrowserExtensionSectionEnabled,
                        r = n.className,
                        d = (0, c.P)(),
                        l = d.extensionUrl,
                        s = d.browserAndDeviceState,
                        u = d.isExtensionInstalled,
                        f = d.browserName,
                        p = (null === s || void 0 === s ? void 0 : s.isMobile) ? "appstore-button" : "extension-button",
                        g = (0, a.useMemo)((function() {
                            return "/images/browser-icons/".concat("your browser" === f ? "default" : f.toLowerCase(), ".png")
                        }), [f]),
                        v = (0, a.useMemo)((function() {
                            var n;
                            return n = {}, (0, i.Z)(n, m.oj.LandingPage, (0, o.jsx)(_, {
                                iconSrc: g,
                                extensionUrl: l,
                                browserName: f,
                                browserAndDeviceState: s
                            })), (0, i.Z)(n, m.oj.Sidebar, (0, o.jsx)(_, {
                                iconSrc: g,
                                extensionUrl: l,
                                browserName: f,
                                browserAndDeviceState: s,
                                variant: m.e.Text,
                                textVariant: m.Wq.AddToBrowser,
                                eventData: {
                                    appname: "make_default_from_youchat_page_cta"
                                },
                                hideOnMobile: !0,
                                shouldOpenInNewTab: !0
                            })), (0, i.Z)(n, m.oj.Header, (0, o.jsx)(_, {
                                extensionUrl: l,
                                browserName: f,
                                browserAndDeviceState: s,
                                variant: m.e.Text,
                                textVariant: m.Wq.Extension,
                                eventData: {
                                    appname: "make_default_from_youchat_page_cta"
                                },
                                hideOnMobile: !0,
                                shouldOpenInNewTab: "Firefox" !== f
                            })), (0, i.Z)(n, m.oj.Serp, (0, o.jsx)(un, {
                                iconSrc: g
                            })), n
                        }), [s, f, l, g]);
                    return (null === s || void 0 === s ? void 0 : s.isYouBrowser) || [m.oj.LandingPage, m.oj.Header].includes(e) && (!t || u) ? null : (0, o.jsx)(pn, {
                        "data-testid": p,
                        isMobile: null === s || void 0 === s ? void 0 : s.isMobile,
                        buttonLocation: e,
                        className: r,
                        children: v[e]
                    })
                }
        },
        2135: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return i
                }
            });
            var r = t(56541),
                i = function() {
                    var n = (0, r.a)().user;
                    return {
                        isLoggedIn: Boolean(n)
                    }
                }
        },
        23747: function(n, e, t) {
            var r = t(47568),
                i = t(97582),
                o = t(4480),
                a = t(92177),
                c = t(88829),
                d = t(69537);
            e.Z = function() {
                var n = (0, o.sJ)(c.F),
                    e = (0, o.sJ)(a.z),
                    t = function() {
                        var t = (0, r.Z)((function(t, r) {
                            return (0, i.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, (0, d.qP)(t, r, n, e)];
                                    case 1:
                                        return i.sent(), [2]
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
        },
        88469: function(n, e, t) {
            t.d(e, {
                a: function() {
                    return w
                }
            });
            var r = t(26042),
                i = t(69396),
                o = t(99534),
                a = t(85893),
                c = t(67294),
                d = t(70189),
                l = t(31332),
                s = t(7297),
                u = t(52015),
                m = t(57698),
                f = t(23376),
                p = t(32802);

            function g() {
                var n = (0, s.Z)(["\n        pointer-events: none;\n      "]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, s.Z)(['\n      &:after {\n        content: "";\n        z-index: ', ";\n        display: block;\n        position: absolute;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: ", ";\n      }\n\n      ", "\n    "]);
                return v = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, s.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow: hidden;\n\n  width: ", ";\n  height: ", ";\n  z-index: ", ";\n\n  box-sizing: border-box;\n  padding: ", ";\n  margin: 2px 0;\n  border: 1px solid rgba(22, 22, 117, 0.15);\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: 0px 1px 2px ", ",\n    0px 0px 1px ", ";\n\n  &:active {\n    cursor: grabbing;\n    border: 1px solid ", ";\n  }\n\n  &:hover {\n    box-shadow: 0px 12px 33px rgba(0, 0, 0, 0.12);\n  }\n\n  &:focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n\n  // TODO - should we follow this pattern with grabbing cursor?\n  cursor: grab;\n\n  // reset all elements cursor\n  * :not(div) {\n    cursor: auto;\n  }\n\n  button,\n  a,\n  a * {\n    cursor: pointer;\n  }\n\n  ", " {\n    height: ", ";\n    max-height: 90vh;\n    max-width: 100%;\n    width: ", ";\n  }\n\n  ", "\n"]);
                return h = function() {
                    return n
                }, n
            }
            var b = f.W5.bottom,
                x = {
                    base: b,
                    disabledOverlay: b + 1,
                    disabledOverlayText: b + 2
                },
                _ = u.ZP.div.withConfig({
                    componentId: "sc-2c96f945-0"
                })(h(), (function(n) {
                    var e = n.width;
                    return (0, p.rV)(e)
                }), (function(n) {
                    var e = n.height;
                    return (0, p.cK)(e)
                }), x.base, (function(n) {
                    return n.withPadding ? f.W0.md : 0
                }), f.E0.md, (function(n) {
                    return n.theme.tableOddRow
                }), f.$_.alphaBlack_10, f.$_.alphaBlack_15, (function(n) {
                    return n.theme.primary
                }), (function(n) {
                    return n.theme.primary
                }), m.BC.small, (function(n) {
                    var e = n.height;
                    return (0, p.yc)(e)
                }), (function(n) {
                    var e = n.width;
                    return (0, p.HH)(e)
                }), (function(n) {
                    var e = n.isDisabled,
                        t = n.allowDisabledClick,
                        r = n.theme;
                    return e && (0, u.iv)(v(), x.disabledOverlay, r.alphaWhite_50, !t && (0, u.iv)(g()))
                })),
                w = (0, c.forwardRef)((function(n, e) {
                    var t = n.width,
                        c = void 0 === t ? l.c.GRID_TILE_MEDIUM_LARGE : t,
                        s = n.height,
                        u = void 0 === s ? l.MP.AUTO : s,
                        m = n.tag,
                        f = void 0 === m ? l.Qy.LI : m,
                        p = n.withPadding,
                        g = void 0 === p || p,
                        v = n.dataTestId,
                        h = void 0 === v ? "" : v,
                        b = n.dataEventTilePosition,
                        x = void 0 === b ? "" : b,
                        w = n.dataEventTileTitle,
                        I = void 0 === w ? "" : w,
                        L = n.className,
                        E = n.children,
                        D = n.isDisabled,
                        T = void 0 !== D && D,
                        M = n.allowDisabledClick,
                        A = void 0 !== M && M,
                        Z = (0, o.Z)(n, ["width", "height", "tag", "withPadding", "dataTestId", "dataEventTilePosition", "dataEventTileTitle", "className", "children", "isDisabled", "allowDisabledClick"]),
                        k = ["app-tile", L].filter(Boolean).join(" "),
                        y = {
                            listStyleType: f === l.Qy.LI && "none"
                        };
                    return (0, a.jsx)(_, (0, i.Z)((0, r.Z)({
                        ref: e,
                        as: f,
                        className: k,
                        width: c,
                        height: u,
                        withPadding: g,
                        "data-type": d.lU,
                        "data-testid": h,
                        tabIndex: 0,
                        style: y,
                        "data-eventtileposition": x,
                        "data-eventtiletitle": I,
                        isDisabled: T,
                        allowDisabledClick: A,
                        "aria-disabled": T && !A
                    }, Z), {
                        children: E
                    }))
                }));
            w.displayName = "AppTile"
        },
        32802: function(n, e, t) {
            t.d(e, {
                cK: function() {
                    return a
                },
                yc: function() {
                    return c
                },
                rV: function() {
                    return d
                },
                HH: function() {
                    return l
                }
            });
            var r = t(14924),
                i = t(31332),
                o = "18.75rem",
                a = function(n) {
                    var e = 21.875;
                    switch (n) {
                        case i.MP.AUTO:
                            return "auto";
                        case i.MP.SHORT:
                            return "".concat(10.9375, "rem");
                        case i.MP.MEDIUM:
                            return "".concat(e / 1.3, "rem");
                        case i.MP.NORMAL:
                            return "".concat(e, "rem");
                        case i.MP.TALL:
                            return "".concat(32.8125, "rem");
                        case i.MP.FULL:
                            return "100%";
                        case i.MP.GRID_TILE_SHORT:
                            return "9.125rem";
                        case i.MP.GRID_TILE_NORMAL:
                            return "13.9375rem";
                        case i.MP.GRID_TILE_MEDIUM:
                            return "16.375rem";
                        default:
                            return "auto"
                    }
                },
                c = function(n) {
                    switch (n) {
                        case i.MP.GRID_TILE_MEDIUM:
                        case i.MP.MEDIUM:
                            return "".concat(17.8125 / 1.3, "rem");
                        case i.MP.GRID_TILE_NORMAL:
                            return "13.9375rem";
                        default:
                            return "auto"
                    }
                },
                d = function(n) {
                    var e, t = (e = {}, (0, r.Z)(e, i.c.GRID_TILE_EXTRA_SMALL, "9.125rem"), (0, r.Z)(e, i.c.GRID_TILE_SMALL, "13.9375rem"), (0, r.Z)(e, i.c.GRID_TILE_MEDIUM, o), (0, r.Z)(e, i.c.GRID_TILE_MEDIUM_LARGE, "23.5625rem"), (0, r.Z)(e, i.c.GRID_TILE_LARGE, "38rem"), (0, r.Z)(e, i.c.GRID_TILE_EXTRA_LARGE, "47.5rem"), e);
                    return (null === t || void 0 === t ? void 0 : t[n]) || o
                },
                l = function(n) {
                    var e, t = (e = {}, (0, r.Z)(e, i.c.GRID_TILE_EXTRA_SMALL, "9.125rem"), (0, r.Z)(e, i.c.GRID_TILE_SMALL, "13.9375rem"), (0, r.Z)(e, i.c.GRID_TILE_MEDIUM, o), (0, r.Z)(e, i.c.GRID_TILE_MEDIUM_LARGE, "21.4375rem"), (0, r.Z)(e, i.c.GRID_TILE_LARGE, "21.4375rem"), (0, r.Z)(e, i.c.GRID_TILE_EXTRA_LARGE, "21.4375rem"), e);
                    return (null === t || void 0 === t ? void 0 : t[n]) || o
                }
        },
        31332: function(n, e, t) {
            var r, i, o;
            t.d(e, {
                    MP: function() {
                        return i
                    },
                    Qy: function() {
                        return o
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
                }(i || (i = {})),
                function(n) {
                    n.UL = "ul", n.OL = "ol", n.LI = "li", n.DIV = "div", n.FIGURE = "figure", n.ARTICLE = "article"
                }(o || (o = {}))
        }
    }
]);