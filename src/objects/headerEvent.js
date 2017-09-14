class HeaderEvent {
  constructor({ container, inner, offset }) {
    this.container = container;
    this.inner = inner;
    this.offset = offset;
  }

  get _header() {
    return document.querySelector(this.container);
  }

  get _hamburgerEL() {
    return document.querySelector(this.inner);
  }

  _showHeader() {
    this._header.style.transform = `translateY(0px)`;
  }

  _hideHeader() {
    const pixels = this._hamburgerEL.offsetHeight * -1;
    this._header.style.transform = `translateY(${pixels}px)`;
  }

  scrollHandler() {
    const { offset, _showHeader, _hideHeader } = this;
    const nextFunction = window.scrollY < offset ? _showHeader : _hideHeader;
    nextFunction.bind(this)();
  }
}

export default HeaderEvent;
