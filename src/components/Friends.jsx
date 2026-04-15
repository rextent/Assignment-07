import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 lg:py-16">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
        Your Friends
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}

      </div>

    </div>
  );
};

export default Friends;