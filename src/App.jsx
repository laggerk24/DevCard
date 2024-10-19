import DeveloperCard from "./components/DeveloperCard";

const App = () => {
  const user = {
    name: 'Aman Kumar',
    image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    about: 'I am a passionate full-stack developer with 5+ years of experience in building scalable web applications using React, Node.js, and .NET Core.',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com/developer' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/developer' },
      { name: 'Email', url: 'mailto:developer@example.com' }
    ],
    projects: [
      { name: 'Portfolio', url: 'https://developer-portfolio.com' },
      { name: 'Open Source ', url: 'https://github.com/developer/contribution' },
      { name: 'Medium', url: 'https://medium.com/@developer' },
      { name: 'GitHub', url: 'https://github.com/developer' },

    ],
    experience: [
      { role: 'Senior Software Engineer', duration: 'Jan 2020 - Present' },
      { role: 'Software Engineer', duration: 'Jul 2017 - Dec 2019' }
    ],
    education: 'B.S. in Computer Science, XYZ University',
    skills: ['JavaScript', 'React', 'Node.js', 'Docker', 'SQL']
  };

  return (
    <div className="App">
      <DeveloperCard user={user} />
    </div>
  );
};

export default App;
