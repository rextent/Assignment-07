import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

const FriendDetailsCard = ({ friend }) => {
  const {
    picture,
    name,
    days_since_contact,
    goal,
    next_due_date,
    status,
    bio,
    tags = [],
  } = friend;

  const statusStyle = {
    "overdue": "bg-red-100 text-red-500",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* Profile Card */}
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <img
              src={picture}
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-3 font-semibold text-gray-800">{name}</h3>

            <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusStyle[status]}`}>
              {status}
            </span>

            {/* Tags */}
            <div className="flex justify-center gap-2 mt-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-2 italic">"{bio}"</p>
          </div>

          {/* Action Buttons */}
          <button className="w-full py-2 border rounded-lg text-sm hover:bg-gray-50">
            Snooze 2 Weeks
          </button>
          <button className="w-full py-2 border rounded-lg text-sm hover:bg-gray-50">
            Archive
          </button>
          <button className="w-full py-2 border rounded-lg text-sm text-red-500 hover:bg-red-50">
            Delete
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-5">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">{days_since_contact}</h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-xl font-bold">{goal}</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">{next_due_date}</h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>

          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-medium">{goal} days</span>
              </p>
            </div>

            <button className="btn btn-sm">Edit</button>
          </div>

          {/* Quick Check-in */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button className="border rounded-lg py-4 flex flex-col items-center hover:bg-gray-50">
                <FaPhoneAlt />
                <span className="text-sm mt-1">Call</span>
              </button>

              <button className="border rounded-lg py-4 flex flex-col items-center hover:bg-gray-50">
                <BsChatDots />
                <span className="text-sm mt-1">Text</span>
              </button>

              <button className="border rounded-lg py-4 flex flex-col items-center hover:bg-gray-50">
                <FaVideo />
                <span className="text-sm mt-1">Video</span>
              </button>
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Recent Interactions</h3>
              <button className="text-sm text-gray-500">Full History</button>
            </div>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Text</p>
                  <p className="text-xs">Asked for career advice</p>
                </div>
                <span className="text-xs">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Meetup</p>
                  <p className="text-xs">Industry conference meetup</p>
                </div>
                <span className="text-xs">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Video</p>
                  <p className="text-xs">Asked for career advice</p>
                </div>
                <span className="text-xs">Jan 28, 2026</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCard;