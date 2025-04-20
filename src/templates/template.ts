export abstract class Template {

  public htmlToNode(html: string): Node {
    const template = document.createElement('template');
    template.innerHTML = html;

    if(template.content.children.length !== 1) {
      throw new Error("Template must have exactly one root element");
    }

    return template.content.firstChild;
  }

}
