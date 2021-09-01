function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1LTF_-r8V/model.json',modelLoaded);
//ml5.imageClassifier is used to load the model
}

function modelLoaded()
{
    console.log('Model has Loaded!');
}

function draw()
{
image(video, 0, 0,300, 300);
classifier.classify(video, gotResult);
//Classifier.classify will do the comparision of live webcam view with the teachable machine model
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}
