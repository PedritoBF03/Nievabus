import { AutobusesCardList } from '@/components/autobuses'
import { useAutobuses } from '@/hooks/useAutobuses'
import { UserLayouts } from '@/layouts'
import React from 'react'

const IndexAutobusesPage = () => {
  const { autobuses, isLoading } = useAutobuses ('/autobuses')
  console.log(isLoading, "c=", autobuses)
  return (
    <UserLayouts>
        <div>Autobuses</div>
        <AutobusesCardList autobuses = {autobuses}/>
    </UserLayouts>
  )
}

export default IndexAutobusesPage