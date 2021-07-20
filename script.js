const boxes=document.querySelectorAll('.box');
const boxFront=document.querySelectorAll('.box-front');
const boxBack=document.querySelectorAll('.box-back');
const checkBox=document.querySelectorAll("input[type='checkbox']");
// for(let b of boxes){   
//  b.classList.toggle('front-add');   
//        b.classList.toggle('front-remove');  
// }


    
    var nums1 = [0,1,2,3,4,5,6,7,8,9],//all numbers to be randomized
    randNum1 = [],randNum2=[]
    i = nums1.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    randNum1.push(nums1[j]);
    nums1.splice(j,1);
}
var nums2 = [0,1,2,3,4,5,6,7,8,9],
i = nums2.length;
j=0;
while (i--) {
    j = Math.floor(Math.random() * (i+1));
    randNum2.push(nums2[j]);
    nums2.splice(j,1);
}
    
let  url=`url('https://raw.githubusercontent.com/john-fermadez/images/main/pokemon-`;
const arr=[

    check0={

        link:`${url}${randNum1[0]}.gif`,
        active:false,
        check:0,
        disable:false
    },
    check1={

        link:`${url}${randNum1[1]}.gif`,
        active:false,
        check:1,
        disable:false
    },
    check2={

        link:`${url}${randNum1[2]}.gif`,
        active:false,
        check:2,
        disable:false
    },
    check3={

        link:`${url}${randNum1[3]}.gif`,
        active:false,
        check:3,
        disable:false
    },
    check4={

        link:`${url}${randNum1[4]}.gif`,
        active:false,
        check:4,
        disable:false
    },
    check5={

        link:`${url}${randNum1[5]}.gif`,
        active:false,
        check:5,
        disable:false
    },
    check6={

        link:`${url}${randNum1[6]}.gif`,
        active:false,
        check:6,
        disable:false
    },
    check7={

        link:`${url}${randNum1[7]}.gif`,
        active:false,
        check:7,
        disable:false
    },
    check8={

        link:`${url}${randNum1[8]}.gif`,
        active:false,
        check:8,
        disable:false
    },
    check9={

        link:`${url}${randNum1[9]}.gif`,
        active:false,
        check:9,
        disable:false
    },
    check10={

        link:`${url}${randNum2[0]}.gif`,
        active:false,
        check:10,
        disable:false
    },

    check11={

        link:`${url}${randNum2[1]}.gif`,
        active:false,
        check:11,
        disable:false
    },
    check12={

        link:`${url}${randNum2[2]}.gif`,
        active:false,
        check:12,
        disable:false
    },
    check13={

        link:`${url}${randNum2[3]}.gif`,
        active:false,
        check:13,
        disable:false
    },
    check14={

        link:`${url}${randNum2[4]}.gif`,
        active:false,
        check:14,
        disable:false
    },
    check15={

        link:`${url}${randNum2[5]}.gif`,
        active:false,
        check:15,
        disable:false
    },
    check16={

        link:`${url}${randNum2[6]}.gif`,
        active:false,
        check:16,
        disable:false
    },
    check17={

        link:`${url}${randNum2[7]}.gif`,
        active:false,
        check:17,
        disable:false
    },
    check18={

        link:`${url}${randNum2[8]}.gif`,
        active:false,
        check:18,
        disable:false
    },
    check19={

        link:`${url}${randNum2[9]}.gif`,
        active:false,
        check:19,
        disable:false
    }
 
]

let k=0;
for(bB of boxBack)
{   
    bB.style.backgroundImage=`${arr[k].link}`;
    k++;
}



var selected=0,select1=null,select2=null,index1=0,index2=0,checkCount=0,index;
// document.getElementById("myCheck").checked = true;
const retry=document.querySelector('.button1');
retry.addEventListener('click',()=>{
    for(let i=0;i<=19;i++)
    checkBox[i].style.display="none";
for(cB of checkBox)
{   
   
    cB.checked=true; 
   
    
    setTimeout(delay, 3000);
    
    
}  

checkCount=0;//retry button clicked
})
function delay(){
    for(cB of checkBox)
    {
    cB.checked=false; 
    }
    for(let i=0;i<=19;i++)
    checkBox[i].style.display="block";

}



 //                         !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!EVENT CHECK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

