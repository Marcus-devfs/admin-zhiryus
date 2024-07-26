import { SectionHeader } from "@/components"
import { useRouter } from "next/router"
import React from "react"

const ProductEdit: React.FC = () => {

    const router = useRouter()
    const { id } = router.query
    console.log(id)

    const user =
        { name: 'Marcus', email: 'marcus.silva@gmail.com', id: 1 }

    return (
        <>
            <SectionHeader title={'Editar Produto'} />
            <div className="bg-white rounded py-5 px-6">
                <h1 className="text-gray-900 text-2xl font-bold pb-8">Dados do Produto</h1>
                <form>
                    <div className="grid gap-3 md:grid-cols-2">


                        <div className="flex items-center justify-center w-full">
                            <label id="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Chair"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Category"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="50.80"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="50"
                                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">
                                Description
                            </label>
                            <input
                                type="textarea"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="Chair White..."
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default ProductEdit