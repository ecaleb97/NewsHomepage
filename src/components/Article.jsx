/* eslint-disable react/prop-types */
export function Article ({ title, content, titleStyle, contentStyle }) {
  return (
    <article>
      <h3 
        className={titleStyle}
      >
        {title}
      </h3>
      <p 
        className={contentStyle}
      >
        {content}
      </p>
    </article>
  )
}