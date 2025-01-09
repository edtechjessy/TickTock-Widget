# Tick-Tock Widget  
1. [How to Change the Time Zones](#customizing-the-times)
2. [How to Change the Title](#customizing-the-title)
3. [How to Create an AI Image](#customizing-the-image)
4. [How to Upload the AI Image and Update Your Code](#how-to-upload-your-image-and-update-your-code)
5. [How to Make it into a Dynamic Wallper on Desktop](#turn-it-into-your-desktop-background)
## Project Explanation  
I’m working on a minimalist desktop live wallpaper 🖥️ to display two clocks:  

1. **CT Time 🕰️** (Central Time) – for the schools I work with online 🏫  
2. **São Paulo Time ⏰** (SP Time) – for where I currently live 🌎  

I wanted a quick visual reference for these two time zones when I open my laptop 💻. It’s designed to be simple, beige, and include a cute cat 🐱 to make it more fun and personal! This personalized project will help me keep track of my teaching schedule and the time in my current location—*all with a visual glance when I open my laptop.*  


![Final Result](https://github.com/user-attachments/assets/700b7829-8240-41e9-9424-43ccac304e0e)  

---

## Customizing the Times  
### **Step 1: Clone the GitHub Repository**  

1. **Find the Correct Time Zone Name**  
   - Look up the correct IANA time zone string (e.g., `America/Sao_Paulo` for São Paulo or `Asia/Tokyo` for Tokyo).  
   - Use this [IANA Time Zone Lookup Tool](https://www.addevent.com/c/documentation/tools/time-zone-lookup).  

2. **Update Your Code**  
   - Replace the existing time zone string in the code with the one for your desired region.  

![Screenshot_Example](https://github.com/user-attachments/assets/c1042aa0-ee53-4ff9-a901-b0493f4c706d)  

---

## Customizing the Title  
### **Step 1: Edit the Cloned Repository**  

1. **Open `index.html`**  
   - Locate the title of the webpage, typically represented by an `<h1>` tag.  

2. **Update the Title**  
   - Replace the existing title with your custom one and save the file.  

![Change the Title](https://github.com/user-attachments/assets/2262f84d-d7df-44d9-9532-febcc6450796)  

---

## Customizing the Image  
### How I Created an Image with Canva AI  

1. **Access Canva's AI Image Generator**  
   - Use Canva's AI tool: [https://www.canva.com/ai-image-generator/](https://www.canva.com/ai-image-generator/).  

![Free Generator](https://github.com/user-attachments/assets/35f42906-2ada-4bc6-bd5e-0334caf7f08b) 

3. **Choose Your Wording**  
   Start by thinking about the text prompt that describes the image you want. Be specific about the theme, mood, or key elements you want in the design. For example, you can describe the style, objects, and color palette.

   
 ![pick your words](https://github.com/user-attachments/assets/a828eaa5-848b-483f-95a8-cc8caac54030)


5. **Pick the Style**  
   Canva AI allows you to select from various styles like realistic, cartoonish, abstract, or even specific art movements. Choose a style that fits your vision for the image.

 
 ![style](https://github.com/user-attachments/assets/b8717481-c7e9-4af8-85a8-129306e3f48f)

7. **Run the Generator**  
   Enter your text prompt and let the AI create an image for you. If the first result doesn’t match what you’re envisioning, tweak the wording or refine your style preferences and run it again.
   
![generate media](https://github.com/user-attachments/assets/823f7db7-cf8f-4a51-9bcb-0a6dda8dee5a)


9. **Refine Your Results**  
   Don’t hesitate to do multiple reruns until the AI generates an image you’re happy with. Experimentation is key to achieving the desired result.

 ![in anime style](https://github.com/user-attachments/assets/7ffd32dd-b7fb-473d-a7dc-77e4ea977de0) ![playful](https://github.com/user-attachments/assets/af09af68-b357-41ad-9479-0ae38d731f0f)

11. **Save** 
   Once you've created an image you love, save it to your device.

and upload it to your github repository. Name your image:
insertname.jpg 

By following this process, I was able to create an image I liked by carefully choosing my words, picking a style, and rerunning the generator until it felt just right. Have fun experimenting with Canva's AI to bring your ideas to life!

 ## How to Upload Your Image and Update Your Code  

Follow these steps to upload your image and ensure it displays correctly in your project:  

### Step 1: Upload Your Image  
- Go to your GitHub repository and upload the image file.  
- Use the **"Upload files"** option in the repository interface.  

![Upload](https://github.com/user-attachments/assets/6f38aba7-e7d3-4cc5-9497-1bf4be70a335)  

---

### Step 2: Choose Your File  
- After clciking upload file, click "choose file", select your image and click "open"

![Files](https://github.com/user-attachments/assets/edc49739-e764-4373-9815-cf393dd4c982)  

---

### Step 3: Commit Your Changes  
- Add a commit message (e.g., "Uploaded new background image") and click **"Commit changes"** to save your updates.  

![Commit Changes](https://github.com/user-attachments/assets/72cff64c-3bcd-4ec9-b422-932ef6f3c3fb)  

---

### Step 4: Copy the File Path  
- Locate your uploaded image in the repository, right-click on it, and select **"Copy file path."**  

![Copy Path](https://github.com/user-attachments/assets/f244b889-79b6-4273-9222-88d5cb8c550e)  

---

### Step 5: Update the Image Path in Your Code  
- Replace the placeholder image path in your code with the correct file path from Step 4. Ensure the file path is accurate to display the desired image.  

![Ensure Correct Path](https://github.com/user-attachments/assets/b37cf557-1f93-45f0-a42d-168fa80b7cc2)  

---

By following these steps, your custom image should now display correctly in your project. Let me know if you encounter any issues!  
   






 
## Turn It into Your Desktop Background
1. For MAC
2. For Windowns

### Overview 🌟
This project takes a simple clock widget created in HTML and turns it into a desktop application using **Electron**! Electron allows you to create cross-platform desktop apps with web technologies (HTML, CSS, JavaScript). This guide will show you how to use **Electron** to package your HTML clock into a desktop app that can be run on Windows, macOS, and Linux.

