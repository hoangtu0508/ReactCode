import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log('users:', users);
  console.log('userId:', userId);
  const author = users.find(user => user.id === Number(userId));
  console.log('author:', author);
  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
export default PostAuthor