"use client";
import Header from './header';
import Stats from './stats';
import ChartView from './trends';


export default function Home() {
  return (
    <main className=' m'>
      <Stats></Stats>
      <ChartView></ChartView>
    </main>
  )
}