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
    return item.posts.map(post =>
      Object.assign({}, post, {
        board,
        thread: item.posts[0].no,
        reply: `http://boards.4chan.org/${board}/thread/${item.posts[0].no}`,
        image: post.tim ? `/image/${board}/${post.tim}${post.ext}` : null,
        thumbnail: post.tim ? `/image/${board}/${post.tim}s.jpg` : null
      })
    );
  });

const formatPostList = (board, posts) => {
  return formatThreadList(board, [{ posts }]);
};

export { getOptions, formatThreadList, formatPostList };
