# 📱 Mobile Development Environment Setup

## 🏁 Objective

Mobile development requires higher computational resources than typical web development.  
To simplify setup and ensure consistent testing across devices, this project uses the **Expo Framework** for **React Native**.  

Expo allows developers to build, test, and deploy mobile apps for both **Android** and **iOS** using a single JavaScript codebase — all without complex native configurations.  

This setup ensures a seamless development experience, whether you’re using a **physical mobile device** or an **Android emulator** on your laptop.

---

## ✅ Prerequisites

Before proceeding, ensure the following tools are installed:

| Tool | Purpose | Status |
|------|----------|--------|
| **Node.js LTS** | Required for running Expo CLI | ✅ |
| **VS Code** | Recommended IDE for React Native | ✅ |
| **Operating System** | Windows, macOS, or Linux | ✅ |
| **Expo Go** | To preview apps on your phone or emulator | 🔲 To be installed |

---

## 🧠 Why Expo Go?

In traditional mobile development, you need **device emulators** or **physical phones** to test apps.  
However, managing different device versions (e.g., Android 13 vs. 15, iPhone 8 vs. 16 Pro Max) can be demanding and expensive.

**Expo Go** solves this by:
- Letting you preview and test React Native apps **instantly** on real devices.  
- Eliminating the need to build native binaries during development.  
- Supporting both **Android** and **iOS** from a single environment.  
- Offering **Hot Reloading** for instant code feedback.

---

## 🪜 Steps to Install Expo Go on a Physical Device

