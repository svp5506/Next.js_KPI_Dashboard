"use client";
import Header from './header';
import Stats from './stats';
import ChartView from './trends';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-gray-800">
      <Header></Header>
      <Stats></Stats>
      <ChartView></ChartView>
    </main>
  )
}