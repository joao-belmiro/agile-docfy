const pt = {
  whatIsItScrum: 'O que é Scrum ?',
  whatIsItKanban: 'O que é kanban ?',
  presentantion: 'Scrum é um framework ágil de gestão de projetos que busca a entrega de valor de forma iterativa e incremental. Através de times auto-organizados, as tarefas são divididas em sprints curtas, permitindo maior flexibilidade e adaptação às mudanças. O foco está na colaboração constante entre os membros da equipe e na transparência das atividades. O Product Owner define as prioridades do backlog, enquanto o Scrum Master facilita o processo, removendo obstáculos e promovendo a melhoria contínua. Reuniões diárias de acompanhamento (Daily Scrums) e revisões frequentes (Sprint Reviews) garantem a qualidade e a eficiência do trabalho realizado.',
  presentantionKanban: 'Kanban é um sistema visual de gerenciamento de projetos que enfatiza a visualização do fluxo de trabalho e a melhoria contínua. Ele permite que equipes visualizem seu trabalho em um quadro Kanban, com cartões representando tarefas movendo-se entre colunas de "A Fazer" para "Concluído". Ao limitar o trabalho em progresso e focar na eficiência do fluxo, o Kanban promove um fluxo de trabalho suave e equilibrado. Com sua ênfase em transparência e colaboração, o Kanban permite que equipes identifiquem gargalos, otimizem processos e entreguem valor de maneira oportuna.',
  titleScrumActors: 'Responsabilidades dos Integrantes do time',
  scrumActors: {
    0: {
      title: 'Scrum Master',
      content: 'O Scrum Master é responsável por garantir que a equipe esteja aderindo aos princípios e práticas do Scrum. Ele atua como um facilitador e um líder de processo, removendo obstáculos e ajudando a equipe a melhorar continuamente. O Scrum Master também facilita as reuniões do Scrum, como a Daily Scrum, Sprint Planning, Sprint Review e Sprint Retrospective.'
    },
    1: {
      title: 'Product Owner',
      content: 'O Product Owner representa os interesses dos stakeholders e é responsável por maximizar o valor do produto desenvolvido pelo time Scrum. Ele é responsável por gerenciar o backlog do produto, priorizando as histórias de usuário, definindo as metas da sprint e garantindo que a equipe esteja trabalhando nas funcionalidades mais valiosas para os usuários e o negócio. O Product Owner trabalha em estreita colaboração com a equipe Scrum para fornecer clareza nas histórias e garantir um entendimento compartilhado das necessidades dos usuários.'
    },
    2: {
      title: 'Desenvolvedores',
      content: 'Os desenvolvedores são responsáveis por implementar soluções de software usando tecnologias e linguagens de programação específicas. Eles criam e mantêm a lógica do sistema, interações com banco de dados e integrações com APIs externas. Podem se especializar em áreas como desenvolvimento front-end, back-end, mobile ou aplicações web.'
    },
    3: {
      title: 'Analistas Funcionais',
      content: 'Os analistas funcionais são responsáveis por entender e documentar requisitos do projeto, geralmente em colaboração com as partes interessadas. Trabalham para garantir que as necessidades do cliente sejam atendidas, analisando, documentando e comunicando os requisitos do software. Suas responsabilidades podem incluir coleta de requisitos, análise de negócios, mapeamento de processos e elaboração de documentação.'
    }
  },
  titleScrumRites: 'Ritos Scrum',
  scrumRites: {
    0: {
      title: 'Sprint Planning',
      content: 'É uma reunião realizada no início de cada sprint, onde o Product Owner e a equipe de desenvolvimento definem o objetivo da sprint e selecionam as histórias de usuário a serem trabalhadas. Eles discutem os detalhes das histórias, estimam o esforço necessário e quebram as histórias em tarefas menores. O resultado do Sprint Planning é o plano detalhado do trabalho que será realizado durante a sprint.'
    },
    1: {
      title: 'Sprint Review',
      content: 'É uma reunião realizada ao final de cada sprint, onde a equipe de desenvolvimento apresenta o trabalho concluído durante a sprint. Eles demonstram o incremento do produto ao Product Owner e aos stakeholders e obtêm feedback sobre o trabalho realizado. O objetivo da Sprint Review é avaliar o progresso, obter insights valiosos e ajustar o backlog do produto com base nas necessidades e prioridades em constante mudança.'
    },
    2: {
      title: 'Daily Scrum',
      content: 'É uma reunião diária curta e cronometrada, geralmente realizada no mesmo horário e local. Todos os membros da equipe de desenvolvimento participam e compartilham o progresso do trabalho desde a última reunião, os planos para o dia e quaisquer obstáculos ou impedimentos que estejam enfrentando. O objetivo do Daily Scrum é promover a comunicação entre os membros da equipe e garantir a sincronização e a colaboração contínuas.'
    },
    3: {
      title: 'Sprint Retrospective',
      content: 'É uma reunião realizada ao final de cada sprint, onde a equipe de desenvolvimento analisa o processo de trabalho e busca melhorias contínuas. Eles discutem o que funcionou bem, o que poderia ser melhorado e identificam ações para implementar melhorias na próxima sprint. O objetivo da Sprint Retrospective é promover a aprendizagem e o crescimento da equipe, para que eles possam se tornar mais eficientes e eficazes ao longo do tempo.'
    }
  },
  mediumCardTitle: 'Veja Quem está falando sobre Scrum',
  mediumCardTitlekanban: 'Veja Quem está falando sobre Kanban',
  kanbanActors: {
    0: 'scrum master',
    1: 'product owner',
    2: 'equipe de desenvolvimento devs e afs'
  },
  titleKanbanRites: 'Ritos do kanban',
  kanbanRites: {
    0: 'daily',
    1: 'planning',
    2: 'review',
    3: 'retrospctiva'
  }
}

export default pt
