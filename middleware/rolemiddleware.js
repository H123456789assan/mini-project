module.exports = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).send("Access Denied");
        }
        next();
    };
};
module.exports = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).render('error', {
                message: "Access Denied"
            });
        }
        next();
    };
};