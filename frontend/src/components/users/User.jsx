import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import DeleteUserForm from "../forms/DeleteUserForm";
import EditUserForm from "../forms/EditUserForm";

const User = ({ _id, name, email, age, skeleton = false }) => {
  if (skeleton) {
    return (
      <Card className="animate-pulse">
        <CardContent className="py-4">
          <div className="relative grid gap-2">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[180px]" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative">
      <CardContent className="py-4">
        <div className="relative grid gap-2">
          <h1 className="text-1xl font-medium">{name}</h1>
          <p className="">{email}</p>
          <span className="text-sm">{age} years old</span>
        </div>
        <div className="flex items-center gap-2 absolute top-2 right-2">
          <EditUserForm _id={_id} name={name} email={email} age={age} />
          <DeleteUserForm _id={_id} name={name} />
        </div>
      </CardContent>
    </Card>
  );
};

export default User;
