import {
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
  CategoryBar,
} from "@tremor/react";

const colors: { [key: string]: Color } = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export interface CategoriesRatingType {
  title: string;
  tooltipText: string;
  metric: string;
  metricPrev: string;
  icon: any;
  color: Color;
  delta: string;
  deltaType: DeltaType;
  value: number;
  scale: string;
}

export default function RatingKPI({ categoriesRating }: { categoriesRating: CategoriesRatingType }) {
  return (
    <Card key={categoriesRating.title} className="bg-white shadow-lg" decoration="top" decorationColor="blue">
      <Flex
        className="space-x-0.5"
        justifyContent="start"
        alignItems="center"
      >
        <Title>{categoriesRating.title}</Title>
        <Icon
          icon={InformationCircleIcon}
          variant="simple"
          tooltip={categoriesRating.tooltipText}
        />
        <div className="flex-grow" />
        <BadgeDelta size="lg" deltaType={categoriesRating.deltaType}>{categoriesRating.delta}</BadgeDelta>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-4 mt-2"
      >
        <Icon
          icon={categoriesRating.icon}
          variant="shadow"
          size="lg"
          color={categoriesRating.color}
        />
        <Metric className="my-auto">{categoriesRating.metric}</Metric>
        <Text text-align="left" justify-items-start className="truncate">from {categoriesRating.metricPrev}</Text>
      </Flex>
      <div className="flex-grow" />
      {categoriesRating.scale === "CSAT" ? (
        <CategoryBar
          values={[20, 20, 30, 30]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={categoriesRating.value}
          tooltip={categoriesRating.metric}
          showLabels={false}
          className="mt-11"
        />
      ) : (
        <CategoryBar
          values={[40, 40, 10, 10]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={categoriesRating.value}
          tooltip={categoriesRating.metric}
          showLabels={false}
          className="mt-11"
        />
      )}
    </Card>
  );
}
