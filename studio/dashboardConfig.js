export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62db784c4c2bea4ce3aaba0d',
                  title: 'Sanity Studio',
                  name: 'elismatiq-blog-studio',
                  apiId: 'c03c0e39-366b-41aa-aab7-0c597bb4a4ac'
                },
                {
                  buildHookId: '62db784c0a983d4bdd1f49bf',
                  title: 'Blog Website',
                  name: 'elismatiq-blog',
                  apiId: '72bf2ec2-ca63-4b92-ae86-9630870872b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/delisma/elismatiq-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://elismatiq-blog.netlify.app', category: 'apps'}
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
