"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1012], {
        1012: function(e, i, l) {
            l.r(i);
            var o = l(85893),
                n = l(67294),
                s = function(e) {
                    var i = e.height,
                        l = e.width,
                        n = e.color,
                        s = void 0 === n ? "#696B6C" : n,
                        C = e.backgroundColor,
                        t = void 0 === C ? "none" : C,
                        c = e.className,
                        h = e.onClick;
                    return (0, o.jsx)("svg", {
                        width: l,
                        height: i,
                        fill: t,
                        className: c,
                        onClick: h,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M0.342208 13.9052C-0.105381 14.3632 -0.126199 15.1751 0.352617 15.6435C0.831433 16.1119 1.63293 16.1015 2.09093 15.6539L8.00326 9.74157L13.9052 15.6539C14.3736 16.1119 15.1751 16.1223 15.6435 15.6435C16.1119 15.1647 16.1223 14.3736 15.6539 13.9052L9.74157 7.99285L15.6539 2.09093C16.1223 1.62252 16.1223 0.821024 15.6435 0.352617C15.1647 -0.11579 14.3736 -0.11579 13.9052 0.342208L8.00326 6.25454L2.09093 0.342208C1.63293 -0.105381 0.821024 -0.126199 0.352617 0.352617C-0.11579 0.831433 -0.105381 1.63293 0.342208 2.08052L6.25454 7.99285L0.342208 13.9052Z",
                            fill: s
                        })
                    })
                };
            i.default = (0, n.memo)(s)
        }
    }
]);