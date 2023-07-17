import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    BadgeDelta,
    DeltaType,
    MultiSelect,
    MultiSelectItem,
} from "@tremor/react";
import { useState } from "react";

type CombinedTable = {
    rank: number;
    appName: string;
    ratingCombined: number;
    ratingIOS: number;
    ratingAndroid: number;
    reviewsTotal: number;
    deltaType: DeltaType;
};

const combinedTable: CombinedTable[] = [
    {
        rank: 1,
        appName: "My Spectrum App",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
    {
        rank: 2,
        appName: "My Verizon App",
        ratingCombined: 4.6,
        ratingIOS: 4.6,
        ratingAndroid: 4.6,
        reviewsTotal: 204341109,
        deltaType: "moderateIncrease",
    },
    {
        rank: 3,
        appName: "T-Mobile",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
    {
        rank: 4,
        appName: "Sprint Mobile",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
    {
        rank: 5,
        appName: "MyAT&T",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
];


export default function CombinedTable() {
    const defaultApps = ["MyAT&T", "My Spectrum App", "My Verizon App", "T-Mobile"]
    const [selectedNames, setSelectedNames] = useState<string[]>(defaultApps);

    const isAppSelected = (combinedTable: CombinedTable) =>
        selectedNames.includes(combinedTable.appName) || selectedNames.length === 0;

    return (
        <Card decorationColor="blue" decoration="top" className="shadow-lg">
            <MultiSelect
                onValueChange={setSelectedNames}
                placeholder="Select Applications"
                defaultValue={defaultApps}
                className="max-w-xs"
            >
                {combinedTable.map((item) => (
                    <MultiSelectItem key={item.appName} value={item.appName}>
                        {item.appName}
                    </MultiSelectItem>
                ))}
            </MultiSelect>
            <Table className="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className="text-center">App Rank</TableHeaderCell>
                        <TableHeaderCell className="text-center">App Name</TableHeaderCell>
                        <TableHeaderCell className="text-center">Combined Rating</TableHeaderCell>
                        <TableHeaderCell className="text-center">iOS Rating</TableHeaderCell>
                        <TableHeaderCell className="text-center">Android Rating</TableHeaderCell>
                        <TableHeaderCell className="text-center">Total Reviews</TableHeaderCell>
                        <TableHeaderCell className="text-center">Rating MoM</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {combinedTable
                        .filter((item) => isAppSelected(item))
                        .map((item) => (
                            <TableRow key={item.rank}>
                                <TableCell className="text-center">{item.rank}</TableCell>
                                <TableCell className="text-right">{item.appName}</TableCell>
                                <TableCell className="text-center">{item.ratingCombined}</TableCell>
                                <TableCell className="text-center">{item.ratingIOS}</TableCell>
                                <TableCell className="text-center">{item.ratingAndroid}</TableCell>
                                <TableCell className="text-center">{item.reviewsTotal}</TableCell>
                                <TableCell className="text-center">
                                    <BadgeDelta deltaType={item.deltaType} size="xs" />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Card>
    );
}