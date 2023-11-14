/* eslint-disable react/prop-types */
export function Link ({ name, to, linkStyle }) {
  return (
    <a 
      href={to}
      className={linkStyle}
    >
      {name}
    </a>
  )
}