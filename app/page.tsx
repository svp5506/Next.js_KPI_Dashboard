"use client";
import Stats from './stats';
import ChartView from './trends';
import DataTable from './table';


export default function Home() {
  return (
    <main className=' m'>
      <Stats></Stats>
      <ChartView></ChartView>
      <DataTable></DataTable>
    </main>
  )
}