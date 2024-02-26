// Removes console
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use std::env;
use tauri::AppHandle;


#[tauri::command]
async fn get_filename(app: AppHandle) -> Result<String, String> {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        return Err("Usage: mdview <FilePath.md>".to_string());
    }
    Ok(args[1].clone())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_filename])
        .run(tauri::generate_context!())
        .expect("Error while running tauri application... Who knows why");
}
