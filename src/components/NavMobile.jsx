import { IconMenuClose } from "./Icon"
import { Link } from "./Link"

/* eslint-disable react/prop-types */
export function NavMobile ({ items, handleClick }) {
  return (
    <nav 
      className="bg-white w-7/12 h-screen absolute top-0 right-0 z-10 sm:w-5/12"
    >
      <div 
        onClick={handleClick}
        className="cursor-pointer float-right p-5"
      >
        <IconMenuClose />
      </div>
      <ul className="mt-24">
        {
          items.map(item => {
            const { id, name, to } = item
            return (
              <li key={id}>
                <Link 
                  name={name} 
                  to={to} 
                  linkStyle="block pl-5 py-4 text-lg"
                />
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}