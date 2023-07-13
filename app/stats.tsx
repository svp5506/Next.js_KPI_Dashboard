import { ArrowDownIcon, ArrowUpIcon, TrophyIcon, CursorArrowRaysIcon, StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid'
import { UsersIcon } from '@heroicons/react/24/outline'

const stats = [
    { id: 1, name: 'App Rank', stat: '#1', icon: TrophyIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Average Rating', stat: '4.70', icon: StarIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Total Reviews', stat: '2,650,391', icon: ChatBubbleBottomCenterTextIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const date = new Date();
let monthNumber = date.getMonth()
let year = date.getFullYear()

var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let monthName = months[monthNumber]

export default function Stats() {
    return (
        <div className='px-24 m-2'>
            <h3 className="text-base font-semibold leading-6 text-white">
                {monthName} {year}
            </h3>

            <dl className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-gray-900 px-4 pb-0 pt-5 shadow sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-indigo-500 p-2">
                                <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-white">{item.name}</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-white">{item.stat}</p>
                            <div
                                className={classNames(
                                    item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                    'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0 ml-auto min-w-fit min-w-fit"'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowUpIcon
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArrowDownIcon
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                                        aria-hidden="true"
                                    />
                                )}

                                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {item.change}
                            </div>

                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

