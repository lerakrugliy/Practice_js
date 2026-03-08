const isOnline = true;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOnline && isFriend && !isDnd;

console.log(canOpenChat);

if (canOpenChat){
    console.log("you can open chat"); 
}


//const sub = 'free';
const sub = "vip";

const canAccessContent =  sub === "vip" || sub === "pro";
console.log(canAccessContent);

if(canAccessContent){
    console.log("you can access content");
}else{
    console.log("you can`t access content");
}

const x1 = 10;
const x2 = 30;
const number = 45;

console.log("до х1", number < x1);
console.log("після х1", number > x1);
console.log("від х1 до х2", number > x1 && number > x2 );
console.log("до х1 або після х2",  number < x1 || number < x2);