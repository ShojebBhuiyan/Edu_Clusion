import React from "react";
import { Separator } from "../ui/separator";
import SubscriptionForm from "./subscription-form";

export default function Footer() {
  return (
    <footer className="p-10 flex flex-col gap-5">
      <Separator className="bg-black" />
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-3 gap-5">
          <ul>
            <li>2024, Edu_Clusion</li>
            <li>Cell: 01760514780</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Uttara, Dhaka - 1230</li>
          </ul>
          <ul>
            <li>Terms & Conditions</li>
            <li>educlusion@gmail.com</li>
          </ul>
        </div>
        <SubscriptionForm />
      </div>
      <p className="text-3xl font-semibold mt-10">
        ©️ 2024 Edu_Clusion All rights reserved.
      </p>
    </footer>
  );
}
