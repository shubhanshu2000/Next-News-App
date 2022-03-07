import Link from "next/link";


const Nav = () => {
  return (
    <>
      <div className="mb-20">

        <nav className=" bg-blue-600 fixed top-0 font-medium  text-xl py-4 w-screen z-50">

          <ul className=" flex justify-around ">
            <li>
              <Link href='/'><a>PKNews</a></Link>
            </li>
            <li>
              <Link href='/components/news'>
                <a>News</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}



export default Nav;