import {mountainsArray} from "./mountainData.js";

    let displayMenu = document.getElementById('displayMenu');

    displayMenu.onclick = menuList;
    displayMenu.onchange = menuDark;


        function menuList() {

            for (let i = 0; i < mountainsArray.length; i++) {
            let mountainSide = new Option(mountainsArray[i].name);
            console.log(mountainsArray[i].name);
            displayMenu.appendChild(mountainSide);
        }
     }
        function menuDark() {

             let mountainSun = document.getElementById('mountainSun');
            while (mountainSun.firstChild) {
                mountainSun.removeChild(mountainSun.firstChild);
            }
            let mountainSelect = displayMenu.options[displayMenu.selectedIndex].text;
            for (let i = 0; i < mountainsArray.length; i++) {
            if(mountainsArray[i].name == mountainSelect);{

            }
            let selectedMountain = document.createElement('h3');
            selectedMountain.innerText = `${mountainsArray[i].name}`;
            mountainSide.appendChild(selectedMountain);

            let elevation = document.createElement('p');
            elevation.innerText = `Elevation ${mountainsArray[i].elevation}`;
            mountainSide.appendChild(elevation);

            let effort = document.createElement(`p`);
            effort.innerText = `Effort ${mountainsArray[i].effort}`;
            mountainSide.appendChild(effort);

            let mountainLocation = document.createElement(`p`);
            mountainLocation.innerText = `Coordinated - latitude: ${mountainsArray[i].coords.lat} Longtitude ${mountainsArray[i].coords.lng}`;
            mountainSide.appendChild(mountainLocation);

            let description = document.createElement(`p`);
            description.onpointerenter = `Description ${mountainsArray[i].desc}`;
            mountainSide.appendChild(description);
            
            const para1 = document.createElement(`p`);
            para1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis!'
            mountainSide.appendChild(para1);

            const para2 = document.createElement(`p`);
            para2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore totam voluptas hic, harum doloribus ipsam provident ducimus corrupti, ex at suscipit architecto voluptatem sint possimus voluptatum ab magnam veritatis!'
            mountainSide.appendChild(para2);

            break;
        }
    }