var data = {
  english: {
    welcome:
      "Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    information:
      "This site was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    btnpopup: "Continue",
    // help result
    help: `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    aboutme: `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Abdelaziz Hassan",<br>
      &nbsp;&nbsp;&nbsp;"degree" : "Bachelor's degree in computer science"<br>
      &nbsp;&nbsp;&nbsp;"title": "Linux System Administrator & Junior DevOps Engineer",<br>
      &nbsp;&nbsp;&nbsp;"tools": "Git, Jenkins, Docker, Kubernetes",<br>
      &nbsp;&nbsp;&nbsp;"language" : "......",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "......",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"location" : "Sohag, Egypt"<br>
    }`,

    experience: `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  
  <tr>
    <td class="center">Sept 2022 - June 2024</td>
    <td>ATHER TEAM</td>
    <td>Instructor</td>
    <td>Guided classmates through learning different Linux distributions and provided instruction on Red Hat Administration I and II.</td>
  </tr>

  <tr>
    <td class="center">June 2023 - 2024</td>
    <td>DBMS Project</td>
    <td>Developer</td>
    <td>Developed a Bash Shell Script DBMS to enable users to store and retrieve data from a hard disk. The application is CLI-based with functionality for database and table management.</td>
  </tr>

  <tr>
    <td class="center">Jan 2023 - April 2023</td>
    <td>Open-Source</td>
    <td>Contributor</td>
    <td>Contributed to open-source projects, focusing on automation, containerization, and cloud infrastructure.</td>
  </tr>

  <tr>
    <td class="center">2024 - Today</td>
    <td>Maat-System (G-Project)</td>
    <td>DevOps Engineer</td>
    <td>Developed an advanced DevOps system including continuous deployment, infrastructure orchestration, and automated pipelines with Kubernetes and Jenkins. Managed infrastructure provisioning using Terraform and Docker containerization.</td>
  </tr>

  <tr>
    <td class="center">April 2024 - Today</td>
    <td>DEPI</td>
    <td>Intern</td>
    <td>Working as an intern with responsibilities in DevOps, including continuous deployment, infrastructure orchestration, and pipeline automation.</td>
  </tr>`,

    cv: `The resume upload will begin.`,

    redirectLinkedin: `You will be redirected to Linkedin.`,

    redirectGithub: `You will be redirected to Github.`,

    hobby: `{<br>
    &nbsp;&nbsp;&nbsp;"Sport": "Volleyball, Cycling",<br>
    &nbsp;&nbsp;&nbsp;"Competitive Programming": "C++",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Entrepreneurship, Reading, Walking with a friend"<br>
  }`,
    // TODO: ADD YOUR PROJECT HERE

    project: `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Catshop</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>Cat Photo Selling Marketplace</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/CatShop" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">2</td>
    <td class="center">Kata Temple</td>
    <td class="center">HTML CSS JS Heroku</td>
    <td>30-day challenge to improve in technical test with Kata Temple. Attempt to complete temple sensei katas from level 8kyu to 4kyu in 30 days - Ruby Edition</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Kata-Temple" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">3</td>
    <td class="center">ScoreIT</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>The objective of ScoreIT is to offer a tool for creating credibility for start-up projects aimed at raising funds from investors or financial institutions. We offer a fully online platform allowing startup founders to obtain a rating on their project, thus giving it a credibility score in order to reassure future potential investors.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/ScoreIT" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">4</td>
    <td class="center">Monolith Arena</td>
    <td class="center">HTML CSS JS</td>
    <td>48h to create a 2d game on the theme of a battle arena using Javascript classes</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">5</td>
    <td class="center">My Dark Theme.JS</td>
    <td class="center">HTML CSS JS</td>
    <td>Dark mode generator with customization of dark mode colors and possibility to copy the code to add it directly to your site. To make it work you have to vary the colors in CSS.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/MyDarkTheme.JS" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">6</td>
    <td class="center">EmojiFace</td>
    <td class="center">HTML CSS JS</td>
    <td>60 seconds to reproduce as many emoji as possible with your face! Use of webcam and face detection thanks to AI!</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/EmojiFace" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">7</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML CSS JS</td>
    <td>Presentation of my portfolio as a terminal. Integration of autocomplete, command history, etc. The latter can be used as a real terminal.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Portfolio-Terminal" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">8</td>
    <td class="center">YouLearn</td>
    <td class="center">React JS SCSS</td>
    <td>Turns any YouTube video into an e-learning platform with the ability to view chapters in the video, take notes with associated timestamps, etc.
    - Under development to integrate a Rails API backend to record information.</td>
    <td class="center">No</td>
    <td class="center"><a href="mailto:reygner0224@gmail.com?subject=This repository is pravate&body=Guillaume REYGNER> this repository is private tell me why you want to have access to it." target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">9</td>
    <td class="center">FindHouse</td>
    <td class="center">React JS CSS Rails API</td>
    <td>Creation of a real estate sales platform with a React JS frontend and a Rails API backend.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/FindHouse" target="blank">Link</a></td>
  </tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

    glassmorphismOff: `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

    glassmorphismOn: `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

    notfound: `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

    notfoundmenu: `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

    website: `<p class="result websiteresult">You will be redirected to the project website.</p>`,

    ls1: `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

    ls2: `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

    listsecretresult: `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

    congratulation: `Congratulations you have found the <code>.secret</code> folder.`,

    bodymail: `mailto:reygner0224@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Guillaume REYGNER > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`,
  },
};

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage() {
  if (localStorage.getItem("language") === null) {
    localStorage.setItem("language", "english");
  }
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  popupcontent.innerHTML = data[language].information;
  btnPopup.innerHTML = data[language].btnpopup;
  document.querySelectorAll(".helpresult").forEach((element) => {
    element.innerHTML = data[language].help;
  });
  document.querySelectorAll(".aboutmeresult").forEach((element) => {
    element.innerHTML = data[language].aboutme;
  });
  document.querySelectorAll(".experienceresult").forEach((element) => {
    element.innerHTML = data[language].experience;
  });
  document.querySelectorAll(".cvresult").forEach((element) => {
    element.innerHTML = data[language].cv;
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach((element) => {
    element.innerHTML = data[language].redirectLinkedin;
  });
  document.querySelectorAll(".redirectresultGithub").forEach((element) => {
    element.innerHTML = data[language].redirectGithub;
  });
  document.querySelectorAll(".hobbyresult").forEach((element) => {
    element.innerHTML = data[language].hobby;
  });
  document.querySelectorAll(".resultproject").forEach((element) => {
    element.innerHTML = data[language].project;
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach((element) => {
    element.innerHTML = data[language].glassmorphismOff;
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach((element) => {
    element.innerHTML = data[language].glassmorphismOn;
  });
  document.querySelectorAll(".notfoundlanguage").forEach((element) => {
    element.innerHTML = data[language].notfound;
  });
  document.querySelectorAll(".notfoundmenu").forEach((element) => {
    element.innerHTML = data[language].notfoundmenu;
  });
  document.querySelectorAll(".websiteresult").forEach((element) => {
    element.innerHTML = data[language].website;
  });
  document.querySelectorAll(".lsresult1").forEach((element) => {
    element.innerHTML = data[language].ls1;
  });
  document.querySelectorAll(".lsresult2").forEach((element) => {
    element.innerHTML = data[language].ls2;
  });
  document.querySelectorAll(".listsecretresult").forEach((element) => {
    element.innerHTML = data[language].listsecretresult;
  });
  document.querySelectorAll(".congratulation").forEach((element) => {
    element.innerHTML = data[language].congratulation;
  });
}

french.addEventListener("click", function () {
  language = "french";
  localStorage.setItem("language", language);
  setLanguage();
});

english.addEventListener("click", function () {
  language = "english";
  localStorage.setItem("language", language);
  setLanguage();
});
