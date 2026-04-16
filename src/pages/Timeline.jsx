import React from 'react';
import { useContext } from 'react';
import { InteractionContext } from '../context/InteractionContext';

const Timeline = () => {

    const { interactions } = useContext(InteractionContext);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <h2 className="text-2xl font-bold mb-6">Timeline</h2>

            {interactions.length === 0 && (
                <p className="text-gray-400 text-sm">No interactions yet</p>
            )}

            <div className="space-y-4">
                {interactions.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow flex justify-between">

                        <div>
                            <p className="font-semibold">{item.type}</p>
                            <p className="text-sm text-gray-500">{item.note}</p>
                        </div>

                        <span className="text-xs text-gray-400">
                            {new Date(item.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Timeline;