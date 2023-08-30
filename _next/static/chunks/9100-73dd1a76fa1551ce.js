"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9100], {
        74110: function(n, e, t) {
            t.d(e, {
                Fj: function() {
                    return O
                },
                hu: function() {
                    return b
                },
                P: function() {
                    return I
                },
                Dx: function() {
                    return j
                },
                ZD: function() {
                    return x
                },
                Gd: function() {
                    return w
                },
                HP: function() {
                    return C
                }
            });
            var r = t(7297),
                i = t(23376),
                o = t(57698),
                c = t(52015),
                a = t(5152),
                s = t.n(a)()((function() {
                    return t.e(8773).then(t.bind(t, 28773)).then((function(n) {
                        return n.UserCaret
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [28773]
                        }
                    }
                });

            function l() {
                var n = (0, r.Z)(["\n  width: 100%;\n  overflow: hidden;\n"]);
                return l = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, r.Z)([""]);
                return u = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, r.Z)(["\n  overflow: hidden;\n  height: ", ";\n  will-change: height;\n  transition: height 150ms ease-out;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, r.Z)(["\n  width: 100%;\n  padding: ", " 0;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n\n  ", " {\n    gap: ", ";\n    padding: 0;\n    gap: 0;\n    > * {\n      max-height: 32px;\n    }\n  }\n"]);
                return h = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, r.Z)(["\n      font-weight: ", ";\n      color: ", ";\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, r.Z)(["\n  min-height: 32px;\n  padding: ", " 0 ", " ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n\n  &:not(:last-of-type) {\n    border-bottom: solid 1px\n      ", ";\n  }\n\n  :hover {\n    color: ", ";\n    cursor: pointer;\n  }\n\n  ", "\n\n  ", " {\n    padding-left: ", ";\n\n    :hover {\n      color: ", ";\n      background-color: #dfe6ff;\n      border-color: #cbd1f1;\n      cursor: pointer;\n    }\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, r.Z)(["\n      transform: rotate(-180deg);\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, r.Z)(["\n  transition: transform 150ms ease-out;\n  margin-left: ", ";\n  right: ", ";\n  position: absolute;\n\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n  height: 1px;\n  background-color: ", ";\n  padding: 0;\n  margin: 0;\n"]);
                return m = function() {
                    return n
                }, n
            }
            var x = c.ZP.div.withConfig({
                    componentId: "sc-a54c9602-0"
                })(l()),
                j = c.ZP.div.withConfig({
                    componentId: "sc-a54c9602-1"
                })(u()),
                b = c.ZP.div.withConfig({
                    componentId: "sc-a54c9602-2"
                })(d(), (function(n) {
                    var e;
                    return n.isExpanded ? "".concat(null === (e = n.contentWrapRef.current) || void 0 === e ? void 0 : e.clientHeight, "px") : 0
                })),
                w = c.ZP.div.withConfig({
                    componentId: "sc-a54c9602-3"
                })(h(), i.W0.xxs, (function(n) {
                    var e = n.theme;
                    return n.shouldHideBgColor ? e.transparent : e.tableEvenRow
                }), o.BC.small, i.W0.xs),
                Z = "calc(".concat(i.W0.sm, " + ").concat(24, "px)"),
                C = c.ZP.div.withConfig({
                    componentId: "sc-a54c9602-4"
                })(p(), i.W0.xs, i.W0.xs, i.W0.xs, (function(n) {
                    var e = n.theme;
                    return e.darkMode ? "#3c3c3e" : e.tableEvenRow
                }), i.JB.body, i.Ue.medium, (function(n) {
                    return n.theme.darkMode ? i.$_.alphaWhite_15 : "#e7e7eb"
                }), i.$_.text.tertiary, (function(n) {
                    return n.isActive && (0, c.iv)(f(), i.Ue.semiBold, (function(n) {
                        return n.theme.darkMode ? i.$_.white : i.$_.text.primary
                    }))
                }), o.BC.small, Z, i.$_.text.primary),
                O = (0, c.ZP)(s).withConfig({
                    componentId: "sc-a54c9602-5"
                })(v(), i.W0.xs, i.W0.sl, (function(n) {
                    return n.isToggled && (0, c.iv)(g())
                })),
                I = c.ZP.span.withConfig({
                    componentId: "sc-a54c9602-6"
                })(m(), (function(n) {
                    return n.theme.darkMode ? i.$_.alphaWhite_15 : "#e7e7eb"
                }))
        },
        87185: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return c
                }
            });
            var r = t(85893),
                i = t(67294),
                o = t(74110),
                c = function(n) {
                    var e = n.title,
                        t = n.expanded,
                        c = n.className,
                        a = n.children,
                        s = (0, i.useRef)(null);
                    return (0, r.jsxs)(o.ZD, {
                        className: c,
                        children: [(0, r.jsx)(o.Dx, {
                            children: e
                        }), (0, r.jsx)(o.hu, {
                            contentWrapRef: s,
                            isExpanded: t,
                            children: (0, r.jsx)("div", {
                                ref: s,
                                children: a
                            })
                        })]
                    })
                }
        },
        54987: function(n, e, t) {
            t.d(e, {
                j: function() {
                    return f
                }
            });
            var r = t(85893),
                i = t(7297),
                o = t(23376),
                c = t(52015);

            function a() {
                var n = (0, i.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  max-height: calc(", " * ", " - ", ");\n  width: ", ";\n  overflow: auto;\n  padding: ", ";\n  position: absolute;\n  left: calc(-", " + ", ");\n  top: calc(", " + ", ");\n  z-index: ", ";\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1),\n    0 2px 4px rgba(0, 0, 0, 0.1);\n"]);
                return a = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, i.Z)(["\n  all: unset;\n  max-height: ", ";\n  border-bottom: 1px solid ", ";\n  padding: ", ";\n  cursor: pointer;\n  white-space: nowrap;\n\n  &:first-of-type {\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n\n  &:last-of-type {\n    border-bottom: none;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n  }\n\n  &:hover {\n    background-color: rgba(41, 91, 255, 0.15);\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }
            var l = "32px",
                u = "216px",
                d = c.ZP.div.withConfig({
                    componentId: "sc-2f02c0ac-0"
                })(a(), (function(n) {
                    return n.theme.white
                }), o.E0.xs, 8, l, o.W0.xxs, u, o.W0.xxs, u, o.W0.xs, l, o.W0.xxs, o.W5.topmost + 3),
                h = c.ZP.button.withConfig({
                    componentId: "sc-2f02c0ac-1"
                })(s(), l, (function(n) {
                    return n.theme.alphaBlack_15
                }), o.W0.xs, o.E0.xs, o.E0.xs, o.E0.xs, o.E0.xs),
                f = function(n) {
                    var e = n.options,
                        t = n.children,
                        i = n.onClick,
                        o = n.isVisible,
                        c = n.dropdownTestId;
                    return o ? (0, r.jsxs)(d, {
                        id: "side-dropdown",
                        "data-testid": c,
                        children: [null === e || void 0 === e ? void 0 : e.map((function(n, e) {
                            return (0, r.jsx)(h, {
                                onClick: function(t) {
                                    t.stopPropagation(), t.preventDefault(), i && i(n, e)
                                },
                                "data-eventactionname": "click_dropdown_option",
                                children: n.label
                            }, n.label)
                        })), t && t]
                    }, "subdropdown") : null
                }
        },
        14694: function(n, e, t) {
            t.d(e, {
                K: function() {
                    return O
                }
            });
            var r, i = t(85893),
                o = t(19696),
                c = t(3546),
                a = t(15985),
                s = t(88329),
                l = t(69537),
                u = t(7297),
                d = t(23376),
                h = t(3038),
                f = t(52015),
                p = t(67294);

            function g() {
                return g = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, g.apply(this, arguments)
            }
            var v = function(n) {
                    return p.createElement("svg", g({
                        width: "1rem",
                        height: "1rem",
                        viewBox: "4 7 17 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), r || (r = p.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.242 12.274c-.369 0-.595-.267-.595-.554 0-.157.069-.328.226-.451l6.74-5.66c.506-.424 1.135-.424 1.64 0l3.227 2.714V7.126c0-.287.192-.464.472-.464h.752c.28 0 .465.177.465.464v2.619l1.818 1.524a.572.572 0 0 1 .212.472c0 .328-.26.533-.588.533-.184 0-.341-.103-.485-.219l-6.446-5.42c-.157-.137-.342-.137-.492 0l-6.46 5.42c-.137.116-.301.219-.486.219Zm2.933 6.679c-.93 0-1.484-.54-1.484-1.45v-5.058l5.346-4.478c.24-.205.533-.212.78 0l5.345 4.478v5.058c0 .91-.554 1.45-1.476 1.45H8.175Zm2.57-1.135h3.357v-4.232c0-.3-.199-.492-.5-.492h-2.358c-.3 0-.499.192-.499.492v4.232ZM13 15.332a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z",
                        fill: "#696B6C"
                    })))
                },
                m = t(33747);

            function x() {
                var n = (0, u.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, u.Z)(["\n  padding-left: ", ";\n  padding-right: ", ";\n"]);
                return j = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, u.Z)(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  color: ", ";\n  display: flex;\n  font-weight: ", ";\n  gap: ", ";\n  justify-content: center;\n  letter-spacing: -0.15px;\n  max-height: 2.25rem;\n\n  ", " {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: ", ";\n  }\n\n  ", " {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: white;\n    path {\n      fill: white;\n    }\n  }\n"]);
                return b = function() {
                    return n
                }, n
            }
            var w = (0, f.ZP)(v).withConfig({
                    componentId: "sc-e562b924-0"
                })(x(), (function(n) {
                    var e = n.theme,
                        t = n.$isIncognito;
                    return (0, m.B3)(t, !1, e)
                })),
                Z = f.ZP.div.withConfig({
                    componentId: "sc-e562b924-1"
                })(j(), d.W0.xs, d.W0.xs),
                C = (0, f.ZP)(h.Z).withConfig({
                    componentId: "sc-e562b924-2"
                })(b(), (function(n) {
                    return n.theme.white
                }), (function(n) {
                    return n.theme.darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(22, 22, 117, 0.15)"
                }), (function(n) {
                    return n.theme.text.primary
                }), d.Ue.semiBold, d.W0.xxs, h.Z.ButtonChildren, d.W0.xxs, h.Z.ButtonChildren, (function(n) {
                    var e = n.theme;
                    return e.darkMode ? e.alphaBlack_07 : e.primary
                })),
                O = function(n) {
                    var e = n.isIncognito,
                        t = n.eventContext,
                        r = n.isSignedIn,
                        u = (0, c.E)().signInToYDC;
                    return r ? (0, i.jsx)(o.e, {
                        href: s.Z9,
                        invokeActionOnClick: function() {
                            r && (0, l.qP)(a.j.ClickMakeDefault, {}, t, e)
                        },
                        fillAvailableWidth: !0,
                        children: (0, i.jsx)(Z, {
                            children: (0, i.jsxs)(C, {
                                fullWidth: !0,
                                rounded: !0,
                                "data-eventactionname": "click__default",
                                children: [(0, i.jsx)(w, {
                                    $isIncognito: e
                                }), " Make default"]
                            })
                        })
                    }, "default") : (0, i.jsx)(Z, {
                        onClick: u,
                        role: "button",
                        children: (0, i.jsx)(C, {
                            fullWidth: !0,
                            rounded: !0,
                            "data-eventactionname": "click_sign_up",
                            shouldNotTranslate: !0,
                            children: "Sign up"
                        })
                    })
                }
        },
        15925: function(n, e, t) {
            t.d(e, {
                J: function() {
                    return c
                }
            });
            var r = t(85893),
                i = t(64027),
                o = t(33747),
                c = function(n) {
                    var e = n.icon,
                        t = n.title,
                        c = n.disabled,
                        a = n.$isIncognito,
                        s = n.children,
                        l = "string" === typeof t && i.k.includes(t);
                    return (0, r.jsxs)(o.Kc, {
                        children: [(0, r.jsxs)(o.zU, {
                            children: [(0, r.jsx)(o.IV, {
                                children: e
                            }), (0, r.jsx)(o.hf, {
                                $isIncognito: a,
                                disabled: c,
                                translate: l ? "no" : void 0,
                                children: t
                            })]
                        }), s && s]
                    })
                }
        },
        33283: function(n, e, t) {
            t.d(e, {
                k: function() {
                    return C
                }
            });
            var r, i = t(85893),
                o = t(31052),
                c = t(52015),
                a = t(87185),
                s = t(32592),
                l = t(53766),
                u = t(74110),
                d = t(54987),
                h = t(15925),
                f = t(7297),
                p = t(67294);

            function g() {
                return g = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, g.apply(this, arguments)
            }
            var v = function(n) {
                    return p.createElement("svg", g({
                        width: 24,
                        height: 25,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), r || (r = p.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.571 20.18a1.471 1.471 0 0 1-.566.153c-.144 0-.36-.042-.576-.153C6.663 17.666 5 16.588 5 13.7V7.67c0-.866.387-1.163 1.142-1.452.971-.373 4.127-1.477 5.098-1.766.243-.068.504-.119.764-.119.252 0 .522.042.765.119.962.306 4.118 1.384 5.098 1.766.746.298 1.133.586 1.133 1.453v6.03c0 2.887-1.573 4.101-6.429 6.48Zm-.471-4.047c-1.558 0-2.7-1.026-2.7-2.757V9.707c0-.235.194-.428.429-.428.234 0 .428.193.428.428v2.333c.103-.07.219-.136.342-.193V8.49a.428.428 0 1 1 .858 0v3.088c.115-.021.235-.038.358-.046V8.162a.427.427 0 1 1 .853 0v3.412c.124.025.24.058.343.095V8.722c0-.235.19-.428.428-.428.235 0 .425.19.425.428v4.097c0 .136.053.181.132.181.061 0 .123-.045.177-.168l.54-1.15c.181-.363.334-.516.585-.511.227.004.38.152.375.37-.003.162-.108.489-.204.791l-.056.174c-.239.779-.478 1.513-.8 2.098-.518 1.018-1.29 1.529-2.513 1.529Z",
                        fill: "#696B6C"
                    })))
                },
                m = t(33747);

            function x() {
                var n = (0, f.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }
            var j = (0, c.ZP)(v).withConfig({
                    componentId: "sc-d7a69b64-0"
                })(x(), (function(n) {
                    var e = n.theme,
                        t = n.$isIncognito,
                        r = n.disabled;
                    return (0, m.B3)(t, r, e)
                })),
                b = "Moderate",
                w = "Strict",
                Z = [{
                    value: "Off",
                    label: "Off"
                }, {
                    value: b,
                    label: b
                }, {
                    value: w,
                    label: w
                }],
                C = function(n) {
                    var e = n.isSafeSearchToggled,
                        t = n.safeSearch,
                        r = n.onSafeSearchClick,
                        f = n.isIncognito,
                        p = n.disabled,
                        g = (0, o.j)(),
                        v = g.isSmallDevice,
                        m = g.isMediumDevice,
                        x = g.isXMediumDevice,
                        w = (0, c.Fg)();
                    return v || m || x ? (0, i.jsx)(a.Z, {
                        expanded: e,
                        title: (0, i.jsx)(h.J, {
                            $isIncognito: f,
                            disabled: p,
                            icon: (0, i.jsx)(j, {
                                $isIncognito: f,
                                disabled: p
                            }),
                            title: (0, i.jsxs)("span", {
                                children: ["Safe search: ", (0, i.jsx)("b", {
                                    children: t || b
                                })]
                            }),
                            children: (0, i.jsx)(u.Fj, {
                                color: w.black,
                                isToggled: e
                            })
                        }),
                        children: (0, i.jsx)(u.Gd, {
                            children: Z.map((function(n, e) {
                                var o = n.value,
                                    c = e === Z.length - 1;
                                return (0, i.jsxs)(u.HP, {
                                    onClick: function() {
                                        return r(e)
                                    },
                                    "data-testid": (0, s.O)(l.Sul, e),
                                    isActive: (t || b) === o,
                                    children: [o, !c && (0, i.jsx)(u.P, {})]
                                }, o)
                            }))
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(h.J, {
                            $isIncognito: f,
                            disabled: p,
                            "data-testid": l.VbX,
                            icon: (0, i.jsx)(j, {
                                $isIncognito: f,
                                disabled: p
                            }),
                            title: (0, i.jsxs)("span", {
                                children: ["Safe search: ", (0, i.jsx)("b", {
                                    children: t || b
                                })]
                            }),
                            children: (0, i.jsx)(u.Fj, {
                                color: w.black,
                                isToggled: e
                            })
                        }), (0, i.jsx)(d.j, {
                            isVisible: e,
                            onClick: function(n, e) {
                                r(e)
                            },
                            options: Z,
                            dropdownTestId: "".concat(l.VbX, "-dropdown")
                        })]
                    })
                }
        },
        85346: function(n, e, t) {
            t.d(e, {
                W: function() {
                    return w
                }
            });
            var r, i, o, c = t(85893),
                a = t(15925),
                s = t(17226),
                l = t(7297),
                u = t(22112),
                d = t(23376),
                h = t(52015),
                f = t(67294);

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, p.apply(this, arguments)
            }
            var g = function(n) {
                    return f.createElement("svg", p({
                        width: 24,
                        height: 25,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), r || (r = f.createElement("path", {
                        d: "m16.992 11.263-1.109-4.049a1.163 1.163 0 0 0-1.595-.786l-1.047.425c-.682.277-1.799.277-2.481 0l-1.048-.425a1.162 1.162 0 0 0-1.594.786l-1.11 4.05C5.177 11.505 4 11.876 4 12.293c0 .73 3.582 1.324 8 1.324s8-.594 8-1.324c0-.417-1.176-.788-3.008-1.03Z",
                        fill: "#696B6C",
                        stroke: "#696B6C",
                        strokeWidth: .3,
                        strokeMiterlimit: 10
                    })), i || (i = f.createElement("path", {
                        d: "M17.111 15.547v.345s-.357.06-.44.322c-.084.262-.155 2.25-1.964 2.25-1.81 0-2.119-2.227-2.119-2.227s.143-.107.143-.261c0-.153-.222-.27-.62-.274-.398.004-.62.121-.62.274 0 .154.143.261.143.261s-.31 2.226-2.119 2.226c-1.809 0-1.88-1.987-1.964-2.25-.083-.261-.44-.32-.44-.32v-.346s.387 0 .503-.062c.116-.063.901-.652 1.883-.652s1.696.607 1.884.607c.187 0 .178-.152.178-.152h1.104s-.01.152.178.152.902-.607 1.884-.607c.982 0 1.767.59 1.883.652.116.062.503.062.503.062Zm-2.445 2.708c.96 0 1.654-.937 1.654-1.768 0-.928-.802-1.422-1.654-1.422-.935 0-1.685.532-1.685 1.363s.715 1.827 1.685 1.827Zm-5.11 0c.972 0 1.686-.995 1.686-1.827 0-.831-.75-1.363-1.685-1.363-.852 0-1.654.494-1.654 1.422 0 .831.693 1.768 1.654 1.768Z",
                        fill: "#696B6C"
                    })), o || (o = f.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.774 15.739a.51.51 0 0 1-.16.062.753.753 0 0 1 .093.09c.02-.052.042-.103.067-.152Zm3.86.498.297.042v.003l-.002.007-.003.022-.015.08a3.922 3.922 0 0 1-.395 1.103c-.332.61-.944 1.27-2 1.27-.512 0-.918-.142-1.235-.373a2.151 2.151 0 0 1-.665-.824 3.645 3.645 0 0 1-.27-.83 7.53 7.53 0 0 1-.055-.295l-.001-.006a5.017 5.017 0 0 0-.017-.097l-.007-.034c-.005-.015-.026-.047-.095-.08a.526.526 0 0 0-.107-.036l-.004-.001-.249-.041v-.9h.313a3.758 3.758 0 0 0 .174-.007c.05-.004.1-.009.139-.015l.042-.009.005-.003.042-.027.137-.086c.112-.068.262-.153.441-.237.357-.166.844-.33 1.393-.33.553 0 1.023.17 1.367.332.135.063.256.127.351.178l.03.016-.004-.07h1.74l-.004.07.03-.016c.095-.051.216-.115.351-.178.345-.161.814-.332 1.367-.332.55 0 1.035.164 1.393.33.18.084.329.17.44.237l.138.086.042.027.005.003a1.546 1.546 0 0 0 .181.024 3.053 3.053 0 0 0 .174.007h.313v.9l-.248.04m0 0-.005.002a.441.441 0 0 0-.107.037c-.069.032-.09.064-.094.079 0 0 0-.001 0 0a5.459 5.459 0 0 0-.024.131l-.002.006c-.013.078-.03.18-.054.295-.05.235-.129.534-.27.83a2.151 2.151 0 0 1-.665.824c-.318.23-.724.372-1.235.372-1.057 0-1.669-.66-2.001-1.269a3.922 3.922 0 0 1-.41-1.183l-.003-.022-.001-.007v-.003l.296-.042-.297.042-.024-.175.1-.075a1.152 1.152 0 0 0-.256-.027 1.15 1.15 0 0 0-.255.027l.1.075-.025.175-.297-.042m4.881-.346a.746.746 0 0 1 .093-.09.61.61 0 0 1-.158-.061c.024.048.046.099.065.15Zm-3.716-.746h.002-.002Zm-1.378 0h.002-.002Zm-2.826.52a.998.998 0 0 0-.392.822c0 .337.143.71.393.999.248.286.584.469.96.469.378 0 .721-.193.979-.496.259-.305.406-.695.406-1.031 0-.6-.54-1.063-1.384-1.063-.372 0-.717.108-.962.3Zm4.686.763c0 .336.148.726.407 1.03.258.304.601.497.978.497s.712-.183.96-.469c.25-.288.394-.662.394-.999a.999.999 0 0 0-.392-.822c-.245-.192-.59-.3-.962-.3-.844 0-1.385.463-1.385 1.063Z",
                        fill: "#696B6C"
                    })))
                },
                v = t(33747);

            function m() {
                var n = (0, l.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, l.Z)(["\n  position: absolute;\n  right: ", ";\n  scale: 0.75;\n"]);
                return x = function() {
                    return n
                }, n
            }
            var j = (0, h.ZP)(g).withConfig({
                    componentId: "sc-68c0b86f-0"
                })(m(), (function(n) {
                    var e = n.theme;
                    return (0, v.B3)(!1, !1, e)
                })),
                b = (0, h.ZP)(u.O).withConfig({
                    componentId: "sc-68c0b86f-1"
                })(x(), d.W0.xs),
                w = function(n) {
                    var e = n.isIncognito;
                    return (0, c.jsx)(a.J, {
                        $isIncognito: e,
                        icon: (0, c.jsx)(j, {}),
                        title: "Private mode",
                        "data-testid": s.T.SEARCH_MODE,
                        children: (0, c.jsx)(b, {
                            isChecked: e,
                            onChange: null,
                            readOnly: !0
                        })
                    })
                }
        },
        13771: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return k
                }
            });
            var r, i, o, c = t(47568),
                a = t(97582),
                s = t(85893),
                l = t(27222),
                u = t(47044),
                d = t.n(u),
                h = t(11163),
                f = t(3546),
                p = t(15985),
                g = t(53766),
                v = t(85665),
                m = t(69537),
                x = t(15925),
                j = t(7297),
                b = t(52015),
                w = t(67294);

            function Z() {
                return Z = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Z.apply(this, arguments)
            }
            var C = function(n) {
                    return w.createElement("svg", Z({
                        width: 15,
                        height: 16,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), r || (r = w.createElement("path", {
                        d: "M14.67 8a.9.9 0 0 0-.24-.6l-3.14-3.14a.8.8 0 0 0-.57-.26c-.5 0-.82.34-.82.78 0 .25.11.44.27.6l1.11 1.1.81.75-1.01-.05H5.87C5.35 7.18 5 7.5 5 8c0 .5.35.83.87.83h5.2l1.02-.05-.8.74-1.12 1.1a.8.8 0 0 0-.27.6c0 .44.33.78.82.78.2 0 .4-.09.57-.26l3.14-3.13a.9.9 0 0 0 .24-.6Z",
                        fill: "#C7C7CC"
                    })), i || (i = w.createElement("path", {
                        d: "M2.34 16C.8 16 0 15.2 0 13.63V2.37C0 .8.8 0 2.34 0h7.92c1.55 0 2.34.8 2.34 2.37v1.8l-.6-.61a1.8 1.8 0 0 0-.7-.45v-.7c0-.72-.38-1.12-1.13-1.12H2.43c-.76 0-1.13.4-1.13 1.12V13.6c0 .72.37 1.12 1.13 1.12h7.74c.75 0 1.14-.4 1.14-1.12v-.7c.26-.1.5-.25.69-.44l.6-.6v1.78c0 1.58-.8 2.37-2.34 2.37H2.34Z",
                        fill: "#C7C7CC"
                    })), o || (o = w.createElement("path", {
                        d: "M12.6 5.57v4.86l-1.3 1.3V9.5l.8-.72-.8.04V7.19l.8.04-.8-.73V4.28l1.3 1.3Z",
                        fill: "#C7C7CC"
                    })))
                },
                O = t(33747);

            function I() {
                var n = (0, j.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }
            var E = (0, b.ZP)(C).withConfig({
                    componentId: "sc-abf82ee8-0"
                })(I(), (function(n) {
                    var e = n.theme,
                        t = n.$isIncognito;
                    return (0, O.B3)(t, !1, e)
                })),
                k = function(n) {
                    var e = n.user,
                        t = n.routePath,
                        r = n.isIncognito,
                        i = n.eventContext,
                        o = (0, l.G6)(),
                        u = (0, h.useRouter)(),
                        j = Boolean(e),
                        b = (0, f.E)({
                            returnTo: t
                        }).signInToYDC,
                        w = function() {
                            var n = (0, c.Z)((function() {
                                var n, t;
                                return (0, a.__generator)(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return n = "".concat(e ? "Sign Out" : "Sign In"), (0, m.qP)(p.j.UserClickInNonApp, {
                                                appname: p.j.UserDropdownApp,
                                                actionTitle: n,
                                                actionName: d()(n)
                                            }, i, r), j ? [4, (0, v.k)({
                                                revokeSession: null === o || void 0 === o || null === (t = o.session) || void 0 === t ? void 0 : t.revoke,
                                                user: e
                                            })] : [3, 2];
                                        case 1:
                                            return c.sent(), u.push("/"), [3, 3];
                                        case 2:
                                            b(), c.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsx)("div", {
                        onClick: w,
                        "data-testid": g.DsK,
                        children: (0, s.jsx)(x.J, {
                            $isIncognito: r,
                            icon: (0, s.jsx)(E, {
                                $isIncognito: r
                            }),
                            title: e ? "Log Out" : "Log In"
                        })
                    })
                }
        },
        17226: function(n, e, t) {
            t.d(e, {
                T: function() {
                    return r
                },
                m: function() {
                    return i
                }
            });
            var r = {
                    ACTIVITY: "activity",
                    APPEARANCE_SWITCH: "appearance-switch",
                    DEFAULT: "default",
                    DOWNLOAD_APP: "download-app",
                    FAQ: "faq",
                    FOOTER: "footer",
                    HELP: "help",
                    JOIN_COMMUNITY: "join-community",
                    LINKS_SETTING: "links-setting",
                    LOGOUT: "logout",
                    PREFERRED_SOURCES: "preferred-sources",
                    PROFILE_PAGE: "profile-page",
                    RECENCY: "recency",
                    REFERRAL: "referral",
                    REGION: "region",
                    SAFE_SEARCH: "safe-search",
                    SEARCH_MODE: "search-mode",
                    SIGN_UP: "sign-up",
                    SLACK: "slack"
                },
                i = []
        },
        51753: function(n, e, t) {
            var r;
            t.d(e, {
                    L: function() {
                        return r
                    }
                }),
                function(n) {
                    n.None = "none", n.SafeSearch = "safe-search", n.Region = "region", n.Recency = "recency", n.JoinCommunity = "join-community", n.DownloadApp = "download-app"
                }(r || (r = {}))
        },
        9100: function(n, e, t) {
            t.d(e, {
                u: function() {
                    return Ve
                }
            });
            var r, i, o = t(14924),
                c = t(10253),
                a = t(85893),
                s = t(23376),
                l = t(10646),
                u = t(47044),
                d = t.n(u),
                h = t(5152),
                f = t.n(h),
                p = t(11163),
                g = t(67294),
                v = t(4480),
                m = t(4207),
                x = t(53089),
                j = t(56541);

            function b() {
                return b = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, b.apply(this, arguments)
            }
            var w, Z = function(n) {
                return g.createElement("svg", b({
                    width: 19,
                    height: 21,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), r || (r = g.createElement("path", {
                    d: "M6 2.093a.542.542 0 1 1 .387 1.014c-3.17 1.212-5.301 4.31-5.301 7.706 0 4.548 3.7 8.248 8.248 8.248 4.549 0 8.248-3.7 8.248-8.248A8.223 8.223 0 0 0 9.478 2.57l.442.442a.543.543 0 1 1-.769.769L7.776 2.406a.55.55 0 0 1 0-.768L9.151.263a.543.543 0 1 1 .769.769l-.453.453c5.086.07 9.205 4.226 9.205 9.328 0 5.102-4.188 9.335-9.336 9.335-5.148 0-9.335-4.188-9.335-9.335 0-3.842 2.412-7.345 6-8.72Z",
                    fill: "#8B8E8F"
                })), i || (i = g.createElement("path", {
                    d: "M3.326 10.815a6.01 6.01 0 1 0 12.021 0 6.01 6.01 0 1 0-12.021 0Zm6.717-3.65v2.943h1.64a.707.707 0 0 1 0 1.414H9.337a.707.707 0 0 1-.707-.707v-3.65a.707.707 0 0 1 1.415 0Z",
                    fill: "#8B8E8F"
                })))
            };

            function C() {
                return C = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, C.apply(this, arguments)
            }
            var O, I = function(n) {
                return g.createElement("svg", C({
                    width: 17,
                    height: 17,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 22 23",
                    fill: "none"
                }, n), w || (w = g.createElement("path", {
                    d: "m21.043 14.191-1.89-1.055a7.47 7.47 0 0 0 0-3.12l1.89-1.056a.505.505 0 0 0 .22-.615c-.484-1.583-1.32-2.99-2.374-4.177a.533.533 0 0 0-.66-.087l-1.89 1.055a8.837 8.837 0 0 0-2.638-1.539V1.443c0-.22-.176-.44-.44-.484-1.626-.395-3.252-.351-4.79 0-.265.044-.397.264-.397.484v2.154A7.873 7.873 0 0 0 5.393 5.18l-1.89-1.1a.533.533 0 0 0-.66.088C1.788 5.355.953 6.762.47 8.345c-.088.22 0 .483.22.615l1.89 1.055a9.3 9.3 0 0 0 0 3.121L.69 14.192c-.22.131-.308.395-.22.615.484 1.583 1.32 2.99 2.374 4.176.176.176.44.22.66.088l1.89-1.055a8.535 8.535 0 0 0 2.681 1.539v2.154c0 .22.176.44.396.527 1.627.352 3.253.308 4.792 0 .263-.088.44-.308.44-.527v-2.154a8.835 8.835 0 0 0 2.637-1.539l1.89 1.055c.22.132.484.088.66-.088 1.099-1.187 1.89-2.593 2.418-4.176a.59.59 0 0 0-.264-.616Zm-10.155.88c-1.978 0-3.517-1.539-3.517-3.517a3.5 3.5 0 0 1 3.517-3.517 3.527 3.527 0 0 1 3.517 3.517 3.5 3.5 0 0 1-3.517 3.517Z",
                    fill: "#C7C7CC"
                })))
            };

            function E() {
                return E = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, E.apply(this, arguments)
            }
            var k, y = function(n) {
                return g.createElement("svg", E({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), O || (O = g.createElement("path", {
                    d: "M4.32 15.17c.15 0 .28-.04.4-.11.13-.07.28-.2.46-.35l2.65-2.4h4.82c.72 0 1.33-.13 1.83-.39.5-.27.87-.65 1.13-1.15.26-.5.39-1.1.39-1.82V3.37a3.9 3.9 0 0 0-.39-1.82c-.26-.5-.63-.89-1.13-1.15a3.8 3.8 0 0 0-1.83-.4H3.36a3.8 3.8 0 0 0-1.83.4c-.5.26-.88.64-1.14 1.15A3.9 3.9 0 0 0 0 3.37v5.58c0 .71.13 1.32.39 1.82.27.5.65.88 1.14 1.15.5.26 1.1.39 1.8.39h.32v2.1c0 .23.06.42.18.56.12.13.28.2.49.2ZM4.16 4.14a.43.43 0 0 1-.3-.13.46.46 0 0 1-.14-.33c0-.12.04-.22.13-.31s.2-.13.31-.13h7.6c.13 0 .23.04.32.13.1.09.14.19.14.31 0 .13-.05.24-.14.33a.43.43 0 0 1-.31.13h-7.6Zm0 2.41a.43.43 0 0 1-.3-.13.44.44 0 0 1-.14-.32c0-.12.04-.23.13-.32a.4.4 0 0 1 .31-.14h7.6c.13 0 .23.05.32.14.1.1.14.2.14.32 0 .13-.05.24-.14.32a.43.43 0 0 1-.31.13h-7.6Zm0 2.41a.43.43 0 0 1-.3-.13.45.45 0 0 1-.14-.32c0-.12.04-.23.13-.32s.2-.13.31-.13h4.95c.13 0 .23.04.32.13.1.09.14.2.14.32 0 .13-.05.23-.14.32a.44.44 0 0 1-.32.13H4.16Z",
                    fill: "#C7C7CC"
                })))
            };

            function S() {
                return S = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, S.apply(this, arguments)
            }
            var T, P = function(n) {
                return g.createElement("svg", S({
                    width: 17,
                    height: 17,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), k || (k = g.createElement("path", {
                    d: "M8.16 16.61c4.37 0 8-3.62 8-8s-3.63-8-8.01-8-8 3.62-8 8 3.63 8 8 8Zm-.2-6.42c-.52 0-.81-.25-.81-.73V9.4c0-.7.41-1.1.97-1.5.68-.48 1.01-.71 1.01-1.2 0-.51-.41-.88-1.02-.88-.46 0-.82.21-1.09.64l-.11.15a.83.83 0 0 1-.68.34.65.65 0 0 1-.68-.66c0-.15.04-.3.1-.43.26-.76 1.2-1.37 2.58-1.37 1.46 0 2.67.78 2.67 2.12 0 .92-.5 1.38-1.3 1.9-.5.32-.8.6-.83 1l-.01.1c-.03.33-.33.59-.8.59Zm0 2.49c-.54 0-.98-.38-.98-.9s.43-.92.98-.92.98.39.98.92c0 .52-.44.9-.98.9Z",
                    fill: "#C7C7CC"
                })))
            };

            function M() {
                return M = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, M.apply(this, arguments)
            }
            var A = function(n) {
                    return g.createElement("svg", M({
                        width: 24,
                        height: 25,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), T || (T = g.createElement("path", {
                        d: "M10.065 9.089c.11 0 .185-.082.207-.193.23-1.217.216-1.24 1.477-1.477.127-.022.2-.097.2-.208 0-.119-.073-.186-.192-.208-1.284-.267-1.284-.282-1.485-1.477-.014-.119-.096-.193-.207-.193-.112 0-.186.074-.208.186-.238 1.232-.2 1.276-1.485 1.484-.111.015-.193.09-.193.208 0 .111.074.186.193.208 1.284.26 1.277.274 1.485 1.484a.21.21 0 0 0 .208.186Zm6.257 2.524c.126 0 .215-.09.238-.223.267-1.388.237-1.447 1.7-1.7.14-.022.23-.104.23-.237 0-.134-.09-.216-.216-.238-1.484-.274-1.514-.319-1.715-1.7-.014-.126-.11-.222-.237-.222-.134 0-.215.096-.238.222-.237 1.41-.23 1.492-1.707 1.7-.126.015-.223.104-.223.238.008.133.09.215.223.237 1.477.267 1.5.32 1.707 1.708.015.126.104.215.238.215Zm-10.155 2.22c.127 0 .216-.097.238-.223.208-1.403.238-1.455 1.7-1.708.14-.022.223-.104.223-.237 0-.126-.082-.208-.208-.238-1.485-.267-1.492-.319-1.715-1.692-.022-.134-.111-.23-.238-.23-.133 0-.222.096-.237.222-.208 1.418-.23 1.463-1.707 1.7-.127.023-.223.112-.223.238 0 .133.09.215.215.237 1.485.275 1.47.327 1.715 1.715.022.119.104.215.237.215Zm12.055 6.034c.401.408 1.084.4 1.477 0 .401-.416.401-1.076 0-1.485l-6.665-6.71a1.044 1.044 0 0 0-1.478 0c-.4.416-.4 1.076 0 1.477l6.666 6.718ZM14.4 14.96l-2.174-2.174c-.164-.171-.223-.372-.06-.535.149-.148.364-.104.535.074l2.16 2.16-.46.476Zm-4.795 5.167c.171 0 .297-.119.32-.297.222-1.915.304-1.99 2.27-2.279.201-.03.32-.141.32-.32 0-.17-.119-.281-.282-.318-1.997-.386-2.086-.372-2.309-2.28-.022-.177-.148-.296-.319-.296a.316.316 0 0 0-.319.29c-.23 1.96-.304 2.026-2.301 2.286a.322.322 0 0 0-.29.319c0 .17.12.29.283.32 2.019.385 2.07.385 2.308 2.293a.32.32 0 0 0 .32.282Z",
                        fill: "#696B6C"
                    })))
                },
                L = t(92177),
                R = t(29087),
                D = t(88829),
                F = t(15985),
                _ = t(52380),
                H = t(88329),
                B = t(53766),
                N = t(69537),
                V = t(47568),
                W = t(97582),
                $ = t(9669),
                J = t.n($);

            function U() {
                return (U = (0, V.Z)((function(n, e) {
                    return (0, W.__generator)(this, (function(t) {
                        return J().post("/api/user/set_app_settings", {
                            app_name: n,
                            app_settings: e
                        }), [2]
                    }))
                }))).apply(this, arguments)
            }
            var G, K, Y = t(60676),
                z = t(31052),
                X = t(52015),
                q = t(6917),
                Q = t(87185),
                nn = t(74110),
                en = t(54987),
                tn = t(15925);

            function rn() {
                return rn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, rn.apply(this, arguments)
            }
            var on, cn = function(n) {
                return g.createElement("svg", rn({
                    width: 14,
                    height: 17,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), G || (G = g.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.17 5.74a4.58 4.58 0 0 0-2.31-3.46 758.22 758.22 0 0 0 .52-.9l.2-.37c.02-.05 0-.17-.05-.2-.07-.08-.15-.02-.2.06a7.7 7.7 0 0 0-.34.59l-.4.69a4.57 4.57 0 0 0-3.78.01l-.02-.03-.03-.05L4.17.93c-.05-.1-.1-.18-.23-.12-.12.07-.08.17-.03.26 0 .03.02.05.04.08l.17.32.3.62h.01l.1.21a4.58 4.58 0 0 0-2.27 3.44h8.91ZM4.7 4.17c.2 0 .37-.14.38-.34v-.04a.37.37 0 0 0-.35-.36m-.28.63a.37.37 0 0 1 .14-.6m4.15-.03a.37.37 0 1 1-.04.74.37.37 0 0 1-.33-.38.38.38 0 0 1 .37-.36Z",
                    fill: "#696B6C"
                })), K || (K = g.createElement("path", {
                    d: "M0 6.76c.08-.23.18-.45.38-.6.3-.2.62-.24.94-.1.33.14.52.4.57.75v4.21c0 .51-.3.89-.75.98a.94.94 0 0 1-1.1-.67 1.81 1.81 0 0 0-.04-.1V6.75Zm11.13-.39v6.41c0 .48-.29.8-.76.77H9.31v.2a259.42 259.42 0 0 0 0 2.1.94.94 0 0 1-.7.89.92.92 0 0 1-1.06-.43 1.14 1.14 0 0 1-.13-.51v-2.25h-1.4v2.26a.94.94 0 0 1-1.22.92.94.94 0 0 1-.67-.91v-2.27h-1.2a.63.63 0 0 1-.62-.6V6.17h8.82v.2ZM13.43 9a409.27 409.27 0 0 0 0 2.07c0 .43-.3.8-.69.92a.91.91 0 0 1-1.06-.41 1.2 1.2 0 0 1-.14-.56c-.02-1.35-.01-2.7-.01-4.06 0-.57.41-.98.96-.98.54 0 .94.43.94 1V9Z",
                    fill: "#696B6C"
                })))
            };

            function an() {
                return an = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, an.apply(this, arguments)
            }
            var sn = function(n) {
                    return g.createElement("svg", an({
                        width: 14,
                        height: 17,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), on || (on = g.createElement("path", {
                        d: "M10.2 3.94a3.46 3.46 0 0 1 2.4 1.52l-.31.22a3.68 3.68 0 0 0-1.17 1.49c-.17.37-.26.81-.26 1.33a3.3 3.3 0 0 0 1.05 2.5c.28.26.53.44.75.56l.34.19-.26.73c-.16.47-.44.98-.83 1.54-.34.49-.7.94-1.1 1.35-.38.4-.85.61-1.38.61-.37 0-.67-.05-.9-.15a9.99 9.99 0 0 0-.73-.32c-.25-.1-.58-.16-1-.16-.41 0-.74.06-1.01.17-.27.1-.53.21-.77.32-.25.11-.54.17-.87.17-.5 0-.93-.2-1.32-.6-.38-.4-.77-.88-1.16-1.44A9.47 9.47 0 0 1 .5 11.55 8.93 8.93 0 0 1 0 8.67c0-1.04.2-1.9.6-2.61.39-.7.89-1.24 1.5-1.6a3.71 3.71 0 0 1 1.91-.54c.36 0 .69.06 1 .17.31.12.6.23.87.35.27.11.51.16.73.16.22 0 .46-.06.74-.18.29-.13.6-.25.95-.37a3.52 3.52 0 0 1 1.91-.1Zm-2.35-.57c-.4.21-.8.32-1.16.32-.07 0-.14 0-.21-.02a1.52 1.52 0 0 1-.03-.28c0-.42.08-.82.26-1.2A3.55 3.55 0 0 1 9.68 0a3.16 3.16 0 0 1-.2 1.52 3.9 3.9 0 0 1-.62 1.02c-.27.33-.6.6-1 .82h-.01Z",
                        fill: "#696B6C"
                    })))
                },
                ln = t(19696),
                un = t(7297);

            function dn() {
                var n = (0, un.Z)(["\n        background-color: rgba(41, 91, 255, 0.15);\n      "]);
                return dn = function() {
                    return n
                }, n
            }

            function hn() {
                var n = (0, un.Z)(["\n  padding: ", " 0;\n\n  &:first-of-type {\n    margin-top: -", ";\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n\n  &:last-of-type {\n    margin-bottom: -", ";\n    border-bottom: none;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n  }\n\n  &:hover {\n    cursor: pointer;\n    ", ";\n  }\n"]);
                return hn = function() {
                    return n
                }, n
            }
            var fn, pn = X.ZP.div.withConfig({
                    componentId: "sc-2d837f44-0"
                })(hn(), s.W0.xxs, s.W0.xxs, s.E0.xs, s.E0.xs, s.W0.xxs, s.E0.xs, s.E0.xs, (function(n) {
                    return n.inSubMenu && (0, X.iv)(dn())
                })),
                gn = function(n) {
                    var e = n.text,
                        t = n.isSignedIn,
                        r = n.signedInLink,
                        i = n.signedOutLink,
                        o = n.icon,
                        c = n.inSubMenu,
                        s = n.dataTestId,
                        l = (0, v.sJ)(L.z),
                        u = t ? r : i,
                        d = !(null === u || void 0 === u ? void 0 : u.includes("https"));
                    return !c && (l || !t && !i) ? null : (0, a.jsx)(pn, {
                        inSubMenu: c,
                        children: (0, a.jsx)(ln.e, {
                            href: u,
                            isInternal: d,
                            shouldOpenInNewTab: !d,
                            "data-testid": s,
                            children: (0, a.jsx)(tn.J, {
                                $isIncognito: l,
                                icon: o,
                                title: e
                            })
                        })
                    })
                },
                vn = function(n) {
                    var e = n.hideBackground;
                    return (0, a.jsxs)(nn.Gd, {
                        hasGap: !0,
                        shouldHideBgColor: e,
                        children: [(0, a.jsx)(gn, {
                            icon: (0, a.jsx)(sn, {}),
                            text: "iOS",
                            signedInLink: H.FY,
                            signedOutLink: H.FY,
                            inSubMenu: !0
                        }), (0, a.jsx)(nn.P, {}), (0, a.jsx)(gn, {
                            icon: (0, a.jsx)(cn, {}),
                            text: "Android",
                            signedInLink: H.Kc,
                            signedOutLink: H.Kc,
                            inSubMenu: !0
                        })]
                    })
                };

            function mn() {
                return mn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, mn.apply(this, arguments)
            }
            var xn = function(n) {
                    return g.createElement("svg", mn({
                        width: 14,
                        height: 16,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), fn || (fn = g.createElement("path", {
                        d: "M0 13.65c0 .77.2 1.36.6 1.75.4.4 1 .59 1.77.59h8.5c.79 0 1.38-.2 1.78-.6.4-.38.59-.97.59-1.74V6.49c0-.77-.2-1.36-.6-1.75-.39-.4-.98-.6-1.77-.6h-3.6V.63a.59.59 0 0 0-.2-.43.6.6 0 0 0-.45-.19.62.62 0 0 0-.45.19.61.61 0 0 0-.18.43v3.53H2.37c-.78 0-1.37.2-1.77.58-.4.4-.6.98-.6 1.76v7.16Zm6.63-2.41a.67.67 0 0 1-.25-.05.7.7 0 0 1-.22-.17l-2.5-2.4a.57.57 0 0 1-.18-.41c0-.16.05-.3.16-.4.1-.1.24-.16.4-.16.18 0 .33.07.44.2l1.2 1.27.36.4-.06-1.1V4.69c0-.18.06-.33.18-.44a.63.63 0 0 1 .47-.18.61.61 0 0 1 .63.62v3.73l-.04 1.1.35-.4 1.2-1.28a.56.56 0 0 1 .42-.19c.17 0 .3.06.41.16.11.1.17.24.17.4 0 .15-.06.29-.18.41l-2.49 2.4a.75.75 0 0 1-.24.17.57.57 0 0 1-.23.05Z",
                        fill: "#C7C7CC"
                    })))
                },
                jn = t(33747);

            function bn() {
                var n = (0, un.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return bn = function() {
                    return n
                }, n
            }
            var wn, Zn = (0, X.ZP)(xn).withConfig({
                    componentId: "sc-e0c1d52e-0"
                })(bn(), (function(n) {
                    var e = n.theme,
                        t = n.$isIncognito,
                        r = n.disabled;
                    return (0, jn.B3)(t, r, e)
                })),
                Cn = function(n) {
                    var e = n.isToggled,
                        t = (0, z.j)(),
                        r = t.isSmallDevice,
                        i = t.isMediumDevice,
                        o = t.isXMediumDevice,
                        c = (0, X.Fg)(),
                        s = (0, q.t)();
                    return r || i || o ? (0, a.jsx)(Q.Z, {
                        expanded: e,
                        title: (0, a.jsx)(tn.J, {
                            $isIncognito: s,
                            icon: (0, a.jsx)(Zn, {
                                $isIncognito: s
                            }),
                            title: (0, a.jsx)("span", {
                                children: "Download the app"
                            }),
                            children: (0, a.jsx)(nn.Fj, {
                                isToggled: e,
                                color: c.black
                            })
                        }),
                        children: (0, a.jsx)(vn, {})
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tn.J, {
                            $isIncognito: s,
                            icon: (0, a.jsx)(Zn, {
                                $isIncognito: s
                            }),
                            title: (0, a.jsx)("span", {
                                children: "Download the app"
                            }),
                            children: (0, a.jsx)(nn.Fj, {
                                isToggled: e,
                                color: c.black
                            })
                        }), (0, a.jsx)(en.j, {
                            isVisible: e,
                            children: (0, a.jsx)(vn, {
                                hideBackground: !0
                            })
                        })]
                    })
                };

            function On() {
                return On = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, On.apply(this, arguments)
            }
            var In, En = function(n) {
                return g.createElement("svg", On({
                    width: 16,
                    height: 15,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), wn || (wn = g.createElement("path", {
                    d: "M2.67 14.8h10.86c1.58 0 2.47-.88 2.47-2.45v-9.9C16 .9 15.1 0 13.53 0h-7.8C4.14 0 3.25.89 3.25 2.45V13.7c0 .58-.17.92-.59 1.11ZM6.54 4.68A.54.54 0 0 1 6 4.13c0-.3.23-.53.54-.53h6.18c.31 0 .55.23.55.53 0 .3-.24.55-.55.55H6.54ZM0 6.92v5.7c0 .73.57 1 1 1 .42 0 .98-.27.98-1V4.84h-.1C.96 4.84 0 5.54 0 6.92Zm6.54-.07A.53.53 0 0 1 6 6.3c0-.3.24-.55.54-.55h6.18c.3 0 .55.24.55.55 0 .3-.24.54-.55.54H6.54Zm.3 4.29c-.53 0-.85-.34-.85-.86v-1.5c0-.52.32-.84.84-.84h1.4c.52 0 .84.32.84.83v1.51c0 .52-.32.86-.85.86H6.83ZM10.33 9a.54.54 0 0 1-.55-.52c0-.32.24-.55.55-.55h2.38c.3 0 .54.23.54.55 0 .29-.23.52-.54.52h-2.38Zm0 2.11a.53.53 0 0 1-.55-.53c0-.31.25-.55.55-.55h2.38c.3 0 .54.24.54.55 0 .3-.23.53-.54.53h-2.38Z",
                    fill: "#696B6C"
                })))
            };

            function kn() {
                return kn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, kn.apply(this, arguments)
            }
            var yn, Sn = function(n) {
                return g.createElement("svg", kn({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), In || (In = g.createElement("path", {
                    d: "M8 16a7.7 7.7 0 0 0 3.1-.63A8.14 8.14 0 0 0 16 8a7.7 7.7 0 0 0-.63-3.1A8.14 8.14 0 0 0 8 0C6.9 0 5.87.2 4.9.63A8.27 8.27 0 0 0 .64 4.9C.2 5.87 0 6.9 0 8a7.73 7.73 0 0 0 2.36 5.64 8.16 8.16 0 0 0 2.55 1.73c.96.42 2 .63 3.1.63ZM3.84 7.65c0-.24.07-.42.2-.55a.8.8 0 0 1 .55-.2h.18v4.03c0 .14-.05.25-.14.34a.51.51 0 0 1-.66 0 .45.45 0 0 1-.13-.34V7.65Zm1.27 4.32c.25-.13.38-.38.38-.75V5.2c0-.4.1-.68.3-.88.19-.2.48-.3.88-.3h4.29c.4 0 .69.1.88.3.2.2.3.49.3.88v5.6c0 .4-.1.69-.3.88-.2.2-.48.3-.88.3H5.11Zm1.92-5.69h3.57c.07 0 .14-.02.19-.07a.25.25 0 0 0 .07-.18c0-.17-.09-.25-.26-.25H7.03c-.17 0-.26.08-.26.25 0 .07.02.13.07.18.05.05.12.07.2.07Zm0 1.3h3.57c.17 0 .26-.09.26-.25a.26.26 0 0 0-.07-.2.26.26 0 0 0-.2-.06H7.04c-.17 0-.26.08-.26.26 0 .16.09.25.26.25Zm2.27 1.3h1.3c.07 0 .14-.02.19-.07.05-.05.07-.1.07-.17 0-.17-.09-.26-.26-.26H9.3a.26.26 0 0 0-.2.08.26.26 0 0 0-.06.18c0 .06.02.12.07.17.05.05.11.08.19.08Zm0 1.3h1.3c.17 0 .26-.09.26-.26a.22.22 0 0 0-.07-.17.26.26 0 0 0-.2-.07H9.3a.26.26 0 0 0-.18.07.23.23 0 0 0-.07.17.26.26 0 0 0 .26.26Zm-2.11 0h.91c.3 0 .45-.15.45-.44v-.91c0-.3-.15-.45-.45-.45h-.9c-.29 0-.43.15-.43.45v.91c0 .3.14.44.43.44Z",
                    fill: "#696B6C"
                })))
            };

            function Tn() {
                return Tn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Tn.apply(this, arguments)
            }
            var Pn, Mn = function(n) {
                return g.createElement("svg", Tn({
                    width: 16,
                    height: 16,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), yn || (yn = g.createElement("path", {
                    d: "M8 16a7.7 7.7 0 0 0 3.1-.63A8.14 8.14 0 0 0 16 8a7.7 7.7 0 0 0-.63-3.1A8.14 8.14 0 0 0 8 0C6.9 0 5.87.2 4.9.63A8.27 8.27 0 0 0 .64 4.9C.2 5.87 0 6.9 0 8a7.73 7.73 0 0 0 2.36 5.64 8.16 8.16 0 0 0 2.55 1.73c.96.42 2 .63 3.1.63ZM3.84 7.65c0-.24.07-.42.2-.55a.8.8 0 0 1 .55-.2h.18v4.03c0 .14-.05.25-.14.34a.51.51 0 0 1-.66 0 .45.45 0 0 1-.13-.34V7.65Zm1.27 4.32c.25-.13.38-.38.38-.75V5.2c0-.4.1-.68.3-.88.19-.2.48-.3.88-.3h4.29c.4 0 .69.1.88.3.2.2.3.49.3.88v5.6c0 .4-.1.69-.3.88-.2.2-.48.3-.88.3H5.11Zm1.92-5.69h3.57c.07 0 .14-.02.19-.07a.25.25 0 0 0 .07-.18c0-.17-.09-.25-.26-.25H7.03c-.17 0-.26.08-.26.25 0 .07.02.13.07.18.05.05.12.07.2.07Zm0 1.3h3.57c.17 0 .26-.09.26-.25a.26.26 0 0 0-.07-.2.26.26 0 0 0-.2-.06H7.04c-.17 0-.26.08-.26.26 0 .16.09.25.26.25Zm2.27 1.3h1.3c.07 0 .14-.02.19-.07.05-.05.07-.1.07-.17 0-.17-.09-.26-.26-.26H9.3a.26.26 0 0 0-.2.08.26.26 0 0 0-.06.18c0 .06.02.12.07.17.05.05.11.08.19.08Zm0 1.3h1.3c.17 0 .26-.09.26-.26a.22.22 0 0 0-.07-.17.26.26 0 0 0-.2-.07H9.3a.26.26 0 0 0-.18.07.23.23 0 0 0-.07.17.26.26 0 0 0 .26.26Zm-2.11 0h.91c.3 0 .45-.15.45-.44v-.91c0-.3-.15-.45-.45-.45h-.9c-.29 0-.43.15-.43.45v.91c0 .3.14.44.43.44Z",
                    fill: "#696B6C"
                })))
            };

            function An() {
                return An = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, An.apply(this, arguments)
            }
            var Ln, Rn = function(n) {
                    return g.createElement("svg", An({
                        width: 16,
                        height: 14,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), Pn || (Pn = g.createElement("path", {
                        d: "M16 1.54a6.8 6.8 0 0 1-1.89.52A3.29 3.29 0 0 0 15.56.24a6.8 6.8 0 0 1-2.09.8 3.29 3.29 0 0 0-5.6 2.99A9.32 9.32 0 0 1 1.12.6a3.29 3.29 0 0 0 1.01 4.38 3.29 3.29 0 0 1-1.48-.4v.03a3.28 3.28 0 0 0 2.63 3.22c-.48.14-1 .16-1.48.06a3.3 3.3 0 0 0 3.07 2.28A6.63 6.63 0 0 1 0 11.53a9.3 9.3 0 0 0 5.04 1.48c6.04 0 9.34-5 9.34-9.35l-.01-.42A6.68 6.68 0 0 0 16 1.54Z",
                        fill: "#696B6C"
                    })))
                },
                Dn = function(n) {
                    var e = n.hideBackground;
                    return (0, a.jsxs)(nn.Gd, {
                        hasGap: !0,
                        shouldHideBgColor: e,
                        children: [(0, a.jsx)(gn, {
                            icon: (0, a.jsx)(En, {}),
                            text: "Blog",
                            signedInLink: H.Ql,
                            signedOutLink: H.Ql,
                            inSubMenu: !0
                        }), (0, a.jsx)(nn.P, {}), (0, a.jsx)(gn, {
                            icon: (0, a.jsx)(Mn, {}),
                            text: "Subscribe to newsletter",
                            signedInLink: H.iI,
                            signedOutLink: H.iI,
                            inSubMenu: !0
                        }), (0, a.jsx)(nn.P, {}), (0, a.jsx)(gn, {
                            icon: (0, a.jsx)(Rn, {}),
                            text: "Follow on Twitter",
                            signedInLink: H.N$,
                            signedOutLink: H.N$,
                            inSubMenu: !0
                        }), (0, a.jsx)(nn.P, {}), (0, a.jsx)(gn, {
                            icon: (0, a.jsx)(Sn, {}),
                            text: "Join Discord",
                            signedInLink: H.Vs,
                            signedOutLink: H.Vs,
                            inSubMenu: !0
                        })]
                    })
                };

            function Fn() {
                return Fn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Fn.apply(this, arguments)
            }
            var _n = function(n) {
                return g.createElement("svg", Fn({
                    width: 17,
                    height: 14,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Ln || (Ln = g.createElement("path", {
                    d: "M9.97 13.53a6.52 6.52 0 0 0 4.77-2 6.9 6.9 0 0 0 1.46-2.15 6.4 6.4 0 0 0 .54-2.62A6.86 6.86 0 0 0 9.97 0a6.87 6.87 0 0 0-6.71 6 4.36 4.36 0 0 1 2.72.35 4.33 4.33 0 0 1 2.3 2.84 7.02 7.02 0 0 1 1.68-.2 7 7 0 0 1 1.77.21c.54.14 1 .33 1.4.56.4.23.7.47.93.72a5.35 5.35 0 0 1-2.54 1.6A5.29 5.29 0 0 1 8 11.94a4.36 4.36 0 0 1-.66 1.05 6.72 6.72 0 0 0 2.62.54Zm0-5.67a2.1 2.1 0 0 1-1.16-.33A2.37 2.37 0 0 1 8 6.65c-.2-.38-.3-.8-.3-1.27a2.45 2.45 0 0 1 1.1-2.11c.35-.23.74-.34 1.16-.34.43 0 .8.11 1.15.34a2.5 2.5 0 0 1 1.11 2.11c0 .47-.1.9-.3 1.27-.2.38-.47.68-.81.9-.34.21-.72.32-1.15.31ZM4.1 13.58c.45 0 .88-.09 1.29-.26a3.44 3.44 0 0 0 2.08-3.1A3.39 3.39 0 0 0 2.42 7.3c-.51.3-.92.7-1.22 1.2a3.24 3.24 0 0 0-.46 1.7c0 .46.08.9.26 1.3a3.44 3.44 0 0 0 3.1 2.07Zm0-1.24a.42.42 0 0 1-.32-.12.41.41 0 0 1-.12-.3v-1.28H2.41a.43.43 0 0 1-.3-.12.42.42 0 0 1-.13-.3.4.4 0 0 1 .12-.31.41.41 0 0 1 .3-.12h1.27V8.52c0-.13.04-.24.12-.31a.42.42 0 0 1 .32-.12.4.4 0 0 1 .3.12.4.4 0 0 1 .12.3V9.8h1.28a.4.4 0 0 1 .3.12.4.4 0 0 1 .12.3c0 .13-.04.24-.12.31a.43.43 0 0 1-.3.12H4.53v1.27c0 .13-.04.23-.12.3a.41.41 0 0 1-.3.13Z",
                    fill: "#C7C7CC"
                })))
            };

            function Hn() {
                var n = (0, un.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return Hn = function() {
                    return n
                }, n
            }
            var Bn, Nn = (0, X.ZP)(_n).withConfig({
                    componentId: "sc-576fce3a-0"
                })(Hn(), (function(n) {
                    var e = n.theme,
                        t = n.$isIncognito,
                        r = n.disabled;
                    return (0, jn.B3)(t, r, e)
                })),
                Vn = function(n) {
                    var e = n.isToggled,
                        t = (0, z.j)(),
                        r = t.isSmallDevice,
                        i = t.isMediumDevice,
                        o = t.isXMediumDevice,
                        c = (0, X.Fg)(),
                        s = (0, q.t)();
                    return r || i || o ? (0, a.jsx)(Q.Z, {
                        expanded: e,
                        title: (0, a.jsx)(tn.J, {
                            $isIncognito: s,
                            icon: (0, a.jsx)(Nn, {
                                $isIncognito: s
                            }),
                            title: (0, a.jsx)("span", {
                                children: "Join community"
                            }),
                            children: (0, a.jsx)(nn.Fj, {
                                isToggled: e,
                                color: c.black
                            })
                        }),
                        children: (0, a.jsx)(Dn, {})
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tn.J, {
                            $isIncognito: s,
                            icon: (0, a.jsx)(Nn, {
                                $isIncognito: s
                            }),
                            title: (0, a.jsx)("span", {
                                children: "Join community"
                            }),
                            children: (0, a.jsx)(nn.Fj, {
                                isToggled: e,
                                color: c.black
                            })
                        }), (0, a.jsx)(en.j, {
                            isVisible: e,
                            children: (0, a.jsx)(Dn, {
                                hideBackground: !0
                            })
                        })]
                    })
                },
                Wn = t(26042),
                $n = t(69396),
                Jn = t(31679),
                Un = t(32592);

            function Gn() {
                return Gn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Gn.apply(this, arguments)
            }
            var Kn = function(n) {
                return g.createElement("svg", Gn({
                    width: 17.5,
                    height: 17.5,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Bn || (Bn = g.createElement("path", {
                    d: "M4.16 9.6h4c.16 0 .3-.06.4-.17a.57.57 0 0 0 .18-.42V3.84a.5.5 0 0 0-.18-.4.55.55 0 0 0-.4-.18c-.17 0-.3.06-.42.18a.55.55 0 0 0-.17.4v4.6H4.16a.55.55 0 0 0-.42.17.55.55 0 0 0-.17.4.57.57 0 0 0 .58.58Zm4 7.1a8.14 8.14 0 0 0 8-8 8.14 8.14 0 0 0-8-8c-1.1 0-2.13.2-3.1.62A8.27 8.27 0 0 0 .78 5.6c-.42.97-.62 2-.62 3.09a7.73 7.73 0 0 0 2.36 5.64 8.17 8.17 0 0 0 2.54 1.73c.97.42 2 .63 3.1.63Zm0-1.47a6.5 6.5 0 0 1-6.53-6.54A6.46 6.46 0 0 1 5.6 2.66c.79-.33 1.64-.5 2.54-.5a6.46 6.46 0 0 1 6.04 3.98c.33.8.5 1.64.5 2.55a6.46 6.46 0 0 1-3.99 6.03c-.79.34-1.63.5-2.54.5Z",
                    fill: "#696B6C"
                })))
            };

            function Yn() {
                var n = (0, un.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return Yn = function() {
                    return n
                }, n
            }
            var zn, Xn = (0, X.ZP)(Kn).withConfig({
                    componentId: "sc-d18b66a0-0"
                })(Yn(), (function(n) {
                    var e = n.theme;
                    return (0, jn.B3)(!1, !1, e)
                })),
                qn = t(48085),
                Qn = [{
                    value: qn.D.ANY,
                    label: qn.N.ANY_TIME
                }, {
                    value: qn.D.DAY,
                    label: qn.N.PAST_24
                }, {
                    value: qn.D.WEEK,
                    label: qn.N.PAST_WEEK
                }, {
                    value: qn.D.MONTH,
                    label: qn.N.PAST_MONTH
                }],
                ne = function(n) {
                    var e = n.isToggled,
                        t = n.handleCloseToggle,
                        r = n.searchFilterOptions,
                        i = n.setSearchFilterOptions,
                        o = (0, z.j)(),
                        c = o.isSmallDevice,
                        s = o.isMediumDevice,
                        l = o.isXMediumDevice,
                        u = (0, X.Fg)(),
                        d = function() {
                            var n;
                            if ("any" === r.recency) return "";
                            var e = null === (n = Qn.find((function(n) {
                                return n.value === r.recency
                            }))) || void 0 === n ? void 0 : n.label;
                            return e ? ": ".concat(e) : ""
                        },
                        h = function(n) {
                            (0, Y.lE)(Jn.w2, n, null, 2592e3), i((0, $n.Z)((0, Wn.Z)({}, r), {
                                recency: n
                            }))
                        };
                    return c || s || l ? (0, a.jsx)(Q.Z, {
                        expanded: e,
                        title: (0, a.jsx)(tn.J, {
                            icon: (0, a.jsx)(Xn, {}),
                            title: "Recency".concat(d()),
                            $isIncognito: !1,
                            children: (0, a.jsx)(nn.Fj, {
                                color: u.black,
                                isToggled: e
                            })
                        }),
                        children: (0, a.jsx)(nn.Gd, {
                            children: Qn.map((function(n, e) {
                                var t = n.value,
                                    i = n.label;
                                return (0, a.jsx)(nn.HP, {
                                    "data-testid": (0, Un.O)(B.Sul, e),
                                    isActive: r.recency === t,
                                    onClick: function() {
                                        h(t)
                                    },
                                    children: i
                                }, t)
                            }))
                        })
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tn.J, {
                            icon: (0, a.jsx)(Xn, {}),
                            title: "Recency".concat(d()),
                            $isIncognito: !1,
                            children: (0, a.jsx)(nn.Fj, {
                                color: u.black,
                                isToggled: e
                            })
                        }), (0, a.jsx)(en.j, {
                            isVisible: e,
                            options: Qn,
                            onClick: function(n) {
                                var e = n.value;
                                h(e), t()
                            }
                        })]
                    })
                },
                ee = t(23747),
                te = t(28947);

            function re() {
                return re = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, re.apply(this, arguments)
            }
            var ie = function(n) {
                return g.createElement("svg", re({
                    width: 17,
                    height: 14,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), zn || (zn = g.createElement("path", {
                    d: "M11.4 4.37c.85 0 1.59-.51 1.91-1.25h2.34c.46 0 .82-.39.82-.86a.84.84 0 0 0-.82-.85h-2.33A2.13 2.13 0 0 0 11.4.16c-.86 0-1.6.51-1.93 1.25H1.32a.85.85 0 0 0-.85.85c0 .47.38.86.85.86h8.15a2.13 2.13 0 0 0 1.93 1.25Zm0-1.13a.98.98 0 0 1-.98-.98c0-.55.44-.97.98-.97.55 0 .98.42.98.97s-.43.98-.98.98ZM1.3 6.21a.85.85 0 0 0-.83.86c0 .45.38.86.83.86h2.42a2.12 2.12 0 0 0 3.85 0h8.07c.47 0 .83-.4.83-.86a.84.84 0 0 0-.83-.86H7.57a2.1 2.1 0 0 0-3.84 0H1.3Zm4.34 1.84a.98.98 0 0 1-.97-.98c0-.56.43-.98.97-.98.56 0 .98.42.98.98 0 .54-.42.98-.98.98Zm5.76 5.93c.85 0 1.59-.51 1.92-1.24h2.33c.46 0 .82-.4.82-.86a.84.84 0 0 0-.82-.86h-2.33a2.13 2.13 0 0 0-1.92-1.25c-.85 0-1.6.51-1.93 1.25H1.32a.85.85 0 0 0-.85.86c0 .45.38.86.85.86h8.15a2.13 2.13 0 0 0 1.93 1.24Zm0-1.13a.98.98 0 0 1-.98-.97c0-.56.44-.98.98-.98.55 0 .98.42.98.98 0 .54-.43.97-.98.97Z",
                    fill: "#C7C7CC"
                })))
            };

            function oe() {
                var n = (0, un.Z)(["\n  path {\n    fill: ", ";\n  }\n"]);
                return oe = function() {
                    return n
                }, n
            }
            var ce = (0, X.ZP)(ie).withConfig({
                    componentId: "sc-a9934bf4-0"
                })(oe(), (function(n) {
                    var e = n.theme;
                    return (0, jn.B3)(!1, !1, e)
                })),
                ae = function(n) {
                    var e = n.isToggled,
                        t = n.handleCloseToggle,
                        r = n.searchFilterOptions,
                        i = n.setSearchFilterOptions,
                        o = (0, z.j)(),
                        c = o.isSmallDevice,
                        s = o.isMediumDevice,
                        l = o.isXMediumDevice,
                        u = (0, ee.Z)().sendEvent,
                        d = (0, X.Fg)(),
                        h = "".concat(function() {
                            var n;
                            if ("ALL" === r.region) return "";
                            var e = null === (n = te.U.find((function(n) {
                                return n.value === r.region
                            }))) || void 0 === n ? void 0 : n.label;
                            return e ? ": ".concat(e) : ""
                        }()) || "",
                        f = function(n) {
                            (0, Y.lE)(Jn.Ds, n, null, 2592e3), u(F.j.UserSelectsRegion, {
                                selectedRegion: n
                            }), i((0, $n.Z)((0, Wn.Z)({}, r), {
                                region: n
                            }))
                        };
                    return c || s || l ? (0, a.jsx)(Q.Z, {
                        expanded: e,
                        title: (0, a.jsx)(tn.J, {
                            icon: (0, a.jsx)(ce, {}),
                            title: "Region".concat(h),
                            $isIncognito: !1,
                            children: (0, a.jsx)(nn.Fj, {
                                color: d.black,
                                isToggled: e
                            })
                        }),
                        children: (0, a.jsx)(nn.Gd, {
                            children: te.U.map((function(n, e) {
                                var t = n.value,
                                    i = n.label;
                                return (0, a.jsx)(nn.HP, {
                                    "data-testid": (0, Un.O)(B.Sul, e),
                                    isActive: r.region === t,
                                    onClick: function() {
                                        return f(t)
                                    },
                                    children: i
                                }, t)
                            }))
                        })
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tn.J, {
                            icon: (0, a.jsx)(ce, {}),
                            title: "Region".concat(h),
                            $isIncognito: !1,
                            children: (0, a.jsx)(nn.Fj, {
                                color: d.black,
                                isToggled: e
                            })
                        }), (0, a.jsx)(en.j, {
                            isVisible: e,
                            options: te.U,
                            onClick: function(n) {
                                var e = n.value;
                                f(e), t()
                            }
                        })]
                    })
                };

            function se() {
                var n = (0, un.Z)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: ", ";\n"]);
                return se = function() {
                    return n
                }, n
            }

            function le() {
                var n = (0, un.Z)(["\n  color: ", ";\n  letter-spacing: -0.15px;\n  font-size: ", ";\n  padding-top: ", ";\n"]);
                return le = function() {
                    return n
                }, n
            }

            function ue() {
                var n = (0, un.Z)(["\n  ", ";\n"]);
                return ue = function() {
                    return n
                }, n
            }

            function de() {
                var n = (0, un.Z)(["\n  ", ";\n"]);
                return de = function() {
                    return n
                }, n
            }
            var he = X.ZP.div.withConfig({
                    componentId: "sc-aeff78f0-0"
                })(se(), s.W0.xs),
                fe = (0, X.iv)(le(), s.$_.grayscale_50, s.JB.caption, s.W0.sm),
                pe = X.ZP.span.withConfig({
                    componentId: "sc-aeff78f0-1"
                })(ue(), fe),
                ge = (0, X.ZP)(ln.e).withConfig({
                    componentId: "sc-aeff78f0-2"
                })(de(), fe),
                ve = function() {
                    return (0, a.jsxs)(he, {
                        children: [(0, a.jsx)(ge, {
                            href: "legal/terms",
                            isInternal: !0,
                            shouldOpenInNewTab: !0,
                            children: "Terms"
                        }), (0, a.jsx)(pe, {
                            children: "\xb7"
                        }), (0, a.jsx)(ge, {
                            href: H.Ar,
                            shouldOpenInNewTab: !0,
                            children: "We're hiring!"
                        })]
                    })
                },
                me = t(17226),
                xe = t(51753),
                je = t(14694),
                be = t(85346),
                we = t(33283),
                Ze = t(13771),
                Ce = f()((function() {
                    return t.e(833).then(t.bind(t, 33447)).then((function(n) {
                        return n.Appearance
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [33447]
                        }
                    }
                }),
                Oe = me.T.ACTIVITY,
                Ie = me.T.APPEARANCE_SWITCH,
                Ee = me.T.DEFAULT,
                ke = me.T.DOWNLOAD_APP,
                ye = me.T.FEEDBACK,
                Se = me.T.FOOTER,
                Te = me.T.HELP,
                Pe = me.T.JOIN_COMMUNITY,
                Me = me.T.LOGOUT,
                Ae = me.T.PREFERRED_SOURCES,
                Le = me.T.PROFILE_PAGE,
                Re = me.T.RECENCY,
                De = me.T.REGION,
                Fe = me.T.SAFE_SEARCH,
                _e = me.T.SEARCH_MODE,
                He = me.T.SIGN_UP,
                Be = me.T.SLACK,
                Ne = ["Off", "Moderate", "Strict"],
                Ve = function(n) {
                    var e = n.isMobile,
                        t = n.setIsDropdownOpen,
                        r = n.toggle,
                        i = n.hiddenDropdownItems,
                        u = (0, g.useState)(xe.L.None),
                        h = u[0],
                        f = u[1],
                        b = (0, v.Zl)(L.h),
                        w = (0, p.useRouter)(),
                        C = (0, j.a)(),
                        O = C.user,
                        E = C.isLoading,
                        k = (0, l.Vb)().enableProfilePage,
                        S = (0, v.sJ)(L.z),
                        T = (0, c.Z)((0, v.FV)(R.cg), 2),
                        M = T[0],
                        V = T[1],
                        W = (0, v.sJ)(D.F),
                        $ = (0, x.I)().handleSearchModeChange,
                        J = (0, m.R)("searchFilter", {}, !0),
                        G = J.local,
                        K = J.setLocal,
                        z = (0, g.useRef)(!1),
                        X = (0, g.useCallback)((function(n) {
                            f(xe.L.None), S || (! function(n, e) {
                                U.apply(this, arguments)
                            }("safe_search", {
                                safeSearch: Ne[n]
                            }), (0, Y.lE)((0, Y.LH)(O), Ne[n], null)), V(Ne[n]);
                            var e = "".concat(Ne[n], " Safe Search");
                            (0, N.qP)(F.j.UserClickInNonApp, {
                                appname: F.j.UserDropdownApp,
                                actionTitle: e,
                                actionName: d()(e)
                            }, W, S), z.current = !0
                        }), [V, O, S, W]),
                        q = function(n) {
                            f(h === n ? xe.L.None : n)
                        },
                        Q = function() {
                            var n = h === xe.L.SafeSearch;
                            if (!z.current) {
                                var e = "".concat(n ? "Close" : "Open", " Safe Search");
                                (0, N.qP)(F.j.UserClickInNonApp, {
                                    appname: F.j.UserDropdownApp,
                                    actionTitle: e,
                                    actionName: d()(e)
                                }, W, S)
                            }
                            f(n ? xe.L.None : xe.L.SafeSearch), z.current = !1
                        },
                        nn = function(n) {
                            e ? r() : (n(), t(!1))
                        },
                        en = (0, g.useCallback)((function(n) {
                            return null === i || void 0 === i ? void 0 : i.includes(n)
                        }), [i]);
                    return {
                        dropdownItems: (0, g.useMemo)((function() {
                            var n = Boolean(O),
                                e = {
                                    component: (0, a.jsx)(je.K, {
                                        isIncognito: S,
                                        eventContext: W,
                                        isSignedIn: n
                                    }, Ee),
                                    dataTestId: B.Tsz
                                },
                                t = {
                                    component: (0, a.jsx)(jn.aS, {
                                        children: "Appearance"
                                    })
                                },
                                r = {
                                    component: (0, a.jsx)(jn.aS, {
                                        children: "Quick settings"
                                    })
                                },
                                i = {
                                    component: (0, a.jsx)(jn.aS, {
                                        children: "Connect"
                                    })
                                },
                                o = {
                                    component: (0, a.jsx)("div", {
                                        style: {
                                            height: s.W0.sl
                                        }
                                    })
                                },
                                c = {
                                    component: (0, a.jsx)("div", {
                                        style: {
                                            height: s.W0.xs
                                        }
                                    })
                                },
                                l = {
                                    component: (0, a.jsx)(Ce, {}, Ie),
                                    dataTestId: B.Kui
                                },
                                u = {
                                    component: (0, a.jsx)(gn, {
                                        isSignedIn: n,
                                        icon: (0, a.jsx)(A, {}),
                                        signedInLink: _.cq,
                                        signedOutLink: _.cq,
                                        text: "Customize search",
                                        dataTestId: Ae
                                    }, Ae),
                                    dataTestId: B.aFu,
                                    hasSeparator: !0
                                },
                                d = {
                                    component: (0, a.jsx)(be.W, {
                                        isIncognito: S
                                    }, _e),
                                    dataTestId: S ? B.pf0 : B.vFz,
                                    hasSeparator: !0
                                },
                                f = n && !S ? {
                                    component: (0, a.jsx)(gn, {
                                        icon: (0, a.jsx)(Z, {}),
                                        isSignedIn: n,
                                        signedInLink: "/profile/youchat",
                                        text: "Activity"
                                    }, Oe),
                                    hasSeparator: !S && n
                                } : {},
                                p = {
                                    component: (0, a.jsx)(we.k, {
                                        disabled: !1,
                                        isIncognito: S,
                                        safeSearch: M,
                                        isSafeSearchToggled: h === xe.L.SafeSearch,
                                        onSafeSearchClick: X
                                    }, Fe),
                                    dataTestId: B.VbX,
                                    hasSeparator: !0
                                },
                                g = {
                                    component: (0, a.jsx)(ae, {
                                        isToggled: h === xe.L.Region,
                                        handleCloseToggle: function() {
                                            return q(xe.L.None)
                                        },
                                        searchFilterOptions: G,
                                        setSearchFilterOptions: K
                                    }, De),
                                    hasSeparator: !0
                                },
                                v = {
                                    component: (0, a.jsx)(ne, {
                                        isToggled: h === xe.L.Recency,
                                        handleCloseToggle: function() {
                                            return q(xe.L.None)
                                        },
                                        searchFilterOptions: G,
                                        setSearchFilterOptions: K
                                    }, Re),
                                    hasSeparator: !0
                                },
                                m = {
                                    component: k && !S && (0, a.jsx)(gn, {
                                        icon: (0, a.jsx)(I, {}),
                                        isSignedIn: n,
                                        signedInLink: _.KX,
                                        signedOutLink: _.KX,
                                        text: "All settings..."
                                    }, Le),
                                    dataTestId: B.jE3,
                                    hasSeparator: !0
                                },
                                x = {
                                    component: (0, a.jsx)(Ze.l, {
                                        user: O,
                                        routePath: w.asPath,
                                        isIncognito: S,
                                        eventContext: W
                                    }, O ? Me : He),
                                    dataTestId: B.DsK,
                                    hasSeparator: !0
                                },
                                j = {
                                    component: (0, a.jsx)(gn, {
                                        icon: (0, a.jsx)(y, {}),
                                        isSignedIn: n,
                                        signedInLink: H.JQ,
                                        signedOutLink: H.JQ,
                                        text: "Send feedback"
                                    }, ye),
                                    hasSeparator: !0
                                },
                                b = {
                                    component: !S && (0, a.jsx)(gn, {
                                        icon: (0, a.jsx)(P, {}),
                                        isSignedIn: n,
                                        signedInLink: "https://about.you.com",
                                        signedOutLink: "https://about.you.com",
                                        text: "Help"
                                    }, Te),
                                    hasSeparator: !0
                                };
                            return [e, o, t, o, l, o, r, u, d, f, p, g, v, m, x, c, i, j, {
                                component: (0, a.jsx)(Vn, {
                                    isToggled: h === xe.L.JoinCommunity
                                }, Pe),
                                hasSeparator: !0
                            }, {
                                component: (0, a.jsx)(Cn, {
                                    isToggled: h === xe.L.DownloadApp
                                }, ke),
                                hasSeparator: !0
                            }, b, {
                                component: (0, a.jsx)(ve, {}, Se)
                            }].filter((function(n) {
                                return (null === n || void 0 === n ? void 0 : n.component) && !en(null === n || void 0 === n ? void 0 : n.component.key)
                            }))
                        }), [O, S, W, M, h, X, k, w.asPath, en]),
                        user: O,
                        isLoading: E,
                        isSafeSearchToggled: h === xe.L.SafeSearch,
                        setIsSafeSearchToggled: function(n) {
                            return f(n)
                        },
                        isIncognito: S,
                        router: w,
                        handleOnItemClick: function(n) {
                            var r, i, c = n.key,
                                a = n.hideCallback,
                                s = (i = {}, (0, o.Z)(i, Pe, (function() {
                                    return q(xe.L.JoinCommunity)
                                })), (0, o.Z)(i, Ee, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, ke, (function() {
                                    return q(xe.L.DownloadApp)
                                })), (0, o.Z)(i, ye, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Se, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Me, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Ae, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Le, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Re, (function() {
                                    return q(xe.L.Recency)
                                })), (0, o.Z)(i, De, (function() {
                                    return q(xe.L.Region)
                                })), (0, o.Z)(i, Fe, Q), (0, o.Z)(i, _e, (function() {
                                    return function(n) {
                                        e || (n(), t(!1)), S || b(!0), $()
                                    }(a)
                                })), (0, o.Z)(i, He, (function() {
                                    return nn(a)
                                })), (0, o.Z)(i, Be, (function() {
                                    return nn(a)
                                })), i);
                            return null === (r = s[c]) || void 0 === r ? void 0 : r.call(s)
                        },
                        eventContext: W,
                        setOpenSubMenu: f
                    }
                }
        },
        53089: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return u
                }
            });
            var r = t(10253),
                i = t(4480),
                o = t(92177),
                c = t(88829),
                a = t(15985),
                s = t(69537),
                l = t(60676),
                u = function() {
                    var n = (0, r.Z)((0, i.FV)(o.z), 2),
                        e = n[0],
                        t = n[1],
                        u = (0, i.sJ)(c.F),
                        d = e ? a.j.UserExitPrivateMode : a.j.UserEnterPrivateMode;
                    return {
                        isIncognito: e,
                        handleSearchModeChange: function() {
                            (0, s.qP)(d, {}, u, !1), (0, l.lE)((0, l.Jn)(), !e, null), t((function(n) {
                                return !n
                            }))
                        }
                    }
                }
        },
        32592: function(n, e, t) {
            t.d(e, {
                O: function() {
                    return r
                }
            });
            var r = function(n, e) {
                return (null === n || void 0 === n ? void 0 : n[e]) || ""
            }
        },
        22112: function(n, e, t) {
            t.d(e, {
                O: function() {
                    return p
                }
            });
            var r = t(26042),
                i = t(99534),
                o = t(85893),
                c = t(7297),
                a = t(52015),
                s = t(23376);

            function l() {
                var n = (0, c.Z)(['\n  content: "";\n  display: inline-block;\n  transition: 0.4s ease-in-out;\n  width: ', ";\n  height: ", ";\n  border-radius: ", ";\n  background: ", ";\n"]);
                return l = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, c.Z)(["\n  background: none;\n  position: relative;\n  width: calc(", " + 8px);\n  height: ", ";\n  cursor: pointer;\n  border-radius: 2px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -o-appearance: none;\n\n  &::before {\n    ", "\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n  }\n\n  &::after {\n    ", "\n  }\n\n  &:checked {\n    &::before {\n      left: calc(100% - ", " - ", ");\n    }\n\n    &::after {\n      background: ", ";\n    }\n  }\n  &:focus {\n    box-shadow: none;\n  }\n"]);
                return u = function() {
                    return n
                }, n
            }
            var d = "20px",
                h = function(n) {
                    var e = n.size,
                        t = void 0 === e ? "100%" : e,
                        r = n.radius,
                        i = void 0 === r ? "50%" : r,
                        o = n.color;
                    return (0, a.iv)(l(), t, t, i, o)
                },
                f = a.ZP.input.withConfig({
                    componentId: "sc-5517a177-0"
                })(u(), s.W0.xl, s.W0.lg, (function(n) {
                    var e = n.theme;
                    return h({
                        size: d,
                        color: e.white
                    })
                }), "2px", (function(n) {
                    var e = n.theme;
                    return h({
                        radius: d,
                        color: e.darkMode ? e.black : "#e7e7eb"
                    })
                }), d, "2px", (function(n) {
                    return n.theme.primary
                })),
                p = function(n) {
                    var e = n.isChecked,
                        t = n.onChange,
                        c = n.dataTestId,
                        a = (0, i.Z)(n, ["isChecked", "onChange", "dataTestId"]);
                    return (0, o.jsx)(f, (0, r.Z)({
                        type: "checkbox",
                        onChange: t,
                        checked: e,
                        "data-testid": c
                    }, a))
                }
        }
    }
]);