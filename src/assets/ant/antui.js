function amAutoClear() {
  var e = document.querySelectorAll(".am-input-autoclear");
  e && Array.prototype.forEach.call(e, function (e) {
    var t = e.querySelector(".am-icon-clear"),
      r = e.querySelector('input[type="text"],input[type="password"],input[type="number"],input[type="tel"],input[type="email"],input[type="url"],input[type="search"]');
    t && r && (t.addEventListener("touchstart", function () {
      r.value = "", r.focus(), t.style.visibility = "hidden"
    }, !1), t.addEventListener("click", function () {
      r.value = "", r.focus(), t.style.visibility = "hidden"
    }, !1), r.addEventListener("focus", function () {
      t.style.visibility = r.value.length > 0 ? "visible" : "hidden"
    }, !1), r.addEventListener("input", function () {
      t.style.visibility = r.value.length > 0 ? "visible" : "hidden"
    }, !1), r.addEventListener("blur", function () {
      setTimeout(function () {
        t.style.visibility = "hidden"
      }, 20)
    }, !1))
  })
}

function amTextareaAutoHeight() {
  var e = document.querySelectorAll(".am-textarea-autoheight");
  e && Array.prototype.forEach.call(e, function (e) {
    var t = e.currentStyle || document.defaultView.getComputedStyle(e, null),
      r = Math.ceil(t.height.slice(0, -2)),
      n = e.clientHeight;
    e.style.resize = "none", e.addEventListener("input", function () {
      var t = Math.floor((e.scrollHeight - n + r) / r);
      e.setAttribute("rows", t)
    }, !1)
  })
}

function amInputAutoLight() {
  function e(e) {
    if (document.getElementById(e)) {
      var t = document.querySelectorAll("[data-am-required-for=" + e + "]"),
        r = !0;
      return Array.prototype.forEach.call(t, function (e) {
        var t = Number(e.getAttribute("data-am-required-length")) || 1;
        r = r && e.value.length >= t
      }), r
    }
    return !0
  }

  function t(e) {
    var t = e.target.getAttribute("data-am-required-for");
    r(t)
  }

  function r(t) {
    var r = document.getElementById(t);
    r && (e(t) ? r.removeAttribute("disabled") : r.setAttribute("disabled", "disabled"))
  }
  var n = document.querySelectorAll("[data-am-required-for]"),
    a = {};
  Array.prototype.forEach.call(n, function (e) {
    e.addEventListener("input", t), e.addEventListener("focus", t), e.addEventListener("blur", t);
    var n = e.getAttribute("data-am-required-for");
    a[n] || (r(n), a[n] = !0)
  })
}

function amTouchActive(e, t) {
  t = t || {};
  var r, n = !1,
    a = t.activeClass || "hover",
    i = t.lockTime || 1e3,
    u = function (e) {
      var t = e.currentTarget;
      n || (t.className = t.className + " " + a, r = setTimeout(function () {
        t.className = t.className.replace(a, "")
      }, i))
    },
    o = function (e) {
      n = !0, l(e)
    },
    l = function (e) {
      var t = e.currentTarget;
      t.className = t.className.replace(a, ""), clearTimeout(r), n = !1
    };
  e = "object" == typeof e && e.length > 1 ? e : [e];
  for (var c = 0; c < e.length; c++)
    for (var d = document.querySelectorAll(e[c]), s = 0; s < d.length; s++) {
      var v = d[s];
      v && v.addEventListener && (v.addEventListener("touchstart", u, !1), v.addEventListener("touchmove", o, !1), v.addEventListener("touchend", l, !1), v.addEventListener("touchcancel", l, !1))
    }
}

function amTextareaNumCounter() {
  var e = document.querySelectorAll(".am-textarea");
  Array.prototype.forEach.call(e, function (e) {
    var t = e.querySelector("textarea");
    t.addEventListener("input", function (e) {
      var t = e.target,
        r = t.parentNode.querySelector(".am-textarea-cur-num");
      r.innerHTML = t.value.length
    })
  })
}

function amInputErrorTip() {
  var e = document.querySelectorAll(".am-error-tip");
  Array.prototype.forEach.call(e, function (e) {
    e.addEventListener("click", function (e) {
      var t = e.target,
        r = t.getAttribute("data-error");
      r && !!window.AlipayJSBridge && window.AlipayJSBridge.call("toast", {
        content: r,
        duration: 2e3
      })
    })
  })
}