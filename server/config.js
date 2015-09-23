var ids = {

facebook:{
 clientID: 'get_your_own',
 clientSecret: 'get_your_own',
 callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
},
linkedin: {
 clientID: '78jjelok36akyv',
 clientSecret: 'XTXcgckLYa6VRcqw',
 callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
},
github: {
 clientID: 'get_your_own',
 clientSecret: 'get_your_own',
 callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
google: {
 returnURL: 'http://127.0.0.1:3000/auth/google/callback',
 realm: 'http://127.0.0.1:3000'
}
};

module.exports = ids;
