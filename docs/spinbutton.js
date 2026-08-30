const r = (i, t, e) => Math.min(Math.max(i, t), e), v = (i, t) => {
  let e = 0, s = null;
  return (...a) => {
    const n = Date.now();
    n - e >= t ? (e = n, i(...a)) : s || (s = window.setTimeout(() => {
      e = Date.now(), s = null, i(...a);
    }, t - (n - e)));
  };
}, h = (i) => {
  var t;
  return ((t = i.closest("[lang]")) == null ? void 0 : t.getAttribute("lang")) || void 0;
}, u = (i, t, e) => {
  if (!t)
    return i.toString();
  const s = new Intl.PluralRules(e).select(i), a = t[s] ?? t.other ?? t.one;
  return a ? `${i} ${a}` : i.toString();
}, o = (i, t, e) => {
  if (i !== null)
    return t === e ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled");
}, c = (i, t = {}, e) => {
  const s = new CustomEvent(`Spinbutton.${e}`, {
    bubbles: !0,
    // Allow the event to propagate up the DOM tree
    cancelable: !0,
    detail: t
  });
  return i.dispatchEvent(s);
}, p = {
  step: 1,
  delay: 20
};
class d {
  constructor(t, e = {}) {
    this.throttle = null, this.handleInput = (a) => {
      const { target: n } = a, l = n.value;
      this.setValue(isNaN(Number(l)) ? parseInt(l, 10) : this.value.now);
    }, this.handleKeydown = (a) => {
      const n = a.key || a.code, l = {
        ArrowUp: () => this.setValue(this.value.now + this.options.step),
        ArrowRight: () => this.setValue(this.value.now + this.options.step),
        ArrowDown: () => this.setValue(this.value.now - this.options.step),
        ArrowLeft: () => this.setValue(this.value.now - this.options.step),
        PageDown: () => this.setValue(this.value.now - this.options.step * 5),
        PageUp: () => this.setValue(this.value.now + this.options.step * 5),
        Home: () => this.value.min && this.setValue(this.value.min),
        End: () => this.value.max && this.setValue(this.value.max),
        Backspace: () => this.value.min && this.setValue(this.value.min),
        Delete: () => this.value.min && this.setValue(this.value.min),
        default: () => !1
      };
      l[n] && (a.preventDefault(), l[n]());
    }, this.decrease = () => {
      this.setValue(this.value.now - this.options.step);
    }, this.increase = () => {
      this.setValue(this.value.now + this.options.step);
    }, this.el = t, this.options = { ...p, ...e }, this.$input = this.el.querySelector('input[type="text"]'), this.$increase = this.el.querySelector(".js-increase"), this.$decrease = this.el.querySelector(".js-decrease"), this.$liveRegion = this.el.querySelector("[aria-live]");
    const s = parseInt(this.el.getAttribute("aria-valuenow") || "0", 10);
    this.text = JSON.parse(this.el.getAttribute("data-spinbutton-text") || "null"), this.options.step = parseInt(
      this.el.getAttribute("data-spinbutton-step") || this.options.step.toString(),
      10
    ), this.options.delay = parseInt(
      this.el.getAttribute("data-spinbutton-delay") || this.options.delay.toString(),
      10
    ), this.value = {
      min: this.el.getAttribute("aria-valuemin") !== null ? parseInt(this.el.getAttribute("aria-valuemin"), 10) : !1,
      max: this.el.getAttribute("aria-valuemax") !== null ? parseInt(this.el.getAttribute("aria-valuemax") || "0", 10) : !1,
      now: s,
      text: u(s, this.text, h(this.el))
    };
  }
  init() {
    this.setValue(this.value.now, !1), this.initEvents();
  }
  initEvents() {
    this.el.addEventListener("keydown", this.handleKeydown), this.$increase && this.$increase.addEventListener("click", this.increase), this.$decrease && this.$decrease.addEventListener("click", this.decrease), this.$input && this.$input.addEventListener("input", this.handleInput);
  }
  setMin(t, e = !0) {
    this.value.min = parseInt(t.toString(), 10), this.el.setAttribute("aria-valuemin", t.toString()), this.setValue(this.value.now, e);
  }
  setMax(t, e = !0) {
    this.value.max = parseInt(t.toString(), 10), this.el.setAttribute("aria-valuemax", t.toString()), this.setValue(this.value.now, e);
  }
  setValue(t, e = !0) {
    const s = isNaN(t) ? this.value.now : parseInt(t.toString(), 10), a = this.value.min !== !1 ? this.value.min : Number.MIN_SAFE_INTEGER, n = this.value.max !== !1 ? this.value.max : Number.MAX_SAFE_INTEGER;
    s < a || s > n ? this.el.setAttribute("aria-invalid", "true") : this.el.removeAttribute("aria-invalid"), this.value.now = r(s, a, n), this.value.text = u(this.value.now, this.text, h(this.el)), this.value.max !== !1 && o(this.$increase, this.value.now, this.value.max), this.value.min !== !1 && o(this.$decrease, this.value.now, this.value.min), this.el.setAttribute("aria-valuenow", this.value.now.toString()), this.el.setAttribute("aria-valuetext", this.value.text), this.$input && (this.$input.setAttribute("value", this.value.now.toString()), this.$input.value = this.value.now.toString()), this.$liveRegion && (this.$liveRegion.textContent = this.value.text), e && (this.throttle || (this.throttle = v(() => {
      const l = { value: this.value.now };
      c(this.el, l, "change");
    }, this.options.delay)), this.throttle());
  }
  destroy() {
    this.el.removeEventListener("keydown", this.handleKeydown), this.$increase && this.$increase.removeEventListener("click", this.increase), this.$decrease && this.$decrease.removeEventListener("click", this.decrease), this.$input && this.$input.removeEventListener("input", this.handleInput);
  }
}
export {
  d as default
};
