import React, {useState} from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { ContainerCreatePost, ContainerFeed, ContainerPosts } from './StyleFeed'
import { baseURL } from '../../constants/urls'
import CardPost from '../../components/CardPost'
import FeedForm from './FeedForm'

export default function FeedPage() {
  useProtectedPage()
  const [page, setPage] = useState(1)
  const [data, isLoading, error] = useRequestData([], `${baseURL}posts?page=${page}&size=12`)
  const postList = data.map((item)=>{
    return <CardPost key={item.id} post={item} />
  })
  return (
    <ContainerFeed>
      <ContainerCreatePost>
        <h2>Criar Post</h2>
        <FeedForm />
      </ContainerCreatePost>
      <ContainerPosts>
        {postList}
      </ContainerPosts>
    </ContainerFeed>
  )
}
