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
    'Hi! My name is Kehan and I am a first-year MSCS student at Stanford University. My research interest lies in the areas of Reinforcement Learning, Robotics and Computer Vision.',
    'Previously, I attended UC Berkeley for my undergraduate studies where I have been involved in research in the following labs:',
    '<a href="https://sites.google.com/berkeley.edu/mpc-lab" class="link" target="_blank">MPC lab</a> (advised by Professor Francesco Borrelli)',
    '<a href="https://www-video.eecs.berkeley.edu/" class="link" target="_blank">VIP lab</a> (advised by Professor Avideh Zakhor)',
    '<a href="https://darrellgroup.github.io/" class="link" target="_blank">Darrell Group</a> (advised by Professor Trevor Darrell)',
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
  {
    name: 'HIPIE +',
    description:
      'Extension of the HIPIE project, building a segmentation model with language guided context and chain of thought reasoning',
    stack: ['Research Project', 'Computer Vision', 'Large Language Models'],
    livePreview: 'https://people.eecs.berkeley.edu/~xdwang/projects/HIPIE/',
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
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C',
  'C++',
  'ROS',
  'RISC-V',
  'PyTorch',
  'TensorFlow',
  'Stable Baselines3',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'kehanli AT berkeley.edu',
}

export { header, about, projects, skills, contact }
