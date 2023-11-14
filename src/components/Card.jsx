/* eslint-disable react/prop-types */
import { Article } from "./Article"

export function Card ({ articles }) {
  return (
    <aside className="bg-black text-white pt-4 pb-5 lg:w-[35%] xl:w-[30%]">
      <h2 
        className="px-4 text-[2rem] font-semibold text-yellow-400"
      >
        New
      </h2>
      <ul>
        {
          articles.map(article => {
            const { id, title, content } = article
            return (
              <li key={id}>
                <Article 
                  title={title} 
                  content={content} 
                  titleStyle='text-xl font-bold p-4'
                  contentStyle='text-[.95rem] text-slate-300 px-4'
                />
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}