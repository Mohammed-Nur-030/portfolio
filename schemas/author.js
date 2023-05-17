export default {
    name:'author',
    type:'document',
    title:'Author',
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'desc',
          type: 'string',
          title: 'About'
        },
        {
            title: ' Image',
            name: 'Image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
           
          }

    ] 
}