import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.Id} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
