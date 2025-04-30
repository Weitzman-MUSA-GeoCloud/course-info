Hi Teams! This is a longish message, but please read it. Just in case, here’s the **tl;dr**:

> **Presentations are April 30th (~15 mins/team). Prep should take < 1 hour. Focus on a live demo & walking through your GCP Workflow graph – explain as you show. Think "guided tour," not polished slides.**

We're nearing the finish line for the mass appraisal system project! I know you've been deeply engaged in building and integrating data into your systems!

I also know it's a very busy time of the semester. My priority for the upcoming project presentation is seeing your work and understanding your thought process, not a highly polished slide deck. I want you to **focus on showing, and explaining things as you show them**. Think of this less like a formal presentation and more like a **guided tour and technical walkthrough**.

Until our presentation session on the 30th, focus your energy on the project. **Aim to spend no more than about 1 hour collectively preparing specifically for this presentation**. The core of your presentation should be you demoing your system and visually walking us through its structure (especially using tools like the GCP Workflow graph). Be ready to explain your key decisions and how things connect as you demonstrate them.

## Who You're Presenting To

If it’s helpful, imagine this scenario as you prepare:

> You’ve made it to an on-site interview for the product development team in a city or state government technology department. The hiring manager asks you, as part of your interview, to walk them and a handful of your potential colleagues through a project you’ve worked on in the past, and this is the one you’re showcasing. They want to see what you built, how it works, and understand the why behind your key choices.

## Presentations Flow

We’ll start presentations around **3:15 PM on April 30th**. Plan for approximately **15 minutes total per team** (roughly 10-12 minutes for your guided tour + 3-5 minutes for Q&A). Some tips:

  * Consider instituting a “code freeze” on your repository around 2 PM on April 30th (meaning any changes to your code should be in before that time) — trust me, it can be very frustrating to try to demo something that is no longer working because of a change that you thought would work

  * Each team member should think about what they want to ensure gets raised (features, processes, challenges, …)

  * Designate a team member who will hook up their computer to share the screen; make sure that everything you all want to present is accessible from their machine

  * Test your demo(s) beforehand; consider having the things you want to show open in tabs on the presentation computer

Here’s a suggested flow, emphasizing showing over telling:

  1. **(< 1 min): Intro**

      Team members' names, and your team’s one-sentence take on the goal of your system.

  2. **(~5-6 mins): Live Demo - Show & Explain**

      Walk through a usage workflow you user might go through. As you navigate the UI and demonstrate features, explain your front-end choices.

  3. **(~4-5 mins): Architecture & Integration Walkthrough**

      Show your GCP Workflow DAG graph(s). Walk through the graph and explain how the pieces connect. If you have other parts of your system that you want to talk through specifically (e.g. your ML model, data sets, tiles, etc.) jump to those as you come to them in the pipeline.

  4. **(~1-2 min): Challenges/Learnings**

      No Slide Needed: Very briefly mention the biggest challenges (technical or teamwork) and your key takeaways or things you learned.

  5. **(~3-5 mins): Q&A**

**What I DON'T Expect:**

  * Spending hours creating fancy slides.

  * A detailed slide for every component.

  * A perfectly polished, memorized speech.

I do expect you to show your working application and pipeline (using the actual Workflow graph!), explain your key design decisions as you demo, and give a clear picture of how your system functions end-to-end.

Let me know if you have any questions. Looking forward to seeing your systems in action!

## Project Deliverables

By the end of the semester (**May 13th**) I expect the following deliverables:

  * **GitHub Repository**: You should have all your pull requests merged into the `main` branch of your repository
  * **GCP Project**: The code that is in your repository should correspond to what's deployed in GCP
  * **Documentation**: All of the commands to deploy your GCP resources should be documented (either in shell scripts or markdown files)
    * _Bonus_: Update the README.md in your repository to include sections on "Architecture" (which basically contains the stuff you'll talk through in your presentation) and "Deployment" (which explains how someone would deploy the code if they wanted to).
  * **GitHub Pages**: Your GitHub Pages site should be up and running; add the link to it in your repository's **About** section