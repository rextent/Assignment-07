import React, { useContext } from 'react';
import { InteractionContext } from '../context/InteractionContext';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const Analytics = () => {

    const { interactions } = useContext(InteractionContext);

    const textCount = interactions.filter(i => i.type === "Text").length;
    const callCount = interactions.filter(i => i.type === "Call").length;
    const videoCount = interactions.filter(i => i.type === "Video").length;

    const data = [
        { name: "Text", value: textCount },
        { name: "Call", value: callCount },
        { name: "Video", value: videoCount },
    ];
    const COLORS = ["#7C3AED", "#1F2937", "#22C55E"]; // Text, Call, Video

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <h2 className="text-3xl font-bold mb-6">Friendship Analytics</h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <h3 className="mb-4 text-gray-600">By Interaction Type</h3>

                <div className="flex justify-center">

                    <PieChart width={300} height={300}>

                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />

                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default Analytics;