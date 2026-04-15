const FriendCard = ({ friend }) => {
    const { picture, name, days_since_contact, tags, status } = friend;

    // 🔥 Dynamic status color
    const statusStyle = {
        "overdue": "bg-red-100 text-red-500",
        "almost due": "bg-yellow-100 text-yellow-600",
        "on-track": "bg-green-700 text-white",
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition duration-300">

            {/* Profile Image */}
            <img
                src={picture}
                alt={name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

            {/* Days */}
            <p className="text-sm text-gray-500 mt-1">
                {days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Status */}
            <div className="mt-3">
                <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle[status]
                        }`}
                >
                    {status}
                </span>
            </div>

        </div>
    );
};

export default FriendCard;