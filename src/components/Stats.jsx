import React from 'react';

const statsData = [
    { id: 1, value: 10, label: "Total Friends" },
    { id: 2, value: 3, label: "On Track" },
    { id: 3, value: 6, label: "Need Attention" },
    { id: 4, value: 12, label: "Interactions This Month" },
];

const Stats = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {statsData.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-2xl font-bold text-green-700">{item.value}</h3>
                        <p className="text-gray-500 text-sm">{item.label}</p>
                    </div>
                ))}
            </div>
            <div className='divider'></div>
        </div>
    );
};

export default Stats;