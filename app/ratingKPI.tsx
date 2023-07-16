import {
  TrophyIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Title,
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Color,
  Icon,
} from "@tremor/react";

const colors: { [key: string]: Color } = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const categoriesRating: {
  title: string;
  metric: string;
  metricPrev: string;
  icon: any;
  color: Color;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "App Rating",
    icon: StarIcon,
    color: "blue",
    metric: "4.7",
    metricPrev: "4.7",
    delta: "0.0",
    deltaType: "unchanged",
  },
  // {
  //     title: "Total Reviews",
  //     icon: ChatBubbleBottomCenterTextIcon,
  //     color: "blue",
  //     metric: "2,658,029",
  //     metricPrev: "2,589,201",
  //     delta: "5.3%",
  //     deltaType: "moderateIncrease",
  // },
];

export default function RatingKPI() {
  return (
    <div>
      {categoriesRating.map((item) => (
        <Card key={item.title}>
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
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3 mt-2"
          >
            <Icon
              icon={item.icon}
              variant="shadow"
              size="lg"
              color={item.color}
            />
            <Metric className="my-auto">{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="start" className="space-x-2 mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text className="truncate">to previous month</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </div>
  );
}
