"use client";
import RatingKPI from './ratingKPI';
import RankKPI from './rankKPI';
import Grid from "@tremor/react";


export default function Home() {
  return (
    <main>
      <div className="mx-auto my-12 w-10/12">
        <RankKPI></RankKPI>
      </div>
      <RatingKPI></RatingKPI>
    </main >
  )
}