import React from "react"
import style from "./SCSS/Comment.module.scss"
import H2 from "../Common/H2"
import P from "../Common/P"
import ReCommentInput from "./ReCommentInput"
import ReComment from "./ReComment"
import { useSelector } from "react-redux"
import MoreView from "./MoreView"

const Comment = (props) => {

    const reCommentListState = useSelector(state => state.comment.reCommentList[props.commentNum])
    if(props.user === undefined){
        return (
            <div id = {style.commentBox}>
                <div id = {style.comment}>
                    <P text = "댓글이 없습니다. 댓글을 새로 달아주세요!"/>
                </div>
            </div>
        )
    }
    console.log(`commentNum: ${props.commentNum}`)
    return (
        <div id = {style.commentBox}>
            <div id = {style.comment}>
                <H2 text = {props.user}/>
                <P text = {props.content}/>
                <MoreView boardNum = {props.boardNum} commentNum = {props.commentNum} name = "comment"/>
                <ReCommentInput commentNum = {props.commentNum}/>
            </div>
            {
                reCommentListState&&reCommentListState.map((element, index) => 
                <ReComment key = {index} reCommentNum = {element.reCommentNum} commentNum = {props.commentNum} user = {element.user} content = {element.content}/>)
            }
        </div>
    )
}

export default Comment