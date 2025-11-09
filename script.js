const title = document.getElementById('first');
const description = document.getElementById('second');
const content = document.getElementById('third');

async function getData(){
    try {
        let request = await ('http://localhost:3000/api/blog');
        let response = request.json();
        console.log(`Response is ${response}`);

        if(response.title){
            title.textContent = 'Nutrition'
            description.textContent = 'We promise to give the best tips to ensure you live a healthy and good life whilst you are alive'
            content.textContent = 'We have weekly updates on our blog, the best diet plans and meal for different conditions even to keep fit and lots of other packages. subscribe to our newsletter today and do not miss out on our opportunities that worth your time '

        }
    } catch (error) {
        console.log(`${error}, I failed to get data. `)
    }
    
}
getData();