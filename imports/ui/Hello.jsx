import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Clicks } from '/imports/api/clicks';

export const Hello = () => {
  const clicks = useTracker(() => Clicks.find({}).fetch());

  const [counter, setCounter] = useState(0);

  function handleClick() {
    increment();
    incrementTotal();
  }

  const increment = () => {
    setCounter(counter + 1);
  };

  function incrementTotal() {
     Meteor.call('clicks.increment', clicks[0]._id, clicks.map(click => click.totalClicks));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>Someone (including yourself) pressed the button { clicks.map(click => click.totalClicks) } times.</p>
    </div>
  );
};
