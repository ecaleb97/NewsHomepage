/* eslint-disable react/prop-types */
import { Link } from "./Link"

export function NavDesktop ({ items }) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {
          items.map(item => {
            const { id, name, to } = item
            return (
              <li key={id}>
                <Link 
                  name={name} 
                  to={to} 
                  linkStyle="inline-block px-4 py-1 hover:bg-slate-100 rounded-lg transition duration-30"
                />
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}