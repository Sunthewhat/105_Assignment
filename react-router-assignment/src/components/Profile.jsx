import { useParams } from "react-router-dom";
function Profile() {
  const { id } = useParams();
  return (
    <>
      <p>This Student ID of user is {id}</p>
    </>
  );
}
export default Profile;
