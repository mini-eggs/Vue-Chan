function getOptions(data) {
  const body = JSON.stringify(data);

  const headers = new Headers({
    "Content-Type": "application/json",
    "Content-Length": body.length.toString()
  });

  return {
    method: "POST",
    headers: headers,
    body: body
  };
}

const formatThreadList = (board, threads) =>
  threads.map(item => {
    const thread = item.posts[0].no;
    return item.posts.map(post => ({
      ...post,
      board,
      thread,
      image: post.tim ? `/image/${board}/${post.tim}${post.ext}` : null,
      thumbnail: post.tim ? `/image/${board}/${post.tim}s.jpg` : null
    }));
  });

const formatPostList = (board, posts) => {
  return formatThreadList(board, [{ posts }]);
};

export { getOptions, formatThreadList, formatPostList };
