let main = document.getElementById("main");
let arr = [
    "https://i.pinimg.com/236x/d9/db/96/d9db9623a0275bca162b5ebcd63ddbf5.jpg",
    "https://i.pinimg.com/236x/1d/1c/75/1d1c7528d5ea6e4c395810fb37687875.jpg",
    "https://i.pinimg.com/236x/43/a4/72/43a47246f2e763a0059f531e0cc7f733.jpg"
];
let s = "";
for(let i = 1; i <= 65; i++){
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card"><img src="${arr[r]}" alt="Image ${i}"></div>`;
}
main.innerHTML = s;