for(cB of checkBox)
{
cB.addEventListener('change',e=>{
    var arrAccessStr=`${e.target.id}`;//returns check0  when clicked
    
    matches = arrAccessStr.match(/(\d+)/);
       if (matches)
       { 
        index = matches[0];
       }
   index=Number(`${index}`);
   var obj=arr[`${index}`];
   var final=obj.active;
   //                                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!checked PART1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
   if(e.target.checked)
   {
   
   checkCount++;
   console.log("checkbox number:"+e.target.id+" "+"checked:"+!final+" "+"checkCount:"+checkCount);
   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!arr modify PART1 sub PART2 (card is clicked to modyfiying false to true in array .active)
        for(let i=0;i<=19;i++)
        {
        if(arr[i].check==index)
        {
            arr[i].active=true;
        }
        }

     //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!checkCount PART1 sub PART2 (making all checkbox diabled except selected two)
   if(checkCount==1)
   {
   index1=index;
   select1=obj.link;
   console.log("checkCount recorded index1:"+index1);
   }
   else if(checkCount==2)
   {
   index2=index;
   select2=obj.link;
   console.log("checkCount recorded index2:"+index2);
   console.log(`checkCount exeeded close all except:check[${index1}] and check[${index2}]`);
sameAndDiff();
   }
   }
   else//                                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!checked PART1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
   {   console.log("checkbox number:"+e.target.id+" "+"checked:"+!final);
   checkCount--;
    for(let i=0;i<=19;i++)
    {
     if(arr[i].check==index)
         arr[i].active=false; 
    }
   }

  
})
}

function sameAndDiff()
{
    for(let i=0;i<=19;i++)//2 click exceeded
{
   
  checkBox[i].style.display="none";
   
}
  //checking same/diff PART2 sub PART1
  if(select1==select2)//same image selected
  {
   console.log('!!!!!!!!!!same images selected!!!!!');
   //making the selected correct disabled and enable all others
   setTimeout(sucessDelay,400);
  }
  else if(select1!=select2)//different image selected
  {
   console.log('XXXXXXXdifferent images selectedXXXXXX');
   
   setTimeout(failureDelay,1000);
  }
}





function sucessDelay()
{
    arr[index1].disable=true;
    arr[index2].disable=true;
    for(let i=0;i<=19;i++)
    {
      if((arr[i].disable==false))//enable all disabled checkbox 
      {
              checkBox[i].style.display="block";//enable checkbox
              arr[i].disable=false;//enable arr checkbox
      checkBox[i].checked=false;//rotating back  all
      }
    }
      //display:none front and back box
    console.log("selected:"+selected+" "+"select1:"+select1+" "+"select2:"+select2);
    boxes[index1].classList.add('hide');
    boxes[index2].classList.add('hide');
    boxes[index1].classList.add('hide');
    boxes[index2].classList.add('hide');
      //display:none the selected 2
    checkBox[index1].style.display="none";
    checkBox[index2].style.display="none";
    checkCount=0;//retry hence you choose corrent
}

function failureDelay()
{
    // arr[index1].check=false;
    arr[index1].active=false; 
    arr[index2].active=false;  
 
for(let i=0;i<=19;i++)
      {
          if(arr[i].disable==false)//enable all disabled checkbox where arr diable=false
          {
        checkBox[i].style.display="block";
        arr[i].disable=false;//making all disable:false 
            }
        checkBox[i].checked=false;//rotating back all
            }

    console.log("selected:"+selected+" "+"select1:"+select1+" "+"select2:"+select2);
    console.log("roll back all");
    checkCount=0;//retry hence you choose wrong

}



















// var arrAccessStr=`${e.target.id}`;//>check0.active  we get false on console
//    var index;
//     matches = arrAccessStr.match(/(\d+)/);
       
//             if (matches) {
                
//                        index = matches[0];
//             }

//    index=Number(`${index}`);
//    var obj=arr[`${index}`];
//    var final=obj.active;
  
   
// // console.log(!final);
// console.log(e.target.id);
// if(final==false) //card is clicked to modyfiying false to true in array .active
// {
//    for(let i=0;i<=19;i++)
//    {
//    if(arr[i].check==index)
//    {
//        arr[i].active=true;
//    }
//    }
//    console.log("selected:"+selected);
//    if(selected==0)
//    {
//    index1=index;
//    select1=obj.link;
//    console.log("select1:"+select1);
//    selected++;
//    }
//    else if(selected==1)
//    {
    
//     index2=index;
//     select2=obj.link;
//     console.log("select2:"+select2);
//     selected++;
//    }
//     if(selected==2)
//    {
//     if((select1==select2)&&(arr[index1].check!=arr[index2].check))
//     {
//         console.log('!!!!!!!!!!same images selected!!!!!');
//         checkBox[index1].style.display="none";
//         checkBox[index2].style.display="none";
//         setTimeout(sucessDelay,300);
//     }
//   else if((select1!=select2))
//   { console.log('XXXXXXXdifferent images selectedXXXXXX');
//       setTimeout(failureDelay,300);
//     //image different so rotating back and modifying true to false on arr.active
      
//     // for(let i=0;i<=19;i++)
//     // {
//     //         arr[i].checked=false;
//     //         arr[i].active=false;

//     // }
//   }  
//   else
//   {
//     selected=0;
//     select1=45;
//     select2=54; 
   

//   }
//   selected=0;
//   select1=45;
//   select2=54; 
//    }
// }
// else if(final==true)//image clicked and so rotating back and modifying true to false on arr.active
// {
//        for(let i=0;i<=19;i++)
//        {
//         if(arr[i].check==index)
//             arr[i].active=false; 
//        }
// }