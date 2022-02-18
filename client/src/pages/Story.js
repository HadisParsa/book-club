import React, { useState } from 'react';
import '../components/styles/style.css';

function Form() {
  // Here we set two state variables for storyTitle and userStory using `useState`
  const [storyTitle, setStoryTitle] = useState('');
  const [userStory, setUserStory] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setStoryTitle or setUserStory based on what field the user is typing in
    return name === 'storyTitle' ? setStoryTitle(value) : setUserStory(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their story is submitted
    alert(` Your "${storyTitle}" is successfully submitted.`);
    setStoryTitle('');
    setUserStory('');
  };

  return (
    <form>
      <div className="form-group">
        <p>
          Title: {storyTitle} {userStory}
        </p>
        <input
          value={storyTitle}
          name="storyTitle"
          onChange={handleInputChange}
          type="text"
          placeholder="Story title"
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
      </div>
    </form>

  );
}

export default Form;
