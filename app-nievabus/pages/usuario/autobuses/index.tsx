import { AutobusesCardList } from '@/components/autobuses'
import { useAutobuses } from '@/hooks/useAutobuses'
import { PublicLayouts } from '@/layouts'
import React from 'react'

const IndexAutobusesPage = () => {
  const { autobuses, isLoading } = useAutobuses ('/autobuses')
  console.log(isLoading, "c=", autobuses)
  return (
    <PublicLayouts>
        <div>Autobuses</div>
        <AutobusesCardList autobuses = {autobuses}/>
    </PublicLayouts>
  )
}

export default IndexAutobusesPage