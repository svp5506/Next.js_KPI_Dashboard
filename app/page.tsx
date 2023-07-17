"use client";
import RatingKPI from './ratingKPI';
import RankKPI from './rankKPI';
import Grid from "@tremor/react";
import SectionKPI from './sectionKPI';


export default function Home() {
  return (
    <main>
      <div className="mx-auto my-4 w-8/12">
        <SectionKPI></SectionKPI>
      </div>
    </main >
  )
}