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
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
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
        rank: 5,
        appName: "Sprint Mobile",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
    {
        rank: 6,
        appName: "MyAT&T",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 264948204,
        deltaType: "moderateIncrease",
    },
];

export default function CombinedTable() {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const isSalesPersonSelected = (combinedTable: CombinedTable) =>
        selectedNames.includes(combinedTable.appName) || selectedNames.length === 0;

    return (
        <Card>
            <MultiSelect
                onValueChange={setSelectedNames}
                placeholder="Select Salespeople..."
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
                        <TableHeaderCell>App Rank</TableHeaderCell>
                        <TableHeaderCell className="text-right">App Name</TableHeaderCell>
                        <TableHeaderCell className="text-right">Combined Rating</TableHeaderCell>
                        <TableHeaderCell className="text-right">iOS Rating</TableHeaderCell>
                        <TableHeaderCell className="text-right">Android Rating</TableHeaderCell>
                        <TableHeaderCell className="text-right">Total Reviews</TableHeaderCell>
                        <TableHeaderCell className="text-right">MoM</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {combinedTable
                        .filter((item) => isSalesPersonSelected(item))
                        .map((item) => (
                            <TableRow key={item.rank}>
                                <TableCell>{item.rank}</TableCell>
                                <TableCell className="text-right">{item.appName}</TableCell>
                                <TableCell className="text-right">{item.ratingCombined}</TableCell>
                                <TableCell className="text-right">{item.ratingIOS}</TableCell>
                                <TableCell className="text-right">{item.ratingAndroid}</TableCell>
                                <TableCell className="text-right">{item.reviewsTotal}</TableCell>
                                <TableCell className="text-right">
                                    <BadgeDelta deltaType={item.deltaType} size="xs" />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Card>
    );
}