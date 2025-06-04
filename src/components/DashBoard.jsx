import {Chart as ChartJS} from "chart.js/auto";
import { Bar,Doughnut,Line } from "react-chartjs-2";

export default function DashBoard() {
    return(
        <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
                <p className="text-gray-600">Overview of your CRM performance and key metrics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                        <p className="text-3xl font-bold text-gray-900">247</p>
                        <p className="text-sm text-green-600 mt-1">+12% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                        </svg>
                    </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Users Reached</p>
                        <p className="text-3xl font-bold text-gray-900">45.2K</p>
                        <p className="text-sm text-green-600 mt-1">+8% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Avg Open Rate</p>
                        <p className="text-3xl font-bold text-gray-900">24.8%</p>
                        <p className="text-sm text-red-600 mt-1">-2% from last month</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Best Campaign</p>
                        <p className="text-lg font-bold text-gray-900">Summer Sale</p>
                        <p className="text-sm text-green-600 mt-1">42% open rate</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6 display flex flex-col justify-between h-106">
                    <h3 className="text-xl font-semibold mb-4">
                        Campaign Performance
                    </h3>

                    <Bar
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May'],
                            datasets: [
                                {
                                    label: 'Campaign Performance',
                                    data: [65, 59, 80, 81, 56],
                                    backgroundColor: [
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(153, 102, 255, 1)',
                                    ],
                                },
                                
                            ],
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            },
                        }}
                    />
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 h-106">
                    <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>

                    <Doughnut 
                        data={{
                            labels: ['Email', 'Social Media', 'Direct', 'Referral'],
                            datasets: [
                                {
                                    label: 'Traffic Sources',
                                    data: [300, 50, 100, 40],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132,1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                    ],
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            },
                        }}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6 h-106 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">User Growth Over Time</h3>
                <Line 
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May'],
                        datasets: [
                            {
                                label: 'User Growth',
                                data: [12, 19, 3, 5, 2],
                                fill: false,
                                backgroundColor: 'rgba(75, 192, 192, 1)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}