import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <nav className="nav">
        <Link href='/'>
        <img src='/HACEA.svg' width='15%' className="Logo" ></img>
        </Link>
        <div className="menu">
          <div>
            <Link href="/about">
              <a className={router.pathname === "/about" ? "active" : "menuFontColor"}>About</a>
            </Link>
          </div>
          <div>
            <Link href="/shop">
              <a className={router.pathname === "/shop" ? "active" : "menuFontColor"}>Shop</a>
            </Link>
          </div>
          <div>
            <Link href="/community">
              <a className={router.pathname === "/community" ? "active" : "menuFontColor"}>Community</a>
            </Link>
          </div>
          <div className="login">
            <Link href="/login">
              <a className={router.pathname === "/login" ? "active" : "menuFontColor"}>Login</a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .Logo {
            cursor: pointer;
          }
          nav {
            display: flex;
            gap: 10px;
            align-items: center;
            padding-top: 1.3em;
            padding-bottom: 0.7em;
            justify-content: space-between;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          .active {
            color: black;
          }
          .menu {
            display: flex;
            flex-direction:row;
            width:20%;
            font-size: 125%;
            justify-content: space-evenly;
          }
          .menuFontColor {
            color:rgba(76, 76, 76);
          }
        `}</style>
      </nav>
      
    </div>
  );
}