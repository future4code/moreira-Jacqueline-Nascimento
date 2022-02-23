import React, { useState, useEffect } from "react";
import {
  BodyCard,
  ButtonsArea,
  ContainerCard,
  TitleCard,
} from "./styles/StyleCard";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { goToPost } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { changePostVote, createPostVote, deletePostVote } from "../services/posts";

export default function CardPost({ post }) {
  const navigate = useNavigate();
  const [userVote, setUserVote] = useState(post.userVote);
  const [voteSum, setVoteSum] = useState(Number(post.voteSum));
  const [colorButtonUp, setColorButtonUp] = useState("default")
  const [colorButtonDown, setColorButtonDown] = useState("default")

  useEffect(()=>{
    if (userVote===1){
      setColorButtonUp("primary")
    } else if (userVote===-1){
      setColorButtonDown("primary")
    }
  },[userVote])

  const onClickUp = () => {
    const body = {
      direction: 1,
    };
    if (userVote) {
      if (userVote===-1){
        changePostVote(body, post.id)
        setUserVote(1)
        setVoteSum(voteSum+2)
        setColorButtonUp("primary")
        setColorButtonDown("default")
      } else if (userVote===1){
        deletePostVote(post.id)
        setUserVote(0)
        setVoteSum(voteSum-1)
        setColorButtonUp("default")
      }
    } else {
      createPostVote(body, post.id);
      setUserVote(1)
      setVoteSum(voteSum+1)
      setColorButtonUp("primary")
    }
  };

  const onClickDown = () => {
    const body = {
      direction: -1,
    };
    if (userVote) {
      if (userVote===1){
        changePostVote(body, post.id)
        setUserVote(-1)
        setVoteSum(voteSum-2)
        setColorButtonDown("primary")
        setColorButtonUp("default")
      } else if (userVote===-1){
        deletePostVote(post.id)
        setUserVote(0)
        setVoteSum(voteSum+1)
        setColorButtonDown("default")
      }
    } else {
      createPostVote(body, post.id);
      setUserVote(-1)
      setVoteSum(voteSum-1)
      setColorButtonDown("primary")
    }
  };

  const onClickCard = () => {
    goToPost(navigate, post.id);
  };
  return (
    <ContainerCard>
      <TitleCard>
        <h2>{post.username}</h2>
      </TitleCard>
      <BodyCard onClick={onClickCard}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </BodyCard>
      <ButtonsArea>
        <div>
          <IconButton onClick={onClickUp} color={colorButtonUp}>
            <ArrowUpwardIcon />
          </IconButton>
          {voteSum || 0}
          <IconButton onClick={onClickDown} color={colorButtonDown}>
            <ArrowDownwardIcon />
          </IconButton>
        </div>
        <div>{post.commentCount || 0} comentários</div>
      </ButtonsArea>
    </ContainerCard>
  );
}
