////START INTERACTION SHOW ANOTATIONS WHE SELECT HULL OR BLADES //////
     //HULL ENTITIES UUIDS
     var id_body = '91deaae6-db56-4c86-9149-40573e09523b';
     var id_hull = 'bdc0e85d-06dc-4f35-9da7-5f18b05b416b';
     var id_l_door_paint = 'e88fb3f7-e946-48dc-9e17-a70fc821334a';
     var id_r_door_paint = '708cc5aa-f903-4d42-8dce-0a12e633e029';
     var id_blade1 ='678823c9-79ea-4114-aa5d-3f1dc7648b3d';
     var id_blade2 ='678823c9-79ea-4114-aa5d-3f1dc7648b3d';
     var id_blade1_bl ='1a036cf6-c28b-41bc-b5e8-031fa72e5b8d';
     var id_blade2_br ='067e428a-e0c5-4f3f-92e4-8ad26fb24ca1';

     var labelsArray = ['txt-label-title','txt-label'];

     var id_aspa1_fl = '547aceab-c09f-4d57-8aec-cd3d1c717f60';
     var id_aspa1_fr ='ca447d6d-2f95-4a4a-8074-193f1d5bf3ee';
     var id_aspa1_bl ='2e438b45-c02f-4f5c-90ca-6353864ded96';
     var id_aspa1_br ='df10c21f-3e68-4910-b8ee-b970a7c11779';

     var id_aspa2_fl = 'c287c405-302d-43af-a61f-3bb102624fae';
     var id_aspa2_fr ='b55487b0-b150-449c-92d6-3512477af5f8';
     var id_aspa2_bl ='cb4df039-b727-4764-96f2-f76df474b74a';
     var id_aspa2_br ='61ce2550-2af2-45e0-9767-6ad036298840';

     var body = 0;
     var ldoor = 0;
     var rdoor =0;
     var blade1 = 0;
     var blade1_bl = 0;
     var blade1_br = 0;
     var blade2= 0;

     var isConfiguration = false;

     var isbody =false;
     var isblade1 = false;
     var isblade2 = false;
 
 //Flow  control of configurator windows
 document.getElementById("bttn-go-Config").addEventListener('click', function(){
     SetVisibilityAnotations("none");
     isConfiguration = true;
 });
 document.getElementById("bttn-start").addEventListener('click', function(){
     SetVisibilityAnotations("none");
     isConfiguration = true;

 });
 document.getElementById("bttn-start-1").addEventListener('click', function(){
     SetVisibilityAnotations("none");
     isConfiguration = true;

 });
 document.getElementById("bttn-go-Welcome").addEventListener('click', function(){
     isConfiguration = false;

 });
 document.getElementById("bttn-go-Comparison").addEventListener('click', function(){
     isConfiguration = false;

 });
 

 function SetVisibilityAnotations(visualization){

     document.getElementById('txt-label-title').style.display = visualization;
     document.getElementById('txt-label').style.display = visualization;
     document.getElementById("config-set-labels-1").style.display = visualization;
 }
 function SetTextAnotation(title, text){
     document.getElementById('txt-label-title').innerHTML = title;
     document.getElementById('txt-label').innerHTML = text;
 }
 var clickedEntity = 0;;

 var lastEntity;
 //  get entities from click


 document.getElementById("display-canvas").addEventListener('click', function(){
    onClick(document.getElementById("display-canvas").onclick);
 });
 export async function onClick(event){
     screenTarget = await SDK3DVerse.engineAPI.castScreenSpaceRay(event.clientX, event.clientY);

     if(!screenTarget.pickedPosition) return;
     
     clickedEntity = screenTarget.entity;
                     
  
     if(isConfiguration){

          // mostrar una anotacion si se clickea una entidad especifica 
          if(clickedEntity.getEUID() ==  id_r_door_paint || clickedEntity.getEUID() == id_r_door_paint || clickedEntity.getEUID() == id_hull){
             if(!isbody){
                 UnselectBlade1();
                 UnselectBlade2();
                 SelectHull();
                 isbody = true;
                 isblade1 = false;
                 isblade2 = false;

             }
             else {
                 UnselectHull();
                 isbody = false;
             }
         }  

         if(clickedEntity.getEUID() ==  id_aspa1_bl || clickedEntity.getEUID() == id_aspa1_br || clickedEntity.getEUID() == id_aspa1_fl || clickedEntity.getEUID() == id_aspa1_fl){
             if(!isblade1){
                 UnselectHull();
                 UnselectBlade2();
                 SelectBlade1();
                 
                 isblade1 = true;
                 isblade2 = false;

                 isbody = false;
             }
             else {
                 UnselectBlade1();
                 isblade1 = false;
             }
         }  

         if(clickedEntity.getEUID() ==  id_aspa2_bl || clickedEntity.getEUID() == id_aspa2_br || clickedEntity.getEUID() == id_aspa2_fl || clickedEntity.getEUID() == id_aspa2_fl){
             if(!isblade2){
                 UnselectHull();
                 UnselectBlade1();
                 SelectBlade2();
                 
                 isblade2 = true;
                 isblade1 = false;
                 isbody = false;
             }
             else {
                 UnselectBlade2();
                 isblade2 = false;
             }
         }  
         
     }
     
        
     
 }

 async function SelectHull(){
     //Show Annotation
     SetVisibilityAnotations("flex");
     SetTextAnotation('X7926R : HULL', 'The hull of the drone X7926R is a combination of kevlar and carbon fiber, making it one of the lightest yet most resistant materials of our time. This combination of materials ensures fuel efficiency while securing the safety of the passengers at all times.');

     var temphull = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_body);
     body = temphull[0];

     body.select();
     console.log('select');
 }

 async function UnselectHull(){
     SetVisibilityAnotations("none");

     var temphull = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_body);
     body = temphull[0];

     body.unselect();

     console.log('unselect');

 } 
 
 async function SelectBlade1(){
     //Show Annotation
     SetVisibilityAnotations("flex");
     SetTextAnotation('SK1028 : PROPELLERS', 'The Propeller Model SK1028 offers the drone faster and more agile mobility thanks to its 7-part blades. The angles of the 7-blade design creates a unique athletic style, paying homage to the faster speed of the model.');
 

     var tempblade1 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_blade1);
     blade1 = tempblade1[0];
   

     blade1.select();
     console.log('select blade 1');
 }

 async function UnselectBlade1(){
     SetVisibilityAnotations("none");

     var tempblade1 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_blade1);
     blade1 = tempblade1[0];

     blade1.unselect();

     console.log('unselect blade 1');
 } 
 async function SelectBlade2(){
     //Show Annotation
     SetVisibilityAnotations("flex");
     SetTextAnotation('SQ302 : PROPELLERS', 'The Propeller Model SQ302 has a light design, giving the drone an elegant look. Additionally the 3-part propellers are silent, improving  passenger comfort and overall user experience.');

     

     var tempblade2 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_blade1);
     blade2 = tempblade2[0];
   

     blade2.select();
     console.log('select blade 2');
 }

 async function UnselectBlade2(){
     SetVisibilityAnotations("none");

     var tempblade2 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_blade1);
     blade2 = tempblade2[0];

     blade2.unselect();

     console.log('unselect blade 1');
 } 

 


//// END INTERACTION SHOW ANOTATIONS WHE SELECT HULL OR BLADES //////
 