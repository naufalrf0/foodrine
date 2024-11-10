"use client";

import { useState } from "react";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AdminUserListProps {
  users: User[];
}

export default function AdminUserList({ users }: AdminUserListProps) {
  const [userList, setUserList] = useState<User[]>(users);

  const deleteUser = async (id: string) => {
    await fetch("/api/users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setUserList(userList.filter((user: User) => user.id !== id));
  };

  return (
    <ul>
      {userList.map((user: User) => (
        <li key={user.id}>
          {user.email} - {user.role}
          <button type="button" onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
