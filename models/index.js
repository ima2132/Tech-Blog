const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// when a user is deleted, all of their blogs/comments will be deleted as well 
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// when a blog is deleted, all of the comments on that blog post will be deleted as well 
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Blog, Comment };
