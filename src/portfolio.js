const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kkkhanl.github.io',
  title: 'KL',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kehan Li',
  // role: 'Computer Science Student',
  description: [
    'Hi! My name is Kehan and I am a second-year <a href="https://www.cs.stanford.edu/masters-program-overview" class="link" target="_blank">MSCS</a> student at Stanford University, graduating in June 2026. Over the past summer, I interned at <a href="https://stripe.com/" class="link" target="_blank">Stripe</a> as a Software Engineering intern, and previously at <a href="https://www.cepton.com/" class="link" target="_blank">Cepton</a> as a SWE intern.<br><br>My research interests lie in Reinforcement Learning, Robotics, and Computer Vision, and I am currently conducting research in the <a href="https://svl.stanford.edu/" class="link" target="_blank">Stanford Vision and Learning (SVL) Lab</a>. Before Stanford, I received my B.A. in Computer Science from UC Berkeley, where I conducted research in the <a href="https://darrellgroup.github.io/" class="link" target="_blank">Darrell Group</a>, the <a href="https://www-video.eecs.berkeley.edu/" class="link" target="_blank">VIP Lab</a>, and the <a href="https://sites.google.com/berkeley.edu/mpc-lab" class="link" target="_blank">MPC Lab</a>.<br><br>I am actively seeking 2026 full-time opportunities in Machine Learning Engineering (MLE) and Software Engineering (SWE). Feel free to reach out at firstlast[at]stanford[dot]edu :)'
  ],
  // resume: 'https://drive.google.com/file/d/1u40xnZL0QiEQ46WA98pFLgLdQF0v6Zy-/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kehan-li/',
    github: 'https://github.com/kkkhanl',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  //   We introduce SegLLM, a multi - round interactive reasoning segmentation model that can reason about
  // previously segmented objects and conversations, responding to multiple visual and text queries in a chat - like
  // manner.SegLLM can understand complex user intentions and segment entities in relation to previously identified
  // ones, e.g., instance[1], including positional, interactional, and hierarchical relationships.
  {
    name: "Using Small LLMs to Improve Large Model Code Synthesis",
    description:
      "Investigates whether a light-weight LLM can be fine-tuned to generate effective prompts that enhance code synthesis in a larger LLM",
    stack: ['LLM', 'Fine-tuning', 'prompt tuning'],
    livePreview: "https://github.com/arielchen07/Guiding-the-Giants-Using-Small-LLMs-to-Improve-Large-Model-Code-Synthesis",
  },
  {
    name: 'SegLLM',
    description:
      'A multi-round interactive sgmentation model that can reason about previously segmented objects and conversations',
    stack: ['Research Project', 'Computer Vision', 'Large Language Models'],
    livePreview: 'https://berkeley-hipie.github.io/segllm.github.io/',
  },
  {
    name: 'Adaptive Navigation for Autonomous Drones',
    description:
      'Enably autonomous long-range, obstacle avoidance drone flights with Reinforcement Learning',
    stack: ['Research Project', 'Reinforcement Learning', 'Computer Vison'],
    livePreview: 'https://bcommons.berkeley.edu/adaptive-long-distance-navigation-autonomous-drones',
  },
  {
    name: 'Park-Predict ++',
    description:
      'Extension of the Park Predict + Project, enhancing trajectory prediction for vehicles in a parking lot environment',
    stack: ['Research Project', 'Transformer Models', 'Trajectory Prediction'],
    livePreview: 'https://sites.google.com/view/xushenssite/research/parkpredict_1?authuser=0',
  },
  {
    name: 'Euroskepticism Detection with BERT',
    description:
      'Devised a Machine Learning model that classifies the EU’s parliamentary questions as pro- or anti-Europeanism.',
    stack: ['Research Project', 'BERT', 'Natural Language Processing'],
    livePreview: 'https://urapprojects.berkeley.edu/detail.php?id=18971-3',
  },
  {
    name: 'Trailer Hitch Tracking',
    description:
      'Developed a robust system to detect and track trailer tongue from LiDAR data to enhance autonomous hitching.',
    stack: ['Internship Project', '3D Point Cloud Processing', 'Optimization'],
    livePreview: 'https://developer.cepton.com/blog/trailer_hitch_tracking',
  },
  {
    name: 'Reinforcement Learning Gomoku',
    description:
      'Implemented various reinforcement learning models to play the strategy board game of Gomoku with a novel tournament-style training loop.',
    stack: ['Course Project', 'Reinforcement Learning'],
    sourceCode: 'https://github.com/kkkhanl/Gomoku_Tournaments',
  },
  {
    name: 'Wind and Fluid Simulator',
    description:
      'Developed a Computer Graphics model that simulated the realistic behavior of fluid under the effects of wind.',
    stack: ['Course Project', 'Computer Graphics', 'Physics Simulation'],
    livePreview: 'https://zenith-rhythm-571.notion.site/CS184-Final-Project-Blown-Away-by-Fluid-Dynamics-2c9121dd210c46178e4ee1b1b077508d?pvs=4',
  }
]

const skills = [
  'Python',
  'C++',
  'Java',
  'React',
  'SQL',
  'PyTorch',
  'TensorFlow',
  'CUDA',
  'ROS',
  'Open3D',
  'Prometheus',
  'AWS',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'kehanli AT berkeley.edu',
}

export { header, about, projects, skills, contact }
