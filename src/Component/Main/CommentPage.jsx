import React from "react"
import style from "./SCSS/Comment.module.scss"
import Comment from "./Comment"
import H1 from "../Common/H1"
import Button from "../Common/Button"
import Text from "../Common/Text"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const CommentPage = () => {

    const { boardNum } = useParams()
    const commentListState = useSelector(state => state.commentList[boardNum])
    
    if(commentListState.commentNum == null){
        return (
            <main id = {style.main}>
                <div id = {style.commentNav}>
                    <H1 text = "댓글"/>
                </div>
                <div id = {style.commentMain}>
                    <div id = {style.commentInputBox}>
                        <Text name = "comment" maxLength = "200"/>
                        <Button text = "댓글 추가" name = "commentUpload" boardNum = {boardNum}/>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main id = {style.main}>
            <div id = {style.commentNav}>
                <H1 text = "댓글"/>
            </div>
            <div id = {style.commentMain}>
                {
                    commentListState.map((element, index) =>  
                    <Comment key = {index} user = {element.user} content = {element.content} commentNum = {element.commentNum}/>)
                }
                <div id = {style.commentInputBox}>
                    <Text name = "comment" maxLength = "200"/>
                    <Button text = "댓글 추가" name = "commentUpload" boardNum = {boardNum}/>
                </div>
            </div>
        </main>
    )
}

export default CommentPage