status="";
video="";
object=[];

function preload() {

}
function setup() {
    canvas=createCanvas(450,300);
video=createCapture(VIDEO);
video.size(450,300);
video.hide();
    canvas.center();
}
function draw() {
    image(video,0,0,450,300);

    
    
        if (status!="") {
       objectdetector.detect(video,output);     
          
           
        for(i=0; i<object.length; i++){
            document.getElementById("objectno").innerHTML="no of objects="+object.length;
            fill("#fa050d") ;
            percent=object[i].confidence*100;
            round1=floor(percent);
        text(object[i].label+" "+round1+"%",object[i].x,object[i].y);
    noFill();
    stroke("red");
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
    
    }
    
        }
    } 
    function output(error,results) {
        if (error) {
        console.log(error) ;   
        } else {
         console.log(results) ;
           object=results;
        }
    }


function start() {
    
 objectdetector=ml5.objectDetector('cocossd',modelloaded); 
document.getElementById("statuschange").innerHTML="status:Detecting objects";
document.getElementById(question).value;

}
function modelloaded() {
    status=true;
    console.log("modelloaded");
    
}