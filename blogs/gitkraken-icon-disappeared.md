---
title: "How to fix the GitKraken icon not showing?"
date: "2022-01-17"
description: "At some point the desktop icon of my GitKraken app disappeared. I could still run the app, but the icon was not showing. This made me wonder what happened and how I could get the icon back."
---

At some point the desktop icon of my GitKraken app disappeared. I could still run the app, but the icon was not showing. This made me wonder what happened and how I could get the icon back.

I found that the cause of the error was that the icon was moved from `C:\Users\koksj\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Axosoft, LLC` to `C:\Users\koksj\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\GitKraken`

My guess is that this happened during an update of the app.

To fix this error first close the GitKraken app. Then you have to delete the old `C:\Users\koksj\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Axosoft, LLC` folder. After deleting this folder you have to run the GitKraken app. Now the icon will automatically appear again.

---

Source: [https://help.gitkraken.com/gitkraken-client/common-issues/#windows-taskbar-icon-is-not-showing-the-gitkraken-logo](https://help.gitkraken.com/gitkraken-client/common-issues/#windows-taskbar-icon-is-not-showing-the-gitkraken-logo)
