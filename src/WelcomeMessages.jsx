import React, { useState } from 'react';
import './WelcomeMessages.css'; // Make sure to create and import the CSS file

const WelcomeMessages = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [randomGif, setRandomGif] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const generateWelcomeMessage = () => {
    const funnyTitles = [
      'Chief Laughter Officer',
      'Head of Chuckles',
      'Meme Master',
      'Pun Prodigy',
      'Joke Jedi',
      'Humor Hero',
      'Wit Wizard',
      'Gag Guru',
      'Laugh Legend',
      'Smirk Specialist',
      'Giggle Guru',
      'Chief Happiness Officer',
      'Laugh Luminary',
      'Comedy Commander',
      'Smirk Sorcerer',
      'Grin General',
      'Jovial Jedi',
      'Hilarity Hero',
      'Guffaw Guru',
      'Chuckle Chief',
      'Bantersmith',
      'Wit Whiz',
      'Jest Juggler',
      'Giggle Genie',
      'Amusement Architect',
      'Master of Innovation',
      'Creative Connoisseur',
      'Tech Titan',
      'Design Dynamo',
      'Code Craftsman',
      'Efficiency Expert',
      'Solution Specialist',
      'Project Prodigy',
      'Collaboration Champion',
      'Quality King/Queen',
      'Strategy Sage',
      'Visionary Virtuoso',
      'Customer Care Crusader',
      'Growth Guru',
      'Inspirational Influencer',
    ];

    const funnyElementGifLink = [
      'https://c.tenor.com/rcUlT6pAH9MAAAAC/tenor.gif',
      'https://media1.tenor.com/m/H6lnNOnjRrAAAAAd/jethalal-tmkoc.gif',
      'https://media1.tenor.com/m/rNbOhgMCWOkAAAAC/jethalal-jethalal-dancing.gif',
      'https://media1.tenor.com/m/DNTjlBVuOowAAAAd/jethalal-tmkoc.gif',
      'https://media1.tenor.com/m/3XbaENKYpkAAAAAd/jethalal-good-night-jethalal.gif',
      'https://media1.tenor.com/m/sMQItHo72QIAAAAd/jethalal.gif',
      'https://media1.tenor.com/m/oglfsM16Wj8AAAAC/wait-jetha.gif',
      'https://media1.tenor.com/m/P4yfmEn7GhEAAAAd/jethalal-tmkoc.gif',
      'https://media1.tenor.com/m/H6lnNOnjRrAAAAAd/jethalal-tmkoc.gif',
      'https://media1.tenor.com/m/W06knTv2yOUAAAAd/jetha-dance.gif',
    ];

    const randomTitle =
      funnyTitles[Math.floor(Math.random() * funnyTitles.length)];

    // Set a random gif from the array
    const randomIndex = Math.floor(Math.random() * funnyElementGifLink.length);
    setRandomGif(funnyElementGifLink[randomIndex]);

    return `Welcome to Ashar 💖, ${name}! You're our ${randomTitle}. 😄`;
  };

  const handleGenerateMessage = (e) => {
    e.preventDefault();

    if (!name || !position) {
      setAlertMessage(
        'Hey, fill in both your name and position to get your welcome message!'
      );
      setWelcomeMessage('');
      setRandomGif('');
    } else {
      setWelcomeMessage(generateWelcomeMessage());
      setAlertMessage('');
    }
  };

  const handleRestart = () => {
    setName('');
    setPosition('');
    setWelcomeMessage('');
    setAlertMessage('');
    setRandomGif('');
  };

  return (
    <div className="welcome-container">
      <h1>Team Smasher</h1>
      <form onSubmit={handleGenerateMessage}>
        <div className="form-group">
          <label>
            Enter your name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Choose your position:
            <select value={position} onChange={handlePositionChange}>
              <option value="" disabled>
                Select your position
              </option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Designer">Designer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="QA Engineer">QA Engineer</option>
              {/* Add more positions as needed */}
            </select>
          </label>
        </div>
        <button type="submit" className="animated-button">
          Generate Message
        </button>
      </form>
      {alertMessage && (
        <div className="alert-message">
          <p>{alertMessage}</p>
        </div>
      )}
      {welcomeMessage && (
        <div className="welcome-message">
          <p>{welcomeMessage}</p>
          <button className="restart-button" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
      {randomGif && (
        <div className="funny-element">
          <img src={randomGif} alt="Funny Element" />
        </div>
      )}
    </div>
  );
};

export default WelcomeMessages;
