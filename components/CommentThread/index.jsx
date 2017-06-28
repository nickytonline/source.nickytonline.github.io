import React from 'react';
import DisqusThread from 'react-disqus-thread';

const CommentThread = ({ post, forumName }) => (
  <div className="comment-thread">
    <DisqusThread
      shortname={forumName}
      identifier={post.path}
      category_id={post.category}
      title={post.title}
    />
  </div>
);

CommentThread.propTypes = {
  post: React.PropTypes.object.isRequired,
  forumName: React.PropTypes.string.isRequired,
};

export default CommentThread;
