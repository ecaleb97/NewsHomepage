/* eslint-disable react/prop-types */
export function Image({ src, alt, style }) {
  return (
    <img
      className={style}
      src={src}
      alt={alt}
    />
  )
}