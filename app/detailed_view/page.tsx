"use client";
import { Flex } from "@tremor/react";
import AndroidTable from "./androidTable";

export default function DetailedView() {
    return (
        <main>
            <div className="mx-auto my-4 w-9/12">
                <AndroidTable></AndroidTable>
            </div>
        </main>
    )
}