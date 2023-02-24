var n = [0,1,2,3,4,5,6,7,8,9, ... , 100];

for(let i=0;i<n.length;i++){
    console.log(n[i])
}
//  O(n)

for(let i=0;i<n.length;i++){
    for(let j=0;i<n.length;j++){
        for(let k=0;k<20;k++){
            console.log(n[k])
        }
    }
}

//  O(n^2)

for(let i=0;i<n.length;i++){
    for(let j=0;i<n.length;j++){
        for(let k=0;i<n.length;k++){
            console.log(n[k])
        }
    }
}

//  O(n^3)