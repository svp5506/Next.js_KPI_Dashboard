"use client";
import { Flex } from "@tremor/react";
import AndroidTable from "./androidTable";
import IOSTable from "./iosTable";

export default function DetailedView() {
    return (
        <main>
            <Flex>
                <div className="mx-auto my-4 w-10/12">
                    <AndroidTable></AndroidTable>
                </div>
            </Flex>
            <Flex>
                <div className="mx-auto my-4 w-10/12">
                    <IOSTable></IOSTable>
                </div>
            </Flex>
        </main>
    )
}