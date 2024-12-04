class HtmlElement {
  constructor(tagName, isSelfClosing = false, textContent = "") {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing;
    this.textContent = textContent;
    this.attributes = {};
    this.styles = {};
    this.children = [];
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  setStyle(property, value) {
    this.styles[property] = value;
  }
  appendChild(element) {
    this.children.push(element); // to the end
  }
  prependChild(element) {
    this.children.unshift(element); // to the start
  }
  getHtml() {
    const attributesString = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("");

    const stylesString = Object.entries(this.styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");

    const openingTag = `<${this.tagName}${attributesString}${
      stylesString ? ` style="${stylesString}"` : ""
    }>`;

    if (this.isSelfClosing) {
      return `<${this.tagName}${attributesString} />`;
    }

    const childrenHtml = this.children.map((child) => child.getHtml()).join("");
    const closingTag = `</${this.tagName}>`;

    return `${openingTag}${this.textContent}${childrenHtml}${closingTag}`;
  }
}

// html block realization
const wrapper = new HtmlElement("div");
wrapper.setAttribute("id", "wrapper");
wrapper.setStyle("display", "flex");

const createBlock = () => {
  const block = new HtmlElement("div");
  block.setStyle("width", "300px");
  block.setStyle("margin", "10px");

  const header = new HtmlElement("h3", false, "What is Lorem Ipsum?");
  const image = new HtmlElement("img", true);
  image.setAttribute("src", "lipsum.jpg");
  image.setAttribute("alt", "Lorem Ipsum");
  image.setStyle("width", "100%");

  const paragraph = new HtmlElement("p");
  paragraph.setStyle("text-align", "justify");
  paragraph.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const link = new HtmlElement("a", false, "More...");
  link.setAttribute("href", "https://www.lipsum.com/");
  link.setAttribute("target", "_blank");

  paragraph.appendChild(link);

  block.appendChild(header);
  block.appendChild(image);
  block.appendChild(paragraph);

  return block;
};

wrapper.appendChild(createBlock());
wrapper.appendChild(createBlock());
document.write(wrapper.getHtml());