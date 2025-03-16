var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
       "<email":"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const regex = /^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*@(gmail.com|yahoo.com)/;

let filteredEmails = initialArr => {
    let newEmailArr = [];
    initialArr.forEach(function (currentObj) {
         for (let key in currentObj) {
            if (key.includes('email') && currentObj[key].match(regex)) {
                newEmailArr.push(currentObj[key])
            }
         }
    });
   
   return newEmailArr;
};


console.log(filteredEmails(arr));
