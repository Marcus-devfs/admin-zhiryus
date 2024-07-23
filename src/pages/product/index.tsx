import { SectionHeader } from "@/components"
import { Table, TableDropdownMenu, TableSearchInput } from "@/components/table"
import { useAppContext } from "@/context/AppContext"
import { randomUUID } from "crypto"
import { useRouter } from "next/router"
import React from "react"

const Products: React.FC = () => {
    const router = useRouter()

    const Customer = [
        { id: 1, name: 'Marcus Silva', email: 'marcus.silva@gmail.com', avatar: '', position: 'Software Engenier', area: 'TI Development' },
        { id: 2, name: 'Fulano Souza', email: 'fulano.silva@gmail.com', avatar: '', position: 'Software Engenier', area: 'RH' },
    ];

    return (
        <>
            <SectionHeader title="Products" />
            <div className="flex w-full h-full flex-col">
                {/* <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
                    <TableDropdownMenu items={dropdownItems} />
                    <TableSearchInput placeholder="Search for Customer" />
                </div> */}
                <Table>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">Product</th>
                            <th scope="col" className="px-6 py-3">Qty</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                imgSrc: "/products/cadeiras_corporativas_nox.jpg",
                                alt: "Apple Watch",
                                name: "Cadeira NOX",
                                price: "R$599",
                                quantity: 400
                            },
                            {
                                imgSrc: "/products/cadeiras_corporativas_grid.jpg",
                                alt: "Cadeira GRID",
                                name: 'Cadeira GRID"',
                                price: "R$2499",
                                quantity: 250
                            },
                            {
                                imgSrc: "/products/cadeiras_corporativas_acto.jpg",
                                alt: "Cadeira ACTO",
                                name: "Cadeira ACTO",
                                price: "R$999",
                                quantity: 125
                            }
                        ].map((product, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b"
                            >
                                <td className="p-4">
                                    <img
                                        src={product.imgSrc}
                                        className="w-16 md:w-32 max-w-full max-h-full"
                                        alt={product.alt}
                                    />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div>
                                            {product.quantity}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    {product.price}
                                </td>
                                <td className="px-6 py-4 cursor-pointer">
                                <div onClick={() => router.push(`/product/1`)}>
                                    <a
                                        className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                                    >
                                        Edit product
                                    </a>
                                </div>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )

}

export default Products