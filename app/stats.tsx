import { TrophyIcon, StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid'
import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Color, Grid, Icon } from "@tremor/react";
import { UsersIcon } from '@heroicons/react/24/outline'

const date = new Date();
let monthNumber = date.getMonth()
let year = date.getFullYear()

var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let monthName = months[monthNumber]

const colors: { [key: string]: Color } = {
    increase: "emerald",
    moderateIncrease: "emerald",
    unchanged: "orange",
    moderateDecrease: "rose",
    decrease: "rose",
};

const categories: {
    title: string;
    metric: string;
    metricPrev: string;
    icon: any;
    color: Color;
    delta: string;
    deltaType: DeltaType;
}[] = [
        {
            title: "App Ranking",
            icon: TrophyIcon,
            color: "indigo",
            metric: "# 1",
            metricPrev: "# 1",
            delta: "0.0",
            deltaType: "unchanged",
        },
        {
            title: "App Rating",
            icon: StarIcon,
            color: "indigo",
            metric: "4.7",
            metricPrev: "4.7",
            delta: "0.0",
            deltaType: "unchanged",
        },
        {
            title: "Total Reviews",
            icon: ChatBubbleBottomCenterTextIcon,
            color: "indigo",
            metric: "2,658,029",
            metricPrev: "2,589,201",
            delta: "5.3%",
            deltaType: "moderateIncrease",
        },
    ];

export default function Stats() {
    return (
        <div>
            <h3 className="text-base font-semibold leading-6 text-white">
                {monthName} {year}
            </h3>
            <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
                {categories.map((item) => (
                    <Card key={item.title}>
                        <Flex alignItems="start">
                            <Text>{item.title}</Text>
                            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                        </Flex>
                        <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
                            <Icon icon={item.icon} variant="light" size="xl" color={item.color} />
                            <Metric>{item.metric}</Metric>
                            <Text className="truncate">from {item.metricPrev}</Text>
                        </Flex>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}