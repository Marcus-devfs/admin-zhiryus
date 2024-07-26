import { SectionHeader } from "@/components"
import { Table } from "@/components/table"
import { useRouter } from "next/router"
import React from "react"

const BudgetEdit: React.FC = () => {

    const router = useRouter()
    const { id } = router.query

    const company =
        { name: 'Diebold Nixdorf', email: 'contato@diebold.com.br', id: 1 }

    return (
        <>
            <SectionHeader title='Editar Orçamento' />


            <div className="bg-white rounded py-5 px-6">
                <h1 className="text-gray-900 text-2xl font-bold pb-8">Resumo</h1>

                <div className="flex w-full pb-10">
                    <div className="flex gap-1 flex-col pr-5">
                        <span className="text-gray-700">Products quantity:</span>
                        <span className="text-gray-700 font-bold">200</span>
                    </div>

                    <div className="flex flex-col px-24">
                        <label htmlFor="first_name" className="block mb-1 text-gray-900">
                            Start build:
                        </label>
                        <div>
                            <span className="text-gray-700 font-bold">12/12/2024</span>
                        </div>
                    </div>

                    <div className="flex flex-col px-24">
                        <label htmlFor="first_name" className="block mb-1 text-gray-900">
                            End build:
                        </label>
                        <div>
                            <span className="text-gray-700 font-bold">20/12/2024</span>
                        </div>
                    </div>
                </div>

                <div className="flex w-full gap-4">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Value Service Fee
                        </label>
                        <input
                            type="number"
                            id="company_name"
                            value={2500}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Company Exemple"
                            required
                        />
                    </div>

                    <div className="flex flex-col px-24">
                        <label htmlFor="first_name" className="block mb-1 text-gray-900">
                            Value Finally:
                        </label>
                        <div>
                            <span className="text-gray-700 font-bold text-xl text-green-500">$5.900</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 pt-5 w-full justify-end">

                    <button
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2.94 6.34a1 1 0 011.3.33L10 11.58l5.76-4.9a1 1 0 011.62.78v6.76a2 2 0 01-2 2H4a2 2 0 01-2-2V7.45a1 1 0 01.94-1.11z" />
                        </svg>
                        Enviar por email
                    </button>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Salvar
                    </button>
                    <button
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Excluir
                    </button>
                </div>
            </div>

            <div className="bg-white rounded py-5 px-6">
                <h1 className="text-gray-900 text-2xl font-bold pb-8">Dados do Projeto</h1>
                <form>
                    <div className="grid gap-3">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                                Company name
                            </label>
                            <input
                                type="text"
                                id="company_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Company Exemple"
                                required
                            />
                        </div>

                        <div className="flex gap-2 w-full">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Start:
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="date"
                                        id="startDate"
                                        className="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        placeholder="Select date start"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                                    End:
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="date"
                                        id="endDate"
                                        className="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                        placeholder="Select date start"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Description budget
                            </label>
                            <textarea id="message" rows={4}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Write your thoughts here...">
                            </textarea>
                        </div>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded py-5 px-6">
                <h1 className="text-gray-900 text-2xl font-bold pb-8">Produtos</h1>

                <div className="w-full mb-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products..." />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </div>

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
                                        <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <input
                                                type="number"
                                                id="first_product"
                                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                                                placeholder="1" required value={product.quantity} />
                                        </div>
                                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    {product.price}
                                </td>
                                <td className="px-6 py-4 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-600 hover:text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>


            <div className="bg-white rounded py-5 px-6">
                <h1 className="text-gray-900 text-2xl font-bold pb-8">Dados da Comissão</h1>

                <div className="w-full mb-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Employee..." />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </div>

                <Table>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="checkbox-all-search"
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Porcentege %
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-200">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-table-search-2"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="checkbox-table-search-2"
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="./icons/perfil.jpg"
                                    alt="Thomas Lean"
                                />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">
                                        Marcus Vinicius
                                    </div>
                                    <div className="font-normal text-gray-500">
                                        marcus@gmail.com
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div>
                                    <input
                                        type="text"
                                        id="porcentege"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5"
                                        placeholder="5%"
                                    />
                                </div>
                            </td>

                            <td className="px-6 py-4 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-red-600 hover:text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    )

}

export default BudgetEdit