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
    Title,
    Button,
    Flex
} from "@tremor/react";
import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

type CombinedTable = {
    rank: number;
    appName: string;
    ratingAndroid: number;
    reviewsTotal: number;
    deltaType: DeltaType;
    ratings1Star: number;
    ratings5Star: number;
};

const combinedTable: CombinedTable[] = [
    {
        rank: 1,
        appName: "My Spectrum App",
        ratingAndroid: 4.6,
        reviewsTotal: 2649482,
        deltaType: "increase",
        ratings1Star: 9549,
        ratings5Star: 5780
    },
    {
        rank: 2,
        appName: "My Verizon App",
        ratingAndroid: 4.6,
        reviewsTotal: 2043411,
        deltaType: "moderateIncrease",
        ratings1Star: 8571,
        ratings5Star: 8063
    },
    {
        rank: 3,
        appName: "T-Mobile",
        ratingAndroid: 4.6,
        reviewsTotal: 4239412,
        deltaType: "moderateIncrease",
        ratings1Star: 9198,
        ratings5Star: 5461
    },
    {
        rank: 4,
        appName: "Sprint Mobile",
        ratingAndroid: 4.6,
        reviewsTotal: 644820,
        deltaType: "moderateDecrease",
        ratings1Star: 13593,
        ratings5Star: 9314
    },
    {
        rank: 5,
        appName: "MyAT&T",
        ratingAndroid: 4.2,
        reviewsTotal: 94820,
        deltaType: "decrease",
        ratings1Star: 9535,
        ratings5Star: 14882
    },
    {
        rank: 6,
        appName: "Visible Mobile",
        ratingAndroid: 4.4,
        reviewsTotal: 494820,
        deltaType: "unchanged",
        ratings1Star: 11764,
        ratings5Star: 16250
    },
];


export default function AndroidTable() {
    const defaultApps = ["MyAT&T", "My Spectrum App", "My Verizon App", "T-Mobile", "Visible Mobile"]
    const [selectedNames, setSelectedNames] = useState<string[]>(defaultApps);

    const isAppSelected = (combinedTable: CombinedTable) =>
        selectedNames.includes(combinedTable.appName) || selectedNames.length === 0;

    return (
        <Card decorationColor="blue" decoration="top" className="shadow-lg">
            <Flex>
                <Title>MSA Android Data</Title>
                <Button icon={ArrowDownTrayIcon}>Export</Button>
            </Flex>
            <MultiSelect
                onValueChange={setSelectedNames}
                placeholder="Select Applications"
                defaultValue={defaultApps}
                className="max-w-xs mt-4"
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
                        <TableHeaderCell className="text-center">Android Rating</TableHeaderCell>
                        <TableHeaderCell className="text-center">Total Reviews</TableHeaderCell>
                        <TableHeaderCell className="text-center">1-Star Reviews</TableHeaderCell>
                        <TableHeaderCell className="text-center">5-Star Reviews</TableHeaderCell>
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
                                <TableCell className="text-center">{item.ratingAndroid}</TableCell>
                                <TableCell className="text-center">{item.reviewsTotal}</TableCell>
                                <TableCell className="text-center">{item.ratings1Star}</TableCell>
                                <TableCell className="text-center">{item.ratings5Star}</TableCell>
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