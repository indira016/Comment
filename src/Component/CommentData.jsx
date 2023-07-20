const CommentDate = (props) => {
    const commentDate = props.date
    const day = commentDate.toLocaleString('en-US', { day: '2-digit' })
    const mouth = commentDate.toLocaleString('en-US', { mouth: 'long' })
    const year = commentDate.getFullYear()

    return (
        <div className="comment-date">
            <div>{day}</div>
            <div> {mouth}</div>
            <div>{year}</div>
        </div>
    )
}
export default CommentDate