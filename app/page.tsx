"use client";
import { Grid, Flex } from "@tremor/react";
import SectionKPI from './sectionKPI';
import CombinedTable from "./mainTable";



export default function Home() {
  return (
    <main>
      <Flex>
        <div className="mx-auto my-4 w-9/12">
          <SectionKPI></SectionKPI>
        </div>
      </Flex>
      <Flex>
        <div className="mx-auto my-4 w-9/12">
          <CombinedTable></CombinedTable>
        </div>
      </Flex >
    </main >
  )
}