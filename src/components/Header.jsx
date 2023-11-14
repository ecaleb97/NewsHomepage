/* eslint-disable react/prop-types */
import { IconMenu, Logo } from "./Icon"
import { NavDesktop } from "./NavDesktop"

export function Header ({items, handleClick }) {
  return (
    <header 
      className='m-auto w-full flex justify-between items-center p-4 sm:w-11/12 md:w-10/12 xl:max-w-[70rem]'
    >
      <Logo />
      <NavDesktop items={items} />
      <div
        onClick={handleClick}
        className="cursor-pointer lg:hidden"
      >
        <IconMenu />
      </div>
    </header>
  )
}