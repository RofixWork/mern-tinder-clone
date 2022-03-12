import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";
const TinderCards = () => {
  const [people, setPeople] = useState([]);

  const getAllCards = async () => {
    try {
      const {
        data: { cards },
      } = await axios.get("/tinder/cards");
      setPeople(cards);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllCards();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <section className=" w-[90vw] sm:max-w-[500px] h-[500px] shadow-lg  border border-gray-200 rounded-[20px] sm:rounded-[40px] mx-auto relative overflow-hidden">
      <div>
        {people.length &&
          people.map((person) => {
            return (
              <TinderCard
                className="absolute inset-0 w-full h-full"
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen(person.name)}
                preventSwipe={["up", "down"]}
                key={person._id}
              >
                <div
                  style={{ backgroundImage: `url(${person.image})` }}
                  className="bg-cover bg-center bg-no-repeat w-full h-full rounded-[20px]"
                >
                  <h3 className="absolute bottom-4 left-5 text-white font-semibold text-2xl font-mono capitalize">
                    {person.name}
                  </h3>
                </div>
              </TinderCard>
            );
          })}
      </div>
    </section>
  );
};

export default TinderCards;
