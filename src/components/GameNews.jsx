import { Article } from "./Article"
import { Image } from "./Image"

/* eslint-disable react/prop-types */
export function GameNews ({ gameNews }) {
  return (
    <section className="mt-12 mx-auto max-w-[70rem] sm:w-11/12 md:w-10/12">
      <ul className="lg:flex lg:flex-wrap lg:justify-between lg:items-center">
        {
          gameNews.map(news => {
            const { id, title, content, imgSrc, alt } = news
            return (
              <li 
                key={id}
                className="flex mb-6"
              >
                <div className="max-w-[5rem]">
                  <Image
                    src={imgSrc}
                    alt={alt}
                    style={"w-full h-full rounded-md object-cover"}
                  />
                </div>
                <div className="pl-4 md:mr-6 md:flex md:flex-col md:justify-between">
                  <h2 className="font-bold text-3xl text-slate-300">{id}</h2>
                  <Article
                    title={title}
                    content={content}
                    titleStyle='py-2 font-bold text-xl'
                    contentStyle='text-[.95rem] text-slate-400'
                  />
                </div>
              </li>
            )
            
          })
        }
      </ul>
    </section>
  )
}