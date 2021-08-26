import Link from "next/link"

const CategoryButtons = ({ categories = [] }) => {
  return (
    
    <div className="container flex flex-wrap mx-auto gap-2 mt-8 mb-8">
      {/* <h1>Categories</h1> */}
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-5 border
          border-gray-500 hover:border-gray-900 hover:shadow-blackShadow rounded hover:shadow-coloredShadow">
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default CategoryButtons
