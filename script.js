//////////////////
let typeAndCount = {}
//////////////////////
const rdBtnsLang = document.querySelectorAll("#lang > .col-container > .con-q > .radio-con >.col > #rd")
const langBtn = document.getElementById("lang-btn")
const langTotal = document.getElementById("lang-tot")
//////////////////////////
const rdBtnsMath = document.querySelectorAll("#math > .col-container > .con-q > .radio-con >.col > #rd")
const mathBtn = document.getElementById("math-btn")
const mathTotal = document.getElementById("math-tot")
/////////////////////////////
const rdBtnsVisual = document.querySelectorAll("#visual > .col-container > .con-q > .radio-con >.col > #rd")
const visualBtn = document.getElementById("visual-btn")
const visualTotal = document.getElementById("visual-tot")
/////////////////////////////
const rdBtnsBody = document.querySelectorAll("#body > .col-container > .con-q > .radio-con >.col > #rd")
const bodyBtn = document.getElementById("body-btn")
const bodyTotal = document.getElementById("body-tot")
//////////////////////////
const rdBtnsNature = document.querySelectorAll("#nature > .col-container > .con-q > .radio-con >.col > #rd")
const natureBtn = document.getElementById("nature-btn")
const natureTotal = document.getElementById("nature-tot")
/////////////////////////////
const rdBtnsMusic = document.querySelectorAll("#music > .col-container > .con-q > .radio-con >.col > #rd")
const musicBtn = document.getElementById("music-btn")
const musicTotal = document.getElementById("music-tot")
/////////////////////////////
const rdBtnsSocial = document.querySelectorAll("#social > .col-container > .con-q > .radio-con >.col > #rd")
const socialBtn = document.getElementById("social-btn")
const socialTotal = document.getElementById("social-tot")
/////////////////////////////
const rdBtnsPerson = document.querySelectorAll("#person > .col-container > .con-q > .radio-con >.col > #rd")
const personBtn = document.getElementById("person-btn")
const personTotal = document.getElementById("person-tot")
/////////////////////////////
langBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsLang,langTotal,"lang")
});
mathBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsMath,mathTotal,"math")
});
visualBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsVisual,visualTotal,"visual")
});
bodyBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsBody,bodyTotal,"body")
});
natureBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsNature,natureTotal,"nature")
});
musicBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsMusic,musicTotal,"music")
});
socialBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsSocial,socialTotal,"social")
});
personBtn.addEventListener("click",function(event){
    event.preventDefault();
    BtnCount(rdBtnsPerson,personTotal,"person")
});
////////////////////////////////////
function BtnCount(btn,total,name){
    let count=0;
   for(let i = 0; i<btn.length; i++){
    if(btn[i].checked) {
        if(btn[i].value == "1"){
            count+=1
        }
        else if (rdBtnsPerson[i].value=="2"){
            count+=2
        }
        else{
            count+=3
        }
    }
    
    }
    total.textContent=count
    typeAndCount[name] = count 
    console.log(typeAndCount)
    
}
////////////////////
const typesList = [
    {
        name1:"lang",
        title:" الموهبة اللفظية",
        mean: "القدرة علي استخدام الكلمات ب كفاءة بلاغيا لأقناع الاخرين او التذكر", 
        work : "خطيب / مؤلف / كاتب / شاعر / معلم / ممثل ",
        para : ""
    },        

    {
        name1:"math",
        title:" الموهبة الرياضية",
        mean: "القدرة على استخدام الارقام بكفاءة ، والتفكري المنطقي النقدي السليم",
        work : "مبرمج / محاسب",
        para : ""
    },
    {
        name1:"visual",
        title:"الموهبة البصرية",
        mean : "القدرة على إدراك العامل البصري المكاني بدقة يحب التصميم والرسم والتخيل والصور ",
        work : "مصمم فنى / معمارى / مصور / مصمم فوتوغرافى / مصمم أزياء",
        para : ""
    },
    {
        name1:"body",
        title:"الموهبة الجسدية",
        mean:"استخدام الفرد الجسدية للتعبير عن الافكار المشاعر كما يبدو في قدرات الممثل و الرياضي",
        work : "ممثل / مقلد / جراح / حرفى",
        para : ""
    }, 
    {
        name1:"nature",
        title:"الموهبة الطبيعية",
        mean:"القدرة على التعرف على تصنيف الحيوانات ، الموضوعات المرتبطة بالطبيعة",
        work : "صديق البيئة",
        para : ""
    },
    {
        name1:"music",
        title:"الموهبة الموسيقية",
        mean:"القدرة على إدراك الموسيقي ، والاحساس باللحن ، والنقد الموسيقي",
        work : "تالوة القرآن /الغناء / التلحين / التوزيع /",
        para : ""
    },
    {
        name1:"social",
        title:"الموهبة الاجتماعية",
        mean:"القدرة على إدراك الحالات المزاجية للاخرين ، والتمييز بينها ، ومعرفة النوايا والدوافع والمشاعر",
        work : "القائد",
        para : ""
    },
    {
        name1:"person",
        title:"الموهبة الشخصية",
        mean:"معرفة الذات ، والقدرة على التصرف المتوائم مع الذات و معرفة جوانب الضعف والقوة ",
        work : "طبيب نفسى / باحث اجتماعى فيلسوف / زعيم دينى",
        para : ""
    },     
]
//////////////////////
let totNum = 0
let typeMain = ""
const resultBtn = document.getElementById("result-btn")
const result = document.getElementById("result")
const resultPara = document.getElementById("result-para")
const sub = document.getElementById("sub")
let list = []
resultBtn.addEventListener("click",function(){
    console.log(typeAndCount)
    for( let type1 in typeAndCount){
        if(typeAndCount[type1] > totNum ){
            totNum = typeAndCount[type1]
            //typeMain = type1
        }
    }
    for( let type2 in typeAndCount){
        if(typeAndCount[type2] == totNum){
            list.push(type2)
            //console.log(list)
        }
    }
    for(let x = 0; x < typesList.length; x++){
        let typename = typesList[x]
        for(let y = 0; y < list.length; y++){
            let typeNameList = list[y]
            if(typeNameList == typename.name1){
                result.textContent +=" - "+typename.title
                resultPara.textContent += " - " + typename.work
                sub.textContent += " - " + typename.mean                    
            }
        }

    }
})                                    


