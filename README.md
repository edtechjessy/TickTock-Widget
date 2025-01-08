# Tick-Tock Widget
## Project Explanation
I’m working on a minimalist desktop widget 🖥️ to display two clocks:

1. CT Time 🕰️ (Central Time) – for the schools I work with online 🏫


2. São Paulo Time ⏰ (SP Time) – for where I currently live 🌎



I wanted a quick visual reference for these two time zones when I open my laptop 💻. It’s designed to be simple, beige, and include some cute cats 🐱 to make it more fun and personal!
![chrome_screenshot_Jan 7, 2025 10_44_35 PM GMT-03_00](https://github.com/user-attachments/assets/bf050bc9-9d28-4dc8-b315-035a42b8eb87)


This widget will help me keep track of my teaching schedule and the time in my current location, all with a visual glance when I open my laptop.

---
## Customizing Times
#### **_First Clone the Github Repository_**

1. **Identify the correct time zone name**  
   Look up the correct IANA time zone string (like `America/Sao_Paulo` for São Paulo or `Asia/Tokyo` for Tokyo).
  [Click here to find your IANA Time Zones of Interest](https://www.addevent.com/c/documentation/tools/time-zone-lookup)

3. **Update your code**  
   Replace the existing time zone string in the code with the new one, depending on which region you want the time to display.
![Screenshot_20250107_191104_Chrome](https://github.com/user-attachments/assets/c1042aa0-ee53-4ff9-a901-b0493f4c706d)

   
## Turn It into a Desktop Widget Using Electron

### Overview 🌟
This project takes a simple clock widget created in HTML and turns it into a desktop application using **Electron**! Electron allows you to create cross-platform desktop apps with web technologies (HTML, CSS, JavaScript). This guide will show you how to use **Electron** to package your HTML clock into a desktop app that can be run on Windows, macOS, and Linux.

