#!/bin/bash

# Function to convert a string to kebab-case
function to_kebab_case() {
  echo "$1" | sed -r 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Function to rename files and directories
function rename_item() {
  local old_name=$1
  local new_name=$2

  if [ "$old_name" != "$new_name" ]; then
    git mv "$old_name" tmp
    git mv tmp "$new_name"
    echo "Renamed $old_name to $new_name"
  fi
}

# Recursively rename files and directories
function rename_recursive() {
  local current_dir=$1

  # Rename files and directories in the current directory
  for item in "$current_dir"/*; do
    local item_name=$(basename "$item")
    local new_name=$(to_kebab_case "$item_name")
    rename_item "$item" "$current_dir/$new_name"
    
    # Recursive call for directories
    if [ -d "$current_dir/$new_name" ]; then
      rename_recursive "$current_dir/$new_name"
    fi
  done
}

# Run the script in the current directory
rename_recursive "."
