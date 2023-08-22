import"./Navbar.css"

export function Nav() {
    return (
        <>
       <nav
  className="relative flex w-full flex-wrap items-center justify-between">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <a className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="/">
            <img className="mr-2" src="src/assets/img/pngwing.com.png" alt="imagen" loading="lazy"/>
          <span class="font-medium dark:text-neutral-200"
          >Ecommerce Shop</span>
      </a>
    </div>
  </div>
</nav>
        </>

    );
}