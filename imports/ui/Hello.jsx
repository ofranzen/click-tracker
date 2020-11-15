import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ClicksCollection } from '/imports/api/ClicksCollection';

export const Hello = () => {
  const clicks = useTracker(() => ClicksCollection.find({}).fetch());

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    incrementTotal();
  };

  const incrementTotal = () => {
    ClicksCollection.update(clicks[0]._id, { $inc: { totalClicks: 1 } });
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>Someone (including yourself) pressed the button { clicks.map(click => click.totalClicks) } times.</p>
    </div>
  );
};
