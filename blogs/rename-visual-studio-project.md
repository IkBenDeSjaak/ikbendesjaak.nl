---
title: "How to rename projects in Visual Studio?"
date: "2022-03-02"
category: "Tech"
description: "When trying to change the name of a project in Visual Studio I noticed it wasn't as straightforward as I expected it to be. There were several problems when reloading the project and I had to change a lot more files than what I was used to. In order to not have to go through the same hell over and over again I decided to create a little tutorial for this."
---

When trying to change the name of a project in Visual Studio I noticed it wasn't as straightforward as I expected it to be. There were several problems when reloading the project and I had to change a lot more files than what I was used to. In order to not have to go through the same hell over and over again I decided to create a little tutorial for this.

Supposedly you have a solution structure as follows as opened in Visual Studio:

```txt
--- Solution 'Solution1'
------- ProjectABC
------- Project123
```

1. In Solution Explorer: right click on _`Solution 'Solution1'` → `Rename`_.
2. In Solution Explorer: right click on _`ProjectABC` → `Rename`_ and do the same for `Project123`.
3. In Solution Explorer: right click on _`ProjectABC` → `Sync Namespaces`_ and do the same for `Project123` to update the namespaces in your project.
4. Close the solution in _`File` → `Close Solution`_.
5. In file explorer edit the folder names of the projects.
6. Open the `.sln` file in a text editor like Notepad and edit the path to the `.csproj` file. For example, change `"ProjectABC\ProjectABCD.csproj"` to `"ProjectABCD\ProjectABCD.csproj"`.

### Possible errors

#### Solution cannot be renamed because solution files with the specified name already exist**

If you get this error in file explorer navigate to the root of your project and find the `.vs` folder. Open this folder and delete the folder with the same name as you want to rename your solution to.

---

Sources:

- [https://stackoverflow.com/questions/211241/how-can-i-rename-a-project-folder-from-within-visual-studio](https://stackoverflow.com/questions/211241/how-can-i-rename-a-project-folder-from-within-visual-studio)
