import { Data } from "../models/common";

export const Cities = [
    {
        name: 'Bangalore',
    },
    {
        name: 'Gurgaon'
    }
] as const

export const DAYS: Array<string> = ["24 hrs", "2d", "4d", "7d", "15d", "20d"];
export const MONITOR_DATA: Data[] = [
    {
        id: "132",
        title: "Readers Down",
        count: "9"
    },
    {
        id: "453",
        title: "Incidents Reported",
        count: "6"
    },
    {
        id: "6765",
        title: "Complaints",
        count: "56"
    },
    {
        id: "7897",
        title: "Abnormal parking",
        count: "0"
    },
    {
        id: "45654",
        title: "Account Pending For Activation",
        count: "52"
    }
]

export const TOTAL_ANALYTICS: Data[] = [
    {
        id: "2343254ghggf",
        count: "13",
        title: "Total Corporate Locations",

    },
    {
        id: "fddhddh3543",
        count: "10",
        title: "Total Partner Locations",

    },
    {
        id: "657fdgfd",
        count: "17",
        title: "Parkings Avg 15"

    },
    {
        id: "6787654",
        count: "68",
        title: "Time (in-hours)"

    },
    {
        id: "4565467",
        count: "980",
        title: "Revenue (in Rs)"

    },
    {
        id: "asd435634",
        count: "350",
        title: "Parking hours saved (in mins)"
    }
]
