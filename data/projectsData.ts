interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'sharpe',
    description: `sharpe is a unified, interactive, general-purpose environment for backtesting or applying machine learning(supervised learning and reinforcement learning) in the context of quantitative trading.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/StateOfTheArt-quant/sharpe',
  },
  {
    title: 'The transformerquant',
    description: `A framework for training and evaluating deep learning models in Quantitative trading domain`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/StateOfTheArt-quant/transformerquant',
  },
]

export default projectsData
