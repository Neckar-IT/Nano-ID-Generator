# About
<p align="center">
  <a href="https://github.com/ai/nanoid">
    <img src="https://github.com/Neckar-IT/Nano-ID-Generator/raw/main/assets/icon.png">
  </a>
</p>

This is a vscode extension to easily insert a [nano id](https://github.com/ai/nanoid) at the current point of focus. It provides 3 commands + shortcuts for different sizes.\
Default sizes:

- large: 36,
- medium: 21,
- small: 10.

The Default seed only includes numbers as well as lowercase and uppercase letters.\
The first character will always be a letter.\
This is to make it easier to use the ids as object properties, since strings with hyphens and strings with a starting number will require special attention.

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)


# Use this extension
## In Editor
- place your focus where you want to insert a nano id in your editor
  - use command palette
    - press `ctrl+shift+p` or `f1` to open command palette
    - run either command
      - `gen.nano.id.sm` for small nano id
      - `gen.nano.id.md` for large nano id
      - `gen.nano.id.lg` for medium nano id
  - shortcuts
    - `shift+alt+u 1` for small nano id
    - `shift+alt+u 2` for medium nano id
    - `shift+alt+u 3` for large nano id

  - mac shortcuts
    - `shift+option+u 1` for small nano id
    - `shift+option+u 2` for medium nano id
    - `shift+option+u 3` for large nano id

NOTE: `shift+alt+u 1` doesn't mean pressing all 4 keys together, but rather pressing `shift+alt+u` together, letting go and then pressing `1`
## In terminal
- place your focus where you want to insert a nano id in your terminal
  - use command palette
    - press `ctrl+shift+p` or `f1` to open command palette
    - run either command
      - `gen.nano.id.sm.term` for small nano id
      - `gen.nano.id.md.term` for large nano id
      - `gen.nano.id.lg.term` for medium nano id
  - use shortcuts
    - same as in editor

# Customize

Size and seed can be customized for each command/shortcut via extension Settings
- `ctrl+shift+p` or `f1` to open command palette
- `Settings`
- search for `nano-id-gen`
- edit
- reload vscode! (`ctrl+shift+p` or `f1` and then enter `reload`)