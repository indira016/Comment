import UserInfo from "./UserInfo"
import CommentDate from "./CommentData"
function Comment(props) {
    return(
    <div className="comment">
<UserInfo
url={props.data.avatarUrl}
name={props.data.userName}
/>
<div className="comment-text">
  {props.data.commentText}
</div>
<CommentDate date={props.data.commentDate}/>
    </div>
    )
}
export default Comment