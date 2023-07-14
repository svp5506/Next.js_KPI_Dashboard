import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Flex, Title, Icon, TabGroup, TabList, Tab, AreaChart, Text, Color, Card } from "@tremor/react";
import { useState } from "react";

const usNumberformatter = (number: number, decimals = 0) =>
    Intl.NumberFormat("us", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    })
        .format(Number(number))
        .toString();

const formatters: { [key: string]: any } = {
    Sales: (number: number) => `$ ${usNumberformatter(number)}`,
    Profit: (number: number) => `$ ${usNumberformatter(number)}`,
    Customers: (number: number) => `${usNumberformatter(number)}`,
    Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
    Sales: "Sales",
    Profit: "Profit",
    allApps: "All Apps",
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.allApps];

export type DailyPerformance = {
    date: string;
    Sales: number;
    Profit: number;
    allApps: number;
};

export const performance: DailyPerformance[] = [
    {
        date: "2023-05-01",
        Sales: 900.73,
        Profit: 173,
        allApps: 73,
    },
    {
        date: "2023-05-02",
        Sales: 1000.74,
        Profit: 174.6,
        allApps: 74,
    },
    {
        date: "2023-05-03",
        Sales: 1100.93,
        Profit: 293.1,
        allApps: 293,
    },
    {
        date: "2023-05-04",
        Sales: 1200.9,
        Profit: 290.2,
        allApps: 29,
    },
];

export default function ChartView() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedKpi = kpiList[selectedIndex];

    const areaChartArgs = {
        className: "mt-5 h-72",
        data: performance,
        index: "date",
        categories: [selectedKpi],
        colors: ["blue"] as Color[],
        showLegend: false,
        valueFormatter: formatters[selectedKpi],
        yAxisWidth: 56,
    };

    return (
        <>
            <div className="my-12 mx-auto w-4/5">
                <Card>
                    <div className="md:flex justify-between">
                        <div>
                            <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                                <Title> App Rating History </Title>
                                <Icon
                                    icon={InformationCircleIcon}
                                    variant="simple"
                                    tooltip="The combined iOS and Android App Rating over time"
                                />
                            </Flex>
                            <Text>Combined for iOS and Android</Text>
                        </div>
                        <div>
                            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                                <TabList color="gray" variant="solid">
                                    <Tab>Spectrum Criteria</Tab>
                                    <Tab>Mobile Only</Tab>
                                    <Tab>All Apps</Tab>
                                </TabList>
                            </TabGroup>
                        </div>
                    </div>
                    {/* web */}
                    <div className="mt-8 hidden sm:block">
                        <AreaChart {...areaChartArgs} />
                    </div>
                    {/* mobile */}
                    <div className="mt-8 sm:hidden">
                        <AreaChart {...areaChartArgs} startEndOnly={true} showGradient={false} showYAxis={false} />
                    </div>
                </Card>
            </div>
        </>
    );
}