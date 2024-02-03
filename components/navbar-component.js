class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <script>
      function openMobileMenu() {
        document.getElementById("mobile-menu").style.width = "100%";
        document.getElementById("mobile-menu").style.display = "inline-block";
       
      }

      function closeMobileMenu() {
        document.getElementById("mobile-menu").style.display = "none";
      }

    </script>
    <style>
      .stick{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
      }
      
      .mobile-menu{
        display: none;
      }
      
      .menu-icon{
        cursor: pointer;
        display: none;
      }

      @media only screen and (max-width: 640px) { 
        .menu-icon{
          display: block;
        }

       

        .menu{
          display: none;
        }
      }
    </style>

    <div class="z-10 stick flex pt-2 justify-between shadow-lg bg-white">
        <a href="#home"><img src="files/logo2.png" class="mx-5 w-20 h-12"></img></a>
          <div class="mt-4 mr-12 flex flex-row justify-end"><i class="menu-icon fa-solid fa-bars justify-end flex flex-row"  onclick="openMobileMenu()"></i> </div>
      
        <div id="mobile-menu" class="mobile-menu mt-4 mr-12 flex flex-row justify-end">
            <a href="#home" class="mx-4">HOME</a>
            <a href="#aboutme" class="mx-4">ABOUT</a>
            <a href="#project" class="mx-4">PROJECT</a>
        </div>

        <ul class="menu mt-4 mr-12 flex flex-row justify-end">
          <li><a href="#home" class="mx-4">HOME</a></li>
          <li><a href="#aboutme" class="mx-4">ABOUT</a></li>
          <li><a href="#project" class="mx-4">PROJECT</a></li>
        </ul>
    </div>  
    `;
  }
}

customElements.define("navbar-component", Navbar);
