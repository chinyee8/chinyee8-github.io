class Box extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
       .bg-color{
        background-color:
       }
      </style>
      <div class="">
      
      </div> 
      `;
    }
  
    get buttonText() {
      return this.getAttribute("button-text");
    }
  
    set buttonText(value) {
      if (value) {
        this.setAttribute("button-text", value);
      }
    }
  
  }
  
  customElements.define("box-component", Box);
  