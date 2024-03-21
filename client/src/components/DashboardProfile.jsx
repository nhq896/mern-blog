import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashboardProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-auto w-full max-w-lg p-3">
      <h1 className="my-7 text-center text-3xl font-semibold">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="h-32 w-32 self-center overflow-hidden rounded-full shadow-md">
          <img
            src={currentUser.profilePicture}
            alt=""
            className="h-full w-full rounded-full border-8 border-[lightgray] object-cover"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone={"purpleToBlue"} outline>
          Update
        </Button>
      </form>
      <div className="mt-5 flex justify-between text-red-500">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default DashboardProfile;
