![distrocards-logo](assets/distrocards.png)
**A simple JS card game about GNU/Linux distros. Licensed with GPLv3.**

![distrocards](screenshot2.png)

## Installation
---

### Method 1- Open with browser
Open the index.html file in your browser. A browser that supports webkit2 such as Chrome, Opera and Vivaldi is recommended but Firefox, Beaker browser and Brave work fine as well.


### Method 2- Use Webkit2 Launcher (NixOS Only)

Add MerOS channels and update.
```
echo "https://nix.mercode.org/dev/meros meros" >> $HOME/.nix-channels
nix-channel --update -vv
```

Install [webkit2-installer](https://github.com/mercode-org/webkit2-launcher).
```
nix-env -iA meros.webkit2-launcher
```

Start the app. 
```
webkit2-launcher distrocards
```


### Method 3- Use Electron

Install dependencies.
```
npm install
```

Start the app.
![distrocards](screenshot1.png)

```
npm start
```

for NixOS/MerOS:
```
npm run nixstart
```



