"use client";
import { Flex } from "@tremor/react";
import SectionKPI from './sectionKPI';
import CombinedTable from "./mainTable";
import MainChart from "./mainChart";



export default function Home() {
  return (
    <main>
      <Flex>
        <div className="mx-auto my-4 w-10/12">
          <SectionKPI></SectionKPI>
        </div>
      </Flex>
      <Flex>
        <div className="mx-auto my-4 w-10/12">
          <CombinedTable></CombinedTable>
        </div>
      </Flex>
      <Flex>
        <div className="mx-auto my-4 w-10/12">
          <MainChart></MainChart>
        </div>
      </Flex>
    </main >
  )
}