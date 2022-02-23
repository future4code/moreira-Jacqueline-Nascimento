import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { ContainerFeed } from './StyleFeed'
import { baseURL } from '../../constants/urls'

export default function FeedPage() {
  useProtectedPage()
  const {data, isLoading, error} = useRequestData([], `${baseURL}posts`)
  console.log(data)
  const postList = data.map((item)=>{
    return <p key={item.id}>{item.title}</p>
  })
  return (
    <ContainerFeed>
      FeedPage
      {postList}
    </ContainerFeed>
  )
}
