// import UserInfo from './UserInfo';

// function UserProfile() {
//     return <UserInfo />;
// }

// export default UserProfile;

import { useContext } from "react";
import UserContext from './UserContext.js';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserProfile;