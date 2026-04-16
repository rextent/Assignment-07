import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import FriendDetailsCard from './FriendDetailsCard';

const FriendDetails = () => {
    const {id} = useParams();
    console.log(id)

    const friends = useLoaderData();
    console.log("friends", friends)

    const expectedFriend = friends.find(friend => friend.id === Number(id))
    console.log(expectedFriend);

    return (
        <FriendDetailsCard friend={expectedFriend}></FriendDetailsCard>
    );
};

export default FriendDetails;