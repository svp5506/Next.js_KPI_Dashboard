import {
  Card,
  Metric,
  Title,
  Icon,
  Text,
  Flex,
  ProgressBar,
  Color,
} from "@tremor/react";
import { InformationCircleIcon, TrophyIcon, StarIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid";

const categoriesRank: {
  title: string;
  metric: string;
  target: number;
  months: number;
  value: number;
  icon: any;
  color: Color;
}[] = [
  {
    title: "App Ranking",
    metric: "#1",
    target: 10,
    months: 7,
    value: 70,
    icon: TrophyIcon,
    color: "blue"
  },
  // Add more categories as needed
];

export default function RankKPI() {
  return (
    <div>
      {categoriesRank.map((item) => (
        <Card key={item.title}>
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title>{item.title}</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip={`The combined iOS and Android App Rating over time for ${item.title}`}
            />
          </Flex>

          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3 mt-2">
            <Icon icon={item.icon} variant="shadow" size="lg" color={item.color} />
            <Metric className="my-auto">{item.metric}</Metric>
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
    </div>
  );
}
