


export default function Navbar() {
  return (
    <header className="fixed top-4 left-4 right-0 z-50 ">
      <div className="flex items-center p-4">
        <div className="ml-4">
          {/* hamburger/menu-icon */}
          <button className="text-white hover:text-[#D1793E] transition duration-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Høyre spacing */}
        <div className="w-12"></div>
      </div>
    </header>
  );
}





// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <img src="./logo.svg" alt="restaurant logo" />
//       </div>
//       <div className={styles.links}>
//         <a href="#">Meny</a>
//         <a href="#">Reservasjon</a>
//         <a href="#">kontakt</a>
//       </div>
//     </nav>
//   );
// }
