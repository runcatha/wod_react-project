# wod_react-project

## Project Description

WOD_react-project is an Airtable and React build where the user is able to look up, add, and edit crossfit workouts.

## Wireframes

The wireframes below depict the homepage and components on desktop and mobile view. Users can navigate from home to view a list of WOD's (then specifice details for each WOD), see a list a equipmnent necessary to do these WOD's, and add/edit WOD's.

https://whimsical.com/wod-UfBRAMeLsXWtYp9hTrF4J3

## Component Hierarchy

https://whimsical.com/component-hierarchy-YTXpedZNpKUGR2ScSu96Kd

## API and Data Sample
```
{
    "records": [
        {
            "id": "recpoC764HHwVQ92X",
            "fields": {
                "equipmnent": "pull up bar,\nkettlebell ",
                "Name": "Helen",
                "Description": "3 rounds for time of:\nRun, 400 m\n21 Kettlebell Swings, 53/35 lbs\n12 Pull-ups"
            },
            "createdTime": "2021-08-19T18:17:01.000Z"
        },
```
### MVP/Post MVP

#### MVP

-Home page with clickable icons that link to the WOD list component, equipmnent component, and add WOD component
-WOD list that links to the WOD specs component
-WOD specs that links to the edit component
-A WOD API created in Airtable will be used to provide WOD names, descriptions, and equipmnent needed
-App will be styled with a combination of grid and flex in the 'holy grail' style
-App will have a mobile and desktop design 

#### PostMVP

-Empty right column will be filled will images to mimic advertisements
-Improve CSS with images and opacity to create a more impressive design
-A link to a youTube video demonstraiting the WOD will be added to the API and WOD specs component
-A delete button will be added to the WOD specs component
-Hover event listener will be added to the 'Give me a WOD' button causing a  Dave Castro animation to enter the screen
-Linkin and github will be linked in the footer
-The 'Give me a WOD' component will be altered to bring the user to the WOD specs of a randomly slected WOD from the API
-A new link will be added to the nav 'All of the WOD's!' which will bring the user to the WOD list

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Aug 19-20 | Proposal Approval / Airtable Setup / README         | Incomplete |
| Aug 21-23   | render API data / complete MVP code | Incomplete |
| Aug 24   | First four Post MVP's           | Incomplete |
| Aug 25   | Last four Post MVP's                | Incomplete |
| Aug 26   | Improve code and practice presentation                               | Incomplete |
| Aug 27   | Project Completed                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Organization                  |    H     |     .5hrs      |     1hr      |    1hr     |
| Airtable setup            |    H     |     .5hrs      |      .5hr      |     .5hr     |
| README           |    H     |      3hrs      |      3hr      |     3hrs     |
| Home component      |    H     |      1hr      |     1hr      |    1hr     |
| WOD specs component      |    H     |      1hr      |     2hrs      |    2hrs     |
| Equip list component      |    L     |      1hr      |     -hrs      |    -hrs     |
| WOD list component        |    H     |      1hr      |     2hrs      |    2hrs     |
| Add WOD component        |    H     |      1hr      |     2hrs      |    2hrs    |
| Edit WOD component        |    H     |      1hr      |     2hrs      |     2hrs     |
| MVP CSS |    H     |      5hrs      |     -hrs      |    -hrs     |
| Post MVP CSS |    L     |      4hrs      |      -hr      |     -hr     |
| Adds |    L    |      2hrs      |      .5hr      |     -hr     |
| YouTube videos        |    L     |      2hrs      |      -hr      |     -hr     |
| Delete on Specs component        |    L     |      1hr      |      1hr      |     1hr     |
| Hover event/ animations        |    L     |      4hrs      |      -hr      |     -hr     |
| Linkedin/ github in footer        |    L     |      2hrs      |     .5hr      |    -hrs     |
| Add 'All the WOD's' component        |    L     |      2hrs      |     -hrs      |    -hrs     |
| Adjust 'Give me a WOD'        |    L     |      2hrs      |     -hrs      |    -hrs     |
| Total                     |    -     |    34hrs     |     -hrs     |    -hrs    |

## SWOT Analysis

### Strengths:

I have done the MVP protion of this project several times in labs and homework, so I am very confident in my ability to get this done on schedule.

### Weaknesses:

I haven't done four of my post MVP's before. Nothing is too much of a stretch from my current skillset though.

### Opportunities:

This project is an opportunity to really understand react and grid. It is also a chance to try some of the things I saw in projcet 1 that I really liked, namely animation.

### Threats:

I need to not get lost in CSS. Since it has a tendency to eat up tons of time, I need to be disciplined with the MVP CSS, then pour my remaining time into post when everything else is done.
