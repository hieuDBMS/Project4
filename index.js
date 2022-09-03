const questions=document.querySelectorAll(".question")
// querySelectorAll return a node list, we can loop over it  to get the  every single question that is available

// questions.forEach((question) =>{
//     question.addEventListener("click",()=>{
//         question.classList.toggle("open")
//     })
// })

questions.forEach((question) =>{
    question.addEventListener("click", ()=>{
        if(question.classList.contains("open")){
            question.classList.remove("open")
        }else{
            const questionIsOpen=document.querySelectorAll(".open")
            questionIsOpen.forEach((quest)=>{
                quest.classList.remove("open")
            })
            
            question.classList.add("open")
        }
    })
})