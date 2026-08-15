import {
  FaCreditCard,
  FaBookOpen,
  FaBookOpenReader,
  FaArrowRotateLeft,
} from "react-icons/fa6";

const membershipSteps = [
  {
    id: 1,
    icon: <FaCreditCard />,
    title: "Choose a Plan",
    description: "Select the membership plan that fits your reading needs.",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    title: "Become a Member",
    description:
      "Complete your payment and activate your Peregrine membership.",
  },
  {
    id: 3,
    icon: <FaBookOpenReader />,
    title: "Borrow More Books",
    description:
      "Browse our collection and borrow books according to your membership benefits.",
  },
  {
    id: 4,
    icon: <FaArrowRotateLeft />,
    title: "Enjoy & Return",
    description:
      "Read your books and return them on time to continue enjoying your membership.",
  },
];

const Membership = () => {
  return (
    <div className="shadow-md rounded-md bg-slate-50">
      <div className="rounded-xl p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          How Membership Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 font-medium shadow-sm mb-4">
                {step.id}
              </div>

              <div className="text-2xl text-blue-900 mb-3">{step.icon}</div>

              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2 max-w-55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
