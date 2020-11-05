const Twit = require("twit");
const T = new Twit({
  consumer_key: "gFIPCTXK6FmPMwBgoRQwTUmda",
  consumer_secret: "PS98Wmnu6wDdcScxOGoBRRAaBetMa7SmY0x5j8msjhuCgtteLd",
  access_token: "1287330086732079104-7hPMzre9u1TH6eFZOZrs2feA7wBZs0",
  access_token_secret: "ihhIICAy5yx0YnZ2u5Hz1oWClyLhY40NtuxDpFXoEHoZX",
});

// An array of hashtags to be retweeted automatically  || NB: Not CASE SENSITIVE

const stream = T.stream("statuses/filter", {
  track:
    "#4MoreForNana",
});

function responseCallback(err, data, response) {
  if(err){
    console.log(err);
  }else{
    console.log('Post Retweeted!');
  }
  
}

stream.on("tweet", (tweet) => {
  T.post("statuses/retweet/:id", { id: tweet.id_str }, responseCallback);

  T.post("favorites/create", { id: tweet.id_str }, responseCallback);
});
