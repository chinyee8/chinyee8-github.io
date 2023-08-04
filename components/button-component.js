class Button extends HTMLElement {
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
    <a class="bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-2" href="${this.linkText}">
      ${this.buttonText} <i class="${this.iconText}"></i>
    </a>  
    `;
  }

  get buttonText(){
    return this.getAttribute('button-text');
  }

  set buttonText(value){
    if(value){
        this.setAttribute('button-text', value);
    }
  }

  get linkText(){
    return this.getAttribute('link');
  }

  set linkText(value){
    if(value){
        this.setAttribute('link', value);
    }
  }

  get iconText(){
    return this.getAttribute('icon');
  }

  set iconText(value){
    if(value){
        this.setAttribute('icon', value);
    }
  }
}


customElements.define('button-component', Button);
