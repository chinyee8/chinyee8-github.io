class Card extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.attachShadow( { mode: 'open' } ).innerHTML= `
        <style>
            div.card{
                background-color: dimgrey; 
                opacity: 0.95;
                backdrop-filter: blur(20px);
                border-radius: 25px;
                padding: 20px;
                margin: 10px;
                height: 100%;
            }

            .head{
                -webkit-text-size-adjust: 100%;
                tab-size: 4;
                font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
                --rem: 16;
                --bg-main-accent: #c95656;
                --foreground-hex: #3d3d3d;
                --background-hex: #f5f3f3;
                --tw-bg-opacity: 1;
                box-sizing: border-box;
                border: 0 solid #e5e7eb;
                white-space: pre-line;
                font-size: 2.25rem;
                line-height: 2.5rem;
                font-weight: 600;
                --tw-text-opacity: 1;
                color: rgb(205 226 242/var(--tw-text-opacity));
                filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
                --tw-drop-shadow: drop-shadow(0 2px 12px rgba(88,160,212,.3));
            }

            .text{
                tab-size: 4;
                font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
                font-size: 1.125rem;
                color: white;
            }
        </style>

        <div class="card w-full  justify-center shadow-sm border-2 border-solid border-black rounded-2xl p-10">
            <h3 class="head md:text-xl min-[320px]:text-md font-bold text-white">${this.title}</h3>
            <p class="text">${this.text}</p>
            <slot></slot>
        </div>
      `;
    }

    get title() {
        return this.getAttribute("card-title");
    }
    
    set title(value) {
        if (value) {
          this.setAttribute("card-title", value);
        }
    }

    get text() {
        return this.getAttribute("card-text");
    }
    
    set text(value) {
        if (value) {
          this.setAttribute("card-text", value);
        }
    }
}
  
// window.customElements.define('card-component', Card, {extends: 'div'});
customElements.define("card-component", Card);

  