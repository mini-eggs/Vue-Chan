class RemoveClickEvents {
  constructor(node, onClick) {
    this.node = node;
    this.onClick = onClick;
    this.eventListener = e => this._handleClickEvent(e);
  }

  get _links() {
    return [...new Set(this.node.querySelectorAll("a"))];
  }

  _handleClickEvent(event) {
    this.onClick(event);
  }

  listen() {
    this._links.forEach(link => {
      link.addEventListener("click", this.eventListener);
    });
  }

  unlisten() {
    this._links.forEach(link => {
      link.removeEventListener("click", this.eventListener);
    });
  }
}

export default RemoveClickEvents;
