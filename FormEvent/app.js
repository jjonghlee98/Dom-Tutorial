// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');

// tweetForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addTweet(usernameInput.value, tweetInput.value);
//   usernameInput.value = '';
//   tweetInput.value = '';
// })


// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement('li');
//   const bTag = document.createElement('b');

//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(`- ${tweet}`);
//   tweetsContainer.append(newTweet);
// }

// 연습예제
// const tweetForm = document.querySelector('#tweetForm');
// const tweets = document.querySelector('#tweets');

// tweetForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addList(usernameInput.value, tweetInput.value);
//   usernameInput.value = '';
//   tweetInput.value = '';
// })

// const addList = (username, tweet) => {
//   const li = document.createElement('li');
//   const bTag = document.createElement('b');
//   bTag.append(username);
//   li.append(bTag);
//   li.append(` - ${tweet}`)
//   tweets.append(li);
// }

const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addList(usernameInput, tweetInput);
  usernameInput.value = '';
  tweetInput.value = '';
})

const addList = (username, tweet) => {
  const li = document.createElement('li');

  li.append(`${username.value} -  ${tweet.value}`);
  tweets.append(li);
}