Articles = new Meteor.Collection('articles');
Comments = new Meteor.Collection('comments');

Articles.allow({
  'insert': function (userId, article){
    return true; 
  },
  'update': function (userId, article, fields, modifier){
    return true;
  },
  'remove': function (userId, article){
    return true;
  }
});

Comments.allow({
  'insert': function (userId, comment){
    return true; 
  },
  'update': function (userId, comment, fields, modifier){
    return true;
  },
  'remove': function (userId, comment){
    return true;
  }
});

if (Meteor.isClient) {

}

if (Meteor.isServer){
  Meteor.publish("allArticles", function(){
    return Articles.find();
  });
  
  Meteor.publish("showArticle", function(articleId){
    return Articles.find({_id: articleId});
  });

  Meteor.publish("allComments", function(){
    return Comments.find();
  })
  Meteor.startup(function(){
    if (Articles.find().count() === 0){
      var i;
      for(i=0;i<1000;i++){
      Articles.insert({name: "Lorem", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
      }
    }
    Comments.insert({name: "Lorem", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
  })
}