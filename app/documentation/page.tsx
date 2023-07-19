"use client";
import { Flex } from "@tremor/react";
import FAQ from "./faq";

export default function Documentation() {
    return (
        <main>
            <Flex>
                <div className="mx-auto my-4 w-9/12">
                    <FAQ></FAQ>
                </div>
            </Flex>
        </main>
    )
}