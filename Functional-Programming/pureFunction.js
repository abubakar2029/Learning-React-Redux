
/* 
* No Random Values
* No current date/time
* Not rely on global state (read or write)
* No change of parameters
*/

/* Impure function */
function isEligible(age) {
    return age > minAge;
}
/* Impure bcz relying on global variable minAge */

/* Pure function */
function isEligible(age, minAge) {
    return age > minAge;
}// Not relying on any External State
/* *Self-documenting *Easily-Testable *Cacheable */

/* Caching -- the process of storing data in a cache, which is a temporary storage area that facilitates faster access to data with the goal of improving application and system performance. */