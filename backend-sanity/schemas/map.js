export default{
    name:'map',
    title:'Map',
    type:'document',
    fields:[
        {
        name:'location',
        title:'Location',
        type:'string',
        },
        {
        name:'imageurl',
        title:'ImgUrl',
        type:'image',
        options:{
            hotspot:true,
        }
        },
        
    ]
}