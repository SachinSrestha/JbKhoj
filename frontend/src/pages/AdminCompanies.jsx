import CompaniesTable from '@/components/shared/CompaniesTable'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function AdminCompanies() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto mt-12'>
            <div className='flex justify-between'>
                <Input className="w-48" placeholder ="Filter by name"/>
                <Button>New Company</Button>
            </div>
            <div className='mt-6'>
                <CompaniesTable/>
            </div>
        </div>
    </div>
  )
}

export default AdminCompanies