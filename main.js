function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zQOZ7iOlM/.json',modelReady);
}

function modelReady(){
    classify(gotResults);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    } else{
        console.log(result);
        ramdom_number_r = Math.floor(Math.random() * 255) + 1;
        ramdom_number_g = Math.floor(Math.random() * 255) + 1;
        ramdom_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
        img=document.getElementById('alien1');
        img1=document.getElementById('alien2');
        img2=document.getElementById('alien3');
        img3=document.getElementById('alien4');

        if (result[0].label == "Meow")  {
          img.src = 'cat.jpg';
        } else if (results[0].label == "Bark") {
            img.src = 'dog.jpg';
            
        }else{
            
        }

        
    }
}