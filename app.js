// let arrProj = [
//     { 
//         title: "Online Entrance Examination and Registration System" ,
//         images: ['images/ojt/ojt0.JPG', 'images/ojt/ojt1.JPG','images/ojt/ojt2.JPG'],
//         stack: ['Laravel', 'Java (Android)']
//     },
//     { 
//         title: "Content Management System" ,
//         images: ['images/cms/ccis0.JPG', 'images/cms/ccis1.JPG','images/cms/ccis2.JPG'],
//         stack: ['Angular 2+', 'Laravel']
//     },
//     { 
//         title: "Angular Forum" ,
//         images: ['images/forum/forum0.JPG', 'images/forum/forum1.JPG','images/forum/forum2.JPG'],
//         stack: ['Angular 2+', 'Laravel']
//     }
// ]

// function clickedProject(id)
// {
//     switch(id) {
//         case 'it199':
//             project = arrProj[0];
//             break;
//         case 'cms':
//             project = arrProj[1];
//             break;
//         case 'forum':
//             project = arrProj[2];
//             break;
//         } 

//     $("#projectModal").modal();
//     document.querySelector('#modalTitle').innerHTML= `<b>${project.title}</b>`;

//     var arrImg = "";
//     for(i=0; i<project.images.length; i++) {
//         if(i==0) {
//             arrImg += `<div class="carousel-item active">
//             <img class="d-block w-100" src="${project.images[i]}" alt="First slide">
//             </div>
//             `
//         } else {
//             arrImg += `
//             <div class="carousel-item">
//             <img class="d-block w-100" src="${project.images[i]}" alt="Second slide">
//             </div>
//             `
//         }
//     }

//     var arrStack = "";
//     for(i=0; i<project.stack.length;i++) {
//         arrStack += `
//         <h5><span class="badge badge-pill badge-danger">${project.stack[i]}</span></h5>

//         `
//     }

//     document.querySelector('.slideshow').innerHTML= arrImg;
//     document.querySelector('.modal-footer').innerHTML= arrStack;
// }


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});