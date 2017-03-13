### TODO

- ~~Seperate routes for quiz and questions~~
- Implement `CanDeactivateGuard` for preventing people leave the quiz before losing their progress.
  - Will need to make the editing screen a child route
- ~~Use the number of questions in the database to determine quiz length and only if there are more than `numOfQuestionsInQuiz` in there~~
- ~~Make the edit button in the `QaPairsComponent` work~~
- ~~Add ability to add more correct and incorrect answers to modal. (consider using [`setValue`](https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#_setvalue_)) USE [FORM ARRAYS](https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#use-_formarray_-to-present-an-array-of-_formgroups_) [also](https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2)~~
- Add users + auth
- Add queing for memory (1 day, 2 days etc)
  - Add a toBeReviedInXSeconds property to the qa pair which is based on
  - Add amount of times reviewed (answered correctly)
  - Go back an interval when the user gets the answer wrong
- Add explanation section for questions
- Always have one wrong and correct answer on add question
- Add category tags
- Add markdown
- Make quiz look more like that from udemy (feedback after answer, what user wrote, exact correct answers, explanation for answer)



#### Resources

*   Donovan, J. J., & Radosevich, D. J. (1999). A meta-analytic review of the distribution of practice effect: Now you see it, now you don’t. Journal of Applied Psychology, 84(5), 795-805.
*   [Spaced repetition](http://www.gwern.net/Spaced%20repetition) (www.gwern.net) [highly recommended review of spaced repetition]
*   Stahl SM, Davis RL, Kim DH, Lowe NG, Carlson RE, Fountain K, Grady MM. Play it Again: The Master Psychopharmacology Program as an Example of Interval Learning in Bite-Sized Portions. CNS Spectr. 2010 Aug;15(8):491-504\. PMID: [20703196](http://www.ncbi.nlm.nih.gov/pubmed/20703196). [[fulltext](http://www.cnsspectrums.com/aspx/articledetail.aspx?articleid=2783)]
*   Wikipedia — [active recall](http://en.wikipedia.org/wiki/Active_recall), [cramming](http://en.wikipedia.org/wiki/Cramming_(memorization)), [forgetting curve](http://en.wikipedia.org/wiki/Forgetting_curve), [spaced repetition](http://en.wikipedia.org/wiki/Spaced_repetition), [spacing effect](http://en.wikipedia.org/wiki/Spacing_effect), [testing effect](http://en.wikipedia.org/wiki/Testing_effect).
*   Wolf, G. [Want to Remember Everything You’ll Ever Learn? Surrender to This Algorithm.](http://www.wired.com/medtech/health/magazine/16-05/ff_wozniak?currentPage=all) Wired 16.05 [Article about the inventor of Supermemo, Piotr Wozniak]
