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

    <div class="flex mt-2 justify-between shadow-lg">
      <img src="images/user.jpeg" class="mx-5 mb-2 w-8 h-8"></img>
      <ul class="mt-1 flex flex-row justify-end">
        <li><a href="index.html" class="mx-4">HOME</a></li>
        <li><a href=# class="mx-4">ABOUT ME</a></li>
        <li><a href=# class="mx-4">CONTACT</a></li>
      </ul>
    </div>  
    `;
  }
}


customElements.define('navbar-component', Navbar);
