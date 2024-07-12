import { SectionHeader } from "@/components"
import { Table, TableDropdownMenu, TableSearchInput } from "@/components/table"
import { useAppContext } from "@/context/AppContext"
import React from "react"

const Users: React.FC = () => {

    const { userData } = useAppContext()

    const dropdownItems = [
        { label: 'Reward', href: '#' },
        { label: 'Promote', href: '#' },
        { label: 'Activate account', href: '#' },
        { label: 'Delete User', href: '#' },
    ];

    return (
        <>
            <SectionHeader title="Funcionários" />
            <div className="flex w-full h-full flex-col">
                <Table>
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                        <TableDropdownMenu items={dropdownItems} />
                        <TableSearchInput placeholder="Search for users" />
                    </div>
                </Table>
            </div>
        </>
    )

}

export default Users