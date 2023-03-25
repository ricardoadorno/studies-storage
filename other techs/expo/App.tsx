import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

import "./styles.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Card>
        <Text className="text-2xl font-bold">Enter Your Password</Text>
        <Profile />
        <PasswordInput />
        <View className="flex flex-row justify-between items-center mt-4">
          <MyToggle />
          <button className="bg-blue-700 text-white rounded-lg px-4 py-2 ml-auto">
            Continue
          </button>
        </View>
        <Text className="text-sm font-bold text-blue-900 underline mt-4">
          Reset password
        </Text>
      </Card>
    </View>
  );
}

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View
      className="flex flex-row  items-center 
    
    "
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <Text className="text-sm text-gray-500 ml-2">Stay signed in</Text>
    </View>
  );
}

function Card({ children }) {
  return (
    <View className="bg-white rounded-lg shadow-lg py-12 px-16 w-4/12">
      <View className="flex flex-col gap-5 ">{children}</View>
    </View>
  );
}

function Profile() {
  return (
    <View className="flex flex-row items-center space-x-4">
      <View className="w-10 h-10 rounded-full bg-gray-300" />
      <View className="flex flex-col">
        <Text className="text-lg font-bold">Bussines Account </Text>
        <Text className="text-sm text-gray-500">John Doe</Text>
      </View>
    </View>
  );
}

function PasswordInput() {
  const [isHiden, setIsHiden] = useState(true);
  return (
    <View className="flex flex-col items-start mt-4 w-full">
      <Text className="text-md font-bold my-2 text-blue-900">Password</Text>
      <View className="flex flex-row items-center relative">
        <MdLockOutline className="text-lg absolute left-3" />
        <input
          type={isHiden ? "password" : "text"}
          className="border border-blue-800 rounded-lg p-2 mr-2 indent-7"
        />
        {isHiden ? (
          <FiEyeOff onClick={() => setIsHiden(false)} />
        ) : (
          <FiEye onClick={() => setIsHiden(true)} />
        )}
      </View>
    </View>
  );
}
