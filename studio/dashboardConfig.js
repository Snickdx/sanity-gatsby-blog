export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d8267fa9edf69d70f720328',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cehky77u',
                  apiId: '490ba0da-afb8-464e-a73f-24e97088cd96'
                },
                {
                  buildHookId: '5d8267fa0240baea4b03fde1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qhtwdmhr',
                  apiId: 'a9b43b33-3ad3-4b19-abce-9b3698cb76ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Snickdx/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qhtwdmhr.netlify.com', category: 'apps'}
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
