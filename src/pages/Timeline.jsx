import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { InteractionContext } from '../context/InteractionContext';
import { FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';



const iconMap = {
    Call: <FaPhoneAlt className="text-green-600" />,
    Text: <BsChatDots className="text-purple-600" />,
    Video: <FaVideo className="text-blue-600" />,
};

const Timeline = () => {

    const [filter, setfilter] = useState('All');

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/friends.json").then(res => res.json()).then(data => setFriends(data));
    }, []);

    const getFriendName = (id) => {
        const friend = friends.find(f => Number(f.id) === Number(id));
        return friend ? friend.name : "Unknown";
    };

    const { interactions } = useContext(InteractionContext);

    const filteredInteractions =
        filter === "All"
            ? interactions
            : interactions.filter(item => item.type === filter);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <h2 className="text-2xl font-bold mb-6">Timeline</h2>

            {interactions.length === 0 && (
                <p className="text-gray-400 text-sm">No interactions yet</p>
            )}

            <div className="mb-6 flex justify-start">
                <select
                    value={filter}
                    onChange={(e) => setfilter(e.target.value)}
                    className="w-64 border rounded-lg px-4 py-2 text-sm bg-white shadow-sm"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredInteractions.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow flex justify-between">

                        <div className='flex gap-3 items-center'>
                            {iconMap[item.type]}
                            <div>
                                <div>
                                    <p className="font-semibold">{item.type} with {getFriendName(item.friendId)}</p>
                                    {/* <p className="text-sm text-gray-500">{item.note}</p> */}
                                </div>
                                <span className="text-xs text-gray-400">
                                    {new Date(item.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>

                            </div>

                        </div>

                        {/* <span className="text-xs text-gray-400">
                            {new Date(item.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span> */}

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Timeline;