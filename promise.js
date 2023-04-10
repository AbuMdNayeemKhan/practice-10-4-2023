// const message = true;

// const myPromise = new Promise((resolve, reject) => {
//     if(message){
//         resolve([
//             {user: "nayeem", email:"nayeem@gmail.com"},
//             {user: "zioun", email: "zioun@gmail.com"}
//         ]);
//     } else {
//         reject ("user is not valid");
//     }
// });

// myPromise.then((s)=>{
//     console.log(s);
// });
// myPromise.catch((error)=>{
//     console.log(error);
// });

const myMessage = false;

const myPromise = new Promise((resolve, reject)=>{
    if(myMessage){
        resolve("message is true");
    } else {
        reject("this message is not valid");
    }
});

myPromise.then((x)=>{
    console.log(x);
});
myPromise.catch((error)=>{
    console.log(error);
});