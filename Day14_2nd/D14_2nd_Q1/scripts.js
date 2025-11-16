fetchData();

async function fetchData(){
    try{
        let response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        let data = await response.json();
        console.log("Data from API: ", data);
    }
    catch(e){
        console.log("Error in fetching data");
    }
}