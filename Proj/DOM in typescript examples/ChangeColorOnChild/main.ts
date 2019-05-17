(function () {
    //var input = document.getElementById("my-input") as HTMLInputElement;
    var input =<HTMLInputElement> document.getElementById("my-input");
    input.onchange = () => {
        alert(input.value);
    }
})