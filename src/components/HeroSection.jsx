/* eslint-disable react/prop-types */
import { Image } from "./Image"
import { Link } from "./Link"

export function HeroSection ({ title, content, styles }) {
  return (
    <section className={styles}>
      <Image 
        src={"./src/assets/images/image-web-3-mobile.jpg"}
        alt={`Main image of the website`} 
        style={'w-full h-full object-cover sm:hidden'}
      />
      <div>
        <Image
          src={"./src/assets/images/image-web-3-desktop.jpg"}
          alt={`Main image of the website`}
          style={'hidden sm:block w-full h-full object-cover'}
        />
      </div>
      
      <div className="py-4 lg:flex">
        <h1
          className="text-5xl font-bold text-slate-900 lg:mr-5"
        >
          {title}
        </h1>
        <article 
          className="lg:flex lg:flex-col lg:justify-between"
        >
          <p 
            className="py-6 lg:py-0 lg:text-lg"
          >{content}
          </p>
          <Link 
            name={`Read more`}
            to={`#`} 
            linkStyle={"inline-block w-40 text-center border bg-orange-400 px-6 py-2 my-2 text-[.95rem] text-white border-orange-400 rounded-full font-semibold hover:bg-orange-300 hover:text-slate-100 transition duration-30"}
          />
        </article>
      </div> 
    </section>
    
  )
}