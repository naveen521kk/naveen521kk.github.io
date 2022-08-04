---
slug: "/manim/manim-configuration-for-vscode/"
title: "Configuring Visual Studio Code for using with Manim"
date: 2022-03-18T10:55:01+05:30
updated_date: 2022-08-04T00:55:01+05:30
draft: false
description: "The article explains how to install Manim (the community edition) and configuring with Visual Studio Code."
image: "/assets/manim-vscode/banner.png"
---

## Installing Manim

Follow the instruction in the [Installation Page](https://docs.manim.community/en/stable/installation.html#installing-manim-locally) on the official documentation. After installing Manim get back here for configuring the virtual environment. In my case, I use Windows; I used chocolatey to install Manim (`choco install manimce`). 

### Configuring the Virtual Environment

1. Open a Terminal (say `cmd` on Windows) on the project directory. The project directory can be anywhere including a folder on your desktop. For me it's `C:\dev\manim-project`. I opened a PowerShell window by doing <kbd>Shift</kbd>+<kbd>Right Click</kbd> and then clicked on `Open PowerShell window here`. (On windows 11 you would need to click `Show more options`)

   ![powershell screen C:\dev\manim-project](/assets/manim-vscode/powershell_start_screen.png)

2. Create a new virtual environment
   ```shell
   python -m venv .venv
   ```

3. Activate the Virtual Environment. 

   1. On Windows: `.venv\Scripts\activate` (should work on cmd, also)
   2. On macOS/Linux/WSL: `source .venv/bin/activate` (this will include Git Bash users on Windows also).
   ![powershell screen create venv](/assets/manim-vscode/powershell_install_and_activate_venv.png)

4. Install Manim using **pip**:

   ```shell
   python -m pip install manim
   ```

   ![powershell pip install manim](/assets/manim-vscode/powershell_pip_install_manim_op.png)

If you followed the steps correctly you should see the version of manim when running `manim --version` in that terminal. Just don't close the terminal yet, that will be used in the next steps.

### Initializing a Manim project
To initialize a manim project run:
```shell
manim init project <project-name>
```

where `<project-name>` should be replaced by the directory where you need to create a project (introduced in manim `v0.16.0`). 
Manim asks for some questions and creates the project accordingly with configuration files.

![powershell manim init](/assets/manim-vscode/powershell_manim_init.png)

This should create 2 files `main.py` and `manim.cfg` inside the `<project-name>` folder.

![file explorer manim init output](/assets/manim-vscode/file_explorer_manim_init_op.png)

`manim.cfg` contains the configuration files necessary for Manim. They can be overridden by command line flags. [See the documentation for a tutorial on using them](https://docs.manim.community/en/stable/tutorials/configuration.html).

You would need to `cd` into `<project-name>` directory before continuing next steps.

```shell
cd <project-name>
```



## Configuring Visual Studio Code

1. Open VSCode. Typing `code .` in the same terminal should do the trick.

2. Click "Yes" in the dialog box. (This is needed so that other extensions work correctly)
    ![code manim workspace confirmation](/assets/manim-vscode/code_confirmation.png)
    
3. [Install the following extensions.](https://code.visualstudio.com/docs/editor/extension-marketplace)
    - [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
    - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
    - [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) (optional, for using manim on Jupyter)
    - [Jupyter Keymap](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap) (optional, ignore if you like visual studio's keymaps)
    - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) (optional, if you don't want a color picker for colors)
    - [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets) (optional, if you don't want all brackets to be of same color)
    - [Manim Sideview](https://marketplace.visualstudio.com/items?itemName=Rickaym.manim-sideview) (optional, if you don't want live preview of code video you generate)
    
4. Select the Python interpreter by clicking <kbd>F1</kbd> and searching for `Python: Select Interpreter`. Select the virtual environment previously created.
    ![vscode select python interpreter manim](/assets/manim-vscode/code_choose_python.png)
    
5. If everything is configured correctly pressing <kbd>Ctrl</kbd> + <kbd>Click</kbd> should get to the corresponding definition of that class. Also, there would no yellow swiggly lines.
    ![vscode manim show definition hover](/assets/manim-vscode/vscode_manim_defn.png)

6. If you want to use Jupyter for working with Manim, then open the same terminal and run 
    ```shell
    python -m pip install manim[jupyterlab]
    ```
7. You can open a terminal in VSCode <kbd>Ctrl</kbd> + <kbd>`</kbd> and run manim commands there.




Hope this helps you in configuring Visual Studio Code to work with Manim. If you have an error, or found something to difficult to understand, jump over to `#manim-installation-help` on [Manim's Discord server](https://manim.community/discord).
