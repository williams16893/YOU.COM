"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [833], {
        33447: function(n, t, e) {
            e.r(t), e.d(t, {
                Appearance: function() {
                    return en
                },
                LinksSetting: function() {
                    return hn
                },
                MakeDefaultItem: function() {
                    return mn.K
                },
                SafeOptionsItem: function() {
                    return pn.k
                },
                SearchModeItem: function() {
                    return vn.W
                },
                SignItem: function() {
                    return gn.l
                }
            });
            var r = e(10253),
                i = e(85893),
                c = e(67294),
                a = e(4480),
                o = e(4207),
                u = e(69347),
                s = function() {
                    return window.matchMedia("(prefers-color-scheme: dark)")
                },
                l = function() {
                    var n = (0, c.useState)(s().matches ? u.y.DARK : u.y.LIGHT),
                        t = n[0],
                        e = n[1],
                        r = function(n) {
                            var t = n.matches;
                            e(t ? u.y.DARK : u.y.LIGHT)
                        };
                    return (0, c.useEffect)((function() {
                        var n = s();
                        return n.addListener(r),
                            function() {
                                return n.removeListener(r)
                            }
                    }), []), {
                        systemTheme: t
                    }
                },
                f = e(48682),
                d = e(92177),
                h = e(88829),
                m = e(7297),
                p = e(23376),
                v = e(52015);

            function g() {
                var n = (0, m.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: -", ";\n  padding-left: ", ";\n  padding-right: ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }
            var w, y = v.ZP.div.withConfig({
                    componentId: "sc-b869a66d-0"
                })(g(), p.W0.xxs, p.W0.xs, p.W0.xs),
                x = e(47044),
                b = e.n(x),
                Z = e(15985),
                E = e(69537),
                j = e(44323),
                k = function(n) {
                    var t = n === u.y.DARK,
                        e = n === u.y.SYSTEM && function() {
                            var n;
                            return null === window || void 0 === window || null === (n = window.matchMedia) || void 0 === n ? void 0 : n.call(window, "(prefers-color-scheme: dark)").matches
                        }();
                    return t || e
                },
                M = function() {
                    document.documentElement.classList.add("theming"), document.documentElement.addEventListener("transitionend", (function() {
                        document.documentElement && document.documentElement.classList.remove("theming")
                    }), {
                        once: !0
                    })
                },
                I = function(n, t, e) {
                    var r = "".concat((0, j.f)(n), " Appearance");
                    (0, E.qP)(Z.j.UserClickInNonApp, {
                        appname: Z.j.UserDropdownApp,
                        actionTitle: r,
                        actionName: b()(r)
                    }, t, e)
                };

            function C() {
                return C = Object.assign ? Object.assign.bind() : function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, C.apply(this, arguments)
            }
            var O, A = function(n) {
                return c.createElement("svg", C({
                    width: 17,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), w || (w = c.createElement("path", {
                    d: "M12.95 10.75a8.47 8.47 0 0 1-2.93-.48 6.27 6.27 0 0 1-2.23-1.4 6.18 6.18 0 0 1-1.43-2.21 8.24 8.24 0 0 1-.42-3.9c.04-.36.1-.7.17-1.04.08-.33.17-.6.27-.82a1.11 1.11 0 0 0 .1-.42.5.5 0 0 0-.13-.33A.45.45 0 0 0 6 0c-.05 0-.13 0-.22.02a7.31 7.31 0 0 0-2.9 1.86 8.75 8.75 0 0 0-1.74 9.25 7.74 7.74 0 0 0 4.41 4.26 8.81 8.81 0 0 0 7.94-.77 7.76 7.76 0 0 0 1.72-1.51 6.5 6.5 0 0 0 1.2-2.14l.01-.21a.47.47 0 0 0-.15-.37.48.48 0 0 0-.33-.14c-.11 0-.24.03-.4.08a9.08 9.08 0 0 1-2.58.42Z",
                    fill: "#F8F8F8"
                })))
            };

            function S() {
                return S = Object.assign ? Object.assign.bind() : function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, S.apply(this, arguments)
            }
            var P, L, T, _ = function(n) {
                return c.createElement("svg", S({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), O || (O = c.createElement("path", {
                    d: "M7.98 4.23A3.82 3.82 0 0 0 4.5 9.46a3.93 3.93 0 0 0 2.02 2.02 3.66 3.66 0 0 0 2.9 0 3.81 3.81 0 0 0 2.01-2.02 3.6 3.6 0 0 0 0-2.91 3.8 3.8 0 0 0-3.46-2.32ZM8.67.69a.65.65 0 0 0-.2-.48.65.65 0 0 0-.96 0c-.14.13-.2.3-.2.48v1.5c0 .18.06.34.2.48.13.13.29.2.47.2.19 0 .35-.07.48-.2.14-.14.2-.3.2-.47V.7Zm2.92 2.73a.66.66 0 0 0-.19.49c0 .19.07.35.2.48s.29.2.48.2c.2 0 .36-.07.49-.2l1.07-1.07a.69.69 0 0 0 .19-.48.7.7 0 0 0-.2-.5.68.68 0 0 0-.49-.18.65.65 0 0 0-.47.19l-1.08 1.07Zm3.69 5.26c.18 0 .34-.06.47-.2a.66.66 0 0 0 0-.96.64.64 0 0 0-.47-.21h-1.5a.66.66 0 0 0-.48.2c-.14.14-.2.3-.2.49 0 .18.06.35.2.48.14.14.3.2.48.2h1.5Zm-2.72 2.94a.66.66 0 0 0-.48-.2.67.67 0 0 0-.68.68c0 .19.07.35.2.48l1.08 1.07c.12.13.28.2.47.2.2 0 .35-.07.49-.2a.7.7 0 0 0 .19-.48.67.67 0 0 0-.2-.49l-1.07-1.06Zm-3.9 2.18a.65.65 0 0 0-.2-.47.66.66 0 0 0-.48-.2.67.67 0 0 0-.48.2c-.13.14-.2.3-.2.47v1.5c0 .2.07.36.2.5a.65.65 0 0 0 .96 0c.14-.14.2-.3.2-.5v-1.5Zm-6.33-1.12a.7.7 0 0 0-.2.48c0 .19.06.35.2.48.12.13.28.2.47.2.2 0 .36-.06.5-.2l1.06-1.05c.13-.13.2-.3.2-.48 0-.2-.06-.36-.2-.5a.68.68 0 0 0-.48-.19c-.2 0-.36.07-.48.2l-1.07 1.06ZM.69 7.3a.67.67 0 0 0-.49.2.7.7 0 0 0-.2.49.68.68 0 0 0 .7.68h1.48c.18 0 .34-.06.48-.2a.66.66 0 0 0 0-.96.64.64 0 0 0-.48-.21H.69Zm2.7-2.92a.7.7 0 0 0 .98 0 .69.69 0 0 0 .19-.48c0-.2-.06-.36-.2-.49L3.3 2.35a.66.66 0 0 0-.48-.2.67.67 0 0 0-.68.68c0 .2.07.36.2.49l1.05 1.07Z",
                    fill: "#F8F8F8"
                })))
            };

            function F() {
                return F = Object.assign ? Object.assign.bind() : function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, F.apply(this, arguments)
            }
            var D = function(n) {
                    return c.createElement("svg", F({
                        width: 16,
                        height: 16,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), P || (P = c.createElement("g", {
                        clipPath: "url(#appearance-system_svg__a)"
                    }, c.createElement("rect", {
                        x: .5,
                        y: .5,
                        width: 15,
                        height: 15,
                        rx: 7.5,
                        fill: "#fff",
                        stroke: "#2E2F30"
                    }), c.createElement("path", {
                        d: "M.2 16.2 15.9-.1v16.3H.2Z",
                        fill: "#2E2F30"
                    }))), L || (L = c.createElement("rect", {
                        x: .5,
                        y: .5,
                        width: 15,
                        height: 15,
                        rx: 7.5,
                        stroke: "#fff"
                    })), T || (T = c.createElement("defs", null, c.createElement("clipPath", {
                        id: "appearance-system_svg__a"
                    }, c.createElement("rect", {
                        width: 16,
                        height: 16,
                        rx: 8,
                        fill: "#fff"
                    })))))
                },
                H = e(33747);

            function N() {
                var n = (0, m.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return N = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, m.Z)([""]);
                return R = function() {
                    return n
                }, n
            }

            function K() {
                var n = (0, m.Z)(["\n  ", "\n"]);
                return K = function() {
                    return n
                }, n
            }

            function V() {
                var n = (0, m.Z)(["\n  ", "\n"]);
                return V = function() {
                    return n
                }, n
            }

            function Y() {
                var n = (0, m.Z)(["\n          border: 1px solid ", ";\n        "]);
                return Y = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, m.Z)(["\n          border: 1px solid\n            ", ";\n        "]);
                return B = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, m.Z)(["\n        path {\n          fill: white;\n        }\n      "]);
                return W = function() {
                    return n
                }, n
            }

            function J() {
                var n = (0, m.Z)(["\n  all: unset;\n  border-radius: 16px;\n  background-color: ", ";\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  font-size: ", ";\n  height: 32px;\n  width: 93px;\n  padding: 0 ", ";\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: white;\n    ", "\n  }\n"]);
                return J = function() {
                    return n
                }, n
            }
            var G = (0, v.iv)(N(), (function(n) {
                    var t = n.theme;
                    return (0, H.B3)(!1, !1, t)
                })),
                U = (0, v.ZP)(D).withConfig({
                    componentId: "sc-50482933-0"
                })(R()),
                $ = (0, v.ZP)(_).withConfig({
                    componentId: "sc-50482933-1"
                })(K(), G),
                q = (0, v.ZP)(A).withConfig({
                    componentId: "sc-50482933-2"
                })(V(), G),
                z = v.ZP.button.withConfig({
                    componentId: "sc-50482933-3"
                })(J(), (function(n) {
                    return n.theme.white
                }), (function(n) {
                    return n.theme.text.primary
                }), p.JB.caption, p.W0.xxs, (function(n) {
                    var t = n.active,
                        e = n.theme;
                    return t ? (0, v.iv)(Y(), e.primary) : (0, v.iv)(B(), e.darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(22, 22, 117, 0.15)")
                }), (function(n) {
                    var t = n.theme;
                    return t.darkMode ? t.alphaBlack_07 : t.primary
                }), (function(n) {
                    return !n.isSystem && (0, v.iv)(W())
                })),
                Q = function(n) {
                    switch (n.mode) {
                        case u.y.SYSTEM:
                            return (0, i.jsx)(U, {});
                        case u.y.LIGHT:
                            return (0, i.jsx)($, {});
                        case u.y.DARK:
                            return (0, i.jsx)(q, {})
                    }
                },
                X = (0, c.memo)((function(n) {
                    var t = n.mode,
                        e = void 0 === t ? u.y.DARK : t,
                        r = n.onClick,
                        c = n.active;
                    return (0, i.jsxs)(z, {
                        onClick: r,
                        "data-testid": "mode-component",
                        active: c,
                        isSystem: e === u.y.SYSTEM,
                        "data-eventactionname": "click_".concat(e, "_mode"),
                        children: [(0, i.jsx)(Q, {
                            mode: e
                        }), (0, j.f)(e)]
                    })
                }));
            X.displayName = "ModeComponent";
            var nn, tn, en = function() {
                    var n = l().systemTheme,
                        t = (0, a.sJ)(h.F),
                        e = (0, a.sJ)(d.z),
                        s = (0, o.R)("themeMode", u.y.SYSTEM),
                        m = s.setLocal,
                        p = s.local,
                        v = (0, r.Z)((0, a.FV)(f.M), 2),
                        g = v[0],
                        w = v[1],
                        x = p === u.y.SYSTEM,
                        b = Object.keys(u.y),
                        Z = function(r) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            (r !== p || i) && (m(r), w(i ? n === u.y.DARK : k(r)), I(r, t, e), M())
                        };
                    return (0, c.useEffect)((function() {
                        x && function(n, t) {
                            return n && t === u.y.LIGHT || !n && t === u.y.DARK
                        }(g, n) && Z(u.y.SYSTEM, !0)
                    }), [n, x]), (0, i.jsx)(y, {
                        children: b.map((function(n) {
                            return (0, i.jsx)(X, {
                                onClick: function() {
                                    return Z(u.y[n])
                                },
                                active: p === u.y[n],
                                mode: u.y[n]
                            }, n)
                        }))
                    })
                },
                rn = e(70189),
                cn = e(22112),
                an = e(15925);

            function on() {
                return on = Object.assign ? Object.assign.bind() : function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, on.apply(this, arguments)
            }
            var un = function(n) {
                return c.createElement("svg", on({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), nn || (nn = c.createElement("path", {
                    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h8.5A2.75 2.75 0 0 1 14 2.75V6.6a5.46 5.46 0 0 0-1.5-.51V2.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h3.34A5.46 5.46 0 0 0 6.6 14H2.75A2.75 2.75 0 0 1 0 11.25v-8.5Z",
                    fill: "#696B6C"
                })), tn || (tn = c.createElement("path", {
                    d: "M16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z",
                    fill: "#696B6C"
                })))
            };

            function sn() {
                var n = (0, m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: ", ";\n"]);
                return sn = function() {
                    return n
                }, n
            }

            function ln() {
                var n = (0, m.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return ln = function() {
                    return n
                }, n
            }
            var fn = v.ZP.div.withConfig({
                    componentId: "sc-50007cb0-0"
                })(sn(), p.W0.sm),
                dn = (0, v.ZP)(un).withConfig({
                    componentId: "sc-50007cb0-1"
                })(ln(), (function(n) {
                    var t = n.theme,
                        e = n.$isIncognito;
                    return (0, H.B3)(e, !1, t)
                })),
                hn = function(n) {
                    var t = n.isIncognito,
                        e = (0, a.sJ)(h.F),
                        r = (0, o.R)(rn.Vi, !1),
                        c = r.local,
                        u = r.setLocal;
                    return (0, i.jsxs)(fn, {
                        children: [(0, i.jsx)(an.J, {
                            $isIncognito: t,
                            icon: (0, i.jsx)(dn, {
                                $isIncognito: t
                            }),
                            title: "Open links in a new tab"
                        }), (0, i.jsx)(cn.O, {
                            onChange: function(n) {
                                n.stopPropagation();
                                var r = n.target.checked;
                                u(r);
                                var i = r ? "Yes" : "No";
                                (0, E.qP)(Z.j.UserClickInNonApp, {
                                    appname: Z.j.UserDropdownApp,
                                    actionTitle: "".concat(i, " Links in New Tab"),
                                    actionName: "".concat(i.toLowerCase(), "_new_tab")
                                }, e, t)
                            },
                            isChecked: c
                        })]
                    })
                },
                mn = e(14694),
                pn = e(33283),
                vn = e(85346),
                gn = e(13771)
        }
    }
]);