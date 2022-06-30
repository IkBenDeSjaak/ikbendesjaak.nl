---
title: "How to find files with a long path length?"
date: "2022-06-28"
description: "When trying to change the default folder of my Documents folder to another drive I got an error that said the path length of some files where too long to be moved and the path length could have a maximum of 260 characters. Then raised the question how I could find the specific files that caused the error."
---

When trying to change the default folder of my `Documents` folder to another drive I got an error that said the path length of some files where too long to be moved and the path length could have a maximum of 260 characters. Then raised the question how I could find the specific files that caused the error.

Now you could say I could've just searched for the specific file by looking through some files, but `Documents` folder consisted of thousands of files and folders so checking this would have been a lot of work.

Fortunately I found a working solution! This solution lists all files with a path length greater than 260 characters in the terminal.

1. Open PowerShell
2. In the terminal navigate to the `Documents` folder.
3. Run the following command.

```sh
cmd /c dir /s /b |? {$_.length -gt 260}
```

### Other solutions

#### Option 1

Run `dir /s /b > paths.txt` in the directory in the terminal that you want to check. This command will create a text file called `paths` and will list all files in the directory you runned the command from.

#### Option 2

You can also download tools online that will scan you drive and that will show you path lengths of all files. I didn't choose this option, because I didn't want to install another program.

---

Source: [https://stackoverflow.com/a/12697503/14570064](https://stackoverflow.com/a/12697503/14570064)
