// index.js - variables and recall 
// Author: Maggie Dougherty
// Date: oct 25 2023

// Replace these with your actual API keys
const apiKey = 'YveC5l4BBFeKo1vBG7vyV08Bh';
const apiSecretKey = '88uLS2bNdofNLIUo23NQcApWbN3BYOzkfaOuen1rM1UUwmYTvp';
const accessToken = '1724560378179567616-mGpwBr68ZLhlXD2Pb9NcjQMyYBu7fe';
const accessTokenSecret = 'do1i4D5ReT8z4HWi695Rll9JDy3puwCe5P8s0S9GsFPNz';

// Twitter username
const twitterUsername = '1732539841571909632doughlady42';

// Number of tweets to fetch
const tweetCount = 5;

// Function to fetch tweets
async function fetchTweets() {
  const response = await fetch(`https://api.twitter.com/2/tweets?screen_name=${twitterUsername}&tweet.fields=created_at&max_results=${tweetCount}`, {
    headers: {
      'Authorization': `Bearer ${apiKey} ${apiSecretKey}`
    }
  });

  const data = await response.json();
  return data.data;
}

// Function to display tweets
async function displayTweets() {
  const tweetsContainer = document.getElementById('tweets-container');
  const tweets = await fetchTweets();

  tweetsContainer.innerHTML = '<h2>Latest Tweets:</h2>';
  
  tweets.forEach(tweet => {
    const tweetElement = document.createElement('p');
    tweetElement.textContent = `${tweet.text} - ${tweet.created_at}`;
    tweetsContainer.appendChild(tweetElement);
  });
}

// Fetch and display tweets when the page loads
displayTweets();
</script>