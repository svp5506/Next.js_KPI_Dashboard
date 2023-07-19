import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What is the MSA App Store Performance Dashboard?",
        answer:
            "The MSA App Store Performance Dashboard is a data visualization tool that provides insights and analytics about the performance of the MSA application in various app stores. It helps track key performance indicators, user ratings, downloads, revenue, and other relevant metrics to evaluate the success and impact of the application in different app marketplaces.",
    },
    {
        question: "How often is the data updated in the MSA App Store Performance Dashboard?",
        answer:
            "The data in the MSA App Store Performance Dashboard is updated on a regular basis. The frequency of updates may vary based on the availability of data from the respective app stores. However, we strive to provide real-time or near-real-time updates to ensure you have the most up-to-date information at your fingertips.",
    },
    {
        question: "Can I compare the performance of the MSA application across multiple app stores?",
        answer:
            "Yes, the MSA App Store Performance Dashboard allows you to compare the performance of the MSA application across multiple app stores. You can select the desired app stores and view side-by-side comparisons of metrics such as downloads, revenue, ratings, and reviews. This feature helps you understand the variations in performance across different platforms.",
    },
    {
        question: "How can I track the user ratings and reviews of the MSA application on different app stores?",
        answer:
            "The MSA App Store Performance Dashboard provides a dedicated section to track user ratings and reviews across different app stores. You can view the overall rating distribution, read specific user reviews, and analyze the sentiment associated with the MSA application. This helps you gauge user satisfaction and identify areas for improvement.",
    },
    {
        question: "Can I export data from the MSA App Store Performance Dashboard for further analysis?",
        answer:
            "Yes, the MSA App Store Performance Dashboard allows you to export data for further analysis. You can export data in various formats such as CSV, Excel, or PDF, depending on your preferences. This feature enables you to perform in-depth analysis, create custom reports, or integrate the data with other business intelligence tools.",
    },
]

export default function FAQ() {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 lg:py-12">
                <div className="mx-auto max-w-4xl divide-y divide-gray-800/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-600">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-800/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
