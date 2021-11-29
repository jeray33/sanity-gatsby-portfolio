export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a47cbef23307644d8c1cab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-12fydukz',
                  apiId: '7154b0b5-e59b-4242-bce2-16bf87cf61e6'
                },
                {
                  buildHookId: '61a47cbe2cf4d5e45f66f159',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vxsuc5ai',
                  apiId: '446285fc-ceca-4c43-8c76-470a38ec2633'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeray33/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vxsuc5ai.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
