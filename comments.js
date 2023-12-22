// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments?postId=1
// http://localhost:3000/comments?postId=1&authorId=1

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/comments', (req, res) => {
    const postId = req.query.postId;
    const authorId = req.query.authorId;
    const comments = router.db.get('comments').value();
    if (postId && authorId) {
        const filtered = comments.filter(comment => comment.postId === postId && comment.authorId === authorId);
        res.jsonp(filtered);
    } else if (postId) {
        const filtered = comments.filter(comment => comment.postId === postId);
        res.jsonp(filtered);
    } else if (authorId) {
        const filtered = comments.filter(comment => comment.authorId === authorId);
        res.jsonp(filtered);
    } else {
        res.jsonp(comments);
    }
});

server.use(router);

server.listen(port);