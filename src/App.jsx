import { useState } from 'react';

const StaffApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    inGameUsername: '',
    discordUsername: '',
    age: '',
    location: '',
    availability: '',
    onlineTime: '',
    minecraftExperience: '',
    discordExperience: '',
    previousBans: '',
    minecraftCommands: '',
    pluginsMods: '',
    discordTools: '',
    ruleBreakerHandling: '',
    playerConflict: '',
    newPlayerHelp: '',
    motivation: '',
    teamContribution: '',
    references: '',
    agreeToRules: false,
    trialPeriod: false,
    additionalInfo: '',
    contactMethod: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can replace the console.log with actual form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>DynamicCraft Staff Application Form</h2>
      
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      
      <label>
        In-Game Username:
        <input type="text" name="inGameUsername" value={formData.inGameUsername} onChange={handleChange} required />
      </label>
      
      <label>
        Discord Username & Tag:
        <input type="text" name="discordUsername" value={formData.discordUsername} onChange={handleChange} required />
      </label>
      
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      
      <label>
        Location (Optional):
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      
      <label>
        How many hours can you dedicate per week?
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} required />
      </label>
      
      <label>
        What time of day are you usually online?
        <input type="text" name="onlineTime" value={formData.onlineTime} onChange={handleChange} required />
      </label>
      
      <label>
        Previous experience as staff on Minecraft servers:
        <textarea name="minecraftExperience" value={formData.minecraftExperience} onChange={handleChange} required />
      </label>
      
      <label>
        Previous experience moderating Discord servers:
        <textarea name="discordExperience" value={formData.discordExperience} onChange={handleChange} required />
      </label>
      
      <label>
        Have you ever been banned or punished on any server? If yes, explain:
        <textarea name="previousBans" value={formData.previousBans} onChange={handleChange} required />
      </label>
      
      <label>
        Rate your knowledge of Minecraft commands (1-10):
        <input type="number" name="minecraftCommands" value={formData.minecraftCommands} onChange={handleChange} min="1" max="10" required />
      </label>
      
      <label>
        Familiarity with Minecraft Plugins/Mods:
        <textarea name="pluginsMods" value={formData.pluginsMods} onChange={handleChange} required />
      </label>
      
      <label>
        Discord Moderation Tools you are familiar with:
        <textarea name="discordTools" value={formData.discordTools} onChange={handleChange} required />
      </label>
      
      <label>
        How would you handle a player breaking the rules?
        <textarea name="ruleBreakerHandling" value={formData.ruleBreakerHandling} onChange={handleChange} required />
      </label>
      
      <label>
        What would you do if two players are arguing in chat?
        <textarea name="playerConflict" value={formData.playerConflict} onChange={handleChange} required />
      </label>
      
      <label>
        How would you help a new player who’s lost and doesn’t know what to do?
        <textarea name="newPlayerHelp" value={formData.newPlayerHelp} onChange={handleChange} required />
      </label>
      
      <label>
        Why do you want to be a staff member on DynamicCraft?
        <textarea name="motivation" value={formData.motivation} onChange={handleChange} required />
      </label>
      
      <label>
        What do you think you can bring to the team?
        <textarea name="teamContribution" value={formData.teamContribution} onChange={handleChange} required />
      </label>
      
      <label>
        References (Optional):
        <textarea name="references" value={formData.references} onChange={handleChange} />
      </label>
      
      <label>
        Do you agree to follow and enforce the server’s rules and guidelines?
        <input type="checkbox" name="agreeToRules" checked={formData.agreeToRules} onChange={handleChange} required />
      </label>
      
      <label>
        Are you willing to undergo a trial period as a staff member?
        <input type="checkbox" name="trialPeriod" checked={formData.trialPeriod} onChange={handleChange} required />
      </label>
      
      <label>
        Additional Information (Optional):
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
      </label>
      
      <label>
        Best way to reach you:
        <input type="text" name="contactMethod" value={formData.contactMethod} onChange={handleChange} required />
      </label>
      
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default StaffApplicationForm;
