export default{
    name:'blog',
    title:'Blogs',
    type:'document',
    fields:[
        {
        name:'title',
        title:'Title',
        type:'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {
          name: 'metadesc',
          type: 'string',
          title: 'Meta Description'
      },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          },
        {
        name:'imageUrl',
        title:'ImgUrl',
        type:'image',
        options:{
            hotspot:true,
        }
        },
        {
          name:'author',
          title:'Author',
          type:'text',
        },
        {
          title: 'Created At',
          name: 'createdAt',
          type: 'datetime', 
      }
    ]
}