 let users = [
    {
      id: 1,
      name: 'Mihail'
    },
    {
      id: 2,
      name: 'Marina'
    },
    {
      id: 3,
      name: 'Andrew'
    },
    {
      id: 4,
      name: 'Ilya'
    },
  ];
  
  export let sortArray = users.reduce((result,keys)=>{result[keys.id] = keys.name; return result},{})

