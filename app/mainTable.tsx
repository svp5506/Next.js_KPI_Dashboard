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
    Button,
    Flex,
    Title
} from "@tremor/react";
import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";


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
        reviewsTotal: 2649482,
        deltaType: "increase",
    },
    {
        rank: 2,
        appName: "My Verizon App",
        ratingCombined: 4.6,
        ratingIOS: 4.6,
        ratingAndroid: 4.6,
        reviewsTotal: 2043411,
        deltaType: "moderateIncrease",
    },
    {
        rank: 3,
        appName: "T-Mobile",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 4239412,
        deltaType: "moderateIncrease",
    },
    {
        rank: 4,
        appName: "Sprint Mobile",
        ratingCombined: 4.7,
        ratingIOS: 4.8,
        ratingAndroid: 4.6,
        reviewsTotal: 644820,
        deltaType: "moderateDecrease",
    },
    {
        rank: 5,
        appName: "MyAT&T",
        ratingCombined: 4.0,
        ratingIOS: 3.8,
        ratingAndroid: 4.2,
        reviewsTotal: 94820,
        deltaType: "decrease",
    },
    {
        rank: 6,
        appName: "Visible Mobile",
        ratingCombined: 4.3,
        ratingIOS: 4.2,
        ratingAndroid: 4.4,
        reviewsTotal: 494820,
        deltaType: "unchanged",
    },
];


export default function CombinedTable() {
    const defaultApps = ["MyAT&T", "My Spectrum App", "My Verizon App", "T-Mobile", "Visible Mobile"]
    const [selectedNames, setSelectedNames] = useState<string[]>(defaultApps);

    const isAppSelected = (combinedTable: CombinedTable) =>
        selectedNames.includes(combinedTable.appName) || selectedNames.length === 0;

    return (
        <Card decorationColor="blue" decoration="top" className="shadow-lg">
            <Flex>
                <Title>Telecom Support App Rankings</Title>
                <Button icon={ArrowDownTrayIcon}>Export</Button>
            </Flex>
            <MultiSelect
                onValueChange={setSelectedNames}
                placeholder="Select Applications"
                defaultValue={defaultApps}
                className="max-w-xs mt-2"
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
                                <TableCell className="text-center">{item.appName}</TableCell>
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