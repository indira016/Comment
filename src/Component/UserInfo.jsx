import Avatar from "./Avatar"
import UserName from "./UserName"
const UserInfo = (props) => {
    return (
        <div className="userInfo">
            <Avatar url={props.url} name={props.name} />
            <UserName name={props.name} />

        </div>
    )
}
export default UserInfo