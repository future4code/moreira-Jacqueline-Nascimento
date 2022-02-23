import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import CardPost from '../../components/CardPost'
import CardComment from '../../components/CardComment'
import { ContainerComments, ContainerPost } from './StylePost'
import PostForm from './PostForm'

export default function PostPage() {
  useProtectedPage()
  const params = useParams()
  const [posts, isLoading2, error2] = useRequestData([], `${baseURL}posts`)
  const [data, isLoading, error] = useRequestData([], `${baseURL}posts/${params.id}/comments`)
  const post = posts?.filter((item)=>item.id===params.id)
  const commentList = data.map((item)=>{
    return <CardComment key={item.id} post={item} />
  })
  return (
    <ContainerPost>
      {post.length===1 && <CardPost key={post[0].id} post={post[0]} />}
      <PostForm id={params.id} />
      <h2>Comentários:</h2>
      <ContainerComments>
        {commentList}
      </ContainerComments>
    </ContainerPost>
  )
}
