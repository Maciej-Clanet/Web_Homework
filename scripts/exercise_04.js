let url = "https://raw.githubusercontent.com/Maciej-Clanet/Debugging-Tasks/refs/heads/main/Endpoints/todobasic";
let tasks = document.getElementById("tasks");
fetch(url)
    .then((response) => {

        if (!response.ok) {
            throw new Error("response went wrong")
        }

        return response.json()
    })
    .then((data) => {
        for (let task of data) {
            tasks.innerHTML += `
                <label class="task "  >
                    <input type="checkbox">
                    <span class="task-title">${task}</span>
                </label>
            `
        }
    })
    .catch(e => {
        alert(e)
    }) 