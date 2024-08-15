/**
 * @param {number} millis
 * @return {Promise}
 */

//Parameters - millis will always be >= 1 and <= 1000
//Returns - will always return millis, resolved promise can be anything
//Examples - given in description
/*Pseudo-code 
- First off, I will create a callback function to be used in the async await function
- I'll have it return a resolved promise after millis ms using the setTimeout() function
- Lastly, I'll plug that into the await part of the async function
*/

function resolveAfterMillis(millis) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, millis);
    });
}
  
async function sleep(millis) {
    await resolveAfterMillis(millis)
}
  
  /** 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
   */