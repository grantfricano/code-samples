
export default function DisplayName(myname) {
    console.log('Hi my name is ' + myname);
}

export function DisplayAge(age) {
    console.log(GetAge(age));
}

function GetAge(age) {
    return 'you are ' + age + ' years old';
}