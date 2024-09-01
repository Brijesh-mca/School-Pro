
let formDataList = [];

document.getElementById("getdata").addEventListener('submit', (e) => {
    e.preventDefault();


    let formData = {
        Student: document.getElementById('Student').value,
        Class: document.getElementById('Class').value,
        Mobile: document.getElementById('Mobile').value,
    };

    formDataList.push(formData);
    displayArea();

    document.getElementById("getdata").reset();

    // adding data to array
  

})

function displayArea() {
    let forData = document.getElementById('forData');
    


    //crear the area

    
    forData.innerHTML = "";


    formDataList.forEach((data, index) => {
        let div = document.createElement('div');

     

        console.log(` Name - ${data.Student} ,Class - ${data.Class} , Mobile No. ${data.Mobile}`);
                            
                            
        
        div.textContent = ` Name - ${data.Student}  ,
    Class - ${data.Class}  ,
       Mobile No. - ${data.Mobile}` ;
                           
        forData.appendChild(div);
  

    })
}