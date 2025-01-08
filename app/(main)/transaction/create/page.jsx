import { defaultCategories } from '@/data/categories'
import { getUserAccounts } from '@/actions/dashboard'
import AddTransactionForm from '../_components/transaction-form'
import React from 'react'

const AddTransactionPage = async () => {
    const accounts = await getUserAccounts();

  return (
    <div className='max-w-3xl mx-auto px-5'>
        <h1 className='text-5xl gradient-title mb-8'>Add Transactions</h1>

        <AddTransactionForm 
           accounts={accounts}
           categories={defaultCategories}
        />
    </div>
  )
}

export default AddTransactionPage