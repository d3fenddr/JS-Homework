// 3

class CssClass {
  constructor(name) {
    this.name = name;
    this.styles = {};
  }

  setStyle(property, value) {
    this.styles[property] = value;
  }

  removeStyle(property) {
    delete this.styles[property];
  }

  getCss() {
    const stylesString = Object.entries(this.styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
    return `.${this.name} { ${stylesString} }`;
  }
}

// 2 (error HtmlElement not defined, so take the class from task 2)

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

// 4

class HtmlBlock {
  constructor(rootElement) {
    this.styles = [];
    this.rootElement = rootElement;
  }

  addCssClass(cssClass) {
    this.styles.push(cssClass);
  }

  getCode() {
    const stylesString = this.styles
      .map((cssClass) => cssClass.getCss())
      .join("\n");
    const htmlContent = this.rootElement.getHtml();

    return `
  <style>
  ${stylesString}
  </style>
  ${htmlContent}
      `;
  }
}

// css class from photo
const wrapClass = new CssClass("wrap");
wrapClass.setStyle("display", "flex");

const blockClass = new CssClass("block");
blockClass.setStyle("width", "300px");
blockClass.setStyle("margin", "10px");

const imgClass = new CssClass("img");
imgClass.setStyle("width", "100%");

const textClass = new CssClass("text");
textClass.setStyle("text-align", "justify");

// html block form photo
const wrapper = new HtmlElement("div");
wrapper.setAttribute("id", "wrapper");
wrapper.setAttribute("class", "wrap");

const createBlock = () => {
  const block = new HtmlElement("div");
  block.setAttribute("class", "block");

  const header = new HtmlElement("h3", false, "What is Lorem Ipsum?");
  const image = new HtmlElement("img", true);
  image.setAttribute("class", "img");
  image.setAttribute("src", "lipsum.jpg");
  image.setAttribute("alt", "Lorem Ipsum");

  const paragraph = new HtmlElement("p");
  paragraph.setAttribute("class", "text");
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

const htmlBlock = new HtmlBlock(wrapper);
htmlBlock.addCssClass(wrapClass);
htmlBlock.addCssClass(blockClass);
htmlBlock.addCssClass(imgClass);
htmlBlock.addCssClass(textClass);

document.write(htmlBlock.getCode());