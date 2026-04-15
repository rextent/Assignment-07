import React from 'react';

const FriendCard = ({ friend }) => {
    const { picture, name, days_since_contact, tags, status } = friend
    console.log(friend);
    return (
        <div className='shadow-sm rounded-2xl flex flex-col items-center justify-center space-y-2 p-5'>
            <div className=''>
                <img className='h-[100px] w-[100px] rounded-full ' src={picture} alt="" />
            </div>
            <h3>{name}</h3>
            <p>{days_since_contact}d ago</p>
            <div className='flex gap-2'>
                {
                    tags.map((tag, ind) => <button className='btn' key={ind}>
                        {tag}
                    </button>)
                }
            </div>
            <button className='btn btn-error'>{status}</button>
        </div>
    );
};

export default FriendCard;