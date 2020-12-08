var possibleCodes = ["A", "B", "BC", "C", "E", "M", "P", "K", "NB", "GS", "GN", "X"]

function getBuilding(code){
	return code.replace(/[0-9]/g, '');
}

function verifyCode(code){
  return possibleCodes.includes(code);
}

function selectBuilding(){
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("h2");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");

  div.classList.add("result");

  var input = document.getElementById("input").value;
  //No valid code
  if (verifyCode(getBuilding(input)) === false){
    return;
  }

  //Babbio Center

  var building = getBuilding(input);

  if (building === "BC"){
    h1.textContent = "Babbio Center";
    p.textContent = "Location: Near the intersection of 6th street and River Street. Also across from Buchard";
    img.src="https://betterbuildingssolutioncenter.energy.gov/sites/default/files/styles/showcase_project_image/public/showcase-projects/images/Babbio%20Exterior.jpg?itok=Na9UUz3N";
    figcaption.textContent = "Address: 525 River Street, Hoboken, NJ 07030";
  }
  else if(building === "A"){
    h1.textContent = "Altorfer";
    p.textContent = "Location: At the end of river street. At the end, go to the left side. Across from Morton-Pierce-Kidde Complex";
    img.src = "https://tour.stevens.edu/images/IMG_2017092297386_DETE.jpg";
    figcaption.textContent = "Address: 606 River Street, Hoboken NJ 07030";
  }
  else if(building === "B"){
    h1.textContent="Buchard";
    p.textContent = "Location: On river street across from babbio center and next to red & gray cafe.";
    img.src = "https://midcenturymundane.files.wordpress.com/2012/10/stevens-inst1.jpg";
    figcaption.textContent = "Address: 524 River Street, Hoboken NJ 07030";
  }
  else if(building === "C"){
    h1.textContent="Carnegie";
    p.textContent="Location: On Hudson Street. On the 6th street intersection and Hudson Street intersection. Behind Buchard and in front of Sigma Phi Epsilon";
    img.src="https://s3.amazonaws.com/pastperfectonline/images/museum_149/052/thumbs/20060341186.jpg";
    figcaption.textContent = "Address: Hudson Street, Hoboken NJ 07030";
  }
  else if (building === "E"){
    h1.textContent = "Edwin A. Stevens";
    p.textContent="Between River Street, Hudson Street, and 5th Street. Across from Stevens Park.";
    img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Stevens_auditorium_Hoboken_summer_jeh.jpg/500px-Stevens_auditorium_Hoboken_summer_jeh.jpg";
    figcaption.textContent="Address: 24 5th St, Hoboken, NJ 07030";
  }
  else if (building === "M" || building === "P" || building === "K"){
    h1.textContent = "Morton-Peirce-Kidde Complex";
    p.textContent="On the intersection of River Street and 6th street. Across from Walker Lawn. This building is divided into three separate building. The building on the river street and 6th street intersection is Morton. The building in the middle of the three is Pierce. The building to the left of Pierce is Kidde.";
    img.src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Morton-Peirce-Kidde_Complex.JPG";
    figcaption.textContent="Address: 607 River St, Hoboken, NJ 07030";
  }
  else if (building === "NB"){
    h1.textContent = "North Building";
    p.textContent="In between Humphrey and Jonas buildings.";
    img.src="../images/NorthBuilding.PNG";
    figcaption.textContent="Address: 1, Castle Point Terrace, Hoboken, NJ 07030";
  }
  else if (building === "GS" || building=="GN"){
    h1.textContent = "Gateway Academic Center";
    p.textContent="On the Hudson Street and 6th Street intersection. Across from River Terrace Suites.";
    img.src="https://www.stevens.edu/sites/stevens_edu/files/styles/news_detail/public/260_0001_0.jpg?itok=t1yfNXP5";
    figcaption.textContent="Address: 601 Hudson St, Hoboken, NJ 07030";
  }
  else if (building === "X"){
    h1.textContent = "McLean";
    p.textContent="On the River Street and 5th street intersection. Across from Charles V. Schaefer building and next to Babbio Center.";
    img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/McLean_Hall_Stevens_Tech_2017.jpg/800px-McLean_Hall_Stevens_Tech_2017.jpg";
    figcaption.textContent="Address: River Street, Hoboken NJ 07030";
  }

  
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(img);
  div.appendChild(figcaption);

  document.getElementById('html').appendChild(div);

  document.getElementById('submitbtn').remove();

  document.getElementById('input').remove();
  

}

const myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", (e) => {
      e.preventDefault();
      selectBuilding();
    });