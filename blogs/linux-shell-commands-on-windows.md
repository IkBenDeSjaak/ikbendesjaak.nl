---
title: "How to run Linux shell commands on Windows?"
date: "2022-12-23"
category: "Tech"
description: "In some cases it can be useful to run Linux commands. But what can you do when your machine is running Windows instead of Linux? In this tutorial we will find out how to run Linux shell commands while running Windows on your machine."
---

In some cases it can be useful to run Linux commands. But what can you do when your machine is running Windows instead of Linux? In this tutorial we will find out how to run Linux shell commands while running Windows on your machine.

Microsoft introduced something called WSL (Windows Subsystem for Linux) that makes it possible to install a Linux distribution on your Windows machine and use Linux tools like Bash. This will all work without having to run a virtual machine.

1. Open a terminal.
2. Run the following command to install WSL. You can also install WSL from the Microsoft Store.

    ```bash
    wsl --install
    ```

3. In the Microsoft Store download a Ubuntu version and complete the installation of this Ubuntu version.
4. Run the following command in bash to update all packages in Ubuntu.

    ```bash
    sudo apt update
    sudo apt upgrade
    ```

You are now set to run Linux bash commands on Windows by using WSL and Ubuntu.

### Useful commands

#### See list of distributions that can be installed from command line

`wsl --list --online`

#### Check your installed Linux distributions and the WSL version

`wsl -l -v`

#### Change the current Linux distro

`wsl --set-version <DISTRO-NAME> 2`
