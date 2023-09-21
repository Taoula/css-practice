import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    /*
    <div className=" flex py-3 px-4 w-full mx-auto max-w-screen-lg items-center">
      <ul className="flex w-full text-xs text-black font-light justify-between">
        <div className="bg-green-300">
          <li>
            <img
              className="h-4 w-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1724px-Apple_logo_dark_grey.svg.png"
            />
          </li>
        </div>
        <div className="hidden w-full bg-yellow-300 md:flex justify-between">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>Airpods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </div>
        <div className="flex w-full bg-red-300 justify-between items-center md:w-auto">
          <li>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </li>
          <li>
            <ShoppingBagIcon className="h-4 w-4" />
          </li>
          <li>
            <Bars3Icon className="h-4 w-4 md:hidden" />
          </li>
        </div>
      </ul>
    </div>*/

    <nav className="py-3 w-full bg-white/90 flex  mx-auto absolute">
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="flex w-full justify-between mx-2">
          <div className="flex items-center px-4">
            <img
              className="h-4 w-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1724px-Apple_logo_dark_grey.svg.png"
            />
          </div>
          <div className="hidden lg:flex ">
            <ul className="flex gap-8 font-light text-xs">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>Entertainment</li>
              <li>Accessories</li>
              <li>Support</li>
            </ul>
          </div>
          <div className=" flex items-center">
            <ul className="flex gap-8">
              <li>
                <MagnifyingGlassIcon className="h-4 w-4" />
              </li>
              <li>
                <ShoppingBagIcon className="h-4 w-4" />
              </li>
              <li>
                <Bars3Icon className="h-4 w-4 lg:hidden" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
