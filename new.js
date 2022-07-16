

fetch('http://localhost:5285/api/Books').then(
    response => {
        return response.json();
    }
).then(data=>{
    console.log(data);
})