import React from 'react'
import { PrimaryButton } from '../../Buttons'

function ProductCard({
    product: { id, title, discountedPrice, image }
  }) {
  return (
    <div id={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <div className="p-3 group flex flex-col items-center rounded-lg overflow-hidden bg-black hover:shadow-md transition duration-300">
            <img
                src={image.url}
                alt={title}
                className="w-full h-48 object-cover object-center group-hover:opacity-75"
            />
            <h2 className="mt-4 text-primary">{title}</h2>
            <p className="mt-1 text-lg font-medium text-gray-900">Kr{discountedPrice}</p>
            <PrimaryButton label='View Product' />
        </div>
    </div>
  )
}

export default ProductCard

