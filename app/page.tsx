"use client";
import Stats from './stats';
import { Kpis } from './rank_kpi';
import Grid from "@tremor/react";


export default function Home() {
  return (
    <main>
      <div className="mx-auto my-10 w-10/12">
        <Kpis></Kpis>
      </div>
      <Stats></Stats>
    </main >
  )
}