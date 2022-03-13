import React, { useState, useEffect } from 'react'
import UsersApi from '../usersApi/UsersApi';

export default function UserApi() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
console.log(users);

return(
  <>
  {users.map((user) => {
    return(
      <UsersApi 
      name={user.first_name}
      surname={user.last_name}
      gender={user.gender}
      avatar={user.avatar}
      title={user.employment.title}
      skill={user.employment.key_skill}
      />
    )
  })}
  </>
)

}