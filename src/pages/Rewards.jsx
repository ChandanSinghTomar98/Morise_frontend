import React from 'react';
import Images from '../constants/Images';
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
  const navigate= useNavigate();

  const handleGoBack = () => {
    navigate("/account");
  };

  const rewardData = [
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
    {
      title: 'Reward Title',
      status: 'claim/claimed/received',
      image : Images.TrophyImg,
    },
  ];

  return (
    <div className="text-secondary font-bold py-10">
      <h1 className="text-4xl text-black mb-8 text-center">Rewards</h1>
      <div className="max-w-4xl p-4 mx-auto">
        {rewardData.map((reward, index) => (
          <div
            key={index}
            className="bg-primary p-3 rounded-lg mb-4 flex justify-between items-center"
          > 
          <div className='flex items-center'>
            <img 
            src={reward.image}
            alt={reward.title} 
            className="w-12 h-12 mr-4 object-contain"
            />
            <span className="font-bold">{reward.title}</span>
            </div>
            <span className="">
              {reward.status}
            </span>
          </div>
        ))}
      </div>

      {/* Back Button - Only visible on desktop for right column */}
      <div className="m-auto w-fit justify-center mt-4">
              <button
                onClick={handleGoBack}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
              >
                <svg
                  className="w-6 h-6 transform rotate-90"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
    </div>
  );
};

export default Rewards;