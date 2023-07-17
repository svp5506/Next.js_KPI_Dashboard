import React from "react";
import { StarIcon, ChatBubbleBottomCenterTextIcon, TrophyIcon } from "@heroicons/react/20/solid";
import { Grid } from "@tremor/react";
import RatingKPI, { CategoriesRatingType } from "./ratingKPI";
import RankKPI, { CategoriesRankType } from "./rankKPI";

const date = new Date();
const monthNumber = date.getMonth();
const year = date.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[monthNumber];



const CategoriesRating: CategoriesRatingType[] = [
  {
    title: "MSA App Rating",
    icon: StarIcon,
    color: "blue",
    metric: "4.7",
    metricPrev: "4.7",
    delta: "0.0",
    deltaType: "unchanged",
    tooltipText: "Combined App Rating between MSA iOS and Android"
  },
  {
    title: "MSA CSAT",
    icon: ChatBubbleBottomCenterTextIcon,
    color: "blue",
    metric: "50.2",
    metricPrev: "48.7",
    delta: "5.3%",
    deltaType: "moderateIncrease",
    tooltipText: "MSA iOS and Android combined Customer Satisfaction Score (CSAT)"
  },
];

const CategoriesRank: CategoriesRankType[] = [
  {
    title: "MSA App Ranking",
    metric: "#1",
    target: 10,
    months: 7,
    value: 70,
    icon: TrophyIcon,
    color: "blue"
  },
];

export default function SectionKPI() {
  return (
    <div>
    <h3 className="text-base font-semibold leading-6 text-gray-700 py-4">
                {monthName} {year}
    </h3>
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
    <RankKPI categoriesRank={CategoriesRank[0]}></RankKPI>
    <RatingKPI categoriesRating={CategoriesRating[0]}/>
    <RatingKPI categoriesRating={CategoriesRating[1]}/>
    </Grid>
    </div>
  );
}