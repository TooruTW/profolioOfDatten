// 物件
const slider = document.querySelector(".slider");
const thumbnails = document.querySelector(".thumbnails");
const sectionWorks = document.querySelector(".works");

const worksList = [
    { 
        name: "7",
        url: "./element/works/7.jpg"
    },
    { 
        name: "alexander-turambar",
        url: "./element/works/alexander-turambar.jpg"
    },
    { 
        name: "barbarian",
        url: "./element/works/barbarian.jpg"
    },
    { 
        name: "boxe",
        url: "./element/works/boxe.jpg"
    },
    { 
        name: "concept-1",
        url: "./element/works/concept-1.jpg"
    },
    { 
        name: "forest-50",
        url: "./element/works/forest-50.jpg"
    },
    { 
        name: "frank-50",
        url: "./element/works/frank-50.jpg"
    },
    { 
        name: "handsome-villain",
        url: "./element/works/handsome-villain.jpg"
    },
    { 
        name: "necromancer",
        url: "./element/works/necromancer.jpg"
    },
    { 
        name: "orc-artstation-1",
        url: "./element/works/orc-artstation-1.jpg"
    },
    { 
        name: "orc-artstation-2",
        url: "./element/works/orc-artstation-2.jpg"
    },
    { 
        name: "orc-poses",
        url: "./element/works/orc-poses.jpg"
    },
    { 
        name: "peregrine-final",
        url: "./element/works/peregrine-final.jpg"
    },
    { 
        name: "peregrine-poses",
        url: "./element/works/peregrine-poses.jpg"
    },
    { 
        name: "photodelivery",
        url: "./element/works/photodelivery.jpg"
    },
    { 
        name: "quell-final",
        url: "./element/works/quell-final.jpg"
    },
    { 
        name: "quell-pose-wip",
        url: "./element/works/quell-pose-wip.jpg"
    },
    { 
        name: "quell-wip-1",
        url: "./element/works/quell-wip-1.jpg"
    },
    { 
        name: "raytak-pesha-1",
        url: "./element/works/raytak-pesha-1.jpg"
    },
    { 
        name: "raytak-pesha-minotaur-pose-test",
        url: "./element/works/raytak-pesha-minotaur-pose-test.jpg"
    },
    { 
        name: "serier-2-1-template2",
        url: "./element/works/serier-2-1-template2.jpg"
    },
    { 
        name: "serier-2-knight1",
        url: "./element/works/serier-2-knight1.jpg"
    },
    { 
        name: "serier-2-knight2",
        url: "./element/works/serier-2-knight2.jpg"
    },
    { 
        name: "serier-2-mage1",
        url: "./element/works/serier-2-mage1.jpg"
    },
    { 
        name: "serier-2-mage2",
        url: "./element/works/serier-2-mage2.jpg"
    },
    { 
        name: "serier1-baros-bg-artstation",
        url: "./element/works/serier1-baros-bg-artstation.jpg"
    },
    { 
        name: "serier1-elani-bg-artstation",
        url: "./element/works/serier1-elani-bg-artstation.jpg"
    },
    { 
        name: "serier1-reaughar-bg-artstation",
        url: "./element/works/serier1-reaughar-bg-artstation.jpg"
    },
    { 
        name: "serier1-uhros-bg-artstation",
        url: "./element/works/serier1-uhros-bg-artstation.jpg"
    },
    { 
        name: "silhouettes",
        url: "./element/works/silhouettes.jpg"
    },
    { 
        name: "skeletal-strike-dattan-monteiro-porto",
        url: "./element/works/skeletal-strike-dattan-monteiro-porto.jpg"
    },
    { 
        name: "soldier-1res",
        url: "./element/works/soldier-1res.jpg"
    },
    { 
        name: "soldier-2res",
        url: "./element/works/soldier-2res.jpg"
    },
    { 
        name: "tg-gnomebelmont",
        url: "./element/works/tg-gnomebelmont.jpg"
    },
    { 
        name: "tg-hobo-drow",
        url: "./element/works/tg-hobo-drow.jpg"
    },
    { 
        name: "transfusion-dregga-dattan-m-porto",
        url: "./element/works/transfusion-dregga-dattan-m-porto.jpg"
    },
    { 
        name: "veda-s-party-1",
        url: "./element/works/veda-s-party-1.jpg"
    },
    { 
        name: "veda-s-party-2-wip",
        url: "./element/works/veda-s-party-2-wip.jpg"
    },
    { 
        name: "veda-s-party-3-sketch-1",
        url: "./element/works/veda-s-party-3-sketch-1.jpg"
    },
    { 
        name: "venora-portrait",
        url: "./element/works/venora-portrait.jpg"
    },
    { 
        name: "witch",
        url: "./element/works/witch.jpg"
    }
    
];

//render to slider
function renderWorks(arr){
    for(let i=0; i < arr.length;i++){
        slider.innerHTML += `<div id="w${i}" class="work hide">
                        <img src="./element/works/${arr[i].name}.jpg" alt="${arr[i].name}">
                        <h3>${arr[i].name}</h3>
                    </div>`;
        thumbnails.innerHTML += `<div class="thumbnail");>
                        <img  src="./element/works/${arr[i].name}.jpg" alt="${arr[i].name}">
                    </div>`
    }
//   style="transform: translateX(${34.7*i}px)"
    
}
//點擊顯示功能
function handleClick(objectId){
    console.log(objectId);
    const elements = document.querySelectorAll(`.work`);
    for(const item of elements){
        item.classList.add("hide")
    }
    elements[objectId].classList.remove("hide")
    sectionWorks.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${worksList[objectId].url})
    `;
}

function createClicl(){
    const objects = document.querySelectorAll(".thumbnail")
    console.log(objects);
    for (let i = 0; i < objects.length; i++) {
        const element = objects[i];
        element.addEventListener('click',()=>{handleClick(i)})
    }
}

//自動選取一個圖片
function autoSelect(){
    handleClick(Math.floor(Math.random()*worksList.length)-1);
}


//access
renderWorks(worksList)
createClicl()
autoSelect()