### 1️⃣ Visit the Official Expo Go Page  
👉 [https://expo.dev/go](https://expo.dev/go)

### 2️⃣ Choose Your Device Platform  
- **Android:** Tap “Install from Google Play Store.”  
- **iOS:** Tap “Install from Apple App Store.”

### 3️⃣ Open Expo Go  
After installation, open the app on your device.

### 4️⃣ Sign In or Create an Account  
Login using your Expo credentials, or create a free account.

### 5️⃣ Connect Device to Your Development Environment  
Make sure your **laptop and phone are on the same Wi-Fi network**.  
This allows Expo to serve your app over the local development server.

### 6️⃣ Start the Expo Development Server  
In your terminal, navigate to your project folder and run:
```bash
npx expo start
```
You’ll see a QR code in your terminal or browser (Expo Dev Tools).  
Scan this code with your device’s camera or via the Expo Go app.  
Your app will load automatically.

---

## 💻 Setting Up and Testing with Android Emulator (Optional on Windows)

If you don’t want to use a physical device, you can test your app using an **Android Emulator**.

### 🧩 Step 1: Install Android Studio
Download and install Android Studio from:  
👉 [https://developer.android.com/studio](https://developer.android.com/studio)

Ensure you include:
- Android Virtual Device (AVD)  
- Android SDK Platform Tools  
- Intel/AMD Emulator Accelerator (HAXM or Hyper-V)

---

### 🧩 Step 2: Create an Android Virtual Device (AVD)
1. Open **Android Studio → More Actions → Virtual Device Manager**
2. Click **Create Virtual Device**
3. Choose a phone type (e.g., Pixel 6)
4. Download a **System Image** (Android 13 or higher)
5. Finish setup and **launch** your virtual device

---

### 🧩 Step 3: Verify Emulator Connection
In your terminal, run:
```bash
adb devices
```

✅ Expected Output:
```
List of devices attached
emulator-5554   device
```

If the emulator is listed as `device`, it’s connected successfully.

---

### 🧩 Step 4: Install Expo Go on Emulator

**Option 1 – Using Play Store:**  
Open the **Play Store** in your emulator → Search **Expo Go** → Install.

**Option 2 – Manual APK Install:**  
If your emulator doesn’t have Play Store:
1. Download the Expo Go `.apk` from [https://expo.dev/go](https://expo.dev/go)
2. Drag and drop the file onto the emulator window — it installs automatically.

---

### 🧩 Step 5: Run Your Expo App on the Emulator
1. Start Expo:
   ```bash
   npx expo start
   ```
2. Press:
   ```
   a
   ```
   to open the Android emulator.
3. Expo Go will launch and load your project.

---

## ⚠️ Common Challenges & Fixes

### 🧱 1. Emulator Fails to Start or Freezes
**Cause:** Hardware acceleration (HAXM or Hyper-V) is disabled or conflicting.  
**Fix:**
- Enable virtualization in BIOS.  
- Disable **Hyper-V** if you’re using Intel HAXM.  
- Allocate more RAM (at least 2GB).

---

### 🧱 2. `adb` Command Not Recognized
**Cause:** Android SDK path not in environment variables.  
**Fix:**
Add this to your PATH:  
```
C:\Users\<YourUser>\AppData\Local\Android\Sdk\platform-tools
```

---

### 🧱 3. Expo App Won’t Connect to Metro Bundler
**Cause:** Emulator and PC are on different networks or ports blocked.  
**Fix:**
```bash
adb reverse tcp:8081 tcp:8081
```
Or use:
```bash
npx expo start --localhost
```

---

### 🧱 4. Slow Performance
**Cause:** Emulator consumes heavy CPU and RAM.  
**Fix:**
- Enable hardware acceleration (Intel VT-x or AMD-V).  
- Use x86_64 system images (faster than ARM).  
- Allocate 4GB+ RAM to emulator.

---

### 🧱 5. Expo Go Crashes or Displays Blank Screen
**Cause:** Emulator OS is outdated or corrupted cache.  
**Fix:**
- Update to Android 13+  
- Clear Expo cache:
  ```bash
  npx expo start -c
  ```
- Restart the emulator.

---

### 🧱 6. Emulator Has No Internet
**Fix:**
```bash
adb shell settings put global http_proxy :0
```

---

### 🧱 7. QR Code Doesn’t Scan on Physical Device
**Fix:**
- Ensure both laptop and phone are on the same Wi-Fi network.  
- If using mobile data tethering, try the **Tunnel** option in Expo Dev Tools.

---

### 🧱 8. Physical Device Disconnects Often
**Cause:** Network instability or Expo Go version mismatch.  
**Fix:**
- Update Expo Go to the latest version.  
- Re-run `npx expo start` and rescan QR code.

---

## 📲 Comparison: Physical Device vs Emulator

| Feature | Physical Device | Emulator |
|----------|----------------|-----------|
| **Setup Time** | Fast (install Expo Go only) | Medium (Android Studio + AVD setup) |
| **Performance** | Real-world and smooth | Slower, CPU-dependent |
| **Hardware Access** | Real sensors, camera, GPS | Simulated |
| **Battery Simulation** | Real battery usage | Virtual |
| **Network Testing** | Actual Wi-Fi/cellular | Emulated network |
| **Convenience** | Instant connection | Requires configuration |

✅ **Best Practice:**  
Use both — the **emulator** for UI debugging and **physical devices** for performance and feature testing.

---

## 🧰 Additional Tips for Smooth Development

- Start emulator **before** running `expo start` for instant detection.  
- Use `Ctrl + M` in emulator to open developer menu.  
- To reset Expo Go data: **Settings → Apps → Expo Go → Clear Storage**.  
- Enable **Hot Reloading** in Expo Go for instant updates.  
- Always document changes and fixes in your project’s README.

---

## 🧾 Example Log of My Setup Process

```markdown
### Setup Summary
- Installed Node.js LTS and VS Code on Windows 11.
- Installed Android Studio, configured AVD (Pixel 6, Android 14).
- Verified connection with `adb devices`.
- Installed Expo Go via Play Store in emulator.
- Installed Expo Go on physical Android device for testing.
- Started project with `npx expo start` and tested on both devices.
- Encountered connection issue, fixed using:
  ```bash
  adb reverse tcp:8081 tcp:8081
  ```

---

## 🧩 Repository Information

- **Repository:** `prodev-mobile-setup`  
- **Directory:** `mobile-development-setup`  
- **File:** `README.md`  
- **Framework:** Expo (React Native)  
- **Testing Platforms:** Android Emulator & Physical Device  

---

## ✅ Conclusion

You have successfully set up your **mobile development environment** for React Native using **Expo**.  
This environment allows you to:
- Build and test mobile apps across Android and iOS devices.  
- Use both **physical devices** and **virtual emulators** efficiently.  
- Document troubleshooting steps for smooth development in future projects.

> 💡 Remember: Always keep your Expo CLI, Node.js, and Expo Go app updated for the best compatibility and developer experience.
