"use client";
import { Flex } from "@tremor/react";
import MainChart from "../mainChart";

export default function DetailedView() {
    return (
        <main>
            <Flex>
                <div className="mx-auto my-4 w-9/12">
                    <MainChart></MainChart>
                </div>
            </Flex>
        </main>
    )
}