currentRotation = 0;
aui = document.getElementById("MyAudio")
quick_data_draw_set = [];
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = quick_data_draw_set[Math.random()];
function preload(){
    classifier = ml5.imageClassifier("DoodleNet", modelLoaded);
}

function modelLoaded(){
    console.log("Model loaded.");
}

function setup(){
    canvas = createCanvas(250,150)
    canvas.center();
    background("white");
    document.getElementById("tbd").innerHTML="Sketch To be drawn:"+sketch;
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
        strokeWeight(7);
        stroke(0);
    

        if (mouseIsPressed) {
          line(pmouseX, pmouseY, mouseX, mouseY);
        }


    if (drawn_sketch === sketch) {
      answer_holder = "set";
      score++;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
  };

  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
    document.getElementById("tbd").innerHTML="So....... I have a doubt in what to put in quick_draw_data_set"

  }

function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    else{
        console.log(results);

        drawn_sketch = results[0].label;
        document.getElementById("label").innerHTML = "Your Sketch: " + drawn_sketch;
    

         confidenceValue = Math.floor(results[0].confidence * 100);
         console.log(confidenceValue)
         document.getElementById("confidence").innerHTML = "Confidence: " + confidenceValue.toFixed(2) + "%";
    }
}
function  check_sketch() {
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
    console.log(timer_counter);

    if (timer_counter > 400) {
      timer_counter = 0;
      timer_check = "completed";
    }

    if (timer_check === "completed" || drawn_sketch === 0) {
      timer_check = "";
      answer_holder = "";
      updateCanvas();
    }
  };

function updateCanvas(){
 background('white');
 random_number = Math.floor(Math.random()*quick_data_draw_set.length);
 console.log("Random Sketch Name:", quick_draw_data_set[Math.random()]);
}

function Balllin(){
    var bodyElement = document.body;
    currentRotation += 15;
    bodyElement.style.transform = 'rotate(' + currentRotation + 'deg)';
}    

function fort(){
    aui.play();
    setInterval(Balllin, 400);
}

function clearCanvas(){
    background("white");
}