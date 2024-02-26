const { invoke } = window.__TAURI__.tauri;
const { readTextFile } = window.__TAURI__.fs;


let filePath;

async function set_filename() {
  filePath = await invoke("get_filename");
}

async function get_file_contents(path) {
  return await readTextFile(filePath);
}

async function display_file() {
  await set_filename();
  let contents = await get_file_contents(filePath);
  let html = marked.parse(contents);
  let contentElement = document.getElementById("markdown-div");
  contentElement.innerHTML = DOMPurify.sanitize(html);

}

window.addEventListener("DOMContentLoaded", () => {
  (async () => {
    await display_file();
  })();
})