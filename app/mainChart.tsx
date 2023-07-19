import {
    Card,
    Title,
    Text,
    LineChart,
    TabList,
    Tab,
    TabGroup,
    TabPanel,
    TabPanels,
} from "@tremor/react";

const data = {
    reviewsTotal: [
        {
            Date: "Jan 2023",
            "Total Reviews": 2618182,
        },
        {
            Date: "Feb 2023",
            "Total Reviews": 2624582,
        },
        {
            Date: "Mar 2023",
            "Total Reviews": 2645189,
        },
        {
            Date: "Apr 2023",
            "Total Reviews": 2647686,
        },
        {
            Date: "May 2023",
            "Total Reviews": 2649582,
        },
        {
            Date: "Jun 2023",
            "Total Reviews": 2647082,
        },
    ],
    reviews5Star: [
        {
            Date: "Jan 2023",
            "5-Star Reviews": 1200000,
        },
        {
            Date: "Feb 2023",
            "5-Star Reviews": 1250040,
        },
        {
            Date: "Mar 2023",
            "5-Star Reviews": 1454510,
        },
        {
            Date: "Apr 2023",
            "5-Star Reviews": 1519390,
        },
        {
            Date: "May 2023",
            "5-Star Reviews": 1470290,
        },
        {
            Date: "Jun 2023",
            "5-Star Reviews": 1315590,
        },
    ],
};

const valueFormatterMillions = (number: number) => {
    const formattedNumber = (number / 1000000).toFixed(2);
    return formattedNumber + " M";
};

export default function MainChart() {
    return (
        <Card>
            <TabGroup>
                <div className="block sm:flex sm:justify-between">
                    <div>
                        <Title>MSA Reviews</Title>
                        <Text>Sum of MSA iOS and Android</Text>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <TabList variant="solid">
                            <Tab>Total Reviews</Tab>
                            <Tab>5-Star Reviews</Tab>
                        </TabList>
                    </div>
                </div>
                <TabPanels>
                    <TabPanel>
                        <LineChart
                            className="mt-8 h-80"
                            data={data.reviewsTotal}
                            index="Date"
                            categories={["Total Reviews"]}
                            colors={["blue"]}
                            showLegend={false}
                            valueFormatter={valueFormatterMillions}
                            yAxisWidth={60}
                            minValue={2610000}
                        />
                    </TabPanel>
                    <TabPanel>
                        <LineChart
                            className="mt-8 h-80"
                            data={data.reviews5Star}
                            index="Date"
                            categories={["5-Star Reviews"]}
                            colors={["blue"]}
                            showLegend={false}
                            valueFormatter={valueFormatterMillions}
                            yAxisWidth={60}
                            minValue={1200000}
                        />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Card>
    );
}