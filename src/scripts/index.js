import "../styles/index.scss";

let obj = ["mince", "radishes", "paste", "mash", "gravy"];

let pluralsobj = [];

for (let i = 0; i < 100; i++) {
    pluralsobj.push(obj[Math.floor(Math.random() * obj.length)]);
}

console.log(pluralsobj);

let uniqueobjs = [];
for (let j = 0; j < pluralsobj.length; j++) {
    if (!uniqueobjs.includes(pluralsobj[j])) {
        uniqueobjs.push(pluralsobj[j]);
    }
}

let uniq = [...new Set(pluralsobj)];
console.log(uniqueobjs);
console.log(uniq);

function unique(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

console.log(unique(pluralsobj));