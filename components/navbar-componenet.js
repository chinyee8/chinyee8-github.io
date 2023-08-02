class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <div class="flex mt-2 mx-2 justify-between">
      <img src="images/user.jpeg" class="w-8 h-8"></img>
      <ul class="mt-1 flex flex-row justify-end">
        <li><a href="index.html" class="mx-4">HOME</a></li>
        <li><a href=# class="mx-4">ABOUT ME</a></li>
      </ul>
    </div>  
    `;
  }
}


customElements.define('navbar-component', Navbar);
