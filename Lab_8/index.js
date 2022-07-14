const answer = ["1 people per 6 sheep", "switzerland"];

const ans_btn = document.querySelectorAll('.btn-ch');

let btn_disable = (array, index) => {
    array.forEach(elem => {
        if (elem != elem[index]){
            elem.disabled = true;
        }
    });
}

function answer_input_animation(input, elem, msj, btn, color_border, background) {
    input.style.borderBlockColor = color_border;
    input.style.background = background;
    input.disabled = true;
    btn.disabled = true;
    elem.innerHTML = msj;
}

function answer_multi_choice_animation(array, index, elem, msj, color) {
    array[index].style.backgroundColor = color;
    elem.innerHTML = msj;
    btn_disable(array, index)
} 

//Question Part 1
for (let i = 0; i < ans_btn.length; i++){
    const p = document.getElementById('ans-1');
    ans_btn[i].addEventListener('click', function() {
        if(ans_btn[i].innerHTML == answer[0])
        {
            answer_multi_choice_animation(ans_btn, i, p, "Correct!!", "green");
                      
        }
        else {
            answer_multi_choice_animation(ans_btn, i, p, "Incorrect!", "red");
        }
    });
}

//Question Part 2
const answer_input = document.getElementById('answer-input');
const answer_button = document.getElementById('answer-btn');

answer_button.addEventListener('click', () => {
    const p = document.getElementById('ans-2');
    if(answer_input.value.toLowerCase() == answer[1])
    {
        answer_input_animation(answer_input, p, "Correct!!", answer_button, "green", "#7EFED1");
    }
    else
    {
        answer_input_animation(answer_input, p, "Incorrect!", answer_button, "red", "#FFCDCD");
    }
});

//Reset
document.getElementById('reset-btn').addEventListener('click', () => {
    document.location.reload(true);
});















