const { invoke } = window.__TAURI__.tauri;
const { readTextFile } = window.__TAURI__.fs;
const { open } = window.__TAURI__.dialog;


let filePath;
let fileExists;


async function set_filename() {
  filePath = await invoke("get_filename");
}

async function check_file_exists() {
  fileExists = await invoke("file_exists", { path: filePath });
}

async function get_file_contents(path) {
  return await readTextFile(filePath);
}

async function show_default_file() {
  const defaultHTML = `
  <div class="centered">
      <p>Welcome to MDView! Press the button below to open a file</p>
      <button id="choose-file-button">Choose File</button>
      <p>Source on <a href="https://github.com/itzilly/mdview">Github</a>  |🖇|  Created by <a href="www.itzilly.com">itzilly</a>  |🖇|  © 2024 illyum</p>
  </div>
`;
  document.getElementById("markdown-div").innerHTML = defaultHTML;

  document.getElementById("choose-file-button").addEventListener("click", async () => {
    const result = await open({
        multiple: false,
        directory: false,
        filter: 'All Files',
    });

    // Check if a file was selected
    if (!result.cancelled) {
      filePath = result;
      await check_file_exists();
      await display_file();
    }
});
}

async function display_file() {
  if (filePath !== undefined) {
    await check_file_exists()
    if (fileExists) {
      let contents = await get_file_contents(filePath);
      let html = marked.parse(contents);
      let contentElement = document.getElementById("markdown-div");
      contentElement.innerHTML = DOMPurify.sanitize(html);
      contentElement.querySelector('.centered').classList.remove('centered')
    } else {
      console.log("Showing default file - failed exists check")
      await show_default_file();
    }
  } else {
    console.log("Showing default file - fauled undefined check")
    await show_default_file();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  (async () => {
    await set_filename();
    await display_file();
  })();
})