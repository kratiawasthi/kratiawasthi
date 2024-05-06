export default{
    name:'post',
    type:'document',
    title:'users',
    initialValue: {
        title:"please enter full name"
    },
    fields: [
        {
            name:'name',
            type:'string',
            title:'name',

        },
        {
            name:'age',
            type:'number',
            title:'age',

        },
        {
            name:'userid',
            type:'string',
            title:'userid',

        },

    ]
}