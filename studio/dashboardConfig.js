export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dd80675d185d53b1f899f73',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-vor3cnb2',
                  apiId: '37def738-c0fd-4e03-b0a8-a9eac8ab3759'
                },
                {
                  buildHookId: '5dd80675ab09d6361ee34926',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-5y6fvx4o',
                  apiId: 'cd8eb85a-19f0-4e23-846a-d45622524bd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gushinyakov/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-5y6fvx4o.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
