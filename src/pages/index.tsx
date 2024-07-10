import { Inter } from "next/font/google";
import React, { ReactNode, useEffect, useState } from "react";
import { CardButton, CardText, CardTitle, Card } from "@/components/card";
import { useAppContext } from "@/context/AppContext";
import { Divider } from "@/components/divider/Divider";
import Authentication from "./authentication/authentication";
import { useRouter } from "next/router";
import axios from "axios";
import Dashboard from "./dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { userData } = useAppContext()
  const router = useRouter()

  return (
    <div>
    </div>
  );
}
