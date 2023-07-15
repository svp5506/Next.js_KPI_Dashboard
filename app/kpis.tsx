import {
  Card,
  Metric,
  Title,
  Icon,
  Text,
  Flex,
  ProgressBar,
  Grid,
} from "@tremor/react";
import { InformationCircleIcon, TrophyIcon, StarIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid";

const categories = [
  {
    title: "App Ranking",
    metric: "#1",
    target: 10,
    months: 7,
    value: 70,
    icon: TrophyIcon
  },
];

export default function Kpis() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title} className="w-1/2">
          <div>
            <Flex
              className="space-x-0.5"
              justifyContent="start"
              alignItems="center"
            >
              <Title> App Ranking </Title>
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="The combined iOS and Android App Rating over time"
              />
            </Flex>
          </div>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Icon
              icon={item.icon}
              variant="light"
              size="lg"
              color={item.color}
            />
            <Metric className="mt-3">{item.metric}</Metric>
          </Flex>
          <Flex className="mt-4">
            <Text className="truncate">{`${item.value}% to goal`}</Text>
            <Text>
              {item.months} out of {item.target} Months
            </Text>
          </Flex>
          <ProgressBar value={item.value} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}
