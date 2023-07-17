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
import { InformationCircleIcon} from "@heroicons/react/20/solid";

export interface CategoriesRankType {
  title: string;
  metric: string;
  target: number;
  months: number;
  value: number;
  icon: any;
  color: Color;
};

export default function RankKPI({ categoriesRank }: { categoriesRank: CategoriesRankType }) {
  return (
        <Card key={categoriesRank.title} className="bg-white shadow-md" decoration="top" decorationColor="blue">
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title>{categoriesRank.title}</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip={`The combined iOS and Android App Rating over time for ${categoriesRank.title}`}
            />
          </Flex>

          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-4 mt-2">
            <Icon icon={categoriesRank.icon} variant="shadow" size="lg" color={categoriesRank.color} />
            <Metric className="my-auto">{categoriesRank.metric}</Metric>
          </Flex>
          <Flex className="mt-4">
            <Text className="truncate">{`${categoriesRank.value}% to goal`}</Text>
            <Text>
              {categoriesRank.months} out of {categoriesRank.target} Months
            </Text>
          </Flex>
          <ProgressBar value={categoriesRank.value} className="mt-2" />
        </Card>
    );
}
