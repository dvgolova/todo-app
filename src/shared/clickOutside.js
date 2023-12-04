export const clickOutside = {
  bind: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent, { capture: true });
  },
  unbind: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent, {
      capture: true,
    });
  }
};