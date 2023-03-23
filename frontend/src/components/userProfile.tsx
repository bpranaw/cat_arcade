import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


export default function UserProfile() {
    return (<div>
        <Profile/>
      </div>
    );
  }

export function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if(isAuthenticated)
    {
        return (
            (
              <div>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </div>
            )
          );
    }
    else
    {
        return((<div>User not Authenticated</div>))
    }
};



