import {
  Card,
  Metric,
  Title,
  Icon,
  Text,
  Flex,
  ProgressBar,
  Color,
  Grid,
} from "@tremor/react";
import { InformationCircleIcon, TrophyIcon, StarIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid";

const date = new Date();
let monthNumber = date.getMonth()
let year = date.getFullYear()
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let monthName = months[monthNumber]

export function KPIsection() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      <h3 className="text-base font-semibold leading-6 text-gray-700 py-4">
                {monthName} {year}
      </h3>
    </Grid>
  );
}