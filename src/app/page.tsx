"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b
     from-indigo-700 to-blue-900 flex flex-col 
     justify-items-center p-10"
    >
      <Card className="mx-auto max-w-4xl">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.4, Tailwind CSS, Tremor 2.0
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-r from-indigo-700 to-blue-900">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
