import React, { useState } from 'react';
import '../components/styles/style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [storyTitle, setStoryTitle] = useState('');
  const [userStory, setUserStory] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { story, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return story === 'storyTitle' ? setStoryTitle(value) : setUserStory(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Title: ${storyTitle} ${userStory}`);
    setStoryTitle('');
    setUserStory('');
  };

  return (
    <div>
      <h1>
        Title: {storyTitle} </h1>
      <p>
        {userStory}
      </p>
      <form className="form">
        <input
          value={storyTitle}
          name="storyTitle"
          onChange={handleInputChange}
          type="text"
          placeholder="Story Title"
        />
        <input
          value={userStory}
          name="userStory"
          onChange={handleInputChange}
          type="text"
          placeholder="Your story"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
