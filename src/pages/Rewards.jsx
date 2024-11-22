import React from "react";
import Container from "../components/Container";
import Cards from "../components/Cards";

const Rewards = () => {
  const reward = [
    { icon: "profile1", memberName: "John Doe", status: "Active" },
    { icon: "profile2", memberName: "Jane Smith", status: "Inactive" },
    { icon: "profile3", memberName: "Alice John", status: "Pending" },
    { icon: "profile4", memberName: "Jane Smith", status: "Active" },
  ];
  return (
    <>
      <Container className="my-7 bg-[#E9EDC9]">
        <div className="text-center font-semibold text-2xl my-5">Claim Now</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
          {reward.map((referal, index) => (
            <Cards
              key={index}
              icon={referal.icon}
              memberName={referal.memberName}
              status={referal.status}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rewards;
