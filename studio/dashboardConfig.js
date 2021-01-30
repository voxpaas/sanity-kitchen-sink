export default {
  widgets: [
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
                  buildHookId: '6015179f4133dce77d519c71',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1jaxsa1x',
                  apiId: '8148ad6a-b804-4b96-86e9-d3affcf4a7cb'
                },
                {
                  buildHookId: '6015179fcb006fc87989b785',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dt8to1qe',
                  apiId: 'ebc44da7-966b-44ce-84ca-ce4788229b37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/voxpaas/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dt8to1qe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
