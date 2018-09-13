app.get('/users/:userId', function(req, res) {
    res.json({
        user: User.find(req.params.userId),
        memo: Project.getMemo(req.params.userId)
    });
});
