const loadAiData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const AiData = data.data;
    // console.log(data)
    displayAiData(AiData)
}

const displayAiData = (AiData) => {
    console.log(AiData)
    const allAi = AiData.tools;
    console.log(allAi)

    //selected container
    const aiCardsConiner=document.getElementById('Ai-cards-container');

    for(const perAi of allAi){
        console.log(perAi)
        const perAiCard=document.createElement('div');
        perAiCard.classList=`card bg-base-100 shadow-xl`;
        perAiCard.innerHTML=`
        
        <figure><img src="${perAi?.image}" />
            </figure>
            <div>
            <button class="bg-none text-2xl font-bold ml-4">Features</button>
            </div>
            <div class="card-body">
           
                <div>

                <ol class="text-sm font-normal">
                    <li>Natural language processing</li>
                    <li>Contextual understanding</li>
                    <li>Text generation</li>
                </ol>


                </div>

                <hr>

                <div class="flex justify-between items-center">

                    <div>
                        <h2 class="text-xl font-bold mb-4"> ${perAi.name}</h2>
                        <p  class="font-medium"> <i class="fa-solid fa-calendar-days"> <span class="text-sm font-light ml-2"> ${perAi.published_in}</span></i> </p>
                    </div>
                    <div>

                    <button class="text-red-500 border rounded-full text-4xl p-2"><i class="fa-solid fa-arrow-right"></i></button>

                    </div>

                </div>
                
                
            </div>

        `

        aiCardsConiner.appendChild(perAiCard)
    }
    
    

    
    

    

    



    }

    loadAiData();