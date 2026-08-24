# CrackIT Prep Hub

Design a modern, professional student placement preparation web application called “CrackIT”.

IMPORTANT:

Do NOT create a login or signup page. Login/signup is being developed separately.

Start directly with the Dashboard after the user has logged in.

This is a college project, but the interface should look like a real modern SaaS/EdTech product.

Do NOT include a separate Company Preparation module/page.

Company selection should only be used later inside the Resume Builder for resume customization.

Overall Design

Use a clean, modern, premium UI suitable for a student career/placement platform.

Style:

Modern SaaS / EdTech dashboard

Professional and minimal

Slightly futuristic AI feel

Rounded cards

Subtle shadows

Smooth hover effects

Clean spacing

Responsive design

Use Poppins or Inter font

Use a dark navy background with purple/indigo accent colors

Avoid excessive gradients and unnecessary animations

Suggested colors:

Background: #0F172A

Sidebar: #111827

Cards: #1E293B

Primary accent: #6366F1

Secondary accent: #8B5CF6

Text: #F8FAFC

Muted text: #94A3B8

Success: #22C55E

Warning: #F59E0B

Main Layout

Create a fixed left sidebar and a top navigation bar.

Left Sidebar

At the top:

🚀 CRACKIT

Navigation:

🏠 Dashboard
💻 Coding
🧮 Aptitude
🎤 AI Mock Interview
📄 Resume Builder
📝 Mock Exams
📊 Analysis\

Add a Logout option at the bottom.

The Dashboard item should be highlighted with the primary purple/indigo accent.

Top Navigation

Left/center:

Search bar with placeholder:
“Search problems, tests, topics...”

Right:

Notification bell

User profile avatar

👤 Profile
⚙ Settings

Small dropdown arrow

Dashboard Content

At the top of the main content:

Greeting:
“Good Morning, Poshitha! 👋”

Subtitle:
“Ready to crack your placement?”

Welcome Card

Create a large attractive hero card:

Title:
“Welcome to CrackIT 🚀”

Description:
“Your placement preparation journey starts here. Practice coding, improve aptitude, build your resume and prepare for interviews.”

Primary button:
“Start Practice →”

Secondary small text:
“Track your progress and improve your skills.”

Since this is a brand-new user, DO NOT display fake progress percentages or fake scores.

Preparation Section

Heading:
“Your Preparation”

Create 3 large cards:

Coding Card

Icon: 💻
Title: “Coding”
Status: “Not Started”
Description:
“Practice programming problems and improve your problem-solving skills.”

Button:
“Start Coding →”

Aptitude Card

Icon: 🧮
Title: “Aptitude”
Status: “Not Started”
Description:
“Improve quantitative, logical reasoning and verbal ability.”

Button:
“Start Aptitude →”

AI Interview Card

Icon: 🎤
Title: “AI Mock Interview”
Status: “Not Started”
Description:
“Practice interview questions with an AI interviewer.”

Button:
“Start Interview →”

Resume Section

Create a full-width premium card.

Icon: 📄

Title:
“Build Your Professional Resume”

Description:
“Create a professional resume based on your skills, education, projects and target job role.”

Button:
“Create Resume →”

Add a small note:
“You can optionally select a target company while creating your resume to customize it for that company's requirements.”

Do NOT create a separate company section.

Quick Actions

Heading:
“Quick Actions”

Create four compact cards:

💻 Practice Coding
Button: “Start →”

🧮 Take Aptitude Test
Button: “Start →”

📄 Build Resume
Button: “Create →”

🎤 Mock Interview
Button: “Start →”

Upcoming / Recommended Section

Add a simple section called:

“Get Started”

Show 3 beginner-friendly action cards:

Solve your first coding problem

Take your first aptitude test

Complete your first AI mock interview

Each card should have a small progress indicator showing:
“Not Started”

New User Experience

The dashboard must clearly look like it belongs to a FIRST-TIME USER.

Do not show:

Fake percentages

Fake scores

Fake completed questions

Fake interview history

Fake analytics

Fake notifications

Instead show:

Not Started

Start Now

Create Resume

Take First Test

Begin Practice

After the user actually uses the application, these cards can later dynamically change into real progress information.

Sidebar Page Structure

The application should have these pages:

Dashboard

Coding

Aptitude

AI Mock Interview

Resume Builder

Mock Exams

Analysis

Profile

Settings

There should be NO separate Companies page.

Interaction

Add:

Sidebar navigation

Hover effects

Active navigation state

Button hover animations

Card hover effects

Responsive layout

Smooth transitions

Search interaction

Profile dropdown

Notification dropdown

Important

The dashboard should feel:

Professional

Clean

Student-friendly

AI-powered

Placement-focused

Modern

Not overcrowded

The final result should look like a polished real-world placement preparation platform named CrackIT, not a generic college project dashboard.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dd24a259-d4de-47b2-ba79-3ff3e45ac0eb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
