import Link from "next/dist/client/link"
import Nav from "./Navigation"
const news = ({ data }) => {
  return (
    <>
      <Nav />
      <div>

        {data.results.map((res) => {
          return (
            <>

              <div className="shadow-lg overflow-hidden w-[90%] sm:w-1/2 p-4 sm:p-10  rounded-xl shadow-blue-200 mx-auto">
                <ul>

                  <Link href={res.link}>
                    <a className="my-2" ><h1 className="text-xl mb-4">{res.title}</h1><p className="w-[90%]rounded-xl p-2">{res.description}</p></a>
                  </Link>
                </ul>
              </div>

            </>
          )
        })}

      </div>

    </>
  )
}
export async function getStaticProps() {
  const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_5176e98de7bee36bcdab79c13b6d69184eb8&q=cryptocurrency");


  const data = await res.json();

  return {
    props: {
      data,
    }
  }
}


export default news;