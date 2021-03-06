export default class Monitor {

  constructor() {
    this.HTMLObject = this.createWrapper();
    this.outputs = {};
  }

  out(t, v) {
    if (!this.outputs[t]) {
      console.warn("Monitor > no output '" + t +"'");
      return false;
    }
    this.outputs[t].innerHTML = v;
  }

  newOutput(title) {
    title = this.sanitize(title);
    let e = this.createOutput(title);
    let v = e.getElementsByTagName("SPAN")[0];
    this.outputs[title] = v;
    this.HTMLObject.appendChild(e);
    return Object.keys(this.outputs).length;
  }

  createWrapper() {
    let e = document.createElement("DIV");
    e.setAttribute("id", "monitorWrapper");
    document.getElementsByTagName("body")[0].appendChild(e);
    return e;
  }

  createOutput(title) {
    let e = document.createElement("DIV");
    e.setAttribute("class", "monitor");
    e.setAttribute("id", title);

    let head = document.createElement("H3");
    head.innerHTML = title;
    e.appendChild(head);

    let val = document.createElement("SPAN");
    val.innerHTML = "---";
    e.appendChild(val);

    return e;
  }

  sanitize(s) {
   return s.replace(/\W/g, '');
  }

}
