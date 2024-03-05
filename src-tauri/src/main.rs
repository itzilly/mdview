// Removes console
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::env;
use std::process;
use tauri::AppHandle;


#[tauri::command]
async fn get_filename(app: AppHandle) -> Result<String, String> {
    let args: Vec<String> = env::args().collect();
        if args.len() < 2 {
        return Ok::<String, String>(String::new());
    }
    Ok(args[1].clone())
}

#[tauri::command]
async fn file_exists(path: &str) -> Result<bool, String> {
    let result = match std::fs::metadata(&path) {
        Ok(_) => {
            Ok(true)
        },
        Err(_) => {
            Ok(false)
        },
    };
    result
}

fn main() {
    launch_app();
}

fn launch_app() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_filename, file_exists])
    .run(tauri::generate_context!())
    .expect("Error while running tauri application... Who knows why");
}
