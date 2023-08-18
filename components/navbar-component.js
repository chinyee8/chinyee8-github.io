class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      .stick{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
      }
    </style>

    <div class="stick flex mt-2 justify-between shadow-lg bg-white">
      <a href="#home"><img src="files/logo2.png" class="mx-5 w-20 h-12"></img></a>
      <ul class="mt-4 mr-12 flex flex-row justify-end">
        <li><a href="#home" class="mx-4">HOME</a></li>
        <li><a href="#aboutme" class="mx-4">ABOUT</a></li>
      </ul>
    </div>  
    `;
  }
}

customElements.define("navbar-component", Navbar);
