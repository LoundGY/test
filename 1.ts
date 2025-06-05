import React from 'react';

interface PricingCardProps {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    plan,
    price,
    features,
    isFeatured = false,
}) => {
    return (
        <div
            tabIndex={0}
            className={`
                w-full max-w-sm rounded-lg border 
                ${isFeatured ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-gray-900 border-gray-200'} 
                shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300
            `}
        >
            <div className="flex flex-col items-center p-6">
                <h3 className="text-lg font-medium">{plan}</h3>
                <p className="text-4xl font-extrabold mt-2">{price}</p>
                <ul className="mt-4 space-y-2 text-center text-sm">
                    {features.map((feature, index) => (
                        <li key={index} className="border-t border-gray-200 pt-2 first:border-none first:pt-0">
                            {feature}
                        </li>
                    ))}
                </ul>
                <button
                    className={`mt-6 w-full py-2 px-4 rounded-md text-sm font-semibold 
                        ${isFeatured ? 'bg-white text-blue-800 hover:bg-gray-100' : 'bg-blue-800 text-white hover:bg-blue-700'} 
                        focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
};
