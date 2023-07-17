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
  }

export default function RatingKPI({ categoriesRating }: { categoriesRating: CategoriesRatingType }) {
  return (
        <Card key={categoriesRating.title} className="bg-white shadow-md" decoration="top" decorationColor="blue">
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
          </Flex>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3 mt-2"
          >
            <Icon
              icon={categoriesRating.icon}
              variant="shadow"
              size="lg"
              color={categoriesRating.color}
            />
            <Metric className="my-auto">{categoriesRating.metric}</Metric>
            <Text className="truncate">from {categoriesRating.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="end" alignItems="center" className="space-x-2 truncate h-1/2">
            <BadgeDelta deltaType={categoriesRating.deltaType}/>
              <Text color={colors[categoriesRating.deltaType]}>{categoriesRating.delta}</Text>
              <Text className="truncate">to previous month</Text>
            </Flex>
        </Card>
  );
}
