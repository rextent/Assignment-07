import React, { use } from 'react';
import FriendCard from './FriendCard';

const friendsPromise = fetch("/friends.json").then(res => res.json());

const Friends = () => {
    const friends = use(friendsPromise);
    // console.log("Friends", friends);

    return (
        <div className='container mx-auto py-12 lg:py-20 px-4'>
            
                <h2 className='mb-3 text-2xl font-bold'>My Friends</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        friends.map((friend, id) =>
                            <FriendCard key={id} friend={friend}></FriendCard>)
                    }
                </div>
            
        </div>
    );
};

export default Friends;