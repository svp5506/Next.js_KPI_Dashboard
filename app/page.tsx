"use client";
import Header from './header';
import Stats from './stats';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch">
      <Header></Header>
      <Stats></Stats>
    </main>
  )
}