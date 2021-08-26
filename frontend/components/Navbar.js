import Link from "next/link"
import NextImage from "./Image"


const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4 ">
      <Link href="/" className="bg-gray-900">
        <a>
          <NextImage
            src="/sliversOfSunshineLogo.png"
            alt="home"
            className="logo "
            height="200"
            width="auto"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="60" width="60" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-lg text-indigo-500 "></span>
      </button>
    </div>
  )
}

export default Navbar
