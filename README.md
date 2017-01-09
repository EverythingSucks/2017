# 2017.sucks

#### Build Using:
- VueJS 2.x

#### Contibuting:

##### Event:
  To contribute an event, you simply need to send a pull request in to `data/events.json` following the correct format.
  
  
  The format is as follows:
  
  - The date MUST follow `dd-mm-yyyy` format.
  - The date MUST be the date the event happened in the GMT timezone, and not the date it was reported.
  - If the date DOES NOT exist, create it as a new object.
  - If the date DOES exist, append your item to the `items` array.
  - Item titles that include a location, MUST follow the format `City or State, Country`, even if the location is obvious.
  - Not all titles require a location, if it isn't strictly necessary to the event (eg, celebrity death).
  - A description MUST be provided as an array of strings, but can be of any length.
  - A description MUST be provided.
  - A description MUST be in order of importance to the story. This is rather arbitrary, so comments may be left in the PR before it gets accepted
  - At least 1 source must be provided, and of a reputable source. Currently recommended is BBC or Guardian sources.
  - Less reputable sources are allowed, as long as at least one of the sources is reputable.
  - A title should avoid clickbait if possible.
  
 If you do not know how to send a pull request, or would rather not send it in, feel free to submit it as an issue.
 The requirements for an issue are at minimum, a link to any source (reputable or not), that indicates a story.
 
 If a reputable source can not be found for an issue, then it may not be accepted.
 
 Acceptance on events is at the reviewers discretion, and not all events, even if they are bad, will necessarily be accepted.
 
 Currently used criteria:
 
 - Do i think the event was bad / can I be persuaded that it is
 - Is it out of the norm for that area
 - Is it reported by a reputable source
 
 Automatic acceptions will be for #1 and #3. #2 is flexible, but at reviewers discretion.
 
 This project is fully open source, feel free to use any and all code as you see fit, as long as it follows the MIT license.
 
 Media: Contact bowersbros@gmail.com for any queries with subject line mentioning `2017.sucks`.
