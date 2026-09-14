export const INITIAL_TERMINAL_ENTRIES = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'pushpank — CSE Student & Aspiring Frontend Developer' },
  { type: 'command', text: 'status' },
  { type: 'output', text: 'Available for summer & fall internships. Building modern web experiences.' },
  { type: 'command', text: 'help' },
  {
    type: 'output',
    text: `Available commands:
  help      - View all available commands
  whoami    - Display developer identity
  role      - Current career target & specialization
  about     - Education, university, and background
  skills    - Technical languages, frameworks & tools
  projects  - Featured projects with brief summaries
  contact   - Get in touch / social profiles
  clear     - Wipe the terminal display screen`
  }
];

export const processCommand = (rawInput) => {
  const input = rawInput.trim();
  if (!input) return null;

  const parts = input.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return {
        type: 'output',
        text: `COMMAND SYSTEM DIRECTORY:
  • help      : List all available system commands
  • whoami    : Print current user identity and affiliation
  • role      : Current academic & professional focus
  • about     : Information on Pushpank Kumar & Katihar Engineering College
  • skills    : Technical competencies & development stack
  • projects  : Deployed applications and repositories
  • contact   : Email, GitHub, and social coordinates
  • clear     : Clear terminal history buffer
  • date      : Display current UTC and local time
  • repo      : Quick jump link to the GitHub profile`
      };

    case 'whoami':
      return {
        type: 'output',
        text: `pushpank
Full Name: Pushpank Kumar
College  : Katihar Engineering College, Bihar
Program  : B.Tech in Computer Science & Engineering (2025–2029)
GitHub   : github.com/itspushpank`
      };

    case 'role':
      return {
        type: 'output',
        text: `ROLE & OBJECTIVE:
Target   : Frontend Developer / Software Engineering Intern
Focus    : Modern Web Architecture, Responsive UIs, Interactive Web Systems
Status   : Actively looking for internships & collaborative engineering opportunities`
      };

    case 'about':
      return {
        type: 'output',
        text: `BIOGRAPHY:
I'm Pushpank Kumar, a Computer Science & Engineering student at Katihar Engineering College (Session 2025-2029).
I build responsive, aesthetically refined web applications with modern frontend technologies and clean software architecture.
Passionate about spatial interfaces, component systems, and intuitive user experiences.`
      };

    case 'skills':
      return {
        type: 'output',
        text: `TECHNICAL SKILL MATRIX:
Frontend    : HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, CSS 3D
Programming : Python, Java, Data Structures & Algorithms, OOP
Tools & Dev : Git, GitHub, VS Code, Vite, npm, REST APIs`
      };

    case 'projects':
      return {
        type: 'output',
        text: `PORTFOLIO PROJECTS:
1. [Horizon News]
   Dynamic news reader platform with live category aggregation & reader mode.
   Stack: React, JavaScript, Tailwind CSS

2. [Katihar Central Library]
   Academic library management portal with catalog search & book tracking.
   Stack: JavaScript, HTML5, CSS3

3. [Student Management System]
   Academic administrative software for grades, attendance & analytics.
   Stack: Python, OOP, File I/O

4. [Antigravity Spatial Portfolio]
   Interactive developer workspace built with pure CSS 3D & React.
   Stack: React, Vite, CSS 3D transforms`
      };

    case 'contact':
      return {
        type: 'output',
        text: `CONTACT COORDINATES:
GitHub   : https://github.com/itspushpank
Location : Bihar, India
Portfolio: Available at current domain
Status   : Ready for internship inquiries & technical interviews`
      };

    case 'clear':
      return { type: 'clear' };

    case 'date':
      return {
        type: 'output',
        text: `Current System Time: ${new Date().toLocaleString()}`
      };

    case 'repo':
      return {
        type: 'output',
        text: `Navigating to GitHub profile: https://github.com/itspushpank`
      };

    case 'echo':
      return {
        type: 'output',
        text: args.join(' ') || ''
      };

    case 'sudo':
      return {
        type: 'output',
        text: `Permission denied: pushpank has full root access, but no elevated privileges are required in guest mode.`
      };

    default:
      return {
        type: 'error',
        text: `zsh: command not found: "${cmd}". Type "help" for a list of valid commands.`
      };
  }
};
