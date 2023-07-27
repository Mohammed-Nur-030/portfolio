export default{
    name:'project',
    title:'Project',
    type:'document',
    fields:[
        {
        name:'title',
        title:'Title',
        type:'string',
        },
        // {
        //   title: 'Slug',
        //   name: 'slug',
        //   type: 'slug',
        //   options: {
        //     source: 'title',
        //     maxLength: 200, // will be ignored if slugify is set
        //     slugify: input => input
        //                          .toLowerCase()
        //                          .replace(/\s+/g, '-')
        //                          .slice(0, 200)
        //   }
        // },
        {
          name: 'metadesc',
          type: 'string',
          title: 'Meta Description'
      },
        {
        name:'imageUrl',
        title:'ImgUrl',
        type:'image',
        options:{
            hotspot:true,
        }
        },
        
    ]
